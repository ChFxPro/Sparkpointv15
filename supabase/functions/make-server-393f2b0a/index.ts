// SparkPoint Edge Function – CLEAN, FIXED VERSION
import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Logging
app.use("*", logger(console.log));

// CORS — allow browser + apikey
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "apikey"],
  }),
);

// Health check
app.get("/health", (c) => {
  return c.json({ ok: true });
});

// Unified intake endpoint
app.post("/intake", async (c) => {
  try {
    const body = await c.req.json();

    const { intent, name, email, phone, message } = body;

    if (!intent || !name || !email) {
      return c.json(
        { error: "intent, name, and email are required" },
        400,
      );
    }

    const id = `intake_${intent}_${Date.now()}`;

    await kv.set(id, {
      id,
      intent,
      name,
      email,
      phone: phone ?? "",
      message: message ?? "",
      created_at: new Date().toISOString(),
    });

    return c.json({
      success: true,
      id,
    });
  } catch (err) {
    console.error(err);
    return c.json({ error: "Server error" }, 500);
  }
});

// Fallback
app.all("*", (c) => {
  return c.json({ error: "Route not found" }, 404);
});

Deno.serve(app.fetch);