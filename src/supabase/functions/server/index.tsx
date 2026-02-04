// SparkPoint Impact Dashboard API - Updated 2025
import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Debug: Log all incoming requests
app.use("*", async (c, next) => {
  console.log(`📥 Incoming request: ${c.req.method} ${c.req.url}`);
  await next();
});

// Health check endpoint
app.get("/make-server-535d8907/health", (c) => {
  return c.json({ status: "ok" });
});

// Initialize Impact Metrics Data
app.post("/make-server-535d8907/impact/init", async (c) => {
  console.log('✅ Impact init endpoint called');
  try {
    const metricsData = {
      "2024": {
        year: 2024,
        community_events: 37,
        workshops: 29,
        youth_events: 18,
        presentations: 13,
        total_events: 97,
        attendance: 7000,
        unique_partners: 40,
        individuals_trained: 500,
        avg_attendance: 72.1,
        ready_groups: 8,
        notes: "Foundational year — post-Helene recovery efforts; outreach built through schools, food access, and trauma-informed training."
      },
      "2025": {
        year: 2025,
        community_events: 45,
        workshops: 33,
        youth_events: 15,
        presentations: 10,
        total_events: 103,
        attendance: 3510,
        unique_partners: 38,
        individuals_trained: 3510,
        avg_attendance: 56.6,
        ready_groups: 10,
        notes: "Year of momentum — expansion of Preparedness & Ready Groups, PFA volunteers, and regional partnerships."
      }
    };

    await kv.set("sparkpoint_impact_metrics", metricsData);

    return c.json({ 
      success: true, 
      message: "Impact metrics initialized successfully",
      data: metricsData
    });
  } catch (error) {
    console.error('Error initializing impact metrics:', error);
    return c.json({ 
      error: "Failed to initialize impact metrics",
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Get Impact Metrics
app.get("/make-server-535d8907/impact/metrics", async (c) => {
  console.log('✅ Impact metrics GET endpoint called');
  try {
    const metrics = await kv.get("sparkpoint_impact_metrics");
    
    if (!metrics) {
      return c.json({ 
        error: "Impact metrics not found. Please initialize first.",
      }, 404);
    }

    return c.json({ 
      success: true,
      data: metrics
    });
  } catch (error) {
    console.error('Error fetching impact metrics:', error);
    return c.json({ 
      error: "Failed to fetch impact metrics",
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Volunteer/Partner Form Submission
app.post("/make-server-535d8907/volunteer", async (c) => {
  try {
    const body = await c.req.json();
    const { type, name, email, phone, organization, interests, availability, message } = body;

    // Validate required fields
    if (!name || !email || !type) {
      return c.json({ error: "Name, email, and type are required" }, 400);
    }

    // Generate a unique ID for this submission
    const submissionId = `${type}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Store in KV store
    const submissionData = {
      id: submissionId,
      type,
      name,
      email,
      phone: phone || '',
      organization: organization || '',
      interests: interests || [],
      availability: availability || '',
      message: message || '',
      submittedAt: new Date().toISOString(),
    };

    await kv.set(submissionId, submissionData);

    // Send email notification
    try {
      const emailBody = `
New ${type === 'volunteer' ? 'Volunteer' : 'Partnership'} Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
${type === 'partner' ? `Organization: ${organization || 'Not provided'}` : ''}
${type === 'volunteer' && interests.length > 0 ? `Interests: ${interests.join(', ')}` : ''}
Availability: ${availability || 'Not provided'}

Message:
${message || 'No message provided'}

Submitted: ${new Date().toLocaleString()}
      `.trim();

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        },
        body: JSON.stringify({
          from: 'SparkPoint Forms <noreply@yoursparkpoint.org>',
          to: ['info@yoursparkpoint.org'],
          subject: `New ${type === 'volunteer' ? 'Volunteer' : 'Partnership'} Application from ${name}`,
          text: emailBody,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        console.error('Email sending error:', errorData);
        // Don't fail the whole request if email fails
      }
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // Continue even if email fails
    }

    return c.json({ 
      success: true, 
      message: "Form submitted successfully",
      submissionId 
    });

  } catch (error) {
    console.error('Error processing volunteer/partner form:', error);
    return c.json({ 
      error: "Failed to process form submission",
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Intake Form Submission - Unified Route
app.post("/make-server-535d8907/intake", async (c) => {
  try {
    const body = await c.req.json();
    const { 
      intent, 
      name, 
      email, 
      phone, 
      message, 
      source_path,
      // Volunteer specific
      interests, 
      availability,
      // Partner specific
      organization, 
      partnershipDetails 
    } = body;

    // Validate required shared fields
    if (!name || !email || !intent) {
      return c.json({ error: "Name, email, and intent are required" }, 400);
    }

    // Validate intent
    const validIntents = ['volunteer', 'partner', 'contact'];
    if (!validIntents.includes(intent)) {
      return c.json({ error: "Invalid intent" }, 400);
    }

    // Generate ID
    const submissionId = `intake_${intent}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Construct data object based on intent to avoid storing irrelevant fields
    const submissionData = {
      id: submissionId,
      intent,
      name,
      email,
      phone: phone || '',
      message: message || '',
      source_path: source_path || '',
      submittedAt: new Date().toISOString(),
      status: 'new'
    };

    // Add intent-specific fields
    if (intent === 'volunteer') {
      submissionData.interests = Array.isArray(interests) ? interests : [];
      submissionData.availability = availability || '';
    } else if (intent === 'partner') {
      submissionData.organization = organization || '';
      submissionData.partnershipDetails = partnershipDetails || '';
    }

    // Store in KV
    await kv.set(submissionId, submissionData);

    // Send email notification via Resend (reusing existing logic if available, or just logging)
    // Using the same structure as the existing /volunteer endpoint for consistency
    try {
      let emailSubject = `New Inquiry from ${name}`;
      if (intent === 'volunteer') emailSubject = `New Volunteer Application from ${name}`;
      if (intent === 'partner') emailSubject = `New Partnership Inquiry from ${name}`;
      if (intent === 'contact') emailSubject = `New Contact Request from ${name}`;

      let specificDetails = '';
      if (intent === 'volunteer') {
        specificDetails = `
Interests: ${submissionData.interests.join(', ') || 'None selected'}
Availability: ${submissionData.availability || 'Not provided'}
        `;
      } else if (intent === 'partner') {
        specificDetails = `
Organization: ${submissionData.organization || 'Not provided'}
Partnership Details: ${submissionData.partnershipDetails || 'Not provided'}
        `;
      }

      const emailBody = `
${emailSubject}

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Source: ${source_path || 'Unknown'}

${specificDetails}

Message:
${message || 'No message provided'}

Submitted: ${new Date().toLocaleString()}
      `.trim();

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        },
        body: JSON.stringify({
          from: 'SparkPoint Intake <noreply@yoursparkpoint.org>',
          to: ['info@yoursparkpoint.org'],
          subject: emailSubject,
          text: emailBody,
        }),
      });

      if (!emailResponse.ok) {
        console.error('Email sending error:', await emailResponse.text());
      }
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
    }

    return c.json({ 
      success: true, 
      message: "Form submitted successfully",
      submissionId 
    });

  } catch (error) {
    console.error('Error processing intake form:', error);
    return c.json({ 
      error: "Failed to process form submission",
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Catch-all route for debugging
app.all("*", (c) => {
  console.log(`❌ Unmatched route: ${c.req.method} ${c.req.url}`);
  return c.json({ 
    error: "Route not found",
    method: c.req.method,
    path: c.req.url,
    availableRoutes: [
      "GET /make-server-535d8907/health",
      "POST /make-server-535d8907/impact/init",
      "GET /make-server-535d8907/impact/metrics",
      "POST /make-server-535d8907/volunteer",
      "POST /make-server-535d8907/intake"
    ]
  }, 404);
});

Deno.serve(app.fetch);