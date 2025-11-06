<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NicheFinder - Retro Variant</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">

    <style>
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
            text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
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
        }

        .corner-decor.top-left {
            top: -2px;
            left: -2px;
            border-right: none;
            border-bottom: none;
        }

        .corner-decor.top-right {
            top: -2px;
            right: -2px;
            border-left: none;
            border-bottom: none;
        }

        .corner-decor.bottom-left {
            bottom: -2px;
            left: -2px;
            border-right: none;
            border-top: none;
        }

        .corner-decor.bottom-right {
            bottom: -2px;
            right: -2px;
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
        @keyframes scanline {
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
            background: rgba(255, 255, 255, 0.1);
            animation: scanline 8s linear infinite;
            pointer-events: none;
            z-index: 9999;
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
            text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
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
    </style>
</head>
<body class="antialiased">
    <div class="scanline"></div>
    <div class="container-wrap">
        <div class="flex min-h-screen">
            <!-- Sidebar -->
            <aside class="sidebar fixed md:relative w-64 h-screen z-20">
                <div class="p-6">
                    <!-- Logo -->
                    <div class="mb-8 relative">
                        <div class="bg-gradient-to-br from-orange-400 to-pink-500 p-4 border-4 border-black" style="box-shadow: 6px 6px 0 rgba(0,0,0,0.3);">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-black flex items-center justify-center border-2 border-white">
                                    <i data-lucide="search" class="w-5 h-5 text-yellow-300"></i>
                                </div>
                                <div>
                                    <span class="retro-title text-xs text-white" style="text-shadow: 2px 2px 0 rgba(0,0,0,0.5);">NICHE</span>
                                    <p class="pixel-text text-lg text-yellow-300 leading-none" style="text-shadow: 2px 2px 0 rgba(0,0,0,0.3);">FINDER</p>
                                </div>
                            </div>
                        </div>
                        <div class="corner-decor top-left"></div>
                        <div class="corner-decor top-right"></div>
                        <div class="corner-decor bottom-left"></div>
                        <div class="corner-decor bottom-right"></div>
                    </div>

                    <!-- Navigation -->
                    <nav class="space-y-2 mb-8">
                        <a href="#" onclick="switchTab('realtime')" id="nav-realtime" class="nav-item flex items-center gap-3 px-4 py-3 text-xs font-bold">
                            <i data-lucide="activity" class="w-4 h-4"></i>
                            REAL-TIME DATA
                        </a>
                        <a href="#" onclick="switchTab('aggregated')" id="nav-aggregated" class="nav-item flex items-center gap-3 px-4 py-3 text-xs font-bold">
                            <i data-lucide="layers" class="w-4 h-4"></i>
                            PAIN POINTS
                        </a>
                        <a href="#" onclick="switchTab('niche')" id="nav-niche" class="nav-item active flex items-center gap-3 px-4 py-3 text-xs font-bold">
                            <i data-lucide="lightbulb" class="w-4 h-4"></i>
                            NICHE IDEAS
                        </a>
                        <a href="#" onclick="switchTab('analytics')" id="nav-analytics" class="nav-item flex items-center gap-3 px-4 py-3 text-xs font-bold">
                            <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
                            ANALYTICS
                        </a>
                    </nav>

                    <!-- Stats Summary -->
                    <div class="mb-8">
                        <h3 class="sidebar-title mb-4">STATS</h3>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="stats-card">
                                <div class="text-2xl font-bold value">3</div>
                                <div class="text-xs mt-1 font-bold">Ideas</div>
                            </div>
                            <div class="stats-card" style="background: linear-gradient(135deg, var(--retro-green) 0%, var(--retro-teal) 100%);">
                                <div class="text-2xl font-bold value">1</div>
                                <div class="text-xs mt-1 font-bold">Valid</div>
                            </div>
                            <div class="stats-card" style="background: linear-gradient(135deg, var(--retro-yellow) 0%, var(--retro-orange) 100%);">
                                <div class="text-2xl font-bold value">0</div>
                                <div class="text-xs mt-1 font-bold">Launch</div>
                            </div>
                            <div class="stats-card" style="background: linear-gradient(135deg, var(--retro-pink) 0%, var(--retro-purple) 100%);">
                                <div class="text-xl font-bold value">$236M</div>
                                <div class="text-xs mt-1 font-bold">TAM</div>
                            </div>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="space-y-3 mb-8">
                        <button class="w-full btn-primary flex items-center justify-center gap-2 btn-press">
                            <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                            GENERATE
                        </button>
                        <button class="w-full btn-secondary flex items-center justify-center gap-2 btn-press">
                            <i data-lucide="star" class="w-4 h-4"></i>
                            SAVED
                        </button>
                    </div>

                    <!-- Settings -->
                    <div class="border-t-4 border-dashed border-brown-600 pt-6">
                        <button class="flex items-center gap-3 w-full px-4 py-3 text-xs font-bold bg-white border-2 border-brown-600 hover:bg-orange-100 transition-colors">
                            <i data-lucide="sun" class="w-4 h-4"></i>
                            THEME
                        </button>
                    </div>
                </div>
            </aside>

            <!-- Main Content -->
            <main class="flex-1 md:ml-0">
                <!-- Mobile Header -->
                <header class="md:hidden flex items-center justify-between p-4 border-b-4 border-brown-600 bg-orange-100">
                    <div class="flex items-center gap-2">
                        <button id="mobile-menu-btn" class="p-2">
                            <i data-lucide="menu" class="w-5 h-5"></i>
                        </button>
                        <span class="retro-title text-xs">NICHEFINDER</span>
                    </div>
                    <button class="p-2">
                        <i data-lucide="sun" class="w-4 h-4"></i>
                    </button>
                </header>

                <div class="p-6">
                    <!-- Filters Bar -->
                    <div class="flex flex-wrap gap-3 mb-6">
                        <select class="px-4 py-2">
                            <option>ALL PLATFORMS</option>
                            <option>REDDIT</option>
                            <option>YOUTUBE</option>
                            <option>GITHUB</option>
                            <option>TWITTER</option>
                        </select>
                        <select class="px-4 py-2">
                            <option>ALL CATEGORIES</option>
                            <option>PAYMENT</option>
                            <option>PERFORMANCE</option>
                            <option>DOCUMENTATION</option>
                            <option>INTEGRATION</option>
                        </select>
                        <select class="px-4 py-2">
                            <option>ALL SENTIMENTS</option>
                            <option>NEGATIVE</option>
                            <option>NEUTRAL</option>
                            <option>POSITIVE</option>
                        </select>
                        <select class="px-4 py-2">
                            <option>ALL URGENCY</option>
                            <option>HIGH (7+)</option>
                            <option>MEDIUM (4-6)</option>
                            <option>LOW (1-3)</option>
                        </select>
                    </div>

                    <!-- Tab Content -->
                    <div id="tab-realtime" class="tab-content hidden">
                        <div class="retro-header mb-6">
                            <h1 class="text-xl font-bold pixel-text py-2">REAL-TIME DATA (1,234)</h1>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div class="card p-5 relative">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <div class="flex justify-between items-start mb-3">
                                    <h3 class="font-bold text-sm">Stripe Payment Issues</h3>
                                    <span class="badge badge-negative">REDDIT</span>
                                </div>
                                <div class="flex gap-2 mb-4 flex-wrap">
                                    <span class="badge badge-negative">NEG</span>
                                    <span class="badge" style="background: var(--retro-blue); color: white; border-color: var(--retro-dark);">PAYMENT</span>
                                </div>
                                <div class="mb-4">
                                    <div class="text-xs font-bold mb-2">URGENCY: <span class="text-pink-600">9/10</span></div>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: 90%"></div>
                                    </div>
                                </div>
                                <blockquote class="text-xs italic mb-4 leading-relaxed p-3 bg-orange-50 border-l-4 border-orange-500">
                                    "I've been trying to set up Stripe for my startup but the documentation is confusing..."
                                </blockquote>
                                <div class="flex justify-between text-xs font-bold mb-4">
                                    <span>👍 <span class="text-green-600">523</span></span>
                                    <span>💬 <span class="text-blue-600">89</span></span>
                                </div>
                                <div class="flex gap-2">
                                    <button class="btn-secondary text-xs px-3 py-2 btn-press">SAVE</button>
                                    <button class="btn-primary text-xs px-3 py-2 btn-press">GEN</button>
                                    <button class="btn-secondary text-xs px-3 py-2 btn-press">VIEW</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="tab-aggregated" class="tab-content hidden">
                        <div class="retro-header mb-6">
                            <h1 class="text-xl font-bold pixel-text py-2">AGGREGATED PAIN POINTS (567)</h1>
                        </div>
                        <div class="space-y-4">
                            <div class="card p-5 relative">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <div class="corner-decor bottom-left"></div>
                                <div class="corner-decor bottom-right"></div>
                                <div class="flex justify-between items-start mb-3">
                                    <h3 class="font-bold text-lg">Difficult API Integration</h3>
                                    <span class="badge badge-positive">234 ↑↑ 45%</span>
                                </div>
                                <p class="text-xs font-bold mb-4">
                                    <span style="color: var(--retro-pink);">█</span> Reddit 89 
                                    <span style="color: var(--retro-teal);" class="ml-3">█</span> YouTube 76 
                                    <span style="color: var(--retro-purple);" class="ml-3">█</span> GitHub 45 
                                    <span style="color: var(--retro-yellow);" class="ml-3">█</span> Twitter 24
                                </p>
                                <div class="mb-4">
                                    <div class="progress-bar" style="height: 10px;">
                                        <div style="width: 78%; height: 100%;" class="progress-fill"></div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 gap-3 mb-4">
                                    <div class="stats-card py-3" style="background: linear-gradient(135deg, var(--retro-pink) 0%, var(--retro-purple) 100%);">
                                        <div class="text-2xl font-bold value">8/10</div>
                                        <div class="text-xs mt-1 font-bold">Sever</div>
                                    </div>
                                    <div class="stats-card py-3" style="background: linear-gradient(135deg, var(--retro-blue) 0%, var(--retro-teal) 100%);">
                                        <div class="text-2xl font-bold value">6/10</div>
                                        <div class="text-xs mt-1 font-bold">Freq</div>
                                    </div>
                                    <div class="stats-card py-3" style="background: linear-gradient(135deg, var(--retro-green) 0%, var(--retro-teal) 100%);">
                                        <div class="text-2xl font-bold value">+45%</div>
                                        <div class="text-xs mt-1 font-bold">Growth</div>
                                    </div>
                                    <div class="stats-card py-3" style="background: linear-gradient(135deg, var(--retro-yellow) 0%, var(--retro-orange) 100%);">
                                        <div class="text-2xl font-bold value">7/10</div>
                                        <div class="text-xs mt-1 font-bold">Opport</div>
                                    </div>
                                </div>
                                <div class="expandable-content">
                                    <div class="section">
                                        <h4 class="font-bold mb-3 text-sm text-orange-600">SPECIFIC ISSUES:</h4>
                                        <ul class="text-xs space-y-2">
                                            <li class="flex items-start gap-2">
                                                <span style="color: var(--retro-pink);">■</span>
                                                <span>Complex authentication flow</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <span style="color: var(--retro-teal);">■</span>
                                                <span>Poor error handling documentation</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <span style="color: var(--retro-purple);">■</span>
                                                <span>Lack of practical examples</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <span style="color: var(--retro-yellow);">■</span>
                                                <span>Slow customer support response</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <span style="color: var(--retro-green);">■</span>
                                                <span>Inconsistent API responses</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button onclick="toggleExpand(this)" class="text-xs font-bold mt-3 px-4 py-2 bg-yellow-300 border-2 border-black hover:bg-yellow-400 transition-colors btn-press">
                                    ▼ VIEW DETAILS
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="tab-niche" class="tab-content">
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                            <div class="retro-header flex-1 mr-4">
                                <h1 class="text-xl font-bold pixel-text py-2">NICHE IDEAS (5,432)</h1>
                            </div>
                            <div class="flex items-center gap-3 mt-4 sm:mt-0">
                                <button id="expand-all" class="btn-secondary px-4 py-2 text-xs btn-press">EXPAND</button>
                                <button id="collapse-all" class="btn-secondary px-4 py-2 text-xs btn-press">COLLAPSE</button>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <!-- Niche Idea Card 1 -->
                            <div class="card niche-card p-5 relative">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <div class="corner-decor bottom-left"></div>
                                <div class="corner-decor bottom-right"></div>
                                <div class="mb-4">
                                    <h3 class="font-bold text-xl mb-2" style="color: var(--retro-orange);">Stripe Integration Templates</h3>
                                    <p class="text-xs font-bold text-purple-600">SOURCE: "Difficult API Integration"</p>
                                </div>
                                <div class="flex flex-wrap gap-3 text-xs mb-4">
                                    <span class="flex items-center gap-2">
                                        <span class="font-bold">DIFF:</span>
                                        <span class="badge badge-neutral">6/10</span>
                                    </span>
                                    <span class="flex items-center gap-2">
                                        <span class="font-bold">TAM:</span>
                                        <span class="badge badge-positive">$4.7M</span>
                                    </span>
                                    <span class="font-bold text-gray-600">⏱ 2h ago</span>
                                </div>

                                <div class="expandable-content">
                                    <div class="section">
                                        <h4 class="font-bold mb-3 text-sm bg-orange-500 text-white px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">
                                            MARKET POTENTIAL
                                        </h4>
                                        <p class="text-xs mb-2 font-bold">
                                            <span style="color: var(--retro-teal);">TAM:</span> $47M | 
                                            <span style="color: var(--retro-purple);">SAM:</span> $12M | 
                                            <span style="color: var(--retro-pink);">SOM:</span> $2.4M
                                        </p>
                                        <p class="text-xs font-bold">
                                            <span style="color: var(--retro-green);">⚡</span> Runway: <span style="color: var(--retro-green);">18 months</span>
                                        </p>
                                    </div>

                                    <div class="section">
                                        <h4 class="font-bold mb-3 text-sm bg-teal-500 text-white px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">
                                            MONETIZATION
                                        </h4>
                                        <ul class="text-xs space-y-2">
                                            <li class="flex items-start gap-2">
                                                <span style="color: var(--retro-pink);">▸</span>
                                                <span><strong>Freemium SaaS:</strong> $99/mo ($1.2M potential)</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <span style="color: var(--retro-teal);">▸</span>
                                                <span><strong>Marketplace:</strong> 15% comm ($800K potential)</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <span style="color: var(--retro-purple);">▸</span>
                                                <span><strong>API:</strong> Usage-based pricing</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="section">
                                        <h4 class="font-bold mb-3 text-sm bg-yellow-400 text-black px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">
                                            TIMELINE
                                        </h4>
                                        <p class="text-xs font-bold">
                                            <span style="color: var(--retro-teal);">●</span> MVP: 4 weeks | 
                                            <span style="color: var(--retro-pink);">●</span> $1K MRR: 3 months
                                        </p>
                                    </div>

                                    <div class="section flex justify-end gap-3 pt-4">
                                        <button class="p-2 bg-yellow-300 border-2 border-black hover:bg-yellow-400 btn-press" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.2);">
                                            <i data-lucide="star" class="w-5 h-5"></i>
                                        </button>
                                        <button class="p-2 bg-teal-300 border-2 border-black hover:bg-teal-400 btn-press" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.2);">
                                            <i data-lucide="copy" class="w-5 h-5"></i>
                                        </button>
                                        <button class="p-2 bg-purple-300 border-2 border-black hover:bg-purple-400 btn-press" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.2);">
                                            <i data-lucide="download" class="w-5 h-5"></i>
                                        </button>
                                    </div>
                                </div>
                                <button onclick="toggleCard(this)" class="w-full mt-4 text-xs font-bold px-4 py-2 bg-orange-400 border-3 border-black hover:bg-orange-500 transition-colors btn-press" style="box-shadow: 4px 4px 0 rgba(0,0,0,0.3);">
                                    ▼ EXPAND DETAILS
                                </button>
                            </div>

                            <!-- Niche Idea Card 2 -->
                            <div class="card niche-card p-5 relative">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <div class="corner-decor bottom-left"></div>
                                <div class="corner-decor bottom-right"></div>
                                <div class="mb-4">
                                    <h3 class="font-bold text-xl mb-2" style="color: var(--retro-teal);">AI Documentation Writer</h3>
                                    <p class="text-xs font-bold text-purple-600">SOURCE: "Poor dev documentation"</p>
                                </div>
                                <div class="flex flex-wrap gap-3 text-xs mb-4">
                                    <span class="flex items-center gap-2">
                                        <span class="font-bold">DIFF:</span>
                                        <span class="badge badge-positive">4/10</span>
                                    </span>
                                    <span class="flex items-center gap-2">
                                        <span class="font-bold">TAM:</span>
                                        <span class="badge badge-positive">$2.1M</span>
                                    </span>
                                    <span class="font-bold text-gray-600">⏱ 1h ago</span>
                                </div>

                                <div class="expandable-content">
                                    <div class="section">
                                        <h4 class="font-bold mb-3 text-sm bg-teal-500 text-white px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">
                                            MARKET POTENTIAL
                                        </h4>
                                        <p class="text-xs font-bold">
                                            <span style="color: var(--retro-teal);">TAM:</span> $21M | 
                                            <span style="color: var(--retro-purple);">SAM:</span> $5.2M | 
                                            <span style="color: var(--retro-pink);">SOM:</span> $1.1M
                                        </p>
                                    </div>
                                    <div class="section">
                                        <h4 class="font-bold mb-3 text-sm bg-purple-500 text-white px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">
                                            MONETIZATION
                                        </h4>
                                        <p class="text-xs font-bold">
                                            Subscription: <span style="color: var(--retro-teal);">$29/mo</span> per dev
                                        </p>
                                    </div>
                                </div>
                                <button onclick="toggleCard(this)" class="w-full mt-4 text-xs font-bold px-4 py-2 bg-teal-400 border-3 border-black hover:bg-teal-500 transition-colors btn-press" style="box-shadow: 4px 4px 0 rgba(0,0,0,0.3);">
                                    ▼ EXPAND DETAILS
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="tab-analytics" class="tab-content hidden">
                        <div class="retro-header mb-6">
                            <h1 class="text-xl font-bold pixel-text py-2">ANALYTICS DASHBOARD</h1>
                        </div>

                        <!-- KPI Cards -->
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <div class="stats-card p-5 text-center relative">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <div class="text-4xl font-bold mb-2 value">5,432</div>
                                <div class="text-xs font-bold">TOTAL IDEAS</div>
                            </div>
                            <div class="stats-card p-5 text-center relative" style="background: linear-gradient(135deg, var(--retro-green) 0%, var(--retro-teal) 100%);">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <div class="text-4xl font-bold mb-2 value">1,234</div>
                                <div class="text-xs font-bold">VALIDATED</div>
                            </div>
                            <div class="stats-card p-5 text-center relative" style="background: linear-gradient(135deg, var(--retro-purple) 0%, var(--retro-pink) 100%);">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <div class="text-4xl font-bold mb-2 value">89</div>
                                <div class="text-xs font-bold">LAUNCHED</div>
                            </div>
                            <div class="stats-card p-5 text-center relative" style="background: linear-gradient(135deg, var(--retro-orange) 0%, var(--retro-yellow) 100%);">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <div class="text-4xl font-bold mb-2 value">$1.2B</div>
                                <div class="text-xs font-bold">TAM FOUND</div>
                            </div>
                        </div>

                        <!-- Charts -->
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            <div class="card p-5 relative">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <h3 class="font-bold mb-4 text-sm bg-orange-500 text-white px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">HOTTEST PAIN POINTS</h3>
                                <canvas id="barChart" width="400" height="200"></canvas>
                            </div>
                            <div class="card p-5 relative">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <h3 class="font-bold mb-4 text-sm bg-teal-500 text-white px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">CATEGORY SPLIT</h3>
                                <canvas id="pieChart" width="400" height="200"></canvas>
                            </div>
                            <div class="card p-5 relative">
                                <div class="corner-decor top-left"></div>
                                <div class="corner-decor top-right"></div>
                                <h3 class="font-bold mb-4 text-sm bg-pink-500 text-white px-3 py-1 inline-block border-2 border-black" style="box-shadow: 3px 3px 0 rgba(0,0,0,0.3);">PLATFORM SPLIT</h3>
                                <canvas id="horizontalBarChart" width="400" height="200"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.querySelector('.sidebar');

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });
        }

        // Tab switching
        function switchTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
            });

            // Remove active class from all nav items
            document.querySelectorAll('nav a').forEach(nav => {
                nav.classList.remove('active');
            });

            // Show selected tab content
            document.getElementById(`tab-${tabName}`).classList.remove('hidden');

            // Add active class to selected nav item
            document.getElementById(`nav-${tabName}`).classList.add('active');

            // Close mobile menu
            sidebar.classList.remove('open');

            // Initialize charts if analytics tab
            if (tabName === 'analytics') {
                setTimeout(initCharts, 100);
            }

            // Re-initialize icons
            lucide.createIcons();
        }

        // Niche Card interactions
        document.addEventListener('DOMContentLoaded', () => {
            const expandAllBtn = document.getElementById('expand-all');
            const collapseAllBtn = document.getElementById('collapse-all');

            if (expandAllBtn) {
                expandAllBtn.addEventListener('click', () => {
                    document.querySelectorAll('.niche-card').forEach(card => {
                        card.classList.add('is-expanded');
                        const btn = card.querySelector('button[onclick*="toggleCard"]');
                        if (btn) btn.textContent = '▲ COLLAPSE';
                    });
                });
            }

            if (collapseAllBtn) {
                collapseAllBtn.addEventListener('click', () => {
                    document.querySelectorAll('.niche-card').forEach(card => {
                        card.classList.remove('is-expanded');
                        const btn = card.querySelector('button[onclick*="toggleCard"]');
                        if (btn) btn.textContent = '▼ EXPAND DETAILS';
                    });
                });
            }

            // Re-initialize icons
            lucide.createIcons();
        });

        // Toggle individual card
        function toggleCard(button) {
            const card = button.closest('.niche-card');
            card.classList.toggle('is-expanded');
            button.textContent = card.classList.contains('is-expanded') ? '▲ COLLAPSE' : '▼ EXPAND DETAILS';
        }

        // Expand/collapse for aggregated pain points
        function toggleExpand(button) {
            const card = button.closest('.card');
            card.classList.toggle('is-expanded');
            button.textContent = card.classList.contains('is-expanded') ? '▲ HIDE DETAILS' : '▼ VIEW DETAILS';
        }

        // Initialize Charts with retro colors
        function initCharts() {
            const retroColors = [
                '#ff6b35', // orange
                '#00bfb3', // teal
                '#9d4edd', // purple
                '#ffbe0b', // yellow
                '#06ffa5'  // green
            ];

            // Bar Chart
            const barCtx = document.getElementById('barChart');
            if (barCtx && !barCtx.chart) {
                barCtx.chart = new Chart(barCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Payment', 'Perform', 'Docs', 'Integrate', 'Support'],
                        datasets: [{
                            label: 'Mentions',
                            data: [1200, 890, 650, 450, 320],
                            backgroundColor: retroColors,
                            borderColor: '#1a1a2e',
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    color: '#4a4a4a',
                                    font: {
                                        family: "'IBM Plex Mono', monospace",
                                        weight: 'bold'
                                    }
                                },
                                grid: {
                                    color: '#e8d5c4',
                                    lineWidth: 2
                                }
                            },
                            x: {
                                ticks: {
                                    color: '#4a4a4a',
                                    font: {
                                        family: "'IBM Plex Mono', monospace",
                                        weight: 'bold'
                                    }
                                },
                                grid: {
                                    display: false
                                }
                            }
                        }
                    }
                });
            }

            // Pie Chart
            const pieCtx = document.getElementById('pieChart');
            if (pieCtx && !pieCtx.chart) {
                pieCtx.chart = new Chart(pieCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['UX/UI', 'Payment', 'Support', 'Perform', 'Other'],
                        datasets: [{
                            data: [32, 28, 18, 15, 7],
                            backgroundColor: retroColors,
                            borderColor: '#1a1a2e',
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    color: '#4a4a4a',
                                    usePointStyle: true,
                                    padding: 15,
                                    font: {
                                        family: "'IBM Plex Mono', monospace",
                                        weight: 'bold',
                                        size: 11
                                    }
                                }
                            }
                        }
                    }
                });
            }

            // Horizontal Bar Chart
            const horizCtx = document.getElementById('horizontalBarChart');
            if (horizCtx && !horizCtx.chart) {
                horizCtx.chart = new Chart(horizCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Reddit', 'YouTube', 'Twitter', 'GitHub', 'Others'],
                        datasets: [{
                            label: 'Platforms',
                            data: [4500, 3200, 1800, 890, 612],
                            backgroundColor: retroColors,
                            borderColor: '#1a1a2e',
                            borderWidth: 3
                        }]
                    },
                    options: {
                        indexAxis: 'y',
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    color: '#4a4a4a',
                                    font: {
                                        family: "'IBM Plex Mono', monospace",
                                        weight: 'bold'
                                    }
                                },
                                grid: {
                                    color: '#e8d5c4',
                                    lineWidth: 2
                                }
                            },
                            x: {
                                ticks: {
                                    color: '#4a4a4a',
                                    font: {
                                        family: "'IBM Plex Mono', monospace",
                                        weight: 'bold'
                                    }
                                },
                                grid: {
                                    color: '#e8d5c4',
                                    lineWidth: 2
                                }
                            }
                        }
                    }
                });
            }
        }
    </script>
</body>
</html>