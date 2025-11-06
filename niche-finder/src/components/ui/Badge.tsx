import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'positive' | 'negative' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'neutral', 
  className = '' 
}) => {
  const variantClasses = {
    positive: 'badge-positive',
    negative: 'badge-negative', 
    neutral: 'badge-neutral'
  };
  
  const classes = `badge ${variantClasses[variant]} ${className}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
};