import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'font-bold text-xs uppercase tracking-wider cursor-pointer transition-all duration-200 btn-press';
  
  const variantClasses = {
    primary: 'bg-gradient-to-b from-retro-orange to-retro-pink text-white border-3 border-retro-dark shadow-retro-button hover:from-orange-400 hover:to-pink-500 active:shadow-retro-button-active active:translate-x-1 active:translate-y-1',
    secondary: 'bg-bg-secondary text-retro-teal border-3 border-retro-teal shadow-[4px_4px_0_var(--retro-teal)] hover:bg-retro-teal hover:text-white active:shadow-[2px_2px_0_var(--retro-teal)] active:translate-x-1 active:translate-y-1'
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-xs',
    lg: 'px-5 py-3.5 text-sm'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};