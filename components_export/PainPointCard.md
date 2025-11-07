# PainPointCard

```typescript
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
    <div className="card p-5 relative">
      <div className="corner-decor top-left"></div>
      <div className="corner-decor top-right"></div>
      <div className="corner-decor bottom-left"></div>
      <div className="corner-decor bottom-right"></div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-sm">{painPoint.title}</h3>
        <Badge variant={getSentimentVariant(painPoint.sentiment)}>
          {painPoint.platform.toUpperCase()}
        </Badge>
      </div>
      
      <div className="flex gap-2 mb-4 flex-wrap">
        <Badge variant={getSentimentVariant(painPoint.sentiment)}>
          {painPoint.sentiment.toUpperCase()}
        </Badge>
        <Badge variant="neutral">
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
        />
      </div>
      
      <blockquote className="text-xs italic mb-4 leading-relaxed p-3 bg-orange-50 border-l-4 border-orange-500">
        "{painPoint.quote}"
      </blockquote>
      
      <div className="flex justify-between text-xs font-bold mb-4">
        <span>👍 <span className="text-green-600">{painPoint.votes}</span></span>
        <span>💬 <span className="text-blue-600">{painPoint.comments}</span></span>
      </div>
      
      <div className="flex gap-2">
        <button className="btn-secondary text-xs btn-press" onClick={onSave}>
          SAVE
        </button>
        <button className="btn-primary text-xs btn-press" onClick={onGenerate}>
          GEN
        </button>
      </div>
    </div>
  );
};
```

---
*File: /Users/krystiangaleczka/Documents/NicheFinderMVP/niche-finder/src/components/realtime/PainPointCard.tsx*
*Exported: PainPointCard.md*
