import React, { useState } from 'react';
import { NicheIdea } from '../../lib/types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Star, Copy, Download, ChevronDown, ChevronUp } from 'lucide-react';

interface IdeaCardProps {
  idea: NicheIdea;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyBadgeClass = (difficulty: number) => {
    if (difficulty <= 3) return 'badge-positive';
    if (difficulty <= 7) return 'badge-neutral';
    return 'badge-negative';
  };

  const getMonetizationColor = (index: number) => {
    const colors = [
      'text-retro-pink',
      'text-retro-teal', 
      'text-retro-purple'
    ];
    return colors[index % colors.length];
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="niche-card p-5">
      <div className="mb-4">
        <h3 className="font-bold text-xl mb-2 text-retro-orange">{idea.title}</h3>
        <p className="text-xs font-bold text-purple-600">SOURCE: "{idea.source_pain_point}"</p>
      </div>
      
      <div className="flex flex-wrap gap-3 text-xs mb-4">
        <span className="flex items-center gap-2">
          <span className="font-bold">DIFF:</span>
          <Badge variant={getDifficultyBadgeClass(idea.difficulty) as any}>
            {idea.difficulty}/10
          </Badge>
        </span>
        <span className="flex items-center gap-2">
          <span className="font-bold">TAM:</span>
          <Badge variant="positive">
            ${(idea.market.tam / 1000000).toFixed(1)}M
          </Badge>
        </span>
        <span className="font-bold text-gray-600">
          ⏱ {formatTimeAgo(idea.generated_at)}
        </span>
      </div>

      {isExpanded && (
        <div className="expandable-content">
          {/* Market Potential Section */}
          <div className="section mb-6">
            <h4 className="font-bold mb-3 text-sm bg-orange-500 text-white px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
              MARKET POTENTIAL
            </h4>
            <p className="text-xs mb-2 font-bold text-text-secondary">
              <span className="text-retro-teal">TAM:</span> ${(idea.market.tam / 1000000).toFixed(0)}M | 
              <span className="text-retro-purple"> SAM:</span> ${(idea.market.sam / 1000000).toFixed(0)}M | 
              <span className="text-retro-pink"> SOM:</span> ${(idea.market.som / 1000000).toFixed(0)}M
            </p>
            <p className="text-xs font-bold text-text-secondary">
              <span className="text-retro-green">⚡</span> Runway: <span className="text-retro-green">{idea.market.runway_months} months</span>
            </p>
          </div>

          {/* Monetization Section */}
          <div className="section mb-6">
            <h4 className="font-bold mb-3 text-sm bg-teal-500 text-white px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
              MONETIZATION
            </h4>
            <ul className="text-xs space-y-2 text-text-secondary">
              {idea.monetization.map((mon: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className={getMonetizationColor(index)}>▸</span>
                  <span>
                    <strong>{mon.type}:</strong> ${(mon.revenue_potential / 1000000).toFixed(1)}M potential
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline Section */}
          <div className="section mb-6">
            <h4 className="font-bold mb-3 text-sm bg-yellow-400 text-black px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
              TIMELINE
            </h4>
            <p className="text-xs font-bold text-text-secondary">
              <span className="text-retro-teal">●</span> MVP: {idea.time_to_mvp_weeks} weeks | 
              <span className="text-retro-pink">●</span> $1K MRR: {idea.time_to_1k_mrr_months} months
            </p>
          </div>

          {/* Action Buttons */}
          <div className="section flex justify-end gap-3 pt-4">
            <Button 
              variant="secondary" 
              size="sm" 
              className="p-2 bg-yellow-300 border-2 border-black hover:bg-yellow-400 shadow-[3px_3px_0_rgba(0,0,0,0.2)]"
            >
              <Star className="w-5 h-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              className="p-2 bg-teal-300 border-2 border-black hover:bg-teal-400 shadow-[3px_3px_0_rgba(0,0,0,0.2)]"
            >
              <Copy className="w-5 h-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              className="p-2 bg-purple-300 border-2 border-black hover:bg-purple-400 shadow-[3px_3px_0_rgba(0,0,0,0.2)]"
            >
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
      
      <Button 
        className="w-full mt-4 text-xs font-bold px-4 py-2 bg-orange-400 border-3 border-black hover:bg-orange-500 shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
        onClick={toggleExpand}
      >
        {isExpanded ? (
          <>
            <ChevronUp className="w-4 h-4 mr-2" />
            HIDE DETAILS
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4 mr-2" />
            EXPAND DETAILS
          </>
        )}
      </Button>
    </Card>
  );
};