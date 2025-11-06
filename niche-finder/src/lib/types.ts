export interface SentimentDistribution {
  negative: number;
  neutral: number;
  positive: number;
}

export interface Platform {
  name: string;
  count: number;
}

export interface PainPoint {
  id: number;
  title: string;
  platform: string;
  category: string;
  sentiment: 'negative' | 'neutral' | 'positive';
  sentiment_distribution: SentimentDistribution;
  urgency_score: number;
  trend: 'rising' | 'stable' | 'falling';
  votes: number;
  comments: number;
  quote: string;
}

export interface AggregatedPainPoint {
  id: number;
  title: string;
  mentions: number;
  trend_percent: number;
  platforms: Platform[];
  sentiment_distribution: SentimentDistribution;
  severity: number;
  frequency: number;
  growth_rate: number;
  validation_difficulty: 'Easy' | 'Medium' | 'Hard';
  opportunity_score: number;
  specific_issues: string[];
  quotes: string[];
  affected_companies: string[];
}

export interface MarketData {
  tam: number;
  sam: number;
  som: number;
  runway_months: number;
}

export interface MonetizationModel {
  type: string;
  revenue_potential: number;
  description: string;
}

export interface ValidationTask {
  week: number;
  task: string;
}

export interface Risk {
  issue: string;
  mitigation: string;
}

export interface RoadmapWeek {
  week: number;
  tasks: string[];
}

export interface NicheIdea {
  id: number;
  title: string;
  source_pain_point: string;
  generated_at: string;
  ai_model: string;
  market: MarketData;
  monetization: MonetizationModel[];
  difficulty: number;
  difficulty_label: 'Easy' | 'Medium' | 'Hard';
  time_to_mvp_weeks: number;
  time_to_1k_mrr_months: number;
  competition_level: 'Low' | 'Medium' | 'High' | 'Very High';
  competitors: string[];
  advantages: string[];
  market_gap: string;
  window_of_opportunity: string;
  validation_plan: ValidationTask[];
  risks: Risk[];
  assumptions: string[];
  evidence: string;
  roadmap_30days: RoadmapWeek[];
}

export interface HottestTopic {
  topic: string;
  change: string;
  mentions: number;
}

export interface CategoryDistribution {
  name: string;
  percent: number;
}

export interface PlatformDistribution {
  name: string;
  count: number;
}

export interface AnalyticsSummary {
  total_pain_points_tracked: number;
  ideas_generated: number;
  ideas_validated: number;
  ideas_launched: number;
  total_tam: number;
  hottest_topics: HottestTopic[];
  category_distribution: CategoryDistribution[];
  platform_distribution: PlatformDistribution[];
}

export type TabType = 'realtime' | 'aggregated' | 'ideas' | 'analytics';

export interface Filters {
  platform?: string;
  category?: string;
  sentiment?: string;
  urgency?: string;
}