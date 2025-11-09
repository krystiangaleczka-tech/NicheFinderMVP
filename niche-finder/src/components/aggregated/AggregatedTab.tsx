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
          <h1 className="text-xl font-bold pixel-text py-2 text-white">
            AGGREGATED PAIN POINTS (0)
          </h1>
        </div>
        
        <Card className="text-center py-12">
          <Inbox className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-bold">NO AGGREGATED DATA AVAILABLE</p>
          <p className="text-sm mt-2">START COLLECTING REAL-TIME DATA FIRST</p>
        </Card>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="retro-header mb-4 md:mb-6">
        <h1 className="text-lg md:text-xl font-bold pixel-text py-2 text-white">
          AGGREGATED PAIN POINTS ({mockAggregatedPainPoints.length})
        </h1>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        {mockAggregatedPainPoints.map((aggregatedPoint) => (
          <AggregatedCard
            key={aggregatedPoint.id}
            aggregatedPoint={aggregatedPoint}
          />
        ))}
      </div>
    </div>
  );
};