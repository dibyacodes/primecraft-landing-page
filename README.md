<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/dibyacodes/primecraft/main/public/logo.svg">
  <img alt="PrimeCraft" src="https://raw.githubusercontent.com/dibyacodes/primecraft/main/public/logo.svg">
</picture>

<h1 align="center">PrimeCraft</h1>

<p align="center">
  <strong>The production-ready Next.js SaaS boilerplate.</strong><br>
  Auth. Teams. Stripe & Razorpay. Admin dashboard.<br>
  Ship your product in days, not weeks.
</p>

<p align="center">
  <a href="#features">Features</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#pricing">Pricing</a> ·
  <a href="#faq">FAQ</a>
</p>

---

## Why PrimeCraft?

You have a SaaS idea. You know the market. You've built the MVP logic.

What you don't want to spend weeks on: authentication flows, team invitations, Stripe webhooks, Razorpay integration, billing portals, admin panels, email templates, Docker setup, CI/CD pipelines.

PrimeCraft gives you all of it — fully integrated, fully tested, fully customizable — so you can launch your product and start charging customers on **day one**, not month three.

### Who is this for?

- **Indie hackers** building their next SaaS solo
- **Small teams** launching a product without a dedicated DevOps/backend person
- **Agencies** spinning up client projects with recurring billing
- **Developers** who want full control without starting from scratch

---

## Features

### Authentication & Users
- **Auth.js v5** — Google OAuth, GitHub OAuth, email magic links, credentials
- Session management with database sessions
- Role-based access control (admin, member, viewer)
- Profile management with avatar uploads

### Teams & Workspaces
- Create and manage multiple workspaces
- Invite members via email or link
- Role-based permissions per workspace
- Team switching UI (workspace dropdown)
- Audit log of team actions

### Payments & Billing
- **Stripe** subscriptions (monthly/yearly) with webhook handling
- **Razorpay** subscriptions for Indian customers
- Usage-based billing support
- Customer portal for managing subscriptions
- Invoice history and download
- Trial periods configurable per plan
- Proration and upgrades/downgrades

### Admin Dashboard
- User management (view, suspend, delete)
- Workspace management
- Revenue analytics (MRR, ARR, churn)
- Subscription management
- Email log viewer
- Feature flags (toggle features per user/workspace)

### Developer Experience
- **TypeScript** end-to-end — typesafe everything
- **Drizzle ORM** with Postgres (Neon compatible)
- **Docker Compose** — one command to run locally (Postgres + app)
- **GitHub Actions** — CI with lint, typecheck, test
- **Resend** for transactional emails
- Full API route handlers with Zod validation
- Webhook handlers with signature verification

### Enterprise Ready
- Rate limiting on API routes
- CSRF protection
- PostgreSQL row-level security ready
- GDPR-compliant session handling
- Environment validation on boot (never run with missing vars)

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Database** | PostgreSQL (Neon, Supabase, or any Postgres) |
| **ORM** | Drizzle ORM |
| **Auth** | Auth.js v5 |
| **Payments** | Stripe + Razorpay |
| **UI** | Tailwind CSS v4 + shadcn/ui |
| **Email** | Resend |
| **Container** | Docker Compose |
| **CI/CD** | GitHub Actions |

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/dibyacodes/primecraft.git my-saas
cd my-saas

# Copy environment variables
cp .env.example .env

# Start Postgres and app
docker compose up -d

# Push database schema
npm run db:push

# Open in browser
open http://localhost:3000
```

That's it. You'll have a working SaaS with auth, teams, and billing at `localhost:3000`.

### Environment Variables

Every environment variable is documented in `.env.example` with descriptions and where to get the values. Run `npm run env:check` to validate your setup.

### Supported Payment Providers

**Stripe** (global) — Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`. Create products and prices in Stripe dashboard. PrimeCraft handles the rest — checkout sessions, webhook sync, customer portal.

**Razorpay** (India) — Set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`. Routes payments through Razorpay's India-optimized infrastructure with zero international fees for your Indian customers.

---

## Directory Structure

```
primecraft/
├── apps/
│   └── app/                # Next.js App Router
│       ├── (auth)/         # Login, register, magic link
│       ├── (dashboard)/    # Dashboard layout + pages
│       ├── (marketing)/    # Landing page, pricing, docs
│       └── api/            # API routes (auth, webhooks, billing)
├── packages/
│   ├── db/                 # Drizzle schema + migrations
│   ├── auth/               # Auth.js configuration
│   ├── billing/            # Stripe + Razorpay logic
│   ├── email/              # Resend email templates
│   └── ui/                 # Shared UI components
├── docker-compose.yml      # Local dev with Postgres
├── .github/                # CI workflows
└── docs/                   # Buyer documentation
```

---

## Pricing

| Plan | Price | What you get |
|------|-------|-------------|
| **Standard** | ₹4,999 / $59 | Full source code, lifetime updates, 1 project |
| **Extended** | ₹9,999 / $119 | Full source code, lifetime updates, unlimited projects |
| **Source** | ₹14,999 / $179 | Full source code + priority support + 1-hour call |

All plans include:
- Lifetime access to updates
- Detailed documentation
- `.env.example` with every variable documented
- Docker Compose for one-command setup

### Licensing

- **Standard**: Use in 1 project (client or personal). You may sell the end product.
- **Extended**: Use in unlimited projects.
- **Source**: Same as Extended + priority support + consultation call.

You may **not** redistribute the source code as a boilerplate/template.

---

## What Buyers Say

> "PrimeCraft saved me 3 weeks of setting up Stripe webhooks and team invitations. I launched my SaaS in 4 days." — **[Name]**

> "Having both Stripe and Razorpay out of the box was a game changer for my Indian customers." — **[Name]**

> "The code quality is exceptional. Every file has a clear purpose, and the Drizzle schema is beautifully organized." — **[Name]**

---

## FAQ

**Q: Can I see a demo?**  
A: [primecraft.vercel.app](https://primecraft.vercel.app) — the public demo with auth, teams, and billing.

**Q: Do I need Docker?**  
A: No. Docker Compose is optional — you can use a local Postgres or Neon. Instructions are in the docs.

**Q: What if I need help?**  
A: The Extended plan includes priority email support. Source plan includes a 1-hour call.

**Q: Can I use my own UI components?**  
A: Yes. The UI is built with shadcn/ui but you can swap any component.

**Q: Do you offer refunds?**  
A: Yes — 14-day full refund if you can't get PrimeCraft working. No questions asked.

**Q: How do I deploy?**  
A: One-click deploy on Vercel. Detailed guide in `docs/deployment.md`.

**Q: Is there a subscription?**  
A: No. One-time payment, lifetime updates.

---

## Roadmap

- [x] Auth (OAuth + magic links + credentials)
- [x] Teams & workspaces
- [x] Stripe subscriptions + webhooks
- [x] Razorpay subscriptions + webhooks
- [x] Admin dashboard
- [x] Docker Compose setup
- [x] GitHub Actions CI
- [ ] Multi-tenant database (Row-Level Security)
- [ ] Social login (Apple, LinkedIn)
- [ ] Paddle as alternative payment provider
- [ ] CLI tool to scaffold custom plans
- [ ] API rate limiting with Upstash

---

## Built by

**Dibyajyoti Kumar** — Full-stack developer, 5+ years experience building web apps for startups and agencies. [@dibyacodes](https://x.com/dibyacodes)

---

<p align="center">
  <a href="https://x.com/dibyacodes">Twitter</a> ·
  <a href="https://github.com/dibyacodes">GitHub</a>
</p>
