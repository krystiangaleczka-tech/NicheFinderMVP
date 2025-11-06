import { 
  PainPoint, 
  AggregatedPainPoint, 
  NicheIdea, 
  AnalyticsSummary 
} from './types';

export const realTimeData: PainPoint[] = [
  { 
    id: 1, 
    title: "Stripe checkout integration takes 3 days", 
    platform: "Reddit (r/SaaS)", 
    category: "UX/UI", 
    sentiment: "negative", 
    sentiment_distribution: {negative: 78, neutral: 18, positive: 4}, 
    urgency_score: 9, 
    trend: "rising", 
    votes: 523, 
    comments: 89, 
    quote: "I've spent 3 days trying to get Stripe working. Why is this so complicated?" 
  },
  { 
    id: 2, 
    title: "Payment processing is too slow", 
    platform: "YouTube", 
    category: "Performance", 
    sentiment: "negative", 
    sentiment_distribution: {negative: 65, neutral: 25, positive: 10}, 
    urgency_score: 7, 
    trend: "stable", 
    votes: 234, 
    comments: 45, 
    quote: "Takes 15 seconds to process a payment. Users are abandoning checkout." 
  },
  { 
    id: 3, 
    title: "Documentation for API integration is unclear", 
    platform: "GitHub Issues", 
    category: "Documentation", 
    sentiment: "negative", 
    sentiment_distribution: {negative: 82, neutral: 15, positive: 3}, 
    urgency_score: 8, 
    trend: "rising", 
    votes: 156, 
    comments: 34, 
    quote: "The docs are outdated and don't match the current API version." 
  },
  { 
    id: 4, 
    title: "Rate limits make this unusable", 
    platform: "Twitter", 
    category: "Limitations", 
    sentiment: "negative", 
    sentiment_distribution: {negative: 71, neutral: 22, positive: 7}, 
    urgency_score: 8, 
    trend: "rising", 
    votes: 89, 
    comments: 22, 
    quote: "Hit rate limits after 50 requests. Impossible for production apps." 
  },
  { 
    id: 5, 
    title: "How to setup payment processing easily?", 
    platform: "Quora", 
    category: "Support", 
    sentiment: "neutral", 
    sentiment_distribution: {negative: 0, neutral: 100, positive: 0}, 
    urgency_score: 6, 
    trend: "stable", 
    votes: 89, 
    comments: 12, 
    quote: "Looking for easiest way to integrate payments without 3-day setup." 
  },
  { 
    id: 6, 
    title: "High payment fees killing margins", 
    platform: "Reddit (r/Entrepreneur)", 
    category: "Pricing", 
    sentiment: "negative", 
    sentiment_distribution: {negative: 85, neutral: 12, positive: 3}, 
    urgency_score: 9, 
    trend: "stable", 
    votes: 412, 
    comments: 67, 
    quote: "3% fees + $0.30 per transaction is killing our business model." 
  },
  { 
    id: 7, 
    title: "15 minutes to setup webhook", 
    platform: "YouTube", 
    category: "UX/UI", 
    sentiment: "negative", 
    sentiment_distribution: {negative: 72, neutral: 20, positive: 8}, 
    urgency_score: 7, 
    trend: "falling", 
    votes: 178, 
    comments: 28, 
    quote: "Setting up webhooks should take 2 minutes, not 15." 
  },
  { 
    id: 8, 
    title: "Customer support takes days", 
    platform: "Twitter", 
    category: "Support", 
    sentiment: "negative", 
    sentiment_distribution: {negative: 89, neutral: 8, positive: 3}, 
    urgency_score: 9, 
    trend: "rising", 
    votes: 67, 
    comments: 15, 
    quote: "Waited 3 days for support response. Unacceptable." 
  },
  { 
    id: 9, 
    title: "API documentation outdated", 
    platform: "GitHub", 
    category: "Documentation", 
    sentiment: "negative", 
    sentiment_distribution: {negative: 88, neutral: 10, positive: 2}, 
    urgency_score: 8, 
    trend: "rising", 
    votes: 234, 
    comments: 56, 
    quote: "Examples in docs don't work with current API version." 
  },
  { 
    id: 10, 
    title: "Confusing error messages", 
    platform: "Reddit (r/webdev)", 
    category: "UX/UI", 
    sentiment: "negative", 
    sentiment_distribution: {negative: 76, neutral: 18, positive: 6}, 
    urgency_score: 7, 
    trend: "stable", 
    votes: 189, 
    comments: 34, 
    quote: "Error messages are cryptic. Need better debugging info." 
  }
];

export const aggregatedPainPoints: AggregatedPainPoint[] = [
  {
    id: 1,
    title: "Payment Integration is Too Complicated",
    mentions: 234,
    trend_percent: 45,
    platforms: [
      { name: "Reddit", count: 89 },
      { name: "YouTube", count: 76 },
      { name: "Twitter", count: 45 },
      { name: "GitHub", count: 24 }
    ],
    sentiment_distribution: {negative: 78, neutral: 18, positive: 4},
    severity: 8,
    frequency: 6,
    growth_rate: 45,
    validation_difficulty: "Easy",
    opportunity_score: 7,
    specific_issues: [
      "Stripe setup takes 3+ days (234 mentions)",
      "Documentation unclear (189 mentions)",
      "No pre-built templates (156 mentions)",
      "Rate limits confusing (123 mentions)",
      "Error messages not helpful (98 mentions)"
    ],
    quotes: [
      "I've spent 2 weeks getting Stripe to work",
      "Documentation is outdated and confusing",
      "Why isn't there a pre-built template?"
    ],
    affected_companies: [
      "Indie developers: 60%",
      "Small SaaS (<$1M ARR): 30%",
      "Agencies: 10%"
    ]
  },
  {
    id: 2,
    title: "Slow Performance & Rate Limiting",
    mentions: 178,
    trend_percent: 28,
    platforms: [
      { name: "YouTube", count: 67 },
      { name: "Twitter", count: 54 },
      { name: "GitHub", count: 34 },
      { name: "Reddit", count: 23 }
    ],
    sentiment_distribution: {negative: 71, neutral: 22, positive: 7},
    severity: 7,
    frequency: 5,
    growth_rate: 28,
    validation_difficulty: "Medium",
    opportunity_score: 6,
    specific_issues: [
      "Payment processing takes 10+ seconds",
      "Rate limits hit after 50 requests",
      "No caching options"
    ],
    quotes: [
      "Takes 15 seconds to process. Users leave.",
      "Hit rate limits too quickly"
    ],
    affected_companies: [
      "High-volume apps: 70%",
      "APIs with scale: 30%"
    ]
  },
  {
    id: 3,
    title: "Poor Documentation & Support",
    mentions: 156,
    trend_percent: 0,
    platforms: [
      { name: "GitHub", count: 78 },
      { name: "Quora", count: 45 },
      { name: "Reddit", count: 22 },
      { name: "Twitter", count: 11 }
    ],
    sentiment_distribution: {negative: 84, neutral: 12, positive: 4},
    severity: 8,
    frequency: 6,
    growth_rate: 0,
    validation_difficulty: "Easy",
    opportunity_score: 7,
    specific_issues: [
      "Examples don't work with current API",
      "Support responds in 3+ days",
      "No video tutorials",
      "Community forum inactive"
    ],
    quotes: [
      "Documentation is completely outdated",
      "Can't get support response for days"
    ],
    affected_companies: [
      "New developers: 65%",
      "Small teams: 35%"
    ]
  }
];

export const generatedIdeas: NicheIdea[] = [
  {
    id: 1,
    title: "Stripe Integration Builder",
    source_pain_point: "Payment Integration is Too Complicated",
    generated_at: "2025-11-03T16:40:00Z",
    ai_model: "Groq Mixtral 8x7B",
    market: {
      tam: 120000000,
      sam: 45000000,
      som: 12000000,
      runway_months: 24
    },
    monetization: [
      { type: "SaaS Template Library ($49-199/month)", revenue_potential: 2400000, description: "Pre-built Stripe integrations" },
      { type: "White-label solution ($5K setup + $299/month)", revenue_potential: 1800000, description: "For agencies and enterprises" },
      { type: "Pay-per-integration ($99-499 one-time)", revenue_potential: 900000, description: "Single integration templates" }
    ],
    difficulty: 7,
    difficulty_label: "Medium",
    time_to_mvp_weeks: 6,
    time_to_1k_mrr_months: 4,
    competition_level: "High",
    competitors: ["Stripe Checkout", "RevenueCat", "Paddle"],
    advantages: ["Visual builder", "No-code templates", "Instant deployment"],
    market_gap: "No visual builder for payment flows",
    window_of_opportunity: "6-12 months before Stripe catches up",
    validation_plan: [
      { week: 1, task: "Build landing page with mockups" },
      { week: 2, task: "Interview 20 developers about payment pain" },
      { week: 3, task: "Create MVP with 3 templates" },
      { week: 4, task: "Launch on Product Hunt and get first 100 users" }
    ],
    risks: [
      { issue: "Stripe might copy features", mitigation: "Build strong brand and community" },
      { issue: "Complexity of payment flows", mitigation: "Start with simple use cases" }
    ],
    assumptions: ["Developers prefer visual builders over code", "Market willing to pay for convenience"],
    evidence: "234 mentions of Stripe complexity, 45% growth in complaints",
    roadmap_30days: [
      { week: 1, tasks: ["Research existing tools", "Identify gaps", "Prototype"] },
      { week: 2, tasks: ["Build API parser", "Connect to LLM", "Test"] },
      { week: 3, tasks: ["GitHub app setup", "Beta launch", "Gather feedback"] },
      { week: 4, tasks: ["Iterate", "Marketing", "First paid customers"] }
    ]
  },
  {
    id: 2,
    title: "API Documentation Generator",
    source_pain_point: "Poor Documentation & Support",
    generated_at: "2025-11-03T16:40:00Z",
    ai_model: "Groq Mixtral 8x7B",
    market: {
      tam: 68000000,
      sam: 28000000,
      som: 8400000,
      runway_months: 18
    },
    monetization: [
      { type: "SaaS Documentation Platform ($29-149/month)", revenue_potential: 2100000, description: "Auto-generated docs from code" },
      { type: "CLI tool ($99-499 one-time)", revenue_potential: 600000, description: "Local documentation generation" },
      { type: "Enterprise ($10K+ annually)", revenue_potential: 1200000, description: "Custom docs with support" }
    ],
    difficulty: 6,
    difficulty_label: "Easy",
    time_to_mvp_weeks: 4,
    time_to_1k_mrr_months: 3,
    competition_level: "Medium",
    competitors: ["Swagger", "Postman", "ReadMe"],
    advantages: ["AI-powered examples", "Auto-sync with code", "Interactive tutorials"],
    market_gap: "No AI-powered documentation that stays in sync",
    window_of_opportunity: "3-6 months before incumbents add AI",
    validation_plan: [
      { week: 1, task: "Build prototype with GitHub integration" },
      { week: 2, task: "Get 50 beta testers from GitHub" },
      { week: 3, task: "Launch on HackerNews" },
      { week: 4, task: "First 10 paying customers" }
    ],
    risks: [
      { issue: "GitHub/other platforms might build this", mitigation: "Focus on best-in-class experience" },
      { issue: "Complexity of parsing different codebases", mitigation: "Start with popular frameworks" }
    ],
    assumptions: ["Developers will pay for better documentation", "AI can generate useful examples"],
    evidence: "156 mentions of poor docs, 78 GitHub issues about outdated examples",
    roadmap_30days: [
      { week: 1, tasks: ["Research existing tools", "Identify gaps", "Prototype"] },
      { week: 2, tasks: ["Build API parser", "Connect to LLM", "Test"] },
      { week: 3, tasks: ["GitHub app setup", "Beta launch", "Gather feedback"] },
      { week: 4, tasks: ["Iterate", "Marketing", "First paid customers"] }
    ]
  },
  {
    id: 3,
    title: "Performance Monitoring for Indie Apps",
    source_pain_point: "Slow Performance & Rate Limiting",
    generated_at: "2025-11-03T16:40:00Z",
    ai_model: "Groq Mixtral 8x7B",
    market: {
      tam: 56000000,
      sam: 14000000,
      som: 3200000,
      runway_months: 16
    },
    monetization: [
      { type: "SaaS Dashboard ($29-199/month)", revenue_potential: 1800000, description: "Real-time monitoring" },
      { type: "API calls meter ($0.001-0.01 per)", revenue_potential: 900000, description: "Pay-as-you-go" },
      { type: "Enterprise support ($5K/month+)", revenue_potential: 400000, description: "Dedicated support" }
    ],
    difficulty: 5,
    difficulty_label: "Easy",
    time_to_mvp_weeks: 3,
    time_to_1k_mrr_months: 2,
    competition_level: "Very High",
    competitors: ["Sentry", "DataDog", "New Relic"],
    advantages: ["Indie-focused pricing", "Simpler UX", "No enterprise bloat"],
    market_gap: "Indie devs can't afford enterprise tools",
    window_of_opportunity: "3-6 months before market saturation",
    validation_plan: [
      { week: 1, task: "Deploy prototype to Vercel" },
      { week: 2, task: "Get 20 beta testers" },
      { week: 3, task: "Launch on Product Hunt" },
      { week: 4, task: "First paying customers" }
    ],
    risks: [
      { issue: "Established competitors dominate", mitigation: "Better indie pricing, community" },
      { issue: "Ops complexity", mitigation: "Start with Node.js only" }
    ],
    assumptions: ["Indie devs will switch for 10x cheaper option"],
    evidence: "178 GitHub issues, spike in rate limit complaints",
    roadmap_30days: [
      { week: 1, tasks: ["Build error tracking SDK", "Create dashboard", "Demo ready"] },
      { week: 2, tasks: ["Beta testers setup", "Gather feedback", "Iterate"] },
      { week: 3, tasks: ["Product Hunt prep", "Launch", "Media outreach"] },
      { week: 4, tasks: ["First customers", "Iterate", "Plan features"] }
    ]
  }
];

export const analyticsSummary: AnalyticsSummary = {
  total_pain_points_tracked: 23,
  ideas_generated: 3,
  ideas_validated: 1,
  ideas_launched: 0,
  total_tam: 236000000,
  hottest_topics: [
    { topic: "Payment Integration", change: "↑↑ +45%", mentions: 234 },
    { topic: "Performance Issues", change: "↑↑ +28%", mentions: 178 },
    { topic: "Documentation", change: "→ Stable", mentions: 156 }
  ],
  category_distribution: [
    { name: "UX/UI", percent: 32 },
    { name: "Payment", percent: 28 },
    { name: "Support", percent: 18 },
    { name: "Performance", percent: 15 },
    { name: "Other", percent: 7 }
  ],
  platform_distribution: [
    { name: "Reddit", count: 4500 },
    { name: "YouTube", count: 3200 },
    { name: "Twitter", count: 1800 },
    { name: "GitHub", count: 890 },
    { name: "Others", count: 612 }
  ]
};

// Add commonly used exports with consistent naming
export const mockPainPoints = realTimeData;
export const mockAggregatedPainPoints = aggregatedPainPoints;
export const mockNicheIdeas = generatedIdeas;
export const mockAnalyticsData = analyticsSummary;