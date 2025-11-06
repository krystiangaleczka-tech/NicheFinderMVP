import React, { useState, useCallback } from 'react';
import { mockNicheIdeas } from '../../lib/data';
import { IdeaCard } from './IdeaCard';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Lightbulb, Maximize2, Minimize2 } from 'lucide-react';

interface IdeasTabProps {
  className?: string;
}

export const IdeasTab: React.FC<IdeasTabProps> = ({ className = '' }) => {
  const [allExpanded, setAllExpanded] = useState(false);

  const handleExpandAll = useCallback(() => {
    setAllExpanded(true);
    // This would need to be implemented with state management to control all cards
    console.log('Expand all cards');
  }, []);

  const handleCollapseAll = useCallback(() => {
    setAllExpanded(false);
    // This would need to be implemented with state management to control all cards
    console.log('Collapse all cards');
  }, []);

  if (mockNicheIdeas.length === 0) {
    return (
      <div className={className}>
        <div className="retro-header mb-6">
          <h1 className="text-xl font-bold pixel-text py-2 text-text-primary">
            NICHE IDEAS (0)
          </h1>
        </div>
        
        <Card className="text-center py-12">
          <Lightbulb className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg font-bold">No niche ideas generated yet</p>
          <p className="text-gray-400 text-sm mt-2">Analyze pain points to generate ideas</p>
        </Card>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6">
        <div className="retro-header flex-1 mr-2 sm:mr-4">
          <h1 className="text-lg md:text-xl font-bold pixel-text py-2 text-text-primary">
            NICHE IDEAS ({mockNicheIdeas.length})
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={handleExpandAll}
            className="flex items-center gap-1 sm:gap-2 text-xs px-2 sm:px-3"
          >
            <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">EXPAND</span>
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={handleCollapseAll}
            className="flex items-center gap-1 sm:gap-2 text-xs px-2 sm:px-3"
          >
            <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">COLLAPSE</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {mockNicheIdeas.map((idea: any) => (
          <IdeaCard
            key={idea.id}
            idea={idea}
          />
        ))}
      </div>
    </div>
  );
};