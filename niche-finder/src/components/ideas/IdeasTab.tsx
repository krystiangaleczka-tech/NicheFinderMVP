import React from 'react';
import { mockNicheIdeas } from '../../lib/data';
import { IdeaCard } from './IdeaCard';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Lightbulb, Maximize2, Minimize2 } from 'lucide-react';

interface IdeasTabProps {
  className?: string;
}

export const IdeasTab: React.FC<IdeasTabProps> = ({ className = '' }) => {
  // Pomiń state 'allExpanded' na razie - każda karta ma swój
  // Jeśli będzie trzeba expand-all, dodasz context lub hooka later
  if (mockNicheIdeas.length === 0) {
    return (
      <div className={className}>
        <div className="retro-header mb-6">
          <h1 className="text-xl font-bold pixel-text py-2 text-white">
            NICHE IDEAS (0)
          </h1>
        </div>
        <Card className="text-center py-12">
          <Lightbulb className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-300 text-lg font-bold">NO NICHE IDEAS GENERATED YET</p>
        </Card>
      </div>
    );
  }
  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="retro-header flex-1">
          <h1 className="text-lg md:text-xl font-bold pixel-text py-2 text-white">
            NICHE IDEAS ({mockNicheIdeas.length})
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
          <Button variant="secondary" size="sm" className="flex items-center gap-2 text-xs">
            <Maximize2 className="w-4 h-4" />
            <span className="hidden sm:inline">EXPAND</span>
          </Button>
          <Button variant="secondary" size="sm" className="flex items-center gap-2 text-xs">
            <Minimize2 className="w-4 h-4" />
            <span className="hidden sm:inline">COLLAPSE</span>
          </Button>
        </div>
      </div>

      {/* Grid z items-start - key fix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
        {mockNicheIdeas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  );
};