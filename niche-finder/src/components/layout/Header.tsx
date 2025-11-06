import React from 'react';
import { Settings, Bell, Search } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-bg-secondary border-b-4 border-retro-brown p-6 shadow-[0_4px_0_var(--retro-brown)]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 retro-title">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-text-secondary font-medium">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 bg-bg-primary border-3 border-retro-brown px-2 md:px-3 py-2">
            <Search className="w-4 h-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-xs font-medium text-text-primary placeholder-text-secondary outline-none w-20 md:w-32"
            />
          </div>
          
          {/* Actions */}
          <Button variant="secondary" size="sm" className="p-2">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="sm" className="p-2">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};