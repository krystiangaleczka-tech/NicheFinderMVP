"use client";

import React, { useState } from "react";
import { NicheIdea } from "../../lib/types";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
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
    const colors = ["text-retro-pink", "text-retro-teal", "text-retro-purple"];
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
      className="niche-card p-5 relative overflow-hidden self-start"
    >
      {/* Header - zawsze widoczny */}
      <div className="mb-4">
        <h3 className="font-bold text-xl mb-2 text-retro-orange">
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

      {/* Expandable Content z animacją */}
      <div
        style={{
          maxHeight: isExpanded ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease-in-out, padding 0.35s ease-in-out",
          paddingTop: isExpanded ? "16px" : "0px",
          paddingBottom: isExpanded ? "24px" : "0px",
        }}
      >
        {/* Market Potential Section */}
        <div className="mb-6">
          <h4 className="font-bold mb-3 text-sm bg-orange-500 text-white px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
            MARKET POTENTIAL
          </h4>
          <p className="text-xs mb-2 font-bold text-gray-700">
            <span className="text-retro-teal">TAM:</span> $
            {(idea.market.tam / 1000000).toFixed(0)}M |
            <span className="text-retro-purple ml-2">SAM:</span> $
            {(idea.market.sam / 1000000).toFixed(0)}M |
            <span className="text-retro-pink ml-2">SOM:</span> $
            {(idea.market.som / 1000000).toFixed(0)}M
          </p>
          <p className="text-xs font-bold text-gray-700">
            <span className="text-retro-green">⚡</span> Runway:{" "}
            <span className="text-retro-green font-bold">
              {idea.market.runway_months} months
            </span>
          </p>
        </div>

        {/* Monetization Section */}
        <div className="mb-6">
          <h4 className="font-bold mb-3 text-sm bg-teal-500 text-white px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
            MONETIZATION
          </h4>
          <ul className="text-xs space-y-2 text-gray-700">
            {idea.monetization && idea.monetization.length > 0 ? (
              idea.monetization.map((mon: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className={getMonetizationColor(index)}>▸</span>
                  <span>
                    <strong>{mon.type}:</strong> $
                    {(mon.revenue_potential / 1000000).toFixed(1)}M potential
                  </span>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No monetization data available</li>
            )}
          </ul>
        </div>

        {/* Timeline Section */}
        <div className="mb-6">
          <h4 className="font-bold mb-3 text-sm bg-yellow-400 text-black px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
            TIMELINE
          </h4>
          <p className="text-xs font-bold text-gray-700">
            <span className="text-retro-teal">●</span> MVP:{" "}
            {idea.time_to_mvp_weeks} weeks |
            <span className="text-retro-pink ml-2">●</span> $1K MRR:{" "}
            {idea.time_to_1k_mrr_months} months
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-300">
          <Button
            variant="secondary"
            className="p-2 bg-yellow-300 border-2 border-black hover:bg-yellow-400 shadow-[3px_3px_0_rgba(0,0,0,0.2)]"
            title="Save"
          >
            <Star className="w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            className="p-2 bg-teal-300 border-2 border-black hover:bg-teal-400 shadow-[3px_3px_0_rgba(0,0,0,0.2)]"
            title="Copy"
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            className="p-2 bg-purple-300 border-2 border-black hover:bg-purple-400 shadow-[3px_3px_0_rgba(0,0,0,0.2)]"
            title="Download"
          >
            <Download className="w-4 h-4" />
          </Button>
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
