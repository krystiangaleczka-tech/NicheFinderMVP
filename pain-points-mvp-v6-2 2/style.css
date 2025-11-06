:root {
    /* Retro Colors - Classic 80s/90s palette */
    --retro-cream: #f4f1de;
    --retro-orange: #ff6b35;
    --retro-teal: #00bfb3;
    --retro-purple: #9d4edd;
    --retro-pink: #ff006e;
    --retro-yellow: #ffbe0b;
    --retro-blue: #3a86ff;
    --retro-green: #06ffa5;
    --retro-brown: #8b4513;
    --retro-dark: #1a1a2e;
    --bg-primary: #f4f1de;
    --bg-secondary: #ffffff;
    --bg-tertiary: #ffe8d6;
    --text-primary: #1a1a2e;
    --text-secondary: #4a4a4a;
    --text-tertiary: #8b8b8b;
    --accent: #ff6b35;
    --accent-hover: #e55a2b;
    --border: #d4a574;
    --border-light: #e8d5c4;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'IBM Plex Mono', 'Courier New', monospace;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-weight: 400;
    letter-spacing: 0.02em;
    position: relative;
}

/* Retro pattern background */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 107, 53, 0.05) 35px, rgba(255, 107, 53, 0.05) 70px),
        repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0, 191, 179, 0.05) 35px, rgba(0, 191, 179, 0.05) 70px);
    z-index: 0;
    pointer-events: none;
}

.container-wrap {
    position: relative;
    z-index: 1;
}

.retro-title {
    font-family: 'Press Start 2P', cursive;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.pixel-text {
    font-family: 'VT323', monospace;
    font-size: 1.2em;
    letter-spacing: 0.05em;
}

.card {
    background: var(--bg-secondary);
    border: 4px solid var(--border);
    border-radius: 0;
    box-shadow: 
        8px 8px 0 rgba(0, 0, 0, 0.1),
        -2px -2px 0 rgba(255, 255, 255, 0.5) inset,
        2px 2px 0 rgba(0, 0, 0, 0.1) inset;
    transition: all 0.2s ease;
    position: relative;
}

.card::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px dashed var(--retro-orange);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
}

.card:hover::before {
    opacity: 0.3;
}

.card:hover {
    box-shadow: 
        12px 12px 0 rgba(0, 0, 0, 0.15),
        -2px -2px 0 rgba(255, 255, 255, 0.6) inset,
        2px 2px 0 rgba(0, 0, 0, 0.15) inset;
    transform: translate(-2px, -2px);
}

.btn-primary {
    background: linear-gradient(180deg, var(--retro-orange) 0%, var(--retro-pink) 100%);
    color: white;
    border: 3px solid var(--retro-dark);
    border-radius: 0;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.2s ease;
    box-shadow: 
        4px 4px 0 var(--retro-dark),
        -1px -1px 0 rgba(255, 255, 255, 0.3) inset;
    cursor: pointer;
    position: relative;
}

.btn-primary:active {
    box-shadow: 
        2px 2px 0 var(--retro-dark),
        -1px -1px 0 rgba(255, 255, 255, 0.3) inset;
    transform: translate(2px, 2px);
}

.btn-primary:hover {
    background: linear-gradient(180deg, #ff7d4d 0%, #ff2080 100%);
}

.btn-secondary {
    background: var(--bg-secondary);
    color: var(--retro-teal);
    border: 3px solid var(--retro-teal);
    border-radius: 0;
    padding: 8px 18px;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.2s ease;
    box-shadow: 4px 4px 0 var(--retro-teal);
    cursor: pointer;
}

.btn-secondary:active {
    box-shadow: 2px 2px 0 var(--retro-teal);
    transform: translate(2px, 2px);
}

.btn-secondary:hover {
    background: var(--retro-teal);
    color: white;
}

.expandable-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    padding-top: 0;
    padding-bottom: 0;
}

.card.is-expanded .expandable-content {
    max-height: 2000px;
    padding-top: 16px;
    padding-bottom: 24px;
}

.section {
    border-top: 3px dashed var(--border);
    padding-top: 16px;
    margin-top: 16px;
}

.badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 0;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: 2px solid currentColor;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
}

.badge-negative {
    background: var(--retro-pink);
    color: white;
    border-color: var(--retro-dark);
}

.badge-positive {
    background: var(--retro-green);
    color: var(--retro-dark);
    border-color: var(--retro-dark);
}

.badge-neutral {
    background: var(--retro-yellow);
    color: var(--retro-dark);
    border-color: var(--retro-dark);
}

.sidebar {
    background: linear-gradient(180deg, #ffe8d6 0%, #ffd4a3 100%);
    border-right: 4px solid var(--retro-brown);
    box-shadow: inset -10px 0 20px rgba(0, 0, 0, 0.05);
}

.nav-item {
    transition: all 0.2s ease;
    border-radius: 0;
    margin: 4px 0;
    border: 2px solid transparent;
    position: relative;
    background: var(--bg-secondary);
}

.nav-item::before {
    content: '►';
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.2s ease;
    color: var(--retro-orange);
    font-size: 10px;
}

.nav-item:hover::before {
    opacity: 1;
}

.nav-item:hover {
    background: var(--retro-cream);
    border-color: var(--retro-orange);
    padding-left: 20px;
}

.nav-item.active {
    background: var(--retro-orange);
    color: white;
    border: 2px solid var(--retro-dark);
    box-shadow: 
        4px 4px 0 rgba(0, 0, 0, 0.2),
        -1px -1px 0 rgba(255, 255, 255, 0.3) inset;
    font-weight: 700;
}

.nav-item.active::before {
    color: white;
    opacity: 1;
}

.stats-card {
    background: linear-gradient(135deg, var(--retro-teal) 0%, var(--retro-blue) 100%);
    border: 3px solid var(--retro-dark);
    border-radius: 0;
    padding: 12px;
    text-align: center;
    box-shadow: 
        5px 5px 0 rgba(0, 0, 0, 0.3),
        -1px -1px 0 rgba(255, 255, 255, 0.5) inset;
    transition: all 0.2s ease;
    color: white;
}

.stats-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 
        7px 7px 0 rgba(0, 0, 0, 0.3),
        -1px -1px 0 rgba(255, 255, 255, 0.5) inset;
}

.stats-card .value {
    font-family: 'VT323', monospace;
    font-weight: 700;
    text-shadow: none;
}

.sidebar-title {
    font-size: 11px;
    font-weight: 700;
    color: var(--retro-brown);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: var(--retro-yellow);
    padding: 4px 8px;
    border: 2px solid var(--retro-dark);
    display: inline-block;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
    text-shadow: none;
}

.mobile-hidden {
    display: block;
}

.mobile-only {
    display: none;
}

@media (max-width: 768px) {
    .mobile-hidden {
        display: none;
    }
    .mobile-only {
        display: block;
    }
    .sidebar {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
    .sidebar.open {
        transform: translateX(0);
    }
}

/* Progress bar retro effect */
.progress-bar {
    background: var(--bg-tertiary);
    height: 8px;
    border: 2px solid var(--retro-dark);
    border-radius: 0;
    overflow: hidden;
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.progress-fill {
    height: 100%;
    background: repeating-linear-gradient(
        45deg,
        var(--retro-orange),
        var(--retro-orange) 10px,
        var(--retro-pink) 10px,
        var(--retro-pink) 20px
    );
    border-radius: 0;
    transition: width 0.5s ease;
    box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

::-webkit-scrollbar-track {
    background: var(--retro-cream);
    border: 2px solid var(--retro-brown);
}

::-webkit-scrollbar-thumb {
    background: var(--retro-orange);
    border: 2px solid var(--retro-dark);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--retro-pink);
}

/* Corner decorations */
.corner-decor {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 2px solid var(--retro-dark);
    pointer-events: none;
}

/* Chart canvas styling */
#platformChart {
    max-height: 200px !important;
    width: 100% !important;
}

#categoryChart, #opportunityChart {
    max-height: 200px !important;
    width: 100% !important;
}

.corner-decor.top-left {
    top: -6px;
    left: -6px;
    border-right: none;
    border-bottom: none;
}

.corner-decor.top-right {
    top: -6px;
    right: -6px;
    border-left: none;
    border-bottom: none;
}

.corner-decor.bottom-left {
    bottom: -6px;
    left: -6px;
    border-right: none;
    border-top: none;
}

.corner-decor.bottom-right {
    bottom: -6px;
    right: -6px;
    border-left: none;
    border-top: none;
}

select {
    background: var(--bg-secondary);
    border: 3px solid var(--retro-brown);
    color: var(--text-primary);
    border-radius: 0;
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.2s ease;
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
}

select:hover {
    border-color: var(--retro-orange);
}

select:focus {
    outline: none;
    border-color: var(--retro-teal);
    box-shadow: 
        4px 4px 0 rgba(0, 0, 0, 0.1),
        0 0 0 2px var(--retro-teal);
}

/* Scanline effect */
@keyframes scanline1 {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100vh);
    }
}

@keyframes scanline2 {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100vh);
    }
}

@keyframes scanline3 {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100vh);
    }
}

@keyframes scanline4 {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100vh);
    }
}

@keyframes scanline5 {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100vh);
    }
}

@keyframes scanline6 {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100vh);
    }
}

.scanline {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.11);
    pointer-events: none;
    z-index: 9999;
}

.scanline1 {
    animation: scanline1 6.3s linear infinite;
}

.scanline2 {
    animation: scanline2 6.3s linear infinite;
    animation-delay: 1.05s;
}

.scanline3 {
    animation: scanline3 6.3s linear infinite;
    animation-delay: 2.1s;
}

.scanline4 {
    animation: scanline4 6.3s linear infinite;
    animation-delay: 3.15s;
}

.scanline5 {
    animation: scanline5 6.3s linear infinite;
    animation-delay: 4.2s;
}

.scanline6 {
    animation: scanline6 6.3s linear infinite;
    animation-delay: 5.25s;
}

/* Blink animation for retro feel */
@keyframes blink {
    0%, 50%, 100% {
        opacity: 1;
    }
    25%, 75% {
        opacity: 0.7;
    }
}

.blink {
    animation: blink 2s ease-in-out infinite;
}

/* Retro button press effect */
.btn-press:active {
    animation: press 0.1s ease-out;
}

@keyframes press {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
    }
}

h1, h2, h3 {
    /* text-shadow removed for cleaner retro look */
}

.retro-header {
    background: repeating-linear-gradient(
        0deg,
        var(--retro-orange) 0px,
        var(--retro-orange) 2px,
        var(--retro-pink) 2px,
        var(--retro-pink) 4px
    );
    padding: 3px;
    color: white;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Layout */
.app-container { 
    display: flex; 
    flex-direction: column; 
    min-height: 100vh; 
}

/* Main Content */
.main-content {
    flex: 1;
    padding: var(--space-32);
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
}

.tab-content { display: none; }
.tab-content.active { display: block; }

/* Filters Bar */
.filters-bar {
    display: flex;
    gap: var(--space-12);
    margin-bottom: var(--space-24);
    flex-wrap: wrap;
}

.form-control {
    padding: var(--space-8) var(--space-12);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-base);
    background: var(--color-surface);
    color: var(--color-text);
    font-size: var(--font-size-sm);
    min-width: 140px;
    cursor: pointer;
    transition: all var(--duration-fast) var(--ease-standard);
}

.form-control:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
}

/* Real-Time Grid */
.realtime-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: var(--space-20);
}

.pain-card {
    background: var(--bg-secondary);
    border: 4px solid var(--border);
    border-radius: 0;
    padding: var(--space-20);
    transition: all var(--duration-fast) var(--ease-standard);
}

.pain-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.pain-card-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: var(--space-16);
}

.pain-card-title {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-8);
    line-height: 1.4;
}

.platform-badge {
    display: inline-flex;
    padding: var(--space-4) var(--space-8);
    background: var(--color-bg-1);
    color: var(--color-primary);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    white-space: nowrap;
}

.sentiment-row {
    display: flex;
    gap: var(--space-12);
    margin-bottom: var(--space-12);
    flex-wrap: wrap;
}

.sentiment-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-8);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
}

.sentiment-badge.negative { background: rgba(var(--color-error-rgb), 0.15); color: var(--color-error); }
.sentiment-badge.neutral { background: rgba(var(--color-info-rgb), 0.15); color: var(--color-info); }
.sentiment-badge.positive { background: rgba(var(--color-success-rgb), 0.15); color: var(--color-success); }

.category-tag {
    display: inline-flex;
    padding: var(--space-4) var(--space-8);
    background: var(--color-bg-5);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
}

.urgency-bar {
    margin-bottom: var(--space-12);
}

.urgency-label {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-4);
}

.urgency-progress {
    height: 6px;
    background: var(--color-secondary);
    border-radius: var(--radius-sm);
    overflow: hidden;
}

.urgency-fill {
    height: 100%;
    background: var(--color-error);
    transition: width var(--duration-normal) var(--ease-standard);
}

.trend-indicator {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-12);
}

.trend-indicator.rising { color: var(--color-error); }
.trend-indicator.falling { color: var(--color-success); }

.pain-quote {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    font-style: italic;
    margin-bottom: var(--space-12);
    line-height: 1.5;
}

.pain-meta {
    display: flex;
    gap: var(--space-12);
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-16);
}

.pain-actions {
    display: flex;
    gap: var(--space-8);
    flex-wrap: wrap;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
    padding: var(--space-8) var(--space-12);
    border-radius: var(--radius-base);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    transition: all var(--duration-normal) var(--ease-standard);
    border: none;
    text-decoration: none;
    white-space: nowrap;
}

.btn--primary { background: var(--color-primary); color: var(--color-btn-primary-text); }
.btn--primary:hover { background: var(--color-primary-hover); }
.btn--outline { background: transparent; border: 1px solid var(--color-border); color: var(--color-text); }
.btn--outline:hover { background: var(--color-secondary); }
.btn--sm { padding: var(--space-4) var(--space-8); font-size: var(--font-size-xs); }
.btn--full-width { width: 100%; margin-top: var(--space-8); }

/* Aggregated List */
.aggregated-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-24);
}

.aggregated-card {
    background: var(--bg-secondary);
    border: 4px solid var(--border);
    border-radius: 0;
    padding: var(--space-24);
}

.aggregated-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: var(--space-20);
}

.aggregated-title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-8);
}

.mentions-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-8);
    padding: var(--space-6) var(--space-12);
    background: var(--color-bg-3);
    border-radius: var(--radius-base);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
}

.platform-breakdown {
    display: flex;
    gap: var(--space-12);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-16);
    flex-wrap: wrap;
}

.sentiment-dist {
    margin-bottom: var(--space-20);
}

.sentiment-dist-bar {
    height: 24px;
    display: flex;
    border-radius: var(--radius-base);
    overflow: hidden;
    margin-bottom: var(--space-8);
}

.sent-seg { height: 100%; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-xs); font-weight: var(--font-weight-medium); }
.sent-seg.neg { background: var(--color-error); color: white; }
.sent-seg.neu { background: var(--color-info); color: white; }
.sent-seg.pos { background: var(--color-success); color: white; }

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-16);
    margin-bottom: var(--space-20);
}

.metric-item {
    background: var(--color-background);
    padding: var(--space-12);
    border-radius: var(--radius-base);
}

.metric-label {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8);
}

.metric-value-bar {
    height: 8px;
    background: var(--color-secondary);
    border-radius: var(--radius-sm);
    overflow: hidden;
    margin-bottom: var(--space-4);
}

.metric-fill { height: 100%; background: var(--color-primary); }

.metric-text {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
}

.section-title {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-12);
}

.issues-list, .quotes-list {
    list-style: none;
    margin-bottom: var(--space-20);
}

.issues-list li, .quotes-list li {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8);
    padding-left: var(--space-16);
    position: relative;
}

.issues-list li:before { content: '•'; position: absolute; left: 0; color: var(--color-primary); }
.quotes-list li:before { content: ''; position: absolute; left: 0; color: var(--color-primary); }

.companies-list {
    display: flex;
    gap: var(--space-12);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-20);
    flex-wrap: wrap;
}

/* Ideas */
.ideas-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-24);
    gap: var(--space-12);
    flex-wrap: wrap;
}

.ideas-header > div {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    flex-wrap: wrap;
}

.ideas-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-24);
}

/* Responsive grid for desktop */
@media (min-width: 1024px) {
    .ideas-list {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-20);
    }
}

@media (min-width: 1440px) {
    .ideas-list {
        gap: var(--space-24);
    }
}

.idea-card {
    background: var(--bg-secondary);
    border: 4px solid var(--border);
    border-radius: 0;
    display: flex;
    flex-direction: column;
    transition: all var(--duration-normal) var(--ease-standard);
    cursor: pointer;
    position: relative;
    overflow: visible;
}

.idea-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
}

.idea-card.selected {
    border: 2px solid var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-focus-ring), var(--shadow-md);
}

.idea-title-row {
    display: flex;
    align-items: center;
    gap: var(--space-12);
    margin-bottom: var(--space-8);
}

.idea-card-header {
    flex-shrink: 0;
    padding: var(--space-20);
    border-bottom: 1px solid var(--color-card-border-inner);
    background: var(--color-surface);
}

.idea-icon {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-base);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
}

.idea-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: 1.3;
}

@media (min-width: 1024px) {
    .idea-title {
        font-size: var(--font-size-base);
    }
}

.idea-source {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8);
}

.idea-meta {
    display: flex;
    gap: var(--space-12);
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-12);
}

/* Quick stats badges */
.idea-quick-stats {
    display: flex;
    gap: var(--space-8);
    flex-wrap: wrap;
    margin-bottom: var(--space-16);
}

.quick-stat-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-8);
    background: var(--color-bg-1);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
}

.quick-stat-badge.difficulty { background: var(--color-bg-2); }
.quick-stat-badge.tam { background: var(--color-bg-3); }
.quick-stat-badge.time { background: var(--color-bg-4); }

/* Accordion sections with scrollHeight animation */
.idea-card-content {
    flex: 1;
    overflow: hidden;
    transition: height 500ms cubic-bezier(0.16, 1, 0.3, 1);
    height: auto;
}

.idea-sections-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    padding: var(--space-20);
    padding-bottom: 0;
}

.idea-section {
    border: 1px solid var(--color-card-border);
    border-radius: var(--radius-base);
    overflow: hidden;
    background: var(--color-background);
}

.idea-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-12);
    cursor: pointer;
    user-select: none;
    transition: all var(--duration-fast) var(--ease-standard);
    background: var(--color-background);
    border-radius: var(--radius-base);
    position: relative;
    z-index: 1;
}

.idea-section-header:hover {
    background: var(--color-secondary);
}

.idea-section-header:active {
    background: var(--color-secondary-active);
}

.idea-section-header.collapsed {
    background: var(--color-background);
}

.idea-section-title {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    display: flex;
    align-items: center;
    gap: var(--space-8);
}

.idea-section-icon {
    display: none;
}

.idea-section-content {
    overflow: hidden;
    transition: height 300ms cubic-bezier(0.16, 1, 0.3, 1);
    height: 0;
}

.idea-section-content.expanded {
    height: auto;
}

.idea-section-body {
    padding: var(--space-16);
    padding-top: var(--space-12);
}

.market-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-12);
}

.market-item { margin-bottom: var(--space-8); }
.market-label { font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4); }
.market-value { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); color: var(--color-primary); }

.monetization-options {
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
}

.mon-option {
    padding: var(--space-12);
    background: var(--color-surface);
    border: 1px solid var(--color-card-border);
    border-radius: var(--radius-base);
}

.mon-option:last-child {
    margin-bottom: 0;
}

.mon-type {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-4);
}

.mon-revenue {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    color: var(--color-success);
    margin-bottom: var(--space-4);
}

.mon-desc { font-size: var(--font-size-sm); color: var(--color-text-secondary); }

.difficulty-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-12);
}

@media (max-width: 767px) {
    .difficulty-grid {
        grid-template-columns: 1fr;
    }
}

.roadmap-weeks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-12);
}

@media (max-width: 767px) {
    .roadmap-weeks {
        grid-template-columns: 1fr;
    }
}

.week-item {
    padding: var(--space-12);
    background: var(--color-surface);
    border: 1px solid var(--color-card-border);
    border-radius: var(--radius-base);
}

.week-title {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-8);
}

.week-tasks {
    list-style: none;
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
}

.week-tasks li {
    margin-bottom: var(--space-4);
    padding-left: var(--space-12);
    position: relative;
}

.week-tasks li:before { content: '✓'; position: absolute; left: 0; color: var(--color-success); }

.idea-card-footer {
    flex-shrink: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
    padding: var(--space-20);
    border-top: 1px solid var(--color-card-border-inner);
    background: var(--color-surface);
    position: relative;
    z-index: 1;
}

@media (max-width: 767px) {
    .idea-card-footer {
        grid-template-columns: 1fr;
    }
}

.idea-card-footer .btn {
    font-size: var(--font-size-xs);
    padding: var(--space-6) var(--space-8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* View toggle */
.view-toggle {
    display: flex;
    gap: var(--space-4);
    background: var(--color-secondary);
    padding: var(--space-4);
    border-radius: var(--radius-base);
}

.view-toggle-btn {
    padding: var(--space-6) var(--space-12);
    border: none;
    background: transparent;
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: all var(--duration-fast) var(--ease-standard);
}

.view-toggle-btn:hover {
    color: var(--color-text);
}

.view-toggle-btn.active {
    background: var(--color-surface);
    color: var(--color-text);
    box-shadow: var(--shadow-sm);
}

/* List view override */
.ideas-list.list-view {
    grid-template-columns: 1fr !important;
}

/* Analytics */
.analytics-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-16);
    margin-bottom: var(--space-24);
}

.stat-card {
    background: var(--bg-secondary);
    border: 4px solid var(--border);
    border-radius: 0;
    padding: var(--space-20);
}

.stat-label {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8);
}

.stat-value {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-semibold);
}

.card {
    background: var(--color-surface);
    border-radius: 0;
    margin-bottom: var(--space-24);
    overflow: visible;
}

.card-header {
    padding: var(--space-20);
    border-bottom: 1px solid var(--color-card-border-inner);
}

.card-header h3 {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
}

.card-body { padding: var(--space-20); }

.hottest-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
}

.hottest-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-12);
    background: var(--color-background);
    border-radius: var(--radius-base);
}

.hottest-name { font-size: var(--font-size-base); font-weight: var(--font-weight-medium); }
.hottest-change { font-size: var(--font-size-sm); }
.hottest-change.up { color: var(--color-error); }
.hottest-change.stable { color: var(--color-info); }

.analytics-charts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: var(--space-24);
    margin-bottom: var(--space-24);
}

.chart-container { position: relative; height: 300px; width: 100%; }

/* Settings */
.settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: var(--space-24);
}

.form-group { margin-bottom: var(--space-16); }
.form-label {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    margin-bottom: var(--space-8);
}

.checkbox-group, .toggle-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
}

.checkbox-group label, .toggle-group label {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    font-size: var(--font-size-sm);
    cursor: pointer;
}

/* Responsive */
@media (max-width: 1023px) {
    .ideas-list {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .main-content { padding: var(--space-16); }
    .realtime-grid { grid-template-columns: 1fr; }
    .analytics-charts { grid-template-columns: 1fr; }
    .settings-grid { grid-template-columns: 1fr; }
    .ideas-header { flex-direction: column; align-items: stretch; }
    .ideas-header > div { width: 100%; justify-content: space-between; }
    .market-row { grid-template-columns: 1fr; }
    .difficulty-grid { grid-template-columns: 1fr; }
}

/* Legacy variables for compatibility */
:root {
    --space-4: 4px;
    --space-6: 6px;
    --space-8: 8px;
    --space-10: 10px;
    --space-12: 12px;
    --space-16: 16px;
    --space-20: 20px;
    --space-24: 24px;
    --space-32: 32px;
    --radius-sm: 6px;
    --radius-base: 8px;
    --radius-md: 10px;
    --radius-lg: 12px;
    --radius-full: 9999px;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
    --duration-fast: 150ms;
    --duration-normal: 250ms;
    --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
    --font-size-xs: 11px;
    --font-size-sm: 12px;
    --font-size-base: 14px;
    --font-size-md: 14px;
    --font-size-lg: 16px;
    --font-size-xl: 18px;
    --font-size-2xl: 20px;
    --font-size-3xl: 24px;
    --font-size-4xl: 30px;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 550;
    --font-weight-bold: 600;
    --line-height-tight: 1.2;
    --line-height-normal: 1.5;
    --letter-spacing-tight: -0.01em;
    --color-white: rgba(255, 255, 255, 1);
    --color-black: rgba(0, 0, 0, 1);
    --color-cream-50: rgba(252, 252, 249, 1);
    --color-cream-100: rgba(255, 255, 253, 1);
    --color-gray-200: rgba(245, 245, 245, 1);
    --color-gray-300: rgba(167, 169, 169, 1);
    --color-gray-400: rgba(119, 124, 124, 1);
    --color-slate-500: rgba(98, 108, 113, 1);
    --color-brown-600: rgba(94, 82, 64, 1);
    --color-charcoal-700: rgba(31, 33, 33, 1);
    --color-charcoal-800: rgba(38, 40, 40, 1);
    --color-slate-900: rgba(19, 52, 59, 1);
    --color-teal-300: rgba(50, 184, 198, 1);
    --color-teal-400: rgba(45, 166, 178, 1);
    --color-teal-500: rgba(33, 128, 141, 1);
    --color-teal-600: rgba(29, 116, 128, 1);
    --color-teal-700: rgba(26, 104, 115, 1);
    --color-teal-800: rgba(41, 150, 161, 1);
    --color-red-400: rgba(255, 84, 89, 1);
    --color-red-500: rgba(192, 21, 47, 1);
    --color-orange-400: rgba(230, 129, 97, 1);
    --color-orange-500: rgba(168, 75, 47, 1);
    --color-brown-600-rgb: 94, 82, 64;
    --color-teal-500-rgb: 33, 128, 141;
    --color-slate-900-rgb: 19, 52, 59;
    --color-slate-500-rgb: 98, 108, 113;
    --color-red-500-rgb: 192, 21, 47;
    --color-red-400-rgb: 255, 84, 89;
    --color-orange-500-rgb: 168, 75, 47;
    --color-orange-400-rgb: 230, 129, 97;
    --color-bg-1: rgba(59, 130, 246, 0.08);
    --color-bg-2: rgba(245, 158, 11, 0.08);
    --color-bg-3: rgba(34, 197, 94, 0.08);
    --color-bg-4: rgba(239, 68, 68, 0.08);
    --color-bg-5: rgba(147, 51, 234, 0.08);
    --color-bg-6: rgba(249, 115, 22, 0.08);
    --color-bg-7: rgba(236, 72, 153, 0.08);
    --color-bg-8: rgba(6, 182, 212, 0.08);
    --color-background: var(--color-cream-50);
    --color-surface: var(--color-cream-100);
    --color-text: var(--color-slate-900);
    --color-text-secondary: var(--color-slate-500);
    --color-primary: var(--color-teal-500);
    --color-primary-hover: var(--color-teal-600);
    --color-primary-active: var(--color-teal-700);
    --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
    --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
    --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
    --color-border: rgba(var(--color-brown-600-rgb), 0.2);
    --color-btn-primary-text: var(--color-cream-50);
    --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
    --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
    --color-error: var(--color-red-500);
    --color-success: var(--color-teal-500);
    --color-warning: var(--color-orange-500);
    --color-info: var(--color-slate-500);
    --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);
    --color-select-caret: rgba(var(--color-slate-900-rgb), 0.8);
    --focus-ring: 0 0 0 3px var(--color-focus-ring);
    --focus-outline: 2px solid var(--color-primary);
    --status-bg-opacity: 0.15;
    --status-border-opacity: 0.25;
    --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --color-success-rgb: 33, 128, 141;
    --color-error-rgb: 192, 21, 47;
    --color-warning-rgb: 168, 75, 47;
    --color-info-rgb: 98, 108, 113;
    --font-family-base: "FKGroteskNeue", "Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-family-mono: "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}