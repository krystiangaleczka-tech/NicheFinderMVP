"use client";

import React, { useState } from "react";
import { NicheIdea } from "../../lib/types";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Star, Copy, Download, ChevronDown, ChevronUp } from "lucide-react";

interface IdeaCardProps {
  idea: NicheIdea;
  globalExpanded?: boolean | null;
  isLocalControl?: boolean;
  onLocalControl?: (cardId: string) => void;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({ 
  idea, 
  globalExpanded = null,
  isLocalControl = false,
  onLocalControl 
}: any) => {
  const [localExpanded, setLocalExpanded] = useState(false);
  
  // Use global state if not in local control mode, otherwise use local state
  const isExpanded = isLocalControl ? localExpanded : (globalExpanded !== null ? globalExpanded : localExpanded);

  const getDifficultyBadgeClass = (difficulty: number) => {
    if (difficulty <= 3) return "badge-positive";
    if (difficulty <= 7) return "badge-neutral";
    return "badge-negative";
  };

  const getMonetizationColor = (index: number) => {
    const colors = ["var(--retro-pink)", "var(--retro-teal)", "var(--retro-purple)"];
    return colors[index % colors.length];
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60),
    );

    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const toggleExpand = () => {
    if (!isLocalControl && globalExpanded !== null && onLocalControl) {
      // If global control is active, switch to local control for this card
      onLocalControl(idea.id);
      // Set local state to opposite of current global state
      setLocalExpanded(!globalExpanded);
    } else {
      // Use local state (either already in local control or no global control)
      setLocalExpanded(!localExpanded);
    }
  };

  return (
    <Card
      showCorners={true}
      className={`niche-card p-5 relative ${isExpanded ? 'is-expanded' : ''} overflow-hidden self-start`}
    >
      {/* Header - zawsze widoczny */}
      <div className="mb-4">
        <h3 className="font-bold text-xl mb-2" style={{color: 'var(--retro-orange)'}}>
          {idea.title}
        </h3>
        <p className="text-xs font-bold text-purple-600">
          SOURCE: "{idea.source_pain_point}"
        </p>
      </div>

      {/* Meta Info - zawsze widoczny */}
      <div className="flex flex-wrap gap-3 text-xs mb-4">
        <span className="flex items-center gap-2">
          <span className="font-bold">DIFF:</span>
          <span className={`badge ${getDifficultyBadgeClass(idea.difficulty)}`}>
            {idea.difficulty}/10
          </span>
        </span>
        <span className="flex items-center gap-2">
          <span className="font-bold">TAM:</span>
          <span className="badge badge-positive">
            ${(idea.market.tam / 1000000).toFixed(1)}M
          </span>
        </span>
        <span className="font-bold text-gray-600">
          ⏱ {formatTimeAgo(idea.generated_at)}
        </span>
      </div>

      {/* Expandable Content z animacją */}
      <div className="expandable-content">
        {/* Market Potential Section */}
        <div className="section">
          <h4 className="font-bold mb-3 text-sm bg-orange-500 text-white px-3 py-1 inline-block border-2 border-black" style={{boxShadow: '3px 3px 0 rgba(0,0,0,0.3)'}}>
            MARKET POTENTIAL
          </h4>
          <p className="text-xs mb-2 font-bold">
            <span style={{color: 'var(--retro-teal)'}}>TAM:</span> ${(idea.market.tam / 1000000).toFixed(0)}M | 
            <span style={{color: 'var(--retro-purple)', marginLeft: '4px'}}>SAM:</span> ${(idea.market.sam / 1000000).toFixed(0)}M | 
            <span style={{color: 'var(--retro-pink)', marginLeft: '4px'}}>SOM:</span> ${(idea.market.som / 1000000).toFixed(0)}M
          </p>
          <p className="text-xs font-bold">
            <span style={{color: 'var(--retro-green)'}}>⚡</span> Runway: <span style={{color: 'var(--retro-green)'}}>{idea.market.runway_months} months</span>
          </p>
        </div>

        {/* Monetization Section */}
        <div className="section">
          <h4 className="font-bold mb-3 text-sm bg-teal-500 text-white px-3 py-1 inline-block border-2 border-black" style={{boxShadow: '3px 3px 0 rgba(0,0,0,0.3)'}}>
            MONETIZATION
          </h4>
          <ul className="text-xs space-y-2">
            {idea.monetization && idea.monetization.length > 0 ? (
              idea.monetization.map((mon: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span style={{color: getMonetizationColor(index).replace('text-', 'var(--').replace('retro-', 'retro-') + ')'}}>▸</span>
                  <span>
                    <strong>{mon.type}:</strong> ${(mon.revenue_potential / 1000000).toFixed(1)}M potential
                  </span>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No monetization data available</li>
            )}
          </ul>
        </div>

        {/* Timeline Section */}
        <div className="section">
          <h4 className="font-bold mb-3 text-sm bg-yellow-400 text-black px-3 py-1 inline-block border-2 border-black" style={{boxShadow: '3px 3px 0 rgba(0,0,0,0.3)'}}>
            TIMELINE
          </h4>
          <p className="text-xs font-bold">
            <span style={{color: 'var(--retro-teal)'}}>●</span> MVP: {idea.time_to_mvp_weeks} weeks | 
            <span style={{color: 'var(--retro-pink)', marginLeft: '4px'}}>●</span> $1K MRR: {idea.time_to_1k_mrr_months} months
          </p>
        </div>

        {/* Action Buttons */}
        <div className="section flex justify-end gap-3 pt-4">
          <button className="p-2 bg-yellow-300 border-2 border-black hover:bg-yellow-400 btn-press" style={{boxShadow: '3px 3px 0 rgba(0,0,0,0.2)'}} title="Save">
            <Star className="w-5 h-5" />
          </button>
          <button className="p-2 bg-teal-300 border-2 border-black hover:bg-teal-400 btn-press" style={{boxShadow: '3px 3px 0 rgba(0,0,0,0.2)'}} title="Copy">
            <Copy className="w-5 h-5" />
          </button>
          <button className="p-2 bg-purple-300 border-2 border-black hover:bg-purple-400 btn-press" style={{boxShadow: '3px 3px 0 rgba(0,0,0,0.2)'}} title="Download">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Expand/Collapse Button */}
      <Button
        className="w-full mt-4 text-xs font-bold px-4 py-2 bg-orange-400 border-3 border-black hover:bg-orange-500 shadow-[4px_4px_0_rgba(0,0,0,0.3)] transition-all"
        onClick={toggleExpand}
      >
        {isExpanded ? (
          <>
            <ChevronUp className="w-4 h-4 inline mr-2" />
            HIDE DETAILS
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4 inline mr-2" />
            EXPAND DETAILS
          </>
        )}
      </Button>
    </Card>
  );
};
