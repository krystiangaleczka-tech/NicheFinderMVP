import React, { useState, useMemo, useCallback } from 'react';
import { PainPoint } from '../../lib/types';
import { mockPainPoints } from '../../lib/data';
import { Select } from '../ui/Select';
import { PainPointCard } from './PainPointCard';

interface RealtimeTabProps {
  className?: string;
}

export const RealtimeTab: React.FC<RealtimeTabProps> = ({ className = '' }) => {
  const [platformFilter, setPlatformFilter] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [sentimentFilter, setSentimentFilter] = useState<string>('');
  const [urgencyFilter, setUrgencyFilter] = useState<string>('0');

  const filteredData = useMemo(() => {
    return mockPainPoints.filter(item => {
      if (platformFilter && item.platform !== platformFilter) return false;
      if (categoryFilter && item.category !== categoryFilter) return false;
      if (sentimentFilter && item.sentiment !== sentimentFilter) return false;
      if (urgencyFilter !== '0') {
        const minUrgency = parseInt(urgencyFilter);
        if (minUrgency === 7 && item.urgency_score < 7) return false;
        if (minUrgency === 4 && (item.urgency_score < 4 || item.urgency_score > 6)) return false;
        if (minUrgency === 1 && item.urgency_score > 3) return false;
      }
      return true;
    });
  }, [platformFilter, categoryFilter, sentimentFilter, urgencyFilter]);

  const platforms = Array.from(new Set(mockPainPoints.map((p: any) => p.platform)));
  const categories = Array.from(new Set(mockPainPoints.map((p: any) => p.category)));
  const sentiments = Array.from(new Set(mockPainPoints.map((p: any) => p.sentiment)));

  const handleSave = useCallback((painPoint: any) => {
    console.log('Saving pain point:', painPoint);
  }, []);

  const handleGenerate = useCallback((painPoint: any) => {
    console.log('Generating idea from pain point:', painPoint);
  }, []);

  return (
    <div className={className}>
      {/* Filters Bar */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Select
          value={platformFilter}
          onChange={(e) => setPlatformFilter(e.target.value)}
        >
          <option value="">ALL PLATFORMS</option>
          {platforms.map((platform: any) => (
            <option key={platform} value={platform}>
              {platform.toUpperCase()}
            </option>
          ))}
        </Select>
        
        <Select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">ALL CATEGORIES</option>
          {categories.map((category: any) => (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </Select>
        
        <Select
          value={sentimentFilter}
          onChange={(e) => setSentimentFilter(e.target.value)}
        >
          <option value="">ALL SENTIMENTS</option>
          {sentiments.map((sentiment: any) => (
            <option key={sentiment} value={sentiment}>
              {sentiment.toUpperCase()}
            </option>
          ))}
        </Select>
        
        <Select
          value={urgencyFilter}
          onChange={(e) => setUrgencyFilter(e.target.value)}
        >
          <option value="0">ALL URGENCY</option>
          <option value="7">HIGH (7+)</option>
          <option value="4">MEDIUM (4-6)</option>
          <option value="1">LOW (1-3)</option>
        </Select>
      </div>

      {/* Header */}
      <div className="retro-header mb-6">
        <h1 className="text-xl font-bold pixel-text py-2 text-text-primary">
          REAL-TIME DATA ({filteredData.length})
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((painPoint: any) => (
          <PainPointCard
            key={painPoint.id}
            painPoint={painPoint}
            onSave={() => handleSave(painPoint)}
            onGenerate={() => handleGenerate(painPoint)}
          />
        ))}
      </div>
    </div>
  );
};