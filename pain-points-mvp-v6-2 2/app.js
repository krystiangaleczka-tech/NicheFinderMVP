// Data from provided JSON
const realTimeData = [
  { id: 1, title: "Stripe checkout integration takes 3 days", platform: "Reddit (r/SaaS)", category: "UX/UI", sentiment: "negative", sentiment_distribution: {negative: 78, neutral: 18, positive: 4}, urgency_score: 9, trend: "rising", votes: 523, comments: 89, quote: "I've spent 3 days trying to get Stripe working. Why is this so complicated?" },
  { id: 2, title: "Payment processing is too slow", platform: "YouTube", category: "Performance", sentiment: "negative", sentiment_distribution: {negative: 65, neutral: 25, positive: 10}, urgency_score: 7, trend: "stable", votes: 234, comments: 45, quote: "Takes 15 seconds to process a payment. Users are abandoning checkout." },
  { id: 3, title: "Documentation for API integration is unclear", platform: "GitHub Issues", category: "Documentation", sentiment: "negative", sentiment_distribution: {negative: 82, neutral: 15, positive: 3}, urgency_score: 8, trend: "rising", votes: 156, comments: 34, quote: "The docs are outdated and don't match the current API version." },
  { id: 4, title: "Rate limits make this unusable", platform: "Twitter", category: "Limitations", sentiment: "negative", sentiment_distribution: {negative: 71, neutral: 22, positive: 7}, urgency_score: 8, trend: "rising", votes: 89, comments: 22, quote: "Hit rate limits after 50 requests. Impossible for production apps." },
  { id: 5, title: "How to setup payment processing easily?", platform: "Quora", category: "Support", sentiment: "neutral", sentiment_distribution: {negative: 0, neutral: 100, positive: 0}, urgency_score: 6, trend: "stable", votes: 89, comments: 12, quote: "Looking for easiest way to integrate payments without 3-day setup." },
  { id: 6, title: "High payment fees killing margins", platform: "Reddit (r/Entrepreneur)", category: "Pricing", sentiment: "negative", sentiment_distribution: {negative: 85, neutral: 12, positive: 3}, urgency_score: 9, trend: "stable", votes: 412, comments: 67, quote: "3% fees + $0.30 per transaction is killing our business model." },
  { id: 7, title: "15 minutes to setup webhook", platform: "YouTube", category: "UX/UI", sentiment: "negative", sentiment_distribution: {negative: 72, neutral: 20, positive: 8}, urgency_score: 7, trend: "falling", votes: 178, comments: 28, quote: "Setting up webhooks should take 2 minutes, not 15." },
  { id: 8, title: "Customer support takes days", platform: "Twitter", category: "Support", sentiment: "negative", sentiment_distribution: {negative: 89, neutral: 8, positive: 3}, urgency_score: 9, trend: "rising", votes: 67, comments: 15, quote: "Waited 3 days for support response. Unacceptable." },
  { id: 9, title: "API documentation outdated", platform: "GitHub", category: "Documentation", sentiment: "negative", sentiment_distribution: {negative: 88, neutral: 10, positive: 2}, urgency_score: 8, trend: "rising", votes: 234, comments: 56, quote: "Examples in docs don't work with current API version." },
  { id: 10, title: "Confusing error messages", platform: "Reddit (r/webdev)", category: "UX/UI", sentiment: "negative", sentiment_distribution: {negative: 76, neutral: 18, positive: 6}, urgency_score: 7, trend: "stable", votes: 189, comments: 34, quote: "Error messages are cryptic. Need better debugging info." }
];

const aggregatedPainPoints = [
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

const generatedIdeas = [
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

const analyticsSummary = {
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

// State
let themeState = 'light';
let currentTab = 'realtime';
let filteredRealTimeData = [...realTimeData];
let charts = {};

// Helper functions
function getDifficultyBadgeClass(difficulty) {
  if (difficulty <= 3) return 'badge-positive';
  if (difficulty <= 6) return 'badge-neutral';
  return 'badge-negative';
}

function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
}

// Tab switching function - defined globally before DOMContentLoaded
window.switchTab = function switchTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
    tab.classList.add('hidden');
  });
  
  // Remove active class from all nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Show selected tab content
  const selectedTab = document.getElementById(`tab-${tabName}`);
  if (selectedTab) {
    selectedTab.classList.remove('hidden');
    selectedTab.classList.add('active');
  }
  
  // Add active class to selected nav item
  const selectedNav = document.getElementById(`nav-${tabName}`);
  if (selectedNav) {
    selectedNav.classList.add('active');
  }
  
  // Update current tab state
  currentTab = tabName;
  
  // Render content for the selected tab
  switch(tabName) {
    case 'realtime':
      renderRealTime();
      break;
    case 'aggregated':
      renderAggregated();
      break;
    case 'ideas':
      renderIdeas();
      break;
    case 'analytics':
      renderAnalytics();
      break;
  }
};

// Initialize all event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-color-scheme') || 'light';
      const newTheme = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-color-scheme', newTheme);
      themeState = newTheme;
      
      if (currentTab === 'analytics') {
        setTimeout(() => renderAnalytics(), 100);
      }
    });
  }

  // Tab Navigation - Updated for sidebar navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = item.getAttribute('data-tab');
      if (tab) {
        window.switchTab(tab);
      }
    });
  });

  // Filters for Real-Time
  const platformFilter = document.getElementById('platformFilter');
  const categoryFilterRT = document.getElementById('categoryFilterRT');
  const sentimentFilterRT = document.getElementById('sentimentFilterRT');
  const urgencyFilter = document.getElementById('urgencyFilter');
  
  if (platformFilter) platformFilter.addEventListener('change', applyRealTimeFilters);
  if (categoryFilterRT) categoryFilterRT.addEventListener('change', applyRealTimeFilters);
  if (sentimentFilterRT) sentimentFilterRT.addEventListener('change', applyRealTimeFilters);
  if (urgencyFilter) urgencyFilter.addEventListener('change', applyRealTimeFilters);

  // Set up expand/collapse all buttons for ideas
  const expandAllBtn = document.getElementById('expandAllBtn');
  const collapseAllBtn = document.getElementById('collapseAllBtn');

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.niche-card').forEach(card => {
        card.classList.add('is-expanded');
        const btn = card.querySelector('button[onclick*="toggleCard"]');
        if (btn) btn.textContent = '▲ COLLAPSE';
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.niche-card').forEach(card => {
        card.classList.remove('is-expanded');
        const btn = card.querySelector('button[onclick*="toggleCard"]');
        if (btn) btn.textContent = '▼ EXPAND DETAILS';
      });
    });
  }

  // Initialize the app
  renderRealTime();
  setTimeout(addRetroEffects, 100);
});

// Real-Time Tab - Updated with retro styling matching reference
function renderRealTime() {
  const list = document.getElementById('realtimeGrid');
  const countElement = document.getElementById('realTimeCount');
  
  // Update count
  if (countElement) {
    countElement.textContent = filteredRealTimeData.length;
  }
  
  const html = filteredRealTimeData.map(item => {
    const sentimentClass = item.sentiment === 'negative' ? 'badge-negative' : 
                         item.sentiment === 'positive' ? 'badge-positive' : 'badge-neutral';
    const urgencyPercent = item.urgency_score * 10;
    const urgencyColor = item.urgency_score >= 8 ? '#ff6b35' : 
                        item.urgency_score >= 5 ? '#ffd23f' : '#00bfb3';
    
    return `
      <div class="card p-5 relative">
        <div class="corner-decor top-left"></div>
        <div class="corner-decor top-right"></div>
        <div class="corner-decor bottom-left"></div>
        <div class="corner-decor bottom-right"></div>
        <div class="flex justify-between items-start mb-3">
          <h3 class="font-bold text-sm">${item.title}</h3>
          <span class="badge ${sentimentClass}">${item.platform.toUpperCase()}</span>
        </div>
        <div class="flex gap-2 mb-4 flex-wrap">
          <span class="badge ${sentimentClass}">${item.sentiment.toUpperCase()}</span>
          <span class="badge" style="background: var(--retro-blue); color: white; border-color: var(--retro-dark);">${item.category.toUpperCase()}</span>
        </div>
        <div class="mb-4">
          <div class="text-xs font-bold mb-2">URGENCY: <span class="text-pink-600">${item.urgency_score}/10</span></div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${urgencyPercent}%"></div>
          </div>
        </div>
        <blockquote class="text-xs italic mb-4 leading-relaxed p-3 bg-orange-50 border-l-4 border-orange-500">
          "${item.quote}"
        </blockquote>
        <div class="flex justify-between text-xs font-bold mb-4">
          <span>👍 <span class="text-green-600">${item.votes}</span></span>
          <span>💬 <span class="text-blue-600">${item.comments}</span></span>
        </div>
        <div class="flex gap-2">
          <button class="btn-secondary text-xs px-3 py-2 btn-press">SAVE</button>
          <button class="btn-primary text-xs px-3 py-2 btn-press">GEN</button>
          <button class="btn-secondary text-xs px-3 py-2 btn-press">VIEW</button>
        </div>
      </div>
    `;
  }).join('');
  
  if (list) {
    list.innerHTML = html;
  }
}

// Aggregated Tab - Updated with retro styling
function renderAggregated() {
  const container = document.getElementById('aggregatedList');
  if (!container) return;

  if (aggregatedPainPoints.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12">
        <i data-lucide="inbox" class="w-16 h-16 mx-auto text-gray-400 mb-4"></i>
        <p class="text-gray-500 text-lg">No aggregated data available</p>
        <p class="text-gray-400 text-sm mt-2">Start collecting real-time data first</p>
      </div>
    `;
    return;
  }

  container.innerHTML = aggregatedPainPoints.map(item => `
    <div class="card p-5 relative mb-4">
      <div class="corner-decor top-left"></div>
      <div class="corner-decor top-right"></div>
      <div class="corner-decor bottom-left"></div>
      <div class="corner-decor bottom-right"></div>
      
      <div class="flex justify-between items-start mb-3">
        <h3 class="font-bold text-lg">${item.title}</h3>
        <span class="badge badge-positive">${item.mentions} ↑↑ ${item.trend_percent}%</span>
      </div>
      
      <p class="text-xs font-bold mb-4">
        ${item.platforms.map(platform => {
          const colors = {
            'Reddit': 'var(--retro-pink)',
            'YouTube': 'var(--retro-teal)', 
            'GitHub': 'var(--retro-purple)',
            'Twitter': 'var(--retro-yellow)'
          };
          const color = colors[platform.name] || 'var(--retro-blue)';
          return `<span style="color: ${color};">█</span> ${platform.name} ${platform.count}`;
        }).join(' ')}
      </p>

      <div class="mb-4">
        <div class="progress-bar" style="height: 10px;">
          <div style="width: ${item.severity * 10}%; height: 100%;" class="progress-fill"></div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-3 mb-4">
        <div class="stats-card py-3" style="background: linear-gradient(135deg, var(--retro-pink) 0%, var(--retro-purple) 100%);">
          <div class="text-2xl font-bold value">${item.severity}/10</div>
          <div class="text-xs mt-1 font-bold">Sever</div>
        </div>
        <div class="stats-card py-3" style="background: linear-gradient(135deg, var(--retro-blue) 0%, var(--retro-teal) 100%);">
          <div class="text-2xl font-bold value">${item.frequency}/10</div>
          <div class="text-xs mt-1 font-bold">Freq</div>
        </div>
        <div class="stats-card py-3" style="background: linear-gradient(135deg, var(--retro-green) 0%, var(--retro-teal) 100%);">
          <div class="text-2xl font-bold value">+${item.growth_rate}%</div>
          <div class="text-xs mt-1 font-bold">Growth</div>
        </div>
        <div class="stats-card py-3" style="background: linear-gradient(135deg, var(--retro-yellow) 0%, var(--retro-orange) 100%);">
          <div class="text-2xl font-bold value">${item.opportunity_score}/10</div>
          <div class="text-xs mt-1 font-bold">Opport</div>
        </div>
      </div>

      <div class="expandable-content">
        <div class="section">
          <h4 class="font-bold mb-3 text-sm text-orange-600">SPECIFIC ISSUES:</h4>
          <ul class="text-xs space-y-2">
            ${item.specific_issues.map((issue, index) => {
              const colors = ['var(--retro-pink)', 'var(--retro-teal)', 'var(--retro-purple)', 'var(--retro-yellow)', 'var(--retro-green)'];
              return `
                <li class="flex items-start gap-2">
                  <span style="color: ${colors[index % colors.length]};">■</span>
                  <span>${issue}</span>
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      </div>
      
      <button onclick="toggleExpand(this)" class="text-xs font-bold mt-3 px-4 py-2 bg-yellow-300 border-2 border-black hover:bg-yellow-400 transition-colors btn-press">
        ▼ VIEW DETAILS
      </button>
    </div>
  `).join('');

  // Re-initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Ideas Tab - Updated with retro styling
function renderIdeas() {
  const container = document.getElementById('ideasList');
  if (!container) return;

  if (generatedIdeas.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12">
        <i data-lucide="lightbulb" class="w-16 h-16 mx-auto text-gray-400 mb-4"></i>
        <p class="text-gray-500 text-lg">No niche ideas generated yet</p>
        <p class="text-gray-400 text-sm mt-2">Analyze pain points to generate ideas</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      ${generatedIdeas.map(idea => `
        <div class="card niche-card p-5 relative">
          <div class="corner-decor top-left"></div>
          <div class="corner-decor top-right"></div>
          <div class="corner-decor bottom-left"></div>
          <div class="corner-decor bottom-right"></div>
          
          <div class="mb-4">
            <h3 class="font-bold text-xl mb-2" style="color: var(--retro-orange);">${idea.title}</h3>
            <p class="text-xs font-bold text-purple-600">SOURCE: "${idea.source_pain_point}"</p>
          </div>
          
          <div class="flex flex-wrap gap-3 text-xs mb-4">
            <span class="flex items-center gap-2">
              <span class="font-bold">DIFF:</span>
              <span class="badge ${getDifficultyBadgeClass(idea.difficulty)}">${idea.difficulty}/10</span>
            </span>
            <span class="flex items-center gap-2">
              <span class="font-bold">TAM:</span>
              <span class="badge badge-positive">$${(idea.market.tam / 1000000).toFixed(1)}M</span>
            </span>
            <span class="font-bold text-gray-600">⏱ ${formatTimeAgo(idea.generated_at)}</span>
          </div>

          <div class="expandable-content">
            <div class="section">
              <h4 class="font-bold mb-3 text-sm bg-orange-500 text-white px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">
                MARKET POTENTIAL
              </h4>
              <p class="text-xs mb-2 font-bold">
                <span style="color: var(--retro-teal);">TAM:</span> $${(idea.market.tam / 1000000).toFixed(0)}M | 
                <span style="color: var(--retro-purple);">SAM:</span> $${(idea.market.sam / 1000000).toFixed(0)}M | 
                <span style="color: var(--retro-pink);">SOM:</span> $${(idea.market.som / 1000000).toFixed(0)}M
              </p>
              <p class="text-xs font-bold">
                <span style="color: var(--retro-green);">⚡</span> Runway: <span style="color: var(--retro-green);">${idea.market.runway_months} months</span>
              </p>
            </div>

            <div class="section">
              <h4 class="font-bold mb-3 text-sm bg-teal-500 text-white px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">
                MONETIZATION
              </h4>
              <ul class="text-xs space-y-2">
                ${idea.monetization.map((mon, index) => {
                  const colors = ['var(--retro-pink)', 'var(--retro-teal)', 'var(--retro-purple)'];
                  return `
                    <li class="flex items-start gap-2">
                      <span style="color: ${colors[index % colors.length]};">▸</span>
                      <span><strong>${mon.type}:</strong> $${(mon.revenue_potential / 1000000).toFixed(1)}M potential</span>
                    </li>
                  `;
                }).join('')}
              </ul>
            </div>

            <div class="section">
              <h4 class="font-bold mb-3 text-sm bg-yellow-400 text-black px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">
                TIMELINE
              </h4>
              <p class="text-xs font-bold">
                <span style="color: var(--retro-teal);">●</span> MVP: ${idea.time_to_mvp_weeks} weeks | 
                <span style="color: var(--retro-pink);">●</span> $1K MRR: ${idea.time_to_1k_mrr_months} months
              </p>
            </div>

            <div class="section flex justify-end gap-3 pt-4">
              <button class="p-2 bg-yellow-300 border-2 border-black hover:bg-yellow-400 btn-press" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.2);">
                <i data-lucide="star" class="w-5 h-5"></i>
              </button>
              <button class="p-2 bg-teal-300 border-2 border-black hover:bg-teal-400 btn-press" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.2);">
                <i data-lucide="copy" class="w-5 h-5"></i>
              </button>
              <button class="p-2 bg-purple-300 border-2 border-black hover:bg-purple-400 btn-press" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.2);">
                <i data-lucide="download" class="w-5 h-5"></i>
              </button>
            </div>
          </div>
          
          <button onclick="toggleCard(this)" class="w-full mt-4 text-xs font-bold px-4 py-2 bg-orange-400 border-3 border-black hover:bg-orange-500 transition-colors btn-press" style="box-shadow: 4px 4px 0 rgba(0,0,0,0.3);">
            ▼ EXPAND DETAILS
          </button>
        </div>
      `).join('')}
    </div>
  `;

  // Update ideas count in header
  const ideasHeaderCount = document.getElementById('ideas-header-count');
  if (ideasHeaderCount) {
    ideasHeaderCount.textContent = generatedIdeas.length;
  }

  // Re-initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

}

// Analytics Tab - Updated with retro styling
function renderAnalytics() {
  // Update summary stats
  const totalPainPoints = document.getElementById('totalPainPoints');
  const totalIdeas = document.getElementById('totalIdeas');
  const totalValidated = document.getElementById('totalValidated');
  const totalLaunched = document.getElementById('totalLaunched');
  const totalTAM = document.getElementById('totalTAM');
  
  if (totalPainPoints) totalPainPoints.textContent = analyticsSummary.total_pain_points_tracked;
  if (totalIdeas) totalIdeas.textContent = analyticsSummary.ideas_generated;
  if (totalValidated) totalValidated.textContent = analyticsSummary.ideas_validated;
  if (totalLaunched) totalLaunched.textContent = analyticsSummary.ideas_launched;
  if (totalTAM) totalTAM.textContent = `$${(analyticsSummary.total_tam / 1000000000).toFixed(1)}B`;
  
  // Render hottest topics
  const hottestList = document.getElementById('hottestList');
  if (hottestList) {
    hottestList.innerHTML = analyticsSummary.hottest_topics.map(topic => `
      <div class="flex items-center justify-between p-2 bg-black bg-opacity-5 rounded">
        <span class="text-sm font-medium">${topic.topic}</span>
        <span class="text-xs" style="color: ${topic.change.includes('↑') ? '#ff6b35' : '#00bfb3'}">${topic.change}</span>
      </div>
    `).join('');
  }
  
  // Category Chart
  const categoryCtx = document.getElementById('categoryChart');
  if (categoryCtx) {
    if (charts.category) charts.category.destroy();
    charts.category = new Chart(categoryCtx, {
      type: 'doughnut',
      data: {
        labels: analyticsSummary.category_distribution.map(c => c.name),
        datasets: [{
          data: analyticsSummary.category_distribution.map(c => c.percent),
          backgroundColor: ['#ff6b35', '#ffd23f', '#00bfb3', '#6366f1', '#ec4899'],
          borderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { family: 'IBM Plex Mono', size: 10 },
              color: '#000'
            }
          }
        }
      }
    });
  }
  
  // Platform Chart - Fixed horizontal orientation
  const platformCtx = document.getElementById('platformChart');
  if (platformCtx) {
    if (charts.platform) charts.platform.destroy();
    const platformData = analyticsSummary.platform_distribution.map(p => p.count);
    charts.platform = new Chart(platformCtx, {
      type: 'bar',
      data: {
        labels: analyticsSummary.platform_distribution.map(p => p.name),
        datasets: [{
          label: 'Mentions',
          data: platformData,
          backgroundColor: ['#ff6b35', '#ffd23f', '#00bfb3', '#6366f1', '#ec4899'],
          borderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        indexAxis: 'y', // This makes it horizontal
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            max: Math.max(...platformData) * 1.2, // Prevent infinite stretching
            ticks: {
              font: { family: 'IBM Plex Mono', size: 10 },
              color: '#000'
            },
            grid: {
              color: 'rgba(0,0,0,0.1)'
            }
          },
          y: {
            ticks: {
              font: { family: 'IBM Plex Mono', size: 10 },
              color: '#000'
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
  
  // Opportunity Matrix
  const opportunityCtx = document.getElementById('opportunityChart');
  if (opportunityCtx) {
    if (charts.opportunity) charts.opportunity.destroy();
    
    const matrixData = aggregatedPainPoints.map(point => ({
      x: point.severity,
      y: point.opportunity_score,
      r: Math.sqrt(point.mentions) * 3,
      label: point.title
    }));
    
    charts.opportunity = new Chart(opportunityCtx, {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Pain Points',
          data: matrixData,
          backgroundColor: 'rgba(255, 107, 53, 0.6)',
          borderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Severity',
              font: { family: 'IBM Plex Mono', size: 12, weight: 'bold' },
              color: '#000'
            },
            min: 0,
            max: 10,
            ticks: {
              font: { family: 'IBM Plex Mono', size: 10 },
              color: '#000'
            },
            grid: {
              color: 'rgba(0,0,0,0.1)'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Opportunity Score',
              font: { family: 'IBM Plex Mono', size: 12, weight: 'bold' },
              color: '#000'
            },
            min: 0,
            max: 10,
            ticks: {
              font: { family: 'IBM Plex Mono', size: 10 },
              color: '#000'
            },
            grid: {
              color: 'rgba(0,0,0,0.1)'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const data = context.raw;
                return `${data.label}: Severity ${data.x}, Opportunity ${data.y}, ${Math.round(data.r/3 * data.r/3)} mentions`;
              }
            }
          }
        }
      }
    });
  }
}

// Filter functions
function applyRealTimeFilters() {
  const platformFilter = document.getElementById('platformFilter')?.value || 'ALL PLATFORMS';
  const categoryFilter = document.getElementById('categoryFilterRT')?.value || 'ALL CATEGORIES';
  const sentimentFilter = document.getElementById('sentimentFilterRT')?.value || 'ALL SENTIMENTS';
  const urgencyFilter = document.getElementById('urgencyFilter')?.value || 'ALL URGENCY';
  
  filteredRealTimeData = realTimeData.filter(item => {
    const platformMatch = platformFilter === 'ALL PLATFORMS' || item.platform.includes(platformFilter);
    const categoryMatch = categoryFilter === 'ALL CATEGORIES' || item.category === categoryFilter;
    const sentimentMatch = sentimentFilter === 'ALL SENTIMENTS' || item.sentiment === sentimentFilter.toLowerCase();
    const urgencyMatch = urgencyFilter === 'ALL URGENCY' || 
      (urgencyFilter === 'HIGH (7+)' && item.urgency_score >= 7) ||
      (urgencyFilter === 'MEDIUM (4-6)' && item.urgency_score >= 4 && item.urgency_score <= 6) ||
      (urgencyFilter === 'LOW (1-3)' && item.urgency_score <= 3);
    
    return platformMatch && categoryMatch && sentimentMatch && urgencyMatch;
  });
  
  renderRealTime();
}



// Helper functions
function getDifficultyColor(difficulty) {
  if (difficulty <= 3) return 'bg-green-100 text-green-800';
  if (difficulty <= 6) return 'bg-yellow-100 text-yellow-800';
  return 'bg-red-100 text-red-800';
}

function getDifficultyBadgeClass(difficulty) {
  if (difficulty <= 3) return 'badge-positive';
  if (difficulty <= 6) return 'badge-neutral';
  return 'badge-negative';
}

function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffDays > 0) {
    return `${diffDays}d ago`;
  }
  return `${diffHours}h ago`;
}

// Toggle individual card
function toggleCard(button) {
  const card = button.closest('.niche-card');
  card.classList.toggle('is-expanded');
  button.textContent = card.classList.contains('is-expanded') ? '▲ COLLAPSE' : '▼ EXPAND DETAILS';
}

// Expand/collapse for aggregated pain points
function toggleExpand(button) {
  const card = button.closest('.card');
  card.classList.toggle('is-expanded');
  button.textContent = card.classList.contains('is-expanded') ? '▲ HIDE DETAILS' : '▼ VIEW DETAILS';
}
// Retro effects
function addRetroEffects() {
  // Add scanline effect
  const scanline = document.querySelector('.scanline');
  if (scanline) {
    setInterval(() => {
      scanline.style.opacity = Math.random() > 0.95 ? '0.1' : '0.02';
    }, 3000);
  }
  
  // Add glitch effect to headers
  const headers = document.querySelectorAll('h1, h2, h3');
  headers.forEach(header => {
    header.addEventListener('mouseenter', () => {
      header.style.textShadow = `2px 2px 0 rgba(255, 107, 53, 0.3), ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(0, 191, 179, 0.3)`;
      setTimeout(() => {
        header.style.textShadow = '2px 2px 0 rgba(0,0,0,0.3)';
      }, 200);
    });
  });
  
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}