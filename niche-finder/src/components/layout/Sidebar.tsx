import React from 'react';
import { Activity, BarChart3, Lightbulb, PieChart, RefreshCw, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'realtime', label: 'REAL-TIME', icon: Activity },
    { id: 'aggregated', label: 'AGGREGATED', icon: BarChart3 },
    { id: 'ideas', label: 'IDEAS', icon: Lightbulb },
    { id: 'analytics', label: 'ANALYTICS', icon: PieChart },
  ];

  return (
    <aside className="sidebar fixed md:relative w-64 h-screen z-20">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8 relative">
          <Card showCorners={true} className="bg-gradient-to-br from-orange-400 to-pink-500 p-4 border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-yellow-400 rounded">
                <img src="/golden_pickaxe.png" alt="Pickaxe" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="retro-title text-xs text-white" style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}>NICHE</span>
                <p className="pixel-text text-lg text-yellow-300 leading-none" style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}>MINER</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 mb-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`nav-item flex items-center gap-3 px-4 py-3 text-xs font-bold w-full text-left transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-retro-orange text-white border-3 border-retro-dark shadow-[4px_4px_0_var(--retro-dark)]' 
                    : 'text-text-secondary hover:text-retro-orange hover:bg-bg-tertiary'
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
            <Card className="stats-card">
              <div className="text-2xl font-bold value">3</div>
              <div className="text-xs mt-1 font-bold">Ideas</div>
            </Card>
            <Card className="stats-card bg-gradient-to-br from-retro-green to-retro-teal">
              <div className="text-2xl font-bold value">1</div>
              <div className="text-xs mt-1 font-bold">Valid</div>
            </Card>
            <Card className="stats-card bg-gradient-to-br from-retro-yellow to-retro-orange">
              <div className="text-2xl font-bold value">0</div>
              <div className="text-xs mt-1 font-bold">Launch</div>
            </Card>
            <Card className="stats-card bg-gradient-to-br from-retro-pink to-retro-purple">
              <div className="text-xl font-bold value">$236M</div>
              <div className="text-xs mt-1 font-bold">TAM</div>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
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
  );
};