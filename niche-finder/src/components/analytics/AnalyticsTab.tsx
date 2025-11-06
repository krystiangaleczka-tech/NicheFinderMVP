import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Scatter } from 'react-chartjs-2';
import { Card } from '../ui/Card';
import { mockAnalyticsData, mockPainPoints } from '../../lib/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

interface AnalyticsTabProps {
  className?: string;
}

export const AnalyticsTab: React.FC<AnalyticsTabProps> = ({ className = '' }) => {
  const categoryChartRef = useRef<any>(null);
  const platformChartRef = useRef<any>(null);
  const opportunityChartRef = useRef<any>(null);

  // Prepare data for charts
  const categoryData = {
    labels: mockAnalyticsData.category_distribution.map((c: any) => c.name),
    datasets: [
      {
        data: mockAnalyticsData.category_distribution.map((c: any) => c.percent),
        backgroundColor: [
          '#ff6b35',
          '#00bfb3',
          '#9d4edd',
          '#ff006e',
          '#ffbe0b',
          '#3a86ff',
          '#06ffa5',
        ],
        borderColor: '#1a1a2e',
        borderWidth: 3,
      },
    ],
  };

  const platformData = {
    labels: mockAnalyticsData.platform_distribution.map((p: any) => p.name),
    datasets: [
      {
        data: mockAnalyticsData.platform_distribution.map((p: any) => p.count),
        backgroundColor: [
          '#ff6b35',
          '#00bfb3',
          '#9d4edd',
          '#ffbe0b',
        ],
        borderColor: '#1a1a2e',
        borderWidth: 3,
      },
    ],
  };

  const opportunityData = {
    datasets: [
      {
        label: 'Pain Points',
        data: mockPainPoints.map((point: any) => ({
          x: point.urgency_score,
          y: point.votes,
        })),
        backgroundColor: '#ff6b35',
        borderColor: '#1a1a2e',
        borderWidth: 2,
        pointRadius: 8,
        pointHoverRadius: 10,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1a1a2e',
        titleColor: '#f4f1de',
        bodyColor: '#f4f1de',
        borderColor: '#ff6b35',
        borderWidth: 2,
        titleFont: {
          family: 'IBM Plex Mono',
          size: 12,
          weight: 'bold' as const,
        },
        bodyFont: {
          family: 'IBM Plex Mono',
          size: 11,
        },
      },
    },
  };

  const opportunityOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'URGENCY SCORE',
          color: '#1a1a2e',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#1a1a2e',
        },
      },
      y: {
        title: {
          display: true,
          text: 'VOTES',
          color: '#1a1a2e',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#1a1a2e',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1a1a2e',
        titleColor: '#f4f1de',
        bodyColor: '#f4f1de',
        borderColor: '#ff6b35',
        borderWidth: 2,
      },
    },
  };

  // Get hottest pain points
  const hottestPainPoints = [...mockPainPoints]
    .sort((a: any, b: any) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <div className={className}>
      <div className="retro-header mb-6">
        <h1 className="text-xl font-bold pixel-text py-2 text-text-primary">
          ANALYTICS DASHBOARD
        </h1>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
        <Card className="stats-card p-3 md:p-5 text-center">
          <div className="text-2xl md:text-4xl font-bold mb-2 value">5,432</div>
          <div className="text-xs font-bold">TOTAL IDEAS</div>
        </Card>
        <Card className="stats-card p-3 md:p-5 text-center bg-gradient-to-br from-retro-green to-retro-teal">
          <div className="text-2xl md:text-4xl font-bold mb-2 value">1,234</div>
          <div className="text-xs font-bold">VALIDATED</div>
        </Card>
        <Card className="stats-card p-3 md:p-5 text-center bg-gradient-to-br from-retro-purple to-retro-pink">
          <div className="text-2xl md:text-4xl font-bold mb-2 value">89</div>
          <div className="text-xs font-bold">LAUNCHED</div>
        </Card>
        <Card className="stats-card p-3 md:p-5 text-center bg-gradient-to-br from-retro-orange to-retro-yellow">
          <div className="text-2xl md:text-4xl font-bold mb-2 value">$1.2B</div>
          <div className="text-xs font-bold">TAM FOUND</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
        {/* Hottest Pain Points */}
        <Card className="p-4 md:p-5">
          <h3 className="font-bold mb-3 md:mb-4 text-xs md:text-sm bg-orange-500 text-white px-2 md:px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
            HOTTEST PAIN POINTS
          </h3>
          <div className="space-y-2">
            {hottestPainPoints.map((point: any, index: number) => (
              <div key={point.id} className="flex items-center justify-between p-2 bg-bg-tertiary border-2 border-retro-brown">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-retro-orange">#{index + 1}</span>
                  <span className="text-xs font-medium truncate max-w-[100px] md:max-w-[150px]">{point.title}</span>
                </div>
                <span className="text-xs font-bold text-retro-teal">{point.votes}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Category Split */}
        <Card className="p-4 md:p-5">
          <h3 className="font-bold mb-3 md:mb-4 text-xs md:text-sm bg-teal-500 text-white px-2 md:px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
            CATEGORY SPLIT
          </h3>
          <div className="h-40 md:h-48">
            <Pie ref={categoryChartRef} data={categoryData} options={chartOptions} />
          </div>
        </Card>

        {/* Platform Split */}
        <Card className="p-4 md:p-5">
          <h3 className="font-bold mb-3 md:mb-4 text-xs md:text-sm bg-pink-500 text-white px-2 md:px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
            PLATFORM SPLIT
          </h3>
          <div className="h-40 md:h-48">
            <Pie ref={platformChartRef} data={platformData} options={chartOptions} />
          </div>
        </Card>
      </div>
      
      {/* Opportunity Matrix */}
      <Card className="p-4 md:p-5 mt-4 md:mt-5">
        <h3 className="font-bold mb-3 md:mb-4 text-xs md:text-sm bg-purple-500 text-white px-2 md:px-3 py-1 inline-block border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
          OPPORTUNITY MATRIX
        </h3>
        <div className="h-80 md:h-96">
          <Scatter ref={opportunityChartRef} data={opportunityData} options={opportunityOptions} />
        </div>
      </Card>
    </div>
  );
};