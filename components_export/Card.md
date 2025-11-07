# Card

```typescript
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  showCorners?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  showCorners = true 
}) => {
  return (
    <div className={`card relative ${className}`}>
      {showCorners && (
        <>
          <div className="corner-decor top-left"></div>
          <div className="corner-decor top-right"></div>
          <div className="corner-decor bottom-left"></div>
          <div className="corner-decor bottom-right"></div>
        </>
      )}
      {children}
    </div>
  );
};
```

---
*File: /Users/krystiangaleczka/Documents/NicheFinderMVP/niche-finder/src/components/ui/Card.tsx*
*Exported: Card.md*
