import React from 'react';
import { PainPoint } from '../../lib/types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { Button } from '../ui/Button';

interface PainPointCardProps {
  painPoint: PainPoint;
  onSave?: () => void;
  onGenerate?: () => void;
}

export const PainPointCard: React.FC<PainPointCardProps> = ({ 
  painPoint, 
  onSave, 
  onGenerate 
}) => {
  const getSentimentVariant = (sentiment: string) => {
    switch (sentiment) {
      case 'negative': return 'negative' as const;
      case 'positive': return 'positive' as const;
      default: return 'neutral' as const;
    }
  };

  const getUrgencyColor = (urgency: number) => {
    if (urgency >= 8) return 'orange' as const;
    if (urgency >= 5) return 'pink' as const;
    return 'teal' as const;
  };

  return (
    <Card className="p-5">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-sm text-text-primary">{painPoint.title}</h3>
        <Badge variant={getSentimentVariant(painPoint.sentiment)}>
          {painPoint.platform.toUpperCase()}
        </Badge>
      </div>
      
      <div className="flex gap-2 mb-4 flex-wrap">
        <Badge variant={getSentimentVariant(painPoint.sentiment)}>
          {painPoint.sentiment.toUpperCase()}
        </Badge>
        <Badge 
          variant="neutral" 
          className="bg-retro-blue text-white border-retro-dark"
        >
          {painPoint.category.toUpperCase()}
        </Badge>
      </div>
      
      <div className="mb-4">
        <div className="text-xs font-bold mb-2">
          URGENCY: <span className="text-pink-600">{painPoint.urgency_score}/10</span>
        </div>
        <ProgressBar 
          value={painPoint.urgency_score * 10} 
          max={100}
          color={getUrgencyColor(painPoint.urgency_score)}
        />
      </div>
      
      <blockquote className="text-xs italic mb-4 leading-relaxed p-3 bg-orange-50 border-l-4 border-orange-500 text-text-secondary">
        "{painPoint.quote}"
      </blockquote>
      
      <div className="flex justify-between text-xs font-bold mb-4">
        <span>👍 <span className="text-green-600">{painPoint.votes}</span></span>
        <span>💬 <span className="text-blue-600">{painPoint.comments}</span></span>
      </div>
      
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" onClick={onSave}>
          SAVE
        </Button>
        <Button size="sm" onClick={onGenerate}>
          GEN
        </Button>
      </div>
    </Card>
  );
};