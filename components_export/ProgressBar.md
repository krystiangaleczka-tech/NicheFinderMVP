# ProgressBar

```typescript
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
    orange: 'progress-orange',
    teal: 'progress-teal', 
    pink: 'progress-pink',
    green: 'progress-green'
  };
  
  return (
    <div className={`progress-bar ${className}`}>
      <div 
        className={`progress-fill ${colorClasses[color]}`}
        style={{ width: `${percentage}%` }}
      />
      {showValue && (
        <div className="progress-value">
          {value}/{max}
        </div>
      )}
    </div>
  );
};
```

---
*File: /Users/krystiangaleczka/Documents/NicheFinderMVP/niche-finder/src/components/ui/ProgressBar.tsx*
*Exported: ProgressBar.md*
