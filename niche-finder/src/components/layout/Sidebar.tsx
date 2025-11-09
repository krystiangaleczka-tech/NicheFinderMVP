'use client';

import React, { useState } from 'react';
import { Activity, BarChart3, Lightbulb, PieChart, RefreshCw, Download, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';


interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'realtime', label: 'REAL-TIME', icon: Activity },
    { id: 'aggregated', label: 'AGGREGATED', icon: BarChart3 },
    { id: 'ideas', label: 'IDEAS', icon: Lightbulb },
    { id: 'analytics', label: 'ANALYTICS', icon: PieChart },
  ];

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-retro-orange border-3 border-retro-dark shadow-retro-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside className={`sidebar fixed md:relative w-64 h-screen z-20 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6">
          {/* Logo */}
          <div className="mb-8 relative">
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-4 border-4 border-black relative" 
                 style={{ boxShadow: '6px 6px 0 rgba(0,0,0,0.3)' }}>
              {/* Corner Decorations */}
              <div className="corner-decor top-left"></div>
              <div className="corner-decor top-right"></div>
              <div className="corner-decor bottom-left"></div>
              <div className="corner-decor bottom-right"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-yellow-400 rounded">
                  <img src="/golden_pickaxe.png" alt="Pickaxe" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <span className="retro-title text-xs text-white leading-none" 
                        style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}>NICHE</span>
                  <p className="pixel-text text-lg text-yellow-300 leading-none" 
                     style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}>MINER</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`nav-item flex items-center gap-3 nav-padding py-3 text-xs font-bold w-full text-left ${
                    activeTab === item.id ? 'active' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Stats Summary */}
          <div className="mb-8">
            <h3 className="sidebar-title mb-4">STATS</h3>
            <div className="grid grid-cols-2 gap-3">
              <div 
                className="stats-card"
                style={{ background: 'linear-gradient(135deg, var(--retro-orange) 0%, var(--retro-pink) 100%)' }}
              >
                <div className="text-2xl font-bold value">3</div>
                <div className="text-xs mt-1 font-bold">Ideas</div>
              </div>
              
              <div 
                className="stats-card"
                style={{ background: 'linear-gradient(135deg, var(--retro-green) 0%, var(--retro-teal) 100%)' }}
              >
                <div className="text-2xl font-bold value">1</div>
                <div className="text-xs mt-1 font-bold">Valid</div>
              </div>
              
              <div 
                className="stats-card"
                style={{ background: 'linear-gradient(135deg, var(--retro-yellow) 0%, var(--retro-orange) 100%)' }}
              >
                <div className="text-2xl font-bold value">0</div>
                <div className="text-xs mt-1 font-bold">Launch</div>
              </div>
              
              <div 
                className="stats-card"
                style={{ background: 'linear-gradient(135deg, var(--retro-pink) 0%, var(--retro-purple) 100%)' }}
              >
                <div className="text-xl font-bold value">$236M</div>
                <div className="text-xs mt-1 font-bold">TAM</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 px-4">
            <Button className="w-full flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4" />
              REFRESH DATA
            </Button>
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              EXPORT
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
