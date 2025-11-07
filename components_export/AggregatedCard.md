# AggregatedCard

```typescript
import React, { useState } from 'react';
import { AggregatedPainPoint } from '../../lib/types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { Button } from '../ui/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AggregatedCardProps {
  aggregatedPoint: AggregatedPainPoint;
}

export const AggregatedCard: React.FC<AggregatedCardProps> = ({ aggregatedPoint }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPlatformColor = (platformName: string) => {
    const colors: Record<string, string> = {
      'Reddit': 'text-retro-pink',
      'YouTube': 'text-retro-teal', 
      'GitHub': 'text-retro-purple',
      'Twitter': 'text-retro-yellow'
    };
    return colors[platformName] || 'text-retro-blue';
  };

  const getIssueColor = (index: number) => {
    const colors = [
      'text-retro-pink',
      'text-retro-teal', 
      'text-retro-purple',
      'text-retro-yellow',
      'text-retro-green'
    ];
    return colors[index % colors.length];
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card showCorners={true} className="p-5 mb-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-text-primary">{aggregatedPoint.title}</h3>
        <Badge variant="positive">
          {aggregatedPoint.mentions} ↑↑ {aggregatedPoint.trend_percent}%
        </Badge>
      </div>
      
      <p className="text-xs font-bold mb-4 text-text-secondary">
        {aggregatedPoint.platforms.map((platform: any, index: number) => (
          <span key={platform.name} className={getPlatformColor(platform.name)}>
            █ {platform.name} {platform.count}
            {index < aggregatedPoint.platforms.length - 1 && ' '}
          </span>
        ))}
      </p>

      <div className="mb-4">
        <ProgressBar 
          value={aggregatedPoint.severity * 10} 
          max={100}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-4 gap-3 mb-4">
        <Card showCorners={true} className="stats-card py-3 bg-gradient-to-br from-retro-pink to-retro-purple">
          <div className="text-2xl font-bold value">{aggregatedPoint.severity}/10</div>
          <div className="text-xs mt-1 font-bold">Sever</div>
        </Card>
        <Card showCorners={true} className="stats-card py-3 bg-gradient-to-br from-retro-blue to-retro-teal">
          <div className="text-2xl font-bold value">{aggregatedPoint.frequency}/10</div>
          <div className="text-xs mt-1 font-bold">Freq</div>
        </Card>
        <Card showCorners={true} className="stats-card py-3 bg-gradient-to-br from-retro-green to-retro-teal">
          <div className="text-2xl font-bold value">+{aggregatedPoint.growth_rate}%</div>
          <div className="text-xs mt-1 font-bold">Growth</div>
        </Card>
        <Card showCorners={true} className="stats-card py-3 bg-gradient-to-br from-retro-yellow to-retro-orange">
          <div className="text-2xl font-bold value">{aggregatedPoint.opportunity_score}/10</div>
          <div className="text-xs mt-1 font-bold">Opport</div>
        </Card>
      </div>

      {isExpanded && (
        <div className="expandable-content mb-4">
          <div className="section">
            <h4 className="font-bold mb-3 text-sm text-orange-600">SPECIFIC ISSUES:</h4>
            <ul className="text-xs space-y-2 text-text-secondary">
              {aggregatedPoint.specific_issues.map((issue: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className={getIssueColor(index)}>■</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      <Button 
        variant="secondary" 
        size="sm" 
        onClick={toggleExpand}
        className="text-xs font-bold"
      >
        {isExpanded ? (
          <>
            <ChevronUp className="w-3 h-3 mr-1" />
            HIDE DETAILS
          </>
        ) : (
          <>
            <ChevronDown className="w-3 h-3 mr-1" />
            VIEW DETAILS
          </>
        )}
      </Button>
    </Card>
  );
};
```

---
*File: /Users/krystiangaleczka/Documents/NicheFinderMVP/niche-finder/src/components/aggregated/AggregatedCard.tsx*
*Exported: AggregatedCard.md*
