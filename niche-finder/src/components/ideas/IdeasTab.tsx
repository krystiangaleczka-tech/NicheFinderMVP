import React, { useState } from 'react';
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

  const handleExpandAll = () => {
    setAllExpanded(true);
    // This would need to be implemented with state management to control all cards
    console.log('Expand all cards');
  };

  const handleCollapseAll = () => {
    setAllExpanded(false);
    // This would need to be implemented with state management to control all cards
    console.log('Collapse all cards');
  };

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="retro-header flex-1 mr-4">
          <h1 className="text-xl font-bold pixel-text py-2 text-text-primary">
            NICHE IDEAS ({mockNicheIdeas.length})
          </h1>
        </div>
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={handleExpandAll}
            className="flex items-center gap-2"
          >
            <Maximize2 className="w-4 h-4" />
            EXPAND
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={handleCollapseAll}
            className="flex items-center gap-2"
          >
            <Minimize2 className="w-4 h-4" />
            COLLAPSE
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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