import React, { useState, useEffect } from 'react';
import { AggregatedPainPoint } from '../../lib/types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';

interface AggregatedCardProps {
  aggregatedPoint: AggregatedPainPoint;
}

export const AggregatedCard: React.FC<AggregatedCardProps> = ({ aggregatedPoint }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.log('AggregatedCard mounted with ', aggregatedPoint);
    console.log('specific_issues:', aggregatedPoint?.specific_issues);
  }, [aggregatedPoint]);

  useEffect(() => {
    console.log('isExpanded changed to:', isExpanded);
  }, [isExpanded]);

  const getPlatformIconStyle = (platformName: string): React.CSSProperties => {
    const colorMap: Record<string, string> = {
      'Reddit': 'var(--retro-pink)',
      'YouTube': 'var(--retro-teal)',
      'Twitter': 'var(--retro-yellow)',
      'GitHub': 'var(--retro-purple)'
    };
    return { color: colorMap[platformName] || 'var(--retro-blue)' };
  };

  const getIssueIconStyle = (index: number): React.CSSProperties => {
    const colors = [
      'var(--retro-pink)',
      'var(--retro-teal)',
      'var(--retro-purple)',
      'var(--retro-yellow)',
      'var(--retro-green)'
    ];
    return { color: colors[index % colors.length] };
  };

  const getStatCardStyle = (type: 'sever' | 'freq' | 'growth' | 'opport'): React.CSSProperties => {
    const styles: Record<string, React.CSSProperties> = {
      'sever': {
        background: 'linear-gradient(135deg, var(--retro-pink) 0%, var(--retro-purple) 100%)'
      },
      'freq': {
        background: 'linear-gradient(135deg, var(--retro-blue) 0%, var(--retro-teal) 100%)'
      },
      'growth': {
        background: 'linear-gradient(135deg, var(--retro-green) 0%, var(--retro-teal) 100%)'
      },
      'opport': {
        background: 'linear-gradient(135deg, var(--retro-yellow) 0%, var(--retro-orange) 100%)'
      }
    };
    return styles[type];
  };

  const getButtonStyles = (): React.CSSProperties => ({
    background: 'var(--retro-yellow)',
    color: 'var(--retro-dark)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'var(--retro-dark)',
    boxShadow: '4px 4px 0 var(--retro-dark)',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  });

  const toggleExpand = () => {
    console.log('Toggle clicked, current state:', isExpanded);
    setIsExpanded(!isExpanded);
  };

  return (
    <Card 
      showCorners={true} 
      className={`p-5 mb-4 ${isExpanded ? 'is-expanded' : ''}`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg">{aggregatedPoint.title}</h3>
        <Badge variant="positive">
          {aggregatedPoint.mentions} ↑↑ {aggregatedPoint.trend_percent}%
        </Badge>
      </div>
      
      <p className="text-xs font-bold mb-4">
        {aggregatedPoint.platforms?.map((platform, index: number) => (
          <React.Fragment key={platform.name}>
            <span style={getPlatformIconStyle(platform.name)}>█</span> {platform.name} {platform.count}
            {index < aggregatedPoint.platforms.length - 1 && ' '}
          </React.Fragment>
        ))}
      </p>

      <div className="mb-4">
        <ProgressBar 
          value={aggregatedPoint.severity} 
          max={10}
        />
      </div>

      <div className="grid grid-cols-4 gap-3 mb-4">
        <div className="stats-card py-3" style={getStatCardStyle('sever')}>
          <div className="text-2xl font-bold value">{aggregatedPoint.severity}/10</div>
          <div className="text-xs mt-1 font-bold">Sever</div>
        </div>
        <div className="stats-card py-3" style={getStatCardStyle('freq')}>
          <div className="text-2xl font-bold value">{aggregatedPoint.frequency}/10</div>
          <div className="text-xs mt-1 font-bold">Freq</div>
        </div>
        <div className="stats-card py-3" style={getStatCardStyle('growth')}>
          <div className="text-2xl font-bold value">+{aggregatedPoint.growth_rate}%</div>
          <div className="text-xs mt-1 font-bold">Growth</div>
        </div>
        <div className="stats-card py-3" style={getStatCardStyle('opport')}>
          <div className="text-2xl font-bold value">{aggregatedPoint.opportunity_score}/10</div>
          <div className="text-xs mt-1 font-bold">Opport</div>
        </div>
      </div>

      <div className="expandable-content">
        <div className="section">
          <h4 className="font-bold mb-3 text-sm text-orange-600">SPECIFIC ISSUES:</h4>
          {aggregatedPoint.specific_issues && aggregatedPoint.specific_issues.length > 0 ? (
            <ul className="text-xs space-y-2">
              {aggregatedPoint.specific_issues.map((issue, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span style={getIssueIconStyle(index)}>■</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              No specific issues available
            </p>
          )}
        </div>
      </div>
      
      <button 
        onClick={toggleExpand}
        className="text-xs font-bold mt-3 px-4 py-2 btn-press"
        style={getButtonStyles()}
      >
        {isExpanded ? '▲ HIDE DETAILS' : '▼ VIEW DETAILS'}
      </button>
    </Card>
  );
};
