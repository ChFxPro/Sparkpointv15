# **SparkPoint Edge Functions & Intake System — Agent Guide**

> **Purpose** 

> This document exists so that future humans *and* AI agents can understand, maintain, and safely extend the SparkPoint intake + Monday.com integration without re‑entering the troubleshooting maze we just escaped.

If you are reading this: welcome. Everything below is battle‑tested.

---

## **1. System Overview (What We Built)**

This repository contains a **Supabase Edge Function** that powers all SparkPoint intake forms (Contact, Volunteer, Partner).

The system does three things, in this order:

1. **Accepts form submissions** from the public website (React client)
2. **Persists submissions to Supabase Postgres** (intake_submissions table)
3. **Pushes each submission into Monday.com** as a human‑readable inbox item

⠀
**Key design principles:** 

* Intake should *never* fail if Monday is down
* Supabase is the system of record
* Monday is the human workflow layer
* CORS must work for GitHub Pages + local dev
---

## **2. Architecture Diagram (Mental Model)**

```
[ React Client ]
      |
      |  POST /intake
      v
[ Supabase Edge Function ]
      |
      |-- insert --> [ Postgres: intake_submissions ]
      |
      |-- best‑effort --> [ Monday.com Board ]
```

---

## **3. Critical Files & Paths**

### **Edge Function**

```
supabase/
  functions/
    make-server-393f2b0a/
      index.ts   ← THIS FILE MATTERS
```

### **Frontend**

* Any form that POSTs to /functions/v1/make-server-393f2b0a/intake
---

## **4. Environment Secrets (Non‑Negotiable)**

These **must** exist in Supabase → Project Settings → Edge Functions → Secrets.

### **Supabase**

* SUPABASE_URL
* SUPABASE_SERVICE_ROLE_KEY ← required (we bypass RLS intentionally)

### **Monday.com**

* MONDAY_API_TOKEN
* MONDAY_BOARD_ID (numeric ID, e.g. 18399040367)

### **Monday Column IDs (from the board schema)**

* MONDAY_COL_EMAIL
* MONDAY_COL_PHONE
* MONDAY_COL_STATUS
* MONDAY_COL_INTENT
* MONDAY_COL_DATE
* MONDAY_COL_ITEMNAME

> ⚠️ Column IDs are **not** column names. They must match the board’s internal IDs.

---

## **5. Database Schema**

### **Table:**

### **intake_submissions**

```
create table intake_submissions (
  id text primary key,
  intent text not null,
  name text not null,
  email text not null,
  phone text,
  message text,
  source_path text,
  extras jsonb,
  created_at timestamptz default now()
);
```

* extras stores intent‑specific data (volunteer interests, partner org, etc.)
* This keeps the schema stable while forms evolve
---

## **6. Route Design (Why This Looks Weird)**

Supabase Edge Functions expose **two valid paths**:

* /intake
* /make-server-393f2b0a/intake

We explicitly register **both**.

```
app.post("/intake", intakeHandler);
app.post(`${FN_PREFIX}/intake`, intakeHandler);
```

This avoids silent 404s depending on how Supabase routes the function.

**Do not remove this.** 

---

## **7. CORS Strategy (Why It Works)**

Allowed origins are hard‑coded:

```
const allowedOrigins = new Set([
  "https://chfxpro.github.io",
  "http://localhost:3000",
]);
```

The function:

* Responds to OPTIONS preflight
* Echoes back the origin
* Allows apikey + authorization headers

This is why browser requests succeed.

---

## **8. Monday.com Integration Rules**

### **Item Naming**

```
`${name} — ${Intent}`
```

Humans scan this easily.

### **Column Value Rules (Important)**

|  **Monday Column**  |  **Type**  |  **Payload Shape**  | 
|---|---|---|
|  Email  |  text  |  "email@example.com"  |
|  Phone  |  text  |  "828‑555‑1234"  |
|  Status  |  status  |  { label: "New" }  |
|  Intent  |  dropdown  |  { labels: ["Contact"] }  |
|  Date  |  date  |  { date: "YYYY‑MM‑DD" }  |
If these shapes are wrong, Monday **silently fails**.

---

## **9. Best‑Effort Philosophy (Why This Never Blocks Intake)**

The Monday push is intentionally wrapped so it cannot break form submission:

```
pushToMonday(...).catch(err => console.error(err));
```

This guarantees:

* User sees success
* DB insert always completes
* Ops team can still triage later
---

## **10. Deployment Workflow (This Is the Only Way)**

### **Install CLI (Codespaces‑safe)**

```
npm install supabase --save-dev
```

### **Login**

```
npx supabase login
```

### **Deploy**

```
npx supabase functions deploy make-server-393f2b0a \
  --project-ref suqtfbculwuetfdhdgdh \
  --no-verify-jwt
```

If you edit index.ts and don’t redeploy, **nothing changes**.

---

## **11. Testing Checklist**

### **Health**

```
curl https://<project>.supabase.co/functions/v1/make-server-393f2b0a/health
```

### **Intake**

```
curl -X POST \
  https://<project>.supabase.co/functions/v1/make-server-393f2b0a/intake \
  -H "Content-Type: application/json" \
  --data '{"intent":"contact","name":"Test","email":"test@test.com"}'
```

Verify:

* 200 response
* Row in intake_submissions
* Item appears in Monday board
---

## **12. Common Failure Modes (And What They Mean)**

|  **Symptom**  |  **Cause**  | 
|---|---|
|  404 Route not found  |  Missing double route registration  |
|  500 DB insert error  |  Missing SUPABASE_SERVICE_ROLE_KEY  |
|  Intake works, no Monday item  |  Column ID mismatch  |
|  Browser CORS error  |  Origin not allow‑listed  |
|  CLI deploy fails  |  CLI not logged in  |
---

## **13. Design Intent (Read This Before Changing Things)**

This system is:

* **Human‑first** (Monday inbox)
* **Audit‑safe** (Supabase record)
* **AI‑maintainable** (explicit structure, no magic)

If you change it:

* Preserve best‑effort behavior
* Preserve double routes
* Preserve explicit column mappings
---

## **14. Final Note**

This setup took time because it’s *correct*, not because it’s fragile.

If it feels boring now:

Good.

That means it’s doing its job.