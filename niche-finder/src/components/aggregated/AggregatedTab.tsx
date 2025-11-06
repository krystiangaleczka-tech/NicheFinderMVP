import React from 'react';
import { mockAggregatedPainPoints } from '../../lib/data';
import { AggregatedCard } from './AggregatedCard';
import { Card } from '../ui/Card';
import { Inbox } from 'lucide-react';

interface AggregatedTabProps {
  className?: string;
}

export const AggregatedTab: React.FC<AggregatedTabProps> = ({ className = '' }) => {
  if (mockAggregatedPainPoints.length === 0) {
    return (
      <div className={className}>
        <div className="retro-header mb-6">
          <h1 className="text-xl font-bold pixel-text py-2 text-text-primary">
            AGGREGATED PAIN POINTS (0)
          </h1>
        </div>
        
        <Card className="text-center py-12">
          <Inbox className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg font-bold">No aggregated data available</p>
          <p className="text-gray-400 text-sm mt-2">Start collecting real-time data first</p>
        </Card>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="retro-header mb-6">
        <h1 className="text-xl font-bold pixel-text py-2 text-text-primary">
          AGGREGATED PAIN POINTS ({mockAggregatedPainPoints.length})
        </h1>
      </div>
      
      <div className="space-y-4">
        {mockAggregatedPainPoints.map((aggregatedPoint: any) => (
          <AggregatedCard
            key={aggregatedPoint.id}
            aggregatedPoint={aggregatedPoint}
          />
        ))}
      </div>
    </div>
  );
};