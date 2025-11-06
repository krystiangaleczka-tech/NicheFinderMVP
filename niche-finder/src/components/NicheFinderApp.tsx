'use client';

import React, { useState, useMemo } from 'react';
import { ScanlineEffect, Sidebar, Header } from './layout';
import { RealtimeTab } from './realtime';
import { AggregatedTab } from './aggregated';
import { IdeasTab } from './ideas';
import { AnalyticsTab } from './analytics';

export const NicheFinderApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('realtime');

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case 'realtime':
        return 'Real-Time Pain Points';
      case 'aggregated':
        return 'Aggregated Insights';
      case 'ideas':
        return 'Generated Niche Ideas';
      case 'analytics':
        return 'Analytics Dashboard';
      default:
        return 'Niche Miner';
    }
  };

  const getTabSubtitle = (tab: string) => {
    switch (tab) {
      case 'realtime':
        'Monitor real-time pain points from multiple platforms';
      case 'aggregated':
        return 'Analyze aggregated pain point patterns';
      case 'ideas':
        return 'Explore AI-generated niche business ideas';
      case 'analytics':
        return 'Visualize trends and opportunities';
      default:
        return '';
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'realtime':
        return <RealtimeTab />;
      case 'aggregated':
        return <AggregatedTab />;
      case 'ideas':
        return <IdeasTab />;
      case 'analytics':
        return <AnalyticsTab />;
      default:
        return <RealtimeTab />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary antialiased relative">
      <ScanlineEffect />
      
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto md:ml-0">
          <Header 
            title={getTabTitle(activeTab)}
            subtitle={getTabSubtitle(activeTab)}
          />
          
          <div className="p-4 md:p-6">
            {renderActiveTab()}
          </div>
        </main>
      </div>
    </div>
  );
};