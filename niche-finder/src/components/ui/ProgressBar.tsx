import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showValue?: boolean;
  color?: 'orange' | 'teal' | 'pink' | 'green';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max = 100, 
  className = '', 
  showValue = false,
  color = 'orange'
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colorClasses = {
    orange: 'bg-gradient-to-r from-retro-orange to-retro-pink',
    teal: 'bg-gradient-to-r from-retro-teal to-retro-blue',
    pink: 'bg-gradient-to-r from-retro-pink to-retro-purple',
    green: 'bg-gradient-to-r from-retro-green to-retro-teal'
  };
  
  return (
    <div className={`progress-bar ${className}`}>
      <div 
        className={`progress-fill ${colorClasses[color]}`}
        style={{ width: `${percentage}%` }}
      />
      {showValue && (
        <div className="text-xs font-bold mt-1 text-center">
          {value}/{max}
        </div>
      )}
    </div>
  );
};