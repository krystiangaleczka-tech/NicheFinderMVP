# ðŸŽ¯ NicheRadar - Pain Points Aggregator Application Plan

**Version:** 1.0 MVP  
**Project Name:** NicheRadar (The Ultimate AI Niche Finder)  
**Target Users:** Indie hackers, startup founders, product managers, investors  
**Timeline:** 10 weeks to MVP  
**Cost:** $0/month (free tier MVP), scales to $250-300/month at scale

---

## ðŸ“‹ Table of Contents

1. [Project Overview](#project-overview)
2. [Core Features](#core-features)
3. [System Architecture](#system-architecture)
4. [Data Sources (Top 10)](#data-sources-top-10)
5. [Technology Stack](#technology-stack)
6. [UI/UX Structure](#uiux-structure)
7. [Development Timeline](#development-timeline)
8. [Deployment Strategy](#deployment-strategy)
9. [Revenue Model](#revenue-model)
10. [Success Metrics](#success-metrics)

---

## ðŸš€ Project Overview

### Mission
Aggregate real user pain points from 10 data sources (Reddit, GitHub, YouTube, Stack Overflow, etc.), analyze them using AI, and generate actionable niche business ideas for indie hackers and founders.

### Problem We Solve
- **Founders waste 50+ hours** researching market opportunities across scattered platforms
- **No centralized source** for real, unfiltered user pain points
- **Hard to validate** which pain points are actually lucrative opportunities
- **Manual analysis** of thousands of pain points is time-consuming

### Solution
- **One dashboard** aggregating 74.5K+ monthly pain points from 10 premium sources
- **AI-powered analysis** generating 5.4K+ niche ideas monthly
- **Market size estimation** (TAM/SAM/SOM) for each idea
- **Validation roadmap** for quick market testing

### Success Criteria (Phase 1)
- MVP (Week 8-10): 150K+ aggregated pain points, 10K niche ideas
- Beta launch (Month 3): 1K users, NPS 40+
- Public launch (Month 6): 10K users, $10K MRR

---

## âœ¨ Core Features

### Feature 1: Real-Time Data Tab
**Purpose:** Live stream of newest pain points (last 24 hours)

**Components:**
- Live table/card view of incoming pain points
- Filters: Platform, Category, Sentiment, Urgency Score
- Auto-refresh (every 30 seconds)
- Each row shows: Title, Platform, Urgency Score, Votes, Comments, Sentiment
- Click to expand: Full text + source URL + user quote

**Sample Data:**
- "Stripe checkout integration takes 3 days" - Reddit (r/SaaS) - Urgency 9/10
- "Payment processing is too slow" - YouTube - Urgency 7/10
- "API documentation is unclear" - GitHub - Urgency 8/10

---

### Feature 2: Aggregated Pain Points Library
**Purpose:** Searchable database of top 150K+ aggregated pain points

**Components:**
- Global search bar (full-text search)
- Advanced filters: Category, Platform, Date range, Sentiment
- 2-column card grid (desktop), 1-column (mobile)
- Each card shows: Title, Platform breakdown, Mention count, Trend (â†‘â†‘ rising, â†’ stable, â†“ falling)
- Expandable sections: Specific issues, User quotes, Affected companies

**Sorting Options:**
- By mention count (most talked about)
- By urgency score
- By recency
- By trend velocity

---

### Feature 3: AI-Generated Niche Ideas
**Purpose:** Actionable business ideas derived from pain points

**Components:**
- 2-column grid of expandable niche idea cards
- Each card (collapsed): Title, Difficulty (1-10), TAM, Rating (â­â­â­â­)
- Click to expand all sections (smooth animation)

**Expanded Sections:**
- **Market Potential:** TAM/SAM/SOM breakdown with chart
- **Monetization:** 3-5 pricing models with potential revenue
- **Timeline & Difficulty:** MVP time, difficulty bar, $1K MRR timeline
- **Competitors:** List of similar solutions, advantages vs. them
- **Validation Plan:** 4-week step-by-step roadmap
- **Risks & Assumptions:** Key assumptions, mitigation strategies
- **30-Day Roadmap:** Week-by-week task timeline

**AI Generation Details:**
- Generated using Groq LLM (Mixtral 8x7B)
- Combines multiple pain points into one market opportunity
- Includes real market data (TAM estimates)
- Includes monetization scenarios tested on similar products

---

### Feature 4: Analytics Dashboard
**Purpose:** High-level metrics, trends, and opportunities

**Components:**
- KPI cards: Total pain points, Ideas generated, Trending score, TAM identified
- Bar chart: Top platforms (Reddit 45%, YouTube 25%, etc.)
- Pie chart: Category breakdown (Integration 35%, Performance 25%, etc.)
- Line chart: Pain points trend over time
- Geographic heatmap: US 60%, China 20%, EU 15%
- Opportunity matrix: 2D scatter (Difficulty vs. Market Size)

---

### Feature 5: Settings & Configuration
**Purpose:** User preferences and admin controls

**Components:**
- Platform configuration: Toggle platforms on/off, update frequency
- Alert configuration: Email digest, urgency threshold, trending alerts
- Export options: CSV, JSON, PDF, Excel
- Team collaboration: Add members, manage permissions (Admin/Editor/Viewer)
- Integrations: Connect to Notion, Slack (future)

---

## ðŸ—ï¸ System Architecture

### High-Level Architecture (5 Layers)

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Layer 1: DATA INGESTION (32 sources)    â”‚
â”‚ - Reddit API, GitHub API, YouTube API   â”‚
â”‚ - Scraping adapters (Indie Hackers)     â”‚
â”‚ - Rate limiting & error handling        â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
               â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Layer 2: DATA PROCESSING                â”‚
â”‚ - Anonymization & privacy filtering     â”‚
â”‚ - Text normalization & deduplication    â”‚
â”‚ - Sentiment analysis, keyword extractionâ”‚
â”‚ - Quality scoring (1-10)                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
               â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Layer 3: STORAGE (Supabase PostgreSQL)  â”‚
â”‚ - pain_points table (74K+ records)      â”‚
â”‚ - niche_ideas table (5K+ records)       â”‚
â”‚ - user_saves, audit_log tables          â”‚
â”‚ - Indexed for fast querying             â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
               â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Layer 4: AI/ANALYSIS (Groq LLM)         â”‚
â”‚ - Pain point clustering & grouping      â”‚
â”‚ - Niche idea generation                 â”‚
â”‚ - Market size estimation                â”‚
â”‚ - Batch processing (nightly)            â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
               â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Layer 5: FRONTEND (Next.js + Vercel)    â”‚
â”‚ - 5 main tabs (Real-time, Aggregated,   â”‚
â”‚   Ideas, Analytics, Settings)           â”‚
â”‚ - Responsive design (mobile-first)      â”‚
â”‚ - Search, filter, export functionality  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Data Flow

```
32 Sources (APIs + Scraping)
    â†“
Ingestion Module (fetch, validate, schedule)
    â†“
Processing Pipeline (clean, anonymize, deduplicate)
    â†“
Supabase Database (store with indexes)
    â†“
AI Analysis Engine (Groq LLM - nightly batch)
    â†“
Frontend API (Next.js endpoints)
    â†“
User Dashboard (React components)
    â†“
Export/Integration (CSV, JSON, Slack, Notion)
```

---

## ðŸ“Š Data Sources (Top 10)

| # | Platform | Tier | Region | Pain Points/mo | Niche Ideas/mo | Why Top? |
|---|----------|------|--------|----------------|----------------|---------|
| 1 | Reddit | TIER 1 | Global | 12,500 | 850 | FREE OAuth2, 100 QPM, huge volume |
| 2 | Stack Overflow | TIER 1 | Global | 8,500 | 600 | Official API, precise tech pain points |
| 3 | GitHub Discussions | TIER 1 | Global | 4,500 | 350 | PAT token, real product feedback |
| 4 | YouTube | TIER 1 | Global | 8,900 | 620 | API v3, comments show deep pain points |
| 5 | API Subreddits | TIER 1 | NA | 4,800 | 380 | Specialized developer pain points |
| 6 | Hacker News | TIER 1 | NA | 4,200 | 350 | Elitist discussions, high-quality ideas |
| 7 | Zhihu | TIER 3 | Asia | 15,000 | 1,100 | China market, huge opportunity |
| 8 | Google Play Reviews | TIER 1 | Global | 10,000 | 750 | App UX/performance feedback, massive |
| 9 | Indie Hackers | TIER 2 | NA | 5,900 | 450 | Startup-focused pain points |
| 10 | Stripe Community | TIER 2 | Global | 5,600 | 420 | Fintech/payment pain points |

**Total:** 74.5K pain points, 5.4K niche ideas/month, $0 cost (all FREE APIs)

---

## ðŸ’» Technology Stack

### Backend
- **Database:** Supabase (PostgreSQL)
  - 3 main tables: pain_points, niche_ideas, user_saves
  - Real-time subscriptions for live updates
  - Vector search capability (future: semantic similarity)
  - Free tier: 500 MB storage, 2 GB bandwidth

- **LLM:** Groq API (Mixtral 8x7B)
  - 3-5x faster than GPT-4
  - 80% cheaper ($0.02 vs $0.03 per 1M tokens)
  - Free tier: 25 requests/minute

- **Ingestion:** Node.js + cron jobs
  - Reddit PRAW SDK
  - GitHub REST API + GraphQL
  - YouTube Data API v3
  - Cheerio/Playwright for scraping

### Frontend
- **Framework:** Next.js 14 + React 18
- **Hosting:** Vercel (auto-scaling, $0 for MVP tier)
- **Styling:** Tailwind CSS + custom CSS variables
- **Charts:** Chart.js or Recharts
- **UI Components:** Shadcn/ui (optional, builds on Radix)

### DevOps
- **Version Control:** GitHub
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry (error tracking)
- **Analytics:** Vercel Analytics, Mixpanel (optional)

---

## ðŸŽ¨ UI/UX Structure

### Main Layout
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ SIDEBAR (260px, fixed)             â”‚
â”‚ â€¢ Logo: "NicheRadar"               â”‚
â”‚ â€¢ Nav: 5 tabs                      â”‚
â”‚ â€¢ Stats: KPI cards                 â”‚
â”‚ â€¢ Theme toggle                     â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ MAIN CONTENT (responsive)          â”‚
â”‚ â€¢ Filters bar (dropdowns)          â”‚
â”‚ â€¢ Content grid (2 col desktop)     â”‚
â”‚ â€¢ Infinite scroll + Load More      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### 5 Main Tabs
1. **Real-Time Data** - Live 24h pain points (table)
2. **Aggregated Pain Points** - Full library (searchable cards)
3. **Niche Ideas** - AI-generated opportunities (expandable)
4. **Analytics** - Dashboard with charts & KPIs
5. **Settings** - User config, integrations, team

### Color Scheme (Primary)
- **Primary:** #0EA5E9 (Ocean Blue) OR #9333EA (Purple) - depending on theme
- **Background:** #F8FAFC (light) / #0F172A (dark)
- **Accents:** Green (#10B981), Red (#EF4444), Amber (#F59E0B)

### Responsive Behavior
- **Desktop (>1024px):** 2-column grid, sidebar fixed left
- **Tablet (768-1024px):** Sidebar collapses to hamburger, full-width content
- **Mobile (<768px):** 1-column stacked, bottom navigation

---

## ðŸ“… Development Timeline (10 Weeks)

### Week 1-2: Foundation
**Goal:** Set up infrastructure + basic UI + Reddit ingestion

**Tasks:**
- Supabase project setup (schema, auth, real-time)
- Next.js project scaffolding with Vercel deployment
- Design system (colors, typography, spacing)
- Reddit OAuth2 setup + PRAW SDK integration
- Basic landing page + tab navigation

**Deliverables:**
- Deployed Next.js app on Vercel
- Supabase database with pain_points table
- Real-time Reddit data ingestion (rate-limited to 100 posts/min)

---

### Week 3-4: Core Platform Integrations
**Goal:** Add GitHub, YouTube, Stack Overflow, HN

**Tasks:**
- GitHub Discussions API integration
- YouTube Data API v3 (comments fetching)
- Stack Overflow API integration
- Hacker News scraping (no auth required)
- Data processing pipeline (text normalization, dedup)
- Frontend: Real-Time Data tab + Aggregated Library tab

**Deliverables:**
- 40K+ aggregated pain points in database
- Real-time frontend with filters (platform, category, sentiment)
- Processing pipeline with quality scoring

---

### Week 5-6: Data Processing + Asia Expansion
**Goal:** Processing pipeline + Zhihu integration + sentiment analysis

**Tasks:**
- Sentiment analysis (using transformers.js or basic lexicon)
- Text anonymization & privacy filtering
- Deduplication engine (cosine similarity on embeddings)
- Zhihu scraping (Chinese Q&A - Playwright + proxies)
- Language translation (CN â†’ EN)
- Quality scoring algorithm (1-10 based on votes, recency, sentiment)

**Deliverables:**
- 65K+ pain points with sentiment analysis
- Asia coverage (15K from Zhihu)
- Aggregated library fully searchable

---

### Week 7-8: AI Layer + Niche Ideas Generation
**Goal:** Groq LLM integration + niche idea generation

**Tasks:**
- Groq API setup + batch processing pipeline (nightly)
- Niche idea generation prompt engineering
- Market size estimation (TAM/SAM/SOM)
- Monetization scenario generation
- 30-day roadmap generation for each idea
- Competitor analysis integration
- Frontend: Niche Ideas tab with expandable cards
- Frontend: Analytics dashboard with charts

**Deliverables:**
- 5K+ AI-generated niche ideas
- Full Niche Ideas tab with all sections
- Analytics dashboard with KPI cards + charts
- Export functionality (CSV, JSON, PDF)

---

### Week 9-10: Polish + Testing + Beta Launch
**Goal:** UX refinement, bug fixes, performance optimization, prepare for public launch

**Tasks:**
- End-to-end testing (all tabs, filters, exports)
- Performance optimization (lazy loading, pagination, caching)
- Mobile responsiveness testing
- Dark mode finalization
- Error handling & loading states
- Settings tab (platform config, alerts, integrations)
- Beta user recruitment (Product Hunt, Twitter, Indie Hackers)
- Documentation + help center
- Team collaboration setup

**Deliverables:**
- Production-ready MVP
- 150K+ pain points, 10K niche ideas
- 1K beta sign-ups
- Feedback collection system

---

## ðŸš€ Deployment Strategy

### MVP Phase (Week 10)
- **Frontend:** Vercel (auto-scales, CDN, $0 for free tier)
- **Database:** Supabase free tier (500 MB storage)
- **LLM:** Groq free tier (25 requests/minute)
- **Monitoring:** Sentry free tier (5K errors/month)

**Cost:** $0/month

### Alpha Phase (Month 3, 1K users)
- **Frontend:** Vercel Pro ($20/month)
- **Database:** Supabase Pro ($25/month, up to 8 GB)
- **LLM:** Groq ($0.02 per 1M tokens, ~$50/month at scale)
- **Monitoring & Analytics:** $20/month

**Cost:** ~$95/month

### Scale Phase (Month 6+, 10K users, $10K MRR)
- **Frontend:** Vercel Scale ($100-200/month)
- **Database:** Supabase Business ($100/month)
- **LLM:** Groq + GPT-4 ($200-300/month)
- **Monitoring, CDN, etc:** $50/month

**Cost:** ~$250-300/month (covered by revenue)

---

## ðŸ’° Revenue Model

### Phase 1 (Months 1-3): Free MVP
- Goal: Acquire 1K users, gather feedback, build hype
- No monetization (gather NPS, product-market fit signals)

### Phase 2 (Months 4-6): Freemium ($29/month Pro)
- **Free Tier:** 100 pain point searches/month, read-only
- **Pro Tier ($29/month):** Unlimited searches, idea exports, API access, email alerts
- **Enterprise (custom):** Team seats, Slack/Notion integrations, custom data sources

### Revenue Projections (Year 1)
- Month 3 (Beta): $0 (free)
- Month 6 (Launch): $5-10K MRR (200-300 Pro subscribers @ $29)
- Month 12 (Scale): $25-50K MRR (800-1.5K subscribers + enterprise)

---

## âœ… Success Metrics

### MVP Success (Week 10)
- **150K+** aggregated pain points
- **10K+** AI-generated niche ideas
- **1K** beta sign-ups
- **NPS 40+** (Net Promoter Score from feedback)

### Beta Success (Month 3)
- **1K** active users
- **500+** registered accounts
- **40+** NPS (on track)
- **1-2%** conversion rate to Pro (10-20 paid users)

### Public Launch Success (Month 6)
- **10K** total users
- **200-300** Pro subscribers
- **NPS 50+**
- **$5-10K MRR**
- **<5%** monthly churn

### Year 1 Goals
- **50K** active users
- **800-1.5K** Pro subscribers + enterprise deals
- **$25-50K MRR**
- **Profitability** by month 12

---

## ðŸŽ¯ Key Decisions

### Why These 10 Data Sources?
- **High signal-to-noise:** Free APIs, official support, good data quality
- **Coverage:** 74.5K pain points covers tech, SaaS, fintech, e-commerce niches
- **ROI:** 80% of value with 20% of integrations (other 22 sources = diminishing returns)
- **Handiness:** All 85%+ easy to implement (no complex auth or proxies needed)

### Why Supabase?
- **Postgres power:** Full-text search, vector search (future), real-time
- **Free tier:** Generous 500 MB, enough for MVP
- **Scales well:** Pro tier ($25) supports 10K users
- **No vendor lock-in:** Can migrate to self-hosted Postgres anytime

### Why Groq LLM?
- **Speed:** 3-5x faster than GPT-4 (key for nightly batch processing)
- **Cost:** 80% cheaper than OpenAI
- **Quality:** Mixtral 8x7B is 95%+ quality of GPT-4 for our use case
- **Free tier:** 25 req/min enough for MVP

### Why Next.js?
- **Vercel deployment:** Friction-free, auto-scaling, $0 for MVP
- **React ecosystem:** Rich component libraries (Shadcn, Recharts)
- **Performance:** Server-side rendering, image optimization
- **Full-stack:** Can add backend API routes if needed (future)

---

## ðŸ” Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|-----------|
| Reddit/GitHub API rate limits | Incomplete data | Medium | Implement smart scheduling, backoff strategy |
| Zhihu scraping blocks | 15K data loss | High | Use residential proxies, rotate user-agents |
| Groq API downtime | No niche ideas | Low | Implement fallback to cached data |
| Poor data quality | Low user engagement | Medium | Strict quality scoring, user feedback loop |
| Competitors launch | Market share loss | High | Move fast, build community early, iterate quickly |
| LLM hallucinations | Bad ideas | Medium | Review AI prompts, human verification layer (future) |
| Privacy/GDPR issues | Legal risk | Low | Anonymize all user data, DPIA template ready |
| Slow MVP launch | Miss market window | Medium | Ruthless scope reduction, skip non-MVP features |

---

## ðŸŽŠ Next Steps (Post MVP)

### Immediate (Month 4-6)
1. Launch freemium monetization
2. Build API for power users
3. Add Slack integration
4. Implement team collaboration
5. Start Product Hunt + Hacker News marketing

### Medium-term (Month 7-12)
1. Add 20+ more data sources (expand coverage)
2. Build mobile app (React Native)
3. Add A.I. idea validation (test landing pages)
4. Enterprise sales + custom data sources
5. Marketplace for idea validation templates

### Long-term (Year 2+)
1. AI-powered chatbot for idea brainstorming
2. Founder matchmaking (connect founders with similar ideas)
3. Venture fund integration (cap table, pitch deck help)
4. Exit strategy (acquisition by Y Combinator, AngelList, or venture firm)

---

## ðŸ“ž Questions?

For technical questions or to discuss further, reach out to the development team. This plan is a living document and will be updated as we learn from users and market feedback.

**Last Updated:** November 5, 2025  
**Next Review:** Week 2 (January 2025)