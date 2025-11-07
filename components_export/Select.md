# Select

```typescript
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  label?: string;
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ 
  children, 
  label,
  error,
  className = '', 
  ...props 
}) => {
  const baseClasses = 'bg-bg-secondary border-3 border-retro-brown text-text-primary rounded-none px-2 py-1.5 text-xs font-bold transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.1)] hover:border-retro-orange focus:outline-none focus:border-retro-teal focus:shadow-[4px_4px_0_var(--retro-teal)]';
  
  const classes = `${baseClasses} ${className}`;
  
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
          {label}
        </label>
      )}
      <select className={classes} {...props}>
        {children}
      </select>
      {error && (
        <span className="text-xs text-red-500 font-bold">
          {error}
        </span>
      )}
    </div>
  );
};
```

---
*File: /Users/krystiangaleczka/Documents/NicheFinderMVP/niche-finder/src/components/ui/Select.tsx*
*Exported: Select.md*
