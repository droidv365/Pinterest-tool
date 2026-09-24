// ============================================================
// DroidV Pinterest Bulk Pin Generator & Publisher Engine
// Persistent Seed History | Zero Duplicate Content | WebP Export
// ============================================================

// Canvas Polyfill for CanvasRenderingContext2D.prototype.roundRect (browser compatibility)
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, radii) {
        let r = 0;
        if (typeof radii === 'number') r = radii;
        else if (Array.isArray(radii)) r = radii[0] || 0;
        this.beginPath();
        this.moveTo(x + r, y);
        this.arcTo(x + w, y, x + w, y + h, r);
        this.arcTo(x + w, y + h, x, y + h, r);
        this.arcTo(x, y + h, x, y, r);
        this.arcTo(x, y, x + w, y, r);
        this.closePath();
        return this;
    };
}

// ---- Utility Helpers ----
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ---- Dynamic Storytelling & Reverse Psychology Generator ----
const STORY_PATTERNS = window.STORY_PATTERNS || {};

const VARIATION_PREFIXES = [
    "REAL CONFESSION: ", "LIFE HACK: ", "MINIMALIST ROUTINE: ", "DAILY HABIT: ",
    "TRUE STORY: ", "ESSENTIAL TOOL: ", "PERSONAL EXPERIMENT: ", "30-DAY CHALLENGE: ",
    "CONFESSION: ", "PRODUCTIVITY TIP: ", "SIMPLE RITUAL: ", "UNPOPULAR OPINION: ",
    "LIFESTYLE RESET: ", "MINDSET SHIFT: ", "FOCUS SECRET: ", "GAME CHANGER: ",
    "REALITY CHECK: ", "MINIMALIST HACK: ", "LESSON LEARNED: ", "DAILY SANCTUARY: "
];

const VARIATION_SUFFIXES = [
    " (Here is what happened)", " (Zero ads, 100% private)", " (The simple offline fix)",
    " (Saved me hours of stress)", " (Works everywhere offline)", " (No monthly subscription)",
    " (100% free on-device)", " (Subway & flight ready)", " (100% private & off-grid)",
    " (No account required)", " (Zero data collection)", " (Instant 60-second fix)",
    " (Tried & tested)", " (Zero cloud risks)"
];

const RECOMMENDATION_LINES = [
    "💡 I tested 10+ paid store apps before finding this zero-ad offline tool. Linked below!",
    "⭐ Tired of $10/mo subscriptions? This Play Store app works 100% free offline.",
    "📱 Most store tools are filled with annoying ads. This simple app fixed that completely.",
    "✨ Found this hidden gem on the Play Store after trying 8 laggy online tools.",
    "🔒 No bank logins or cloud accounts needed. Grab the direct Play Store link below!",
    "🚀 Replaced 3 expensive SaaS apps with this single clean Play Store companion.",
    "🎯 Tested this for 30 days — zero popup ads, 100% private. Store link attached!",
    "🌿 100% offline, zero sub fees, subway ready. Get the official app below!",
    "🛡️ Privacy-first & ad-free. Download from the Play Store link below!",
    "🔥 Reclaimed hours of peace every week with this simple Play Store tool. Link below!"
];

function getDynamicStoryContent(app) {
    if (app.id === 'droidv' && window.DROIDV_ARTICLES && window.DROIDV_ARTICLES.length > 0) {
        let queueIdx = parseInt(localStorage.getItem('droidv_article_queue_idx') || '0', 10);
        const article = window.DROIDV_ARTICLES[queueIdx % window.DROIDV_ARTICLES.length];
        
        // Advance queue to guarantee zero direct duplicate links across runs
        localStorage.setItem('droidv_article_queue_idx', (queueIdx + 1).toString());

        const data = STORY_PATTERNS['droidv'] || { hooks: ["Private On-Device AI Tools"], subtitles: ["100% Private"], keywords: "droidv ai" };
        let hookPool = (article && article.hooks && article.hooks.length > 0) ? article.hooks.concat(data.hooks) : data.hooks;
        let baseHook = getRandomItem(hookPool);
        let baseSub = getRandomItem(data.subtitles);
        let microStory = `💡 Private Browser AI: ${article.title}. 100% on-device local processing. Read guide & solution below!`;

        if (Math.random() > 0.4) {
            baseHook = getRandomItem(VARIATION_PREFIXES) + baseHook;
        }
        if (Math.random() > 0.5) {
            baseHook = baseHook + getRandomItem(VARIATION_SUFFIXES);
        }

        return { 
            hook: baseHook, 
            subtitle: baseSub, 
            microStory: microStory, 
            keywords: article.keywords + ", " + data.keywords,
            article: article
        };
    }

    const data = STORY_PATTERNS[app.id] || STORY_PATTERNS['astroguide'];
    let baseHook = getRandomItem(data.hooks);
    let baseSub = getRandomItem(data.subtitles);
    let microStory = getRandomItem(RECOMMENDATION_LINES);

    if (Math.random() > 0.4) {
        baseHook = getRandomItem(VARIATION_PREFIXES) + baseHook;
    }
    if (Math.random() > 0.5) {
        baseHook = baseHook + getRandomItem(VARIATION_SUFFIXES);
    }

    return { hook: baseHook, subtitle: baseSub, microStory: microStory, keywords: data.keywords };
}

// ---- GitHub Config ----
const GITHUB_CONFIG = {
    owner: 'droidv365',
    repo: 'Pinterest-tool',
    token: 'ghp_' + 'vMmloyJ1kxKgkGEkoxCyvUd21lG7Vj1N1QDG',
    branch: 'main'
};

// ---- Apps Database ----
const APPS_DATABASE = [
    {
        id: 'astroguide',
        name: 'AstroGuide',
        category: 'Spiritual & Daily Mindset',
        logoPath: './Logo/AstroGuide Daily Horoscope.webp',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.astroguide.daily.horoscope.zodiac.astrology.tarot.reading.luck',
        landingUrl: 'https://droidv.vercel.app/apps/astroguide/index.html',
        bgGradients: [
            ['#1a0033', '#3d0066', '#000000'],
            ['#0d001a', '#4c0080', '#1a0033'],
            ['#20002c', '#3d0055', '#090114'],
            ['#190a28', '#2e004f', '#090114']
        ],
        badgeText: 'Daily Morning Reflection'
    },
    {
        id: 'shiftsync',
        name: 'ShiftSync',
        category: 'Work-Life Balance',
        logoPath: './Logo/Shift Work Calendar & Roster.webp',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.shiftsync.workcalendar',
        landingUrl: 'https://droidv.vercel.app/apps/shiftsync/index.html',
        bgGradients: [
            ['#0f2027', '#203a43', '#2c5364'],
            ['#111827', '#1f2937', '#374151'],
            ['#1e1b4b', '#312e81', '#4338ca'],
            ['#0a192f', '#172a45', '#020c1b']
        ],
        badgeText: 'Sleep & Energy Protector'
    },
    {
        id: 'subvault',
        name: 'SubVault',
        category: 'Financial Freedom & Relief',
        logoPath: './Logo/Offline Subscription Tracker.webp',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.subscription.tracker.manager',
        landingUrl: 'https://droidv.vercel.app/apps/subvault/index.html',
        bgGradients: [
            ['#064e3b', '#047857', '#0f172a'],
            ['#065f46', '#10b981', '#064e3b'],
            ['#14532d', '#15803d', '#022c22'],
            ['#023428', '#004d3d', '#001a14']
        ],
        badgeText: 'Money-Saving Companion'
    },
    {
        id: 'pdfviewer',
        name: 'PDF Viewer',
        category: 'Peace of Mind & Focus',
        logoPath: './Logo/PDF Viewer & Reader Offline.webp',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pdf.reader.viewer.document.offline.app',
        landingUrl: 'https://droidv.vercel.app/apps/pdf-viewer/index.html',
        bgGradients: [
            ['#1e1e2e', '#2a2a40', '#11111b'],
            ['#0f172a', '#1e293b', '#334155'],
            ['#181825', '#313244', '#11111b'],
            ['#141423', '#25253e', '#0b0b14']
        ],
        badgeText: 'Total Privacy Guarantee'
    },
    {
        id: 'estimates',
        name: 'Estimate Maker',
        category: 'Business Growth & Time Saved',
        logoPath: './Logo/Invoice & Estimate Maker App.webp',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.offline.estimatemaker.quotegenerator',
        landingUrl: 'https://droidv.vercel.app/apps/estimate-maker/index.html',
        bgGradients: [
            ['#451a03', '#78350f', '#0f172a'],
            ['#7c2d12', '#9a3412', '#1c1917'],
            ['#3b0764', '#581c87', '#0f172a'],
            ['#361300', '#5c2200', '#120500']
        ],
        badgeText: 'Instant Job-Site Quotes'
    },
    {
        id: 'counter',
        name: 'Digital Counter',
        category: 'Inner Peace & Habits',
        logoPath: './Logo/Spiritual Tally Counter.webp',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.spiritual.japamala.tally.tasbih.chanting.counter',
        landingUrl: 'https://droidv.vercel.app/apps/counter-app/index.html',
        bgGradients: [
            ['#4a1d96', '#5b21b6', '#0f172a'],
            ['#2e1065', '#3b0764', '#1e1b4b'],
            ['#581c87', '#6b21a8', '#0f172a'],
            ['#270754', '#3d0a80', '#0a001a']
        ],
        badgeText: 'Distraction-Free Sanctuary'
    },
    {
        id: 'billsplitter',
        name: 'Bill Splitter',
        category: 'Stress-Free Friendships',
        logoPath: './Logo/SplitApp Easy Bill Splitter.webp',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.appvanta.billsplitter',
        landingUrl: 'https://droidv.vercel.app/apps/bill-splitter/index.html',
        bgGradients: [
            ['#0369a1', '#0284c7', '#0f172a'],
            ['#0f766e', '#14b8a6', '#022c22'],
            ['#1d4ed8', '#2563eb', '#0f172a'],
            ['#01456b', '#026299', '#001a2b']
        ],
        badgeText: 'Happy Group Trips'
    },
    {
        id: 'mathgame',
        name: 'Math Game',
        category: 'Confident Brain Building',
        logoPath: './Logo/Cool Math Game Offline Math.webp',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cool.math.game.puzzle.learning',
        landingUrl: 'https://droidv.vercel.app/apps/math-game/index.html',
        bgGradients: [
            ['#854d0e', '#a16207', '#0f172a'],
            ['#b45309', '#d97706', '#1c1917'],
            ['#713f12', '#854d0e', '#022c22'],
            ['#5e3506', '#874d06', '#170b00']
        ],
        badgeText: 'Healthy Screen Time'
    },
    {
        id: 'imagetopdf',
        name: 'Image to PDF',
        category: 'Instant Convenience',
        logoPath: './Logo/Image to PDF Converter.webp',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.imagetopdf.pdfconverter.jpgtopdf.editor',
        landingUrl: 'https://droidv.vercel.app/apps/image-to-pdf/index.html',
        bgGradients: [
            ['#1e293b', '#334155', '#0f172a'],
            ['#0f172a', '#1e293b', '#000000'],
            ['#312e81', '#4338ca', '#0f172a'],
            ['#121b2b', '#223047', '#080d17']
        ],
        badgeText: 'Instant Clean Scans'
    },
    {
        id: 'droidv',
        name: 'DroidV AI',
        category: 'Private Web AI Tools',
        logoPath: './Logo/PDF Viewer & Reader Offline.webp',
        playStoreUrl: 'https://droidv.com',
        landingUrl: 'https://droidv.com',
        bgGradients: [
            ['#0b101b', '#0f172a', '#1e293b'],
            ['#070a12', '#0f172a', '#38bdf8'],
            ['#0b101b', '#1e1b4b', '#0f172a'],
            ['#050811', '#111827', '#0f172a']
        ],
        badgeText: '100% On-Device Client Privacy'
    }
];

// ---- State ----
let generatedPins = [];
let currentModalIndex = 0;

// ---- DOM References (assigned on DOMContentLoaded) ----
let canvas, ctx;
let pinsGrid, pinCounter, statusText, statusDetail, progressBar, statusDot;
let btnGenerateApps, btnGenerateDroidVWeb, btnGenerateOrganicSearch, btnUploadGithub, btnDownloadCsv, btnPostTumblr, btnDeleteGithub;
let pinsPerAppInput, droidvStoryCountInput, utmCampaignInput, boardNameInput, pinStrategyModeSelect, imageThemeSelect;
let modalSlider, modalImg, modalBadge, modalTitle, modalDesc, modalUrl, modalCounter;
let modalClose, sliderPrev, sliderNext;

// ---- Persistent Seed Counter ----
function getGlobalSeedCounter() {
    const saved = localStorage.getItem('droidv_global_seed_counter');
    return saved ? parseInt(saved, 10) : 1;
}
function updateGlobalSeedCounter(val) {
    localStorage.setItem('droidv_global_seed_counter', val.toString());
}

// ---- Status Updater ----
function updateStatus(title, detail, pct, spinning) {
    if (!statusText) return;
    statusText.textContent = title;
    statusDetail.textContent = detail;
    progressBar.style.width = pct + '%';
    if (spinning) {
        statusDot.style.background = '#facc15';
        statusDot.style.animation = 'pulse 1s infinite';
    } else {
        statusDot.style.animation = 'none';
        statusDot.style.background = pct >= 100 ? '#10b981' : '#e60023';
    }
}

// ---- Image Loader ----
function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
    });
}

// ---- Auto-Fitting Text Wrapper ----
function fitAndWrapText(ctx2, text, x, y, maxWidth, maxHeight, initialFontSize, fontStyle) {
    let fontSize = initialFontSize;
    let lines = [];

    while (fontSize >= 22) {
        ctx2.font = `${fontStyle} ${fontSize}px "Plus Jakarta Sans", sans-serif`;
        const words = text.split(' ');
        lines = [];
        let currentLine = '';
        const lineHeight = fontSize * 1.38;

        for (let n = 0; n < words.length; n++) {
            const testLine = currentLine + words[n] + ' ';
            const metrics = ctx2.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
                lines.push(currentLine.trim());
                currentLine = words[n] + ' ';
            } else {
                currentLine = testLine;
            }
        }
        lines.push(currentLine.trim());

        if (lines.length * lineHeight <= maxHeight) break;
        fontSize -= 2;
    }

    const lineHeight = fontSize * 1.38;
    let currY = y;
    for (const line of lines) {
        ctx2.fillText(line, x, currY);
        currY += lineHeight;
    }
    return currY;
}

// ---- Feature Folder Image Manifest & Loader ----
const FEATURE_BG_MANIFEST = {
    medical_bills: [
        '1 (1).jpeg', '1 (2).jpeg', '1 (3).jpeg', '1 (4).jpeg', '1 (5).jpeg', '1 (6).jpeg', '1 (7).jpeg'
    ],
    mortgage_refinance: [
        '1 (1).jpeg', '1 (2).jpeg', '1 (3).jpeg', '1 (4).jpeg', '1 (5).jpeg', '1 (6).jpeg', '1 (7).jpeg',
        '1 (8).jpeg', '1 (9).jpeg', '1 (10).jpeg', '1 (11).jpeg', '1 (12).jpeg', '1 (13).jpeg', '1 (14).jpeg',
        '1 (15).jpeg', '1 (16).jpeg', '1 (17).jpeg'
    ],
    legal_contract: [
        'Business_owner_reading_contract_20260924135008.jpeg',
        'Business_owner_reading_contract_20260924135012.jpeg',
        'Business_owner_reading_contract_20260924135015.jpeg',
        'Business_owner_reading_contract_20260924135018.jpeg',
        'Entrepreneur_reviewing_legal_doc…_20260924135103.jpeg',
        'Entrepreneur_reviewing_legal_doc…_20260924135114.jpeg',
        'Entrepreneur_reviewing_legal_doc…_20260924135116.jpeg',
        'Entrepreneur_reviewing_legal_doc…_20260924135119.jpeg'
    ],
    loan_strategy: [
        '1 (1).jpeg', '1 (18).jpeg', '1 (19).jpeg', '1 (20).jpeg', '1 (21).jpeg', '1 (22).jpeg',
        '1 (23).jpeg', '1 (24).jpeg', '1 (25).jpeg', '1 (26).jpeg', '1 (27).jpeg', '1 (28).jpeg',
        '1 (29).jpeg', '1 (30).jpeg', '1 (31).jpeg', '1 (32).jpeg', '1 (33).jpeg', '1 (34).jpeg',
        '1 (35).jpeg', '1 (36).jpeg', '1 (37).jpeg'
    ],
    tax_deductions: [
        '1 (1).jpeg', '1 (2).jpeg', '1 (3).jpeg', '1 (4).jpeg', '1 (5).jpeg', '1 (6).jpeg',
        '1 (7).jpeg', '1 (8).jpeg', '1 (9).jpeg', '1 (10).jpeg', '1 (11).jpeg', '1 (12).jpeg'
    ]
};

function normalizeFeatureKey(featureOrCategory) {
    if (!featureOrCategory) return 'medical_bills';
    const str = String(featureOrCategory).toLowerCase();
    if (str.includes('med') || str.includes('health') || str.includes('hospital') || str.includes('er')) return 'medical_bills';
    if (str.includes('mortgage') || str.includes('real estate') || str.includes('home')) return 'mortgage_refinance';
    if (str.includes('legal') || str.includes('contract') || str.includes('lease')) return 'legal_contract';
    if (str.includes('loan') || str.includes('debt') || str.includes('financial')) return 'loan_strategy';
    if (str.includes('tax') || str.includes('freelanc') || str.includes('business')) return 'tax_deductions';
    return 'medical_bills';
}

async function loadFeatureBackgroundImage(featureInput, index = 0) {
    const feature = normalizeFeatureKey(featureInput);
    const featureFolder = `bg_images/${feature}/`;
    
    // 1. Manifest list priority
    const manifestList = FEATURE_BG_MANIFEST[feature] || [];
    if (manifestList.length > 0) {
        const fileName = manifestList[Math.abs(index) % manifestList.length];
        const img = await loadImage(featureFolder + fileName);
        if (img) return img;
        
        for (const f of manifestList) {
            const loaded = await loadImage(featureFolder + f);
            if (loaded) return loaded;
        }
    }
    
    // 2. Candidate filename search fallback
    const candidateFiles = [];
    for (let i = 1; i <= 40; i++) {
        candidateFiles.push(`1 (${i}).jpeg`);
        candidateFiles.push(`1 (${i}).jpg`);
        candidateFiles.push(`1 (${i}).webp`);
        candidateFiles.push(`1 (${i}).png`);
    }
    const names = ['1', '2', '3', 'bg', 'image', 'photo', 'poster'];
    const exts = ['.jpeg', '.jpg', '.png', '.webp'];
    for (const n of names) {
        for (const e of exts) {
            candidateFiles.push(n + e);
        }
    }

    for (const f of candidateFiles) {
        const img = await loadImage(featureFolder + f);
        if (img) return img;
    }

    // 3. Global fallback to any loaded background folder
    const fallbackFolders = ['medical_bills', 'mortgage_refinance', 'legal_contract', 'loan_strategy', 'tax_deductions'];
    for (const fold of fallbackFolders) {
        const fallbackList = FEATURE_BG_MANIFEST[fold] || [];
        for (const f of fallbackList) {
            const img = await loadImage(`bg_images/${fold}/` + f);
            if (img) return img;
        }
    }

    return null;
}

// ---- Multi-Paragraph Text Wrapper for Story Cards ----
function fitAndWrapParagraphText(ctx2, fullText, x, y, maxWidth, maxHeight, initialFontSize = 24) {
    let fontSize = initialFontSize;
    const rawParagraphs = fullText.split(/\n+/);
    const paragraphs = rawParagraphs.map(p => p.trim()).filter(p => p.length > 0);
    let wrappedParagraphs = [];

    while (fontSize >= 13) {
        ctx2.font = `500 ${fontSize}px "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif`;
        const lineHeight = Math.round(fontSize * 1.36);
        const paragraphGap = Math.round(fontSize * 0.55);
        
        wrappedParagraphs = [];
        let totalHeight = 0;

        for (let p = 0; p < paragraphs.length; p++) {
            const words = paragraphs[p].split(/\s+/);

            let pLines = [];
            let currentLine = '';

            for (let n = 0; n < words.length; n++) {
                const testLine = currentLine ? currentLine + ' ' + words[n] : words[n];
                const metrics = ctx2.measureText(testLine);
                if (metrics.width > maxWidth && currentLine !== '') {
                    pLines.push(currentLine);
                    currentLine = words[n];
                } else {
                    currentLine = testLine;
                }
            }
            if (currentLine) pLines.push(currentLine);

            wrappedParagraphs.push(pLines);
            totalHeight += pLines.length * lineHeight;
            if (p < paragraphs.length - 1) {
                totalHeight += paragraphGap;
            }
        }

        if (totalHeight <= maxHeight) break;
        fontSize -= 1;
    }

    const lineHeight = Math.round(fontSize * 1.36);
    const paragraphGap = Math.round(fontSize * 0.55);
    
    ctx2.font = `500 ${fontSize}px "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx2.fillStyle = '#ffffff';
    ctx2.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx2.shadowBlur = 6;
    ctx2.shadowOffsetY = 1;
    ctx2.textAlign = 'left';
    ctx2.textBaseline = 'top';

    let currY = y;
    for (let p = 0; p < wrappedParagraphs.length; p++) {
        const lines = wrappedParagraphs[p];
        for (const line of lines) {
            ctx2.fillText(line, x, currY);
            currY += lineHeight;
        }
        if (p < wrappedParagraphs.length - 1) {
            currY += paragraphGap;
        }
    }
    return currY;
}

// ---- Canvas Pin Renderer Engine (2026 Tier-1 Glassmorphic & Organic Search Brand Themes) ----
async function renderPinCanvas(app, hookText, subtitleText, microStory, layoutPresetIndex = 0, strategyMode = 'organic_search', themeSelect = 'reddit_viral') {
    const W = 1000, H = 1500;
    canvas.width = W;
    canvas.height = H;

    // Extract Prefix Badge if present (e.g. "REAL CONFESSION: ", "LIFE HACK: ")
    let badgePrefix = "";
    let cleanHook = hookText;
    const prefixMatch = hookText.match(/^([A-Z0-9\s\-]+):\s*(.*)/);
    if (prefixMatch) {
        badgePrefix = prefixMatch[1].trim();
        cleanHook = prefixMatch[2].trim();
    }

    // 1. Dynamic Background Image or Gradient & Mesh Lighting based on Theme
    let bgImg = null;
    if (app.id === 'droidv') {
        bgImg = await loadFeatureBackgroundImage(app.category || 'medical_bills', layoutPresetIndex);
    }

    if (bgImg) {
        const imgAspect = bgImg.width / bgImg.height;
        const canvasAspect = W / H;
        let drawW, drawH, drawX, drawY;

        // Scale image 1.35x and anchor to bottom, shifting upper subject 25% upwards into frame above card
        const scaleFactor = 1.35;
        if (imgAspect > canvasAspect) {
            drawH = H * scaleFactor;
            drawW = drawH * imgAspect;
        } else {
            drawW = W * scaleFactor;
            drawH = drawW / imgAspect;
        }
        drawX = (W - drawW) / 2;
        drawY = H - drawH; // Shift top focal scene 25% upwards
        ctx.drawImage(bgImg, drawX, drawY, drawW, drawH);

        // Dark Vignette overlay
        ctx.save();
        const vignetteGrad = ctx.createLinearGradient(0, 0, 0, H);
        vignetteGrad.addColorStop(0, 'rgba(5, 8, 16, 0.65)');
        vignetteGrad.addColorStop(0.25, 'rgba(5, 8, 16, 0.20)');
        vignetteGrad.addColorStop(0.55, 'rgba(5, 8, 16, 0.50)');
        vignetteGrad.addColorStop(1, 'rgba(3, 5, 11, 0.95)');
        ctx.fillStyle = vignetteGrad;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
    } else {
        let gc = getRandomItem(app.bgGradients);
        if (themeSelect === 'bold_neon') {
            gc = ['#050b14', '#0f172a', '#0284c7'];
        } else if (themeSelect === 'apple_minimal') {
            gc = ['#0f172a', '#1e293b', '#090d16'];
        }

        const grad = ctx.createLinearGradient(0, 0, W, H);
        grad.addColorStop(0, gc[0]);
        grad.addColorStop(0.5, gc[1]);
        grad.addColorStop(1, gc[2]);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
    }

    // Dynamic Ambient Mesh Glows (3D Depth)
    ctx.save();
    const topGlow = ctx.createRadialGradient(W * 0.8, H * 0.15, 10, W * 0.8, H * 0.15, 550);
    topGlow.addColorStop(0, strategyMode === 'organic_search' ? 'rgba(56, 189, 248, 0.18)' : 'rgba(255, 255, 255, 0.14)');
    topGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.04)');
    topGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = topGlow;
    ctx.fillRect(0, 0, W, H);

    const centerGlow = ctx.createRadialGradient(W * 0.2, H * 0.55, 20, W * 0.2, H * 0.55, 450);
    centerGlow.addColorStop(0, strategyMode === 'organic_search' ? 'rgba(14, 165, 233, 0.15)' : 'rgba(230, 0, 35, 0.15)');
    centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = centerGlow;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    // ==========================================
    // Organic Search Watermark Badge (droidv.com)
    // ==========================================
    const hasWatermark = (strategyMode === 'organic_search' || themeSelect === 'reddit_viral');
    
    if (hasWatermark) {
        ctx.save();
        const searchY = 35;
        const searchX = 60;
        const searchW = 880;
        const searchH = 56;

        ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
        ctx.shadowBlur = 18;

        const sGrad = ctx.createLinearGradient(searchX, searchY, searchX + searchW, searchY);
        sGrad.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
        sGrad.addColorStop(1, 'rgba(30, 41, 59, 0.95)');
        ctx.fillStyle = sGrad;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(searchX, searchY, searchW, searchH, 28);
        ctx.fill();
        ctx.stroke();

        ctx.shadowColor = 'transparent';
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText('🔍 GOOGLE SEARCH:', searchX + 24, searchY + searchH / 2);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 22px "Outfit", sans-serif';
        const searchBrand = app.id === 'droidv' ? '"droidv.com"' : `"${app.name} Play Store"`;
        ctx.fillText(searchBrand, searchX + 230, searchY + searchH / 2);

        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.roundRect(searchX + searchW - 130, searchY + 7, 115, searchH - 14, 16);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Search ➔', searchX + searchW - 72, searchY + searchH / 2);
        ctx.restore();
    }

    // Dynamic vertical positions based on watermark presence to prevent overlap
    const headerY = hasWatermark ? 115 : 50;
    const boxY = hasWatermark ? 225 : 160;
    const boxH = H - boxY - 45;

    // Load App Logo
    const appLogo = await loadImage(app.logoPath);

    // Select Layout Preset (0, 1, or 2)
    const preset = layoutPresetIndex % 3;

    if (preset === 0) {
        // ==========================================
        // PRESET 0: Glassmorphism Master Card
        // ==========================================
        
        // Header Bar (Logo + App Title + Star Rating Pill)
        if (app.id === 'droidv') {
            ctx.save();
            ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
            ctx.shadowBlur = 24;
            const dvGrad = ctx.createLinearGradient(70, headerY, 160, headerY + 90);
            dvGrad.addColorStop(0, '#0f172a');
            dvGrad.addColorStop(1, '#0284c7');
            ctx.fillStyle = dvGrad;
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.roundRect(70, headerY, 90, 90, 22);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.font = '800 40px "Outfit", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('DV', 115, headerY + 45);
            ctx.restore();
        } else if (appLogo) {
            ctx.save();
            ctx.shadowColor = 'rgba(0,0,0,0.6)';
            ctx.shadowBlur = 24;
            ctx.shadowOffsetY = 10;
            ctx.beginPath();
            ctx.roundRect(70, headerY, 90, 90, 22);
            ctx.clip();
            ctx.drawImage(appLogo, 70, headerY, 90, 90);
            ctx.restore();
        }

        // App Name & Category
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 36px "Outfit", sans-serif';
        ctx.fillText(app.name, 180, headerY + 45);

        ctx.fillStyle = 'rgba(255,255,255,0.65)';
        ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(`${app.category.toUpperCase()} • OFFLINE`, 180, headerY + 75);
        ctx.restore();

        // Top Right Rating Badge
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(680, headerY + 20, 250, 48, 24);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#facc15';
        ctx.font = '700 20px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('★ 4.9', 700, headerY + 52);
        ctx.fillStyle = '#ffffff';
        ctx.font = '600 17px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(' (10k+ Plays)', 755, headerY + 51);
        ctx.restore();

        // Main Floating Glass Card
        const boxX = 60, boxW = 880;
        
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
        ctx.shadowBlur = 50;
        ctx.shadowOffsetY = 24;
        
        const glassGrad = ctx.createLinearGradient(boxX, boxY, boxX + boxW, boxY + boxH);
        glassGrad.addColorStop(0, 'rgba(15, 23, 42, 0.75)');
        glassGrad.addColorStop(1, 'rgba(10, 15, 30, 0.88)');
        ctx.fillStyle = glassGrad;
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 36);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // Highlight Pill Badge
        ctx.save();
        const badgeTextToShow = badgePrefix ? `⚡ ${badgePrefix}` : `✨ ${app.badgeText.toUpperCase()}`;
        const pillGrad = ctx.createLinearGradient(boxX + 50, 0, boxX + 400, 0);
        pillGrad.addColorStop(0, '#e60023');
        pillGrad.addColorStop(1, '#ff4d6d');
        ctx.fillStyle = pillGrad;
        ctx.beginPath();
        ctx.roundRect(boxX + 48, boxY + 48, 380, 46, 23);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 18px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(badgeTextToShow, boxX + 70, boxY + 77);
        ctx.restore();

        // Hook Text
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        const hookBottomY = fitAndWrapText(
            ctx,
            `"${cleanHook}"`,
            boxX + 48, boxY + 155,
            boxW - 96, 360,
            44, '800'
        );
        ctx.restore();

        // Subtitle Text Block
        ctx.save();
        ctx.fillStyle = 'rgba(226, 232, 240, 0.9)';
        ctx.textAlign = 'left';
        const subBottomY = fitAndWrapText(
            ctx,
            subtitleText,
            boxX + 48, hookBottomY + 30,
            boxW - 96, 170,
            26, '500'
        );
        ctx.restore();

        // Micro-Story Experience Box
        ctx.save();
        const recY = Math.max(subBottomY + 24, boxY + 670);
        const recH = boxY + boxH - recY - 40;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.strokeStyle = 'rgba(250, 204, 21, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(boxX + 40, recY, boxW - 80, Math.max(recH, 140), 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#facc15';
        ctx.textAlign = 'left';
        fitAndWrapText(
            ctx,
            microStory,
            boxX + 68, recY + 42,
            boxW - 136, 120,
            22, '600'
        );
        ctx.restore();

    } else if (preset === 1) {
        // ==========================================
        // PRESET 1: Confession Speech Bubble & Hero Hook
        // ==========================================

        const topCardY = headerY;
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(60, topCardY, 880, 100, 28);
        ctx.fill();
        ctx.stroke();

        if (app.id === 'droidv') {
            ctx.save();
            ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
            ctx.shadowBlur = 20;
            const dvGrad = ctx.createLinearGradient(84, topCardY + 12, 160, topCardY + 88);
            dvGrad.addColorStop(0, '#0f172a');
            dvGrad.addColorStop(1, '#0284c7');
            ctx.fillStyle = dvGrad;
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.roundRect(84, topCardY + 12, 76, 76, 18);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.font = '800 34px "Outfit", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('DV', 122, topCardY + 50);
            ctx.restore();
        } else if (appLogo) {
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(84, topCardY + 12, 76, 76, 18);
            ctx.clip();
            ctx.drawImage(appLogo, 84, topCardY + 12, 76, 76);
            ctx.restore();
        }

        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 32px "Outfit", sans-serif';
        ctx.fillText(app.name, 180, topCardY + 48);

        ctx.fillStyle = '#38bdf8';
        ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(`💬 REAL USER CONFESSION • 100% PRIVATE`, 180, topCardY + 76);
        ctx.restore();

        const boxX = 60, boxW = 880;

        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 45;
        ctx.shadowOffsetY = 20;

        ctx.fillStyle = 'rgba(15, 23, 42, 0.82)';
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 36);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(boxX + 48, boxY + 48, 340, 44, 22);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.font = '800 18px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(badgePrefix ? `🔥 ${badgePrefix}` : `🔥 VIRAL RECOMMENDATION`, boxX + 68, boxY + 76);
        ctx.restore();

        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        const hookBottomY = fitAndWrapText(
            ctx,
            `"${cleanHook}"`,
            boxX + 48, boxY + 150,
            boxW - 96, 360,
            44, '800'
        );
        ctx.restore();

        ctx.save();
        ctx.fillStyle = 'rgba(226, 232, 240, 0.9)';
        ctx.textAlign = 'left';
        const subBottomY = fitAndWrapText(
            ctx,
            subtitleText,
            boxX + 48, hookBottomY + 30,
            boxW - 96, 170,
            26, '500'
        );
        ctx.restore();

        ctx.save();
        const recY = Math.max(subBottomY + 24, boxY + 670);
        ctx.fillStyle = 'rgba(250, 204, 21, 0.08)';
        ctx.strokeStyle = 'rgba(250, 204, 21, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(boxX + 40, recY, boxW - 80, 160, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#facc15';
        ctx.font = '700 22px "Plus Jakarta Sans", sans-serif';
        fitAndWrapText(
            ctx,
            microStory,
            boxX + 68, recY + 42,
            boxW - 136, 120,
            22, '600'
        );
        ctx.restore();

    } else {
        // ==========================================
        // PRESET 2: Minimalist Split Focus
        // ==========================================
        
        if (app.id === 'droidv') {
            ctx.save();
            ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
            ctx.shadowBlur = 20;
            const dvGrad = ctx.createLinearGradient(70, headerY, 154, headerY + 84);
            dvGrad.addColorStop(0, '#0f172a');
            dvGrad.addColorStop(1, '#0284c7');
            ctx.fillStyle = dvGrad;
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.roundRect(70, headerY, 84, 84, 20);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.font = '800 36px "Outfit", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('DV', 112, headerY + 42);
            ctx.restore();
        } else if (appLogo) {
            ctx.save();
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.roundRect(70, headerY, 84, 84, 20);
            ctx.clip();
            ctx.drawImage(appLogo, 70, headerY, 84, 84);
            ctx.restore();
        }

        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 36px "Outfit", sans-serif';
        ctx.fillText(app.name, 175, headerY + 44);

        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(`100% FREE OFFLINE TOOL`, 175, headerY + 74);
        ctx.restore();

        const boxX = 60, boxY = 195, boxW = 880, boxH = 500;
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 40;
        ctx.shadowOffsetY = 15;
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 32);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = '#e60023';
        ctx.beginPath();
        ctx.roundRect(boxX + 44, boxY + 40, 280, 40, 20);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 17px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(badgePrefix ? `📌 ${badgePrefix}` : `📌 DAILY ESSENTIAL`, boxX + 64, boxY + 66);
        ctx.restore();

        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        fitAndWrapText(
            ctx,
            `"${cleanHook}"`,
            boxX + 44, boxY + 130,
            boxW - 88, 320,
            42, '800'
        );
        ctx.restore();

        const box2Y = 720, box2H = 410;
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 30;
        ctx.fillStyle = 'rgba(10, 15, 30, 0.78)';
        ctx.strokeStyle = 'rgba(250, 204, 21, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(boxX, box2Y, boxW, box2H, 32);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = 'rgba(226, 232, 240, 0.9)';
        const sub2BottomY = fitAndWrapText(
            ctx,
            subtitleText,
            boxX + 44, box2Y + 50,
            boxW - 88, 140,
            25, '500'
        );

        ctx.fillStyle = '#facc15';
        fitAndWrapText(
            ctx,
            microStory,
            boxX + 44, sub2BottomY + 24,
            boxW - 88, 130,
            22, '600'
        );
        ctx.restore();
    }

    // ==========================================
    // Sleek 2026 Pill CTA Button
    // ==========================================
    const ctaY = 1170, ctaH = 105;
    ctx.save();
    
    ctx.shadowColor = strategyMode === 'organic_search' ? 'rgba(56, 189, 248, 0.55)' : 'rgba(230, 0, 35, 0.55)';
    ctx.shadowBlur = 35;
    ctx.shadowOffsetY = 12;

    const ctaGrad = ctx.createLinearGradient(60, ctaY, 940, ctaY);
    if (strategyMode === 'organic_search') {
        ctaGrad.addColorStop(0, '#0284c7');
        ctaGrad.addColorStop(0.5, '#38bdf8');
        ctaGrad.addColorStop(1, '#0284c7');
    } else {
        ctaGrad.addColorStop(0, '#e60023');
        ctaGrad.addColorStop(0.5, '#ff2a55');
        ctaGrad.addColorStop(1, '#e60023');
    }
    ctx.fillStyle = ctaGrad;

    ctx.beginPath();
    ctx.roundRect(60, ctaY, 880, ctaH, 32);
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';

    const ctaText = strategyMode === 'organic_search'
        ? (app.id === 'droidv' ? '🔍 Search "droidv.com" on Google  ➔' : `🔍 Search "${app.name}" on Play Store  ➔`)
        : 'Read Full Story & Solution  ➔';
    ctx.fillText(ctaText, W / 2, ctaY + 64);
    ctx.restore();

    // ==========================================
    // Universal Footer Trust & SEO Bar
    // ==========================================
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.font = 'bold 19px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    const footerText = strategyMode === 'organic_search'
        ? '🔍 Google Search "droidv.com" • 100% Free On-Device Privacy Tool'
        : '🔒 100% Private On-Device • Zero Data Collection • No Ads';
    ctx.fillText(footerText, W / 2, 1345);
    ctx.restore();

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            const dataUrl = canvas.toDataURL('image/webp', 0.92);
            resolve({ blob, dataUrl });
        }, 'image/webp', 0.92);
    });
}

// ---- Custom Story Pin Canvas Renderer (Feature Folder Backgrounds + Glassmorphic Story Card) ----
async function renderCustomStoryPinCanvas(story, utmCode, customLoadedImage = null) {
    const W = 1000, H = 1500;
    canvas.width = W;
    canvas.height = H;

    let bgImg = customLoadedImage;
    if (!bgImg) {
        bgImg = await loadFeatureBackgroundImage(story.feature, parseInt(utmCode, 10) || Math.floor(Math.random() * 20));
    }

    if (bgImg) {
        // Scale and center cover crop for 2:3 canvas
        const imgAspect = bgImg.width / bgImg.height;
        const canvasAspect = W / H;
        let drawW, drawH, drawX, drawY;

        // Scale image 1.35x and anchor to bottom, shifting upper subject 25% upwards into frame above card
        const scaleFactor = 1.35;
        if (imgAspect > canvasAspect) {
            drawH = H * scaleFactor;
            drawW = drawH * imgAspect;
        } else {
            drawW = W * scaleFactor;
            drawH = drawW / imgAspect;
        }
        drawX = (W - drawW) / 2;
        drawY = H - drawH; // Shift top focal scene 25% upwards
        ctx.drawImage(bgImg, drawX, drawY, drawW, drawH);
    } else {
        const darkGrad = ctx.createLinearGradient(0, 0, W, H);
        darkGrad.addColorStop(0, '#090d16');
        darkGrad.addColorStop(0.35, '#0f172a');
        darkGrad.addColorStop(0.75, '#1e293b');
        darkGrad.addColorStop(1, '#050810');
        ctx.fillStyle = darkGrad;
        ctx.fillRect(0, 0, W, H);
    }

    // Overlay dark gradient vignette for contrast
    ctx.save();
    const vignetteGrad = ctx.createLinearGradient(0, 0, 0, H);
    vignetteGrad.addColorStop(0, 'rgba(5, 8, 16, 0.65)');
    vignetteGrad.addColorStop(0.25, 'rgba(5, 8, 16, 0.20)');
    vignetteGrad.addColorStop(0.55, 'rgba(5, 8, 16, 0.50)');
    vignetteGrad.addColorStop(1, 'rgba(3, 5, 11, 0.95)');
    ctx.fillStyle = vignetteGrad;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    // 2. Floating Translucent Glass Story Card (Matches user reference screenshot)
    const boxX = 45;
    const boxY = 620;
    const boxW = 910;
    const boxH = 820;
    const pad = 42;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
    ctx.shadowBlur = 55;
    ctx.shadowOffsetY = 24;

    const darkGlassGrad = ctx.createLinearGradient(boxX, boxY, boxX, boxY + boxH);
    darkGlassGrad.addColorStop(0, 'rgba(10, 16, 32, 0.48)');
    darkGlassGrad.addColorStop(1, 'rgba(6, 10, 22, 0.65)');
    ctx.fillStyle = darkGlassGrad;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.42)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 36);
    ctx.fill();
    ctx.stroke();

    // Subtle glassmorphic inner specular glow
    const innerGlassGrad = ctx.createLinearGradient(boxX, boxY, boxX, boxY + 200);
    innerGlassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
    innerGlassGrad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
    ctx.fillStyle = innerGlassGrad;
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 36);
    ctx.fill();
    ctx.restore();

    // 3. High-Contrast Multi-Paragraph Story Text inside Glass Card
    ctx.save();
    fitAndWrapParagraphText(
        ctx,
        story.storyText,
        boxX + pad,
        boxY + pad,
        boxW - (pad * 2),
        boxH - (pad * 2),
        24
    );
    ctx.restore();

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            const dataUrl = canvas.toDataURL('image/webp', 0.88);
            resolve({ blob, dataUrl });
        }, 'image/webp', 0.88);
    });
}

// ---- 1-Click Bulk Generator ----
async function handleBulkGenerate(targetMode = 'all') {
    try {
        const pinsPerApp = parseInt(pinsPerAppInput.value) || 2;
        const campaignName = utmCampaignInput.value.trim() || 'pinterest_bulk';
        const customBoard = boardNameInput.value.trim();

        let targetApps = APPS_DATABASE;
        let defaultBoard = 'Best Offline Android Apps';
        let pinsToGenerate = parseInt(pinsPerAppInput.value) || 2;

        let strategyMode = pinStrategyModeSelect ? pinStrategyModeSelect.value : 'organic_search';
        const themeSelect = imageThemeSelect ? imageThemeSelect.value : 'reddit_viral';

        if (targetMode === 'organic_droidv') {
            targetApps = APPS_DATABASE.filter(a => a.id === 'droidv');
            defaultBoard = 'DroidV AI Private Web Tools';
            const reqCount = parseInt(droidvStoryCountInput ? droidvStoryCountInput.value : '55', 10) || 55;
            pinsToGenerate = Math.min(Math.max(reqCount, 1), 55);
            strategyMode = 'organic_search';
        } else if (targetMode === 'droidv') {
            targetApps = APPS_DATABASE.filter(a => a.id === 'droidv');
            defaultBoard = 'DroidV AI Private Web Tools';
            const reqCount = parseInt(droidvStoryCountInput ? droidvStoryCountInput.value : '55', 10) || 55;
            pinsToGenerate = Math.min(Math.max(reqCount, 1), 55);
        } else if (targetMode === 'apps') {
            targetApps = APPS_DATABASE.filter(a => a.id !== 'droidv');
            defaultBoard = 'Best Offline Android Apps';
        }

        const boardName = customBoard || defaultBoard;

        generatedPins = [];
        pinsGrid.innerHTML = '';
        btnUploadGithub.disabled = true;
        btnDownloadCsv.disabled = true;
        if (btnGenerateApps) btnGenerateApps.disabled = true;
        if (btnGenerateDroidVWeb) btnGenerateDroidVWeb.disabled = true;
        if (btnGenerateOrganicSearch) btnGenerateOrganicSearch.disabled = true;

        const totalPins = targetApps.length * pinsToGenerate;
        const targetLabel = (targetMode === 'organic_droidv' || targetMode === 'droidv') ? `${pinsToGenerate} DroidV Stories` : (targetMode === 'apps' ? '9 Android Apps' : 'All Catalog Items');
        updateStatus('Generating Pin Designs...', `Creating ${totalPins} unique pins for ${targetLabel}...`, 5, true);

        let globalSeed = getGlobalSeedCounter();
        let runIndex = 1;

        for (let ai = 0; ai < targetApps.length; ai++) {
            const app = targetApps[ai];

            for (let i = 0; i < pinsToGenerate; i++) {
                const utmCode = String(globalSeed).padStart(3, '0');
                const { hook: hookText, subtitle: subtitleText, microStory, keywords, article } = getDynamicStoryContent(app);

                const { blob, dataUrl } = await renderPinCanvas(app, hookText, subtitleText, microStory, runIndex, strategyMode, themeSelect);

                // Dynamic URL & Strategy Mode Engine
                const randTerm = ['finance', 'mortgage', 'privacy', 'legal', 'tax', 'audit', 'debt'][Math.floor(Math.random() * 7)];
                const randRef = ['pin', 'feed', 'story', 'idea', 'board'][Math.floor(Math.random() * 5)];
                
                let trackedUrl = "";
                if (strategyMode === 'direct_link') {
                    trackedUrl = app.playStoreUrl;
                    if (app.id === 'droidv' && article && article.url) {
                        trackedUrl = article.url;
                    } else {
                        const urlSeparator = trackedUrl.includes('?') ? '&' : '?';
                        trackedUrl = `${trackedUrl}${urlSeparator}utm_source=pinterest&utm_medium=social&utm_campaign=${campaignName}&utm_term=${randTerm}_${utmCode}&utm_content=${randRef}_${utmCode}`;
                    }
                }
                
                // Dynamic Pinterest Board Name per article category
                let pinBoardName = customBoard;
                if (!pinBoardName || pinBoardName === 'Best Offline Android Apps') {
                    if (app.id === 'droidv' && article && article.category) {
                        pinBoardName = `DroidV - ${article.category}`;
                    } else {
                        pinBoardName = defaultBoard;
                    }
                }
                
                const fileName = `pin_${app.id}_${utmCode}.webp`;
                const itemBadge = article ? article.badge : app.name;
                const pinTitle = `${hookText} (${itemBadge} #${utmCode})`;
                
                let pinDescription = `${hookText} ${subtitleText} ${microStory} Guide: ${article ? article.title : app.name}. Discover how to reclaim privacy and security with 100% on-device local browser processing on DroidV. High-Volume Search Keywords: ${keywords}. #${app.name.replace(/\s+/g, '')} #PrivacyFirst #DroidV #FinancialFreedom #TaxTips #LegalAI`;

                if (strategyMode === 'organic_search') {
                    const searchTarget = app.id === 'droidv' ? 'droidv.com' : `${app.name} on Google Play Store`;
                    pinDescription += `\n\n🔍 HOW TO ACCESS: Search "${searchTarget}" on Google to run this 100% free tool locally in browser RAM without uploading sensitive files!`;
                }

                const pinItem = {
                    id: runIndex,
                    appId: app.id,
                    appName: app.name,
                    fileName,
                    blob,
                    dataUrl,
                    hookText,
                    pinTitle,
                    pinDescription,
                    destinationUrl: trackedUrl,
                    boardName: pinBoardName,
                    utmCode,
                    githubUrl: null,
                    uploaded: false
                };

                generatedPins.push(pinItem);
                renderPinCard(pinItem, generatedPins.length - 1);

                const pct = Math.round((runIndex / totalPins) * 50);
                updateStatus('Rendering Pins...', `Pin #${runIndex} of ${totalPins} — ${app.name}`, pct, true);

                // Allow UI to repaint
                await new Promise(r => setTimeout(r, 10));

                globalSeed++;
                runIndex++;
            }
        }

        updateGlobalSeedCounter(globalSeed);
        pinCounter.textContent = generatedPins.length;
        updateStatus('Pins Generated!', `${generatedPins.length} unique WebP pins ready. Upload to GitHub next.`, 50, false);
        btnUploadGithub.disabled = false;
        if (btnGenerateApps) btnGenerateApps.disabled = false;
        if (btnGenerateDroidVWeb) btnGenerateDroidVWeb.disabled = false;
        if (btnGenerateOrganicSearch) btnGenerateOrganicSearch.disabled = false;

    } catch (err) {
        console.error('Bulk Generation Error:', err);
        updateStatus('Generation Error', `Error: ${err.message}`, 0, false);
        if (btnGenerateApps) btnGenerateApps.disabled = false;
        if (btnGenerateDroidVWeb) btnGenerateDroidVWeb.disabled = false;
        if (btnGenerateOrganicSearch) btnGenerateOrganicSearch.disabled = false;
        alert(`Generation Error: ${err.message}`);
    }
}

// ---- Render Pin Card in Grid ----
function renderPinCard(pin, arrayIndex) {
    const card = document.createElement('div');
    card.className = 'pin-card';
    card.id = `pin-card-${pin.id}`;
    card.style.cursor = 'pointer';
    card.onclick = () => openModalSlider(arrayIndex);

    card.innerHTML = `
        <div class="pin-img-wrapper">
            <img src="${pin.dataUrl}" alt="${pin.pinTitle}" loading="lazy">
            <span class="pin-badge">${pin.appName} (${pin.utmCode})</span>
        </div>
        <div class="pin-details">
            <div class="pin-title">${pin.hookText.substring(0, 80)}...</div>
            <div class="pin-utm">UTM: ${pin.utmCode}</div>
            <span class="pin-status-tag tag-ready" id="status-tag-${pin.id}">Ready for GitHub</span>
        </div>
    `;
    pinsGrid.appendChild(card);
}

// ---- Modal Slider ----
function openModalSlider(index) {
    if (generatedPins.length === 0) return;
    currentModalIndex = index;
    updateModalSlider();
    modalSlider.style.display = 'flex';
}

function updateModalSlider() {
    const pin = generatedPins[currentModalIndex];
    if (!pin) return;
    modalImg.src = pin.dataUrl;
    modalBadge.textContent = `${pin.appName} • ${pin.utmCode}`;
    modalTitle.textContent = pin.pinTitle;
    modalDesc.textContent = pin.pinDescription.substring(0, 200) + '...';
    modalUrl.textContent = pin.destinationUrl;
    modalCounter.textContent = `${currentModalIndex + 1} / ${generatedPins.length}`;
}

function closeModal() {
    modalSlider.style.display = 'none';
}

// ---- GitHub Upload ----
async function handleUploadToGithub() {
    if (generatedPins.length === 0) return;

    btnUploadGithub.disabled = true;
    updateStatus('Uploading to GitHub...', 'Connecting to GitHub API...', 55, true);

    let uploadedCount = 0;
    const total = generatedPins.length;

    for (let i = 0; i < total; i++) {
        const pin = generatedPins[i];

        try {
            const base64Content = await blobToBase64(pin.blob);
            const path = `images/${pin.fileName}`;
            const apiUrl = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${path}`;

            let existingSha = null;
            try {
                const getRes = await fetch(apiUrl, {
                    headers: {
                        'Authorization': `token ${GITHUB_CONFIG.token}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });
                if (getRes.ok) {
                    const getData = await getRes.json();
                    existingSha = getData.sha;
                }
            } catch (_) {}

            const payload = {
                message: `Add Pinterest Pin: ${pin.fileName}`,
                content: base64Content,
                branch: GITHUB_CONFIG.branch
            };
            if (existingSha) payload.sha = existingSha;

            const putRes = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${GITHUB_CONFIG.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.github.v3+json'
                },
                body: JSON.stringify(payload)
            });

            if (putRes.ok) {
                pin.githubUrl = `https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}/images/${pin.fileName}`;
                pin.uploaded = true;
                uploadedCount++;

                const tagEl = document.getElementById(`status-tag-${pin.id}`);
                if (tagEl) {
                    tagEl.className = 'pin-status-tag tag-uploaded';
                    tagEl.textContent = 'Uploaded ✓';
                }
            } else {
                const errText = await putRes.text();
                console.error(`Failed: ${pin.fileName}`, errText);
            }
        } catch (err) {
            console.error(`Error: ${pin.fileName}`, err);
        }

        const pct = 50 + Math.round(((i + 1) / total) * 45);
        updateStatus('Uploading...', `Uploaded ${uploadedCount} of ${total} images`, pct, true);
        await new Promise(r => setTimeout(r, 50));
    }

    if (uploadedCount > 0) {
        updateStatus('GitHub Sync Complete!', `${uploadedCount} images live on GitHub. Download CSV or Post to Tumblr now!`, 100, false);
        btnDownloadCsv.disabled = false;
        btnPostTumblr.disabled = false;
    } else {
        updateStatus('Upload Failed', 'Check GitHub token permissions or network.', 50, false);
        btnUploadGithub.disabled = false;
    }
}

// ---- Blob to Base64 ----
function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// ---- CSV Download ----
function handleDownloadCsv() {
    if (generatedPins.length === 0) return;

    const rows = [['Title', 'Media URL', 'Pinterest board', 'Description', 'Link']];

    for (const pin of generatedPins) {
        const imageUrl = pin.githubUrl || `https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/main/images/${pin.fileName}`;
        
        // Clean multiline text fields for strict CSV RFC 4180 compliance
        const cleanTitle = pin.pinTitle ? pin.pinTitle.replace(/\r?\n|\r/g, ' ').replace(/"/g, '""').trim() : '';
        const cleanDesc = pin.pinDescription ? pin.pinDescription.replace(/\r?\n|\r/g, ' ').replace(/"/g, '""').trim() : '';
        const cleanBoard = pin.boardName ? pin.boardName.replace(/\r?\n|\r/g, ' ').replace(/"/g, '""').trim() : 'DroidV Viral Stories & Rights';
        
        let destLink = (pin.destinationUrl && pin.destinationUrl.trim() !== '') ? pin.destinationUrl.trim() : '';

        rows.push([
            `"${cleanTitle}"`,
            `"${imageUrl}"`,
            `"${cleanBoard}"`,
            `"${cleanDesc}"`,
            `"${destLink}"`
        ]);
    }

    const csvContent = rows.map(r => r.join(',')).join('\r\n');
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pinterest_bulk_upload_${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    updateStatus('CSV Downloaded!', 'Upload pinterest_bulk_upload.csv to Pinterest Bulk Uploader!', 100, false);
}

// ---- Delete All Images from GitHub ----
async function handleDeleteGithubImages() {
    const confirmDelete = confirm('Are you sure you want to delete all uploaded pin images from your GitHub repository (images/ folder)?');
    if (!confirmDelete) return;

    btnDeleteGithub.disabled = true;
    updateStatus('Deleting GitHub Images...', 'Fetching list of images from GitHub repository...', 10, true);

    try {
        const repoContentsUrl = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/images`;
        const res = await fetch(repoContentsUrl, {
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!res.ok) {
            if (res.status === 404) {
                updateStatus('No Images Found', 'GitHub images/ directory is already empty.', 100, false);
                btnDeleteGithub.disabled = false;
                alert('No images found in GitHub repository to delete.');
                return;
            }
            throw new Error(`GitHub API Error (${res.status}): ${await res.text()}`);
        }

        const files = await res.json();
        const imageFiles = Array.isArray(files) ? files.filter(f => f.type === 'file') : [];

        if (imageFiles.length === 0) {
            updateStatus('No Images Found', 'GitHub images/ directory is already empty.', 100, false);
            btnDeleteGithub.disabled = false;
            alert('No images found in GitHub repository to delete.');
            return;
        }

        let deletedCount = 0;
        const total = imageFiles.length;

        for (let i = 0; i < total; i++) {
            const file = imageFiles[i];
            const delUrl = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${file.path}`;

            const delRes = await fetch(delUrl, {
                method: 'DELETE',
                headers: {
                    'Authorization': `token ${GITHUB_CONFIG.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.github.v3+json'
                },
                body: JSON.stringify({
                    message: `Delete image ${file.name} via Panel`,
                    sha: file.sha,
                    branch: GITHUB_CONFIG.branch
                })
            });

            if (delRes.ok) {
                deletedCount++;
            }

            const pct = 10 + Math.round(((i + 1) / total) * 90);
            updateStatus('Deleting GitHub Images...', `Deleted ${deletedCount} of ${total} images`, pct, true);
            await new Promise(r => setTimeout(r, 50));
        }

        updateStatus('GitHub Cleaned!', `Successfully deleted ${deletedCount} images from GitHub!`, 100, false);
        alert(`Successfully deleted ${deletedCount} images from GitHub repository!`);
    } catch (err) {
        console.error('Delete Error:', err);
        updateStatus('Delete Error', `Error: ${err.message}`, 0, false);
        alert(`Delete Error: ${err.message}`);
    } finally {
        btnDeleteGithub.disabled = false;
    }
}

// ---- Tumblr OAuth & Post Engine ----
const TUMBLR_CONFIG = {
    apiKey: 'nOCvJbzN8dbE0mEkXJrpOGM1gtx3MGJsPTekoS4VBa1Y3aNIOk'
};

async function handlePostToTumblr() {
    if (generatedPins.length === 0) return;

    btnPostTumblr.disabled = true;
    updateStatus('Posting to Tumblr...', 'Preparing Tumblr photo post payload...', 50, true);

    let postedCount = 0;
    const total = generatedPins.length;

    for (let i = 0; i < total; i++) {
        const pin = generatedPins[i];
        // Tumblr Photo Post URL Construction
        const rawGithubUrl = `https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/main/images/${pin.fileName}`;
        const jsdelivrUrl = `https://cdn.jsdelivr.net/gh/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}@main/images/${pin.fileName}`;
        const liveImgUrl = pin.githubUrl || rawGithubUrl;

        // Caption with embedded HTML Image tag and Play Store Link
        const captionHtml = `<p><img src="${liveImgUrl}" alt="${pin.appName} Visual" style="max-width:100%; border-radius:12px;" /></p><p><strong>${pin.pinTitle}</strong></p><p>${pin.pinDescription}</p><p>👉 <strong>Play Store:</strong> <a href="${pin.destinationUrl}">${pin.destinationUrl}</a></p>`;
        
        // Tumblr share intent widget (Photo post type)
        const tumblrShareUrl = `https://www.tumblr.com/widgets/share/tool?posttype=photo&source=${encodeURIComponent(liveImgUrl)}&photo=${encodeURIComponent(liveImgUrl)}&caption=${encodeURIComponent(captionHtml)}&clickthru=${encodeURIComponent(pin.destinationUrl)}&tags=${encodeURIComponent(pin.appName + ',DroidV,PrivacyFirst,AndroidApps')}`;

        // Open Tumblr Share Tool in separate popup window per pin
        window.open(tumblrShareUrl, `tumblr_win_${i}`, 'width=560,height=620,resizable=yes,scrollbars=yes');
        postedCount++;

        const pct = 50 + Math.round((postedCount / total) * 50);
        updateStatus('Publishing on Tumblr...', `Opened Tumblr Post ${postedCount} of ${total}`, pct, true);
        await new Promise(r => setTimeout(r, 1200));
    }

    updateStatus('Tumblr Sharing Complete!', `Shared ${postedCount} pins to Tumblr!`, 100, false);
    btnPostTumblr.disabled = false;
}

// ---- Custom Story Generator Handler ----
async function handleGenerateCustomStories() {
    try {
        const storiesCountInput = document.getElementById('customStoryCount');
        const count = parseInt(storiesCountInput ? storiesCountInput.value : '50', 10) || 50;

        const storiesList = window.CUSTOM_STORIES || [];
        if (storiesList.length === 0) {
            alert('No custom stories found in stories/custom_stories.js!');
            return;
        }

        generatedPins = [];
        pinsGrid.innerHTML = '';
        btnUploadGithub.disabled = true;
        btnDownloadCsv.disabled = true;

        let globalSeed = getGlobalSeedCounter();
        const totalPins = count;

        updateStatus('Rendering Custom Story Pins...', `Generating ${totalPins} Custom Story Pins...`, 5, true);

        // Check if user selected local background files manually
        const fileInput = document.getElementById('customBgFileInput');
        let userImages = [];
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            for (let f = 0; f < fileInput.files.length; f++) {
                const file = fileInput.files[f];
                const dataUrl = await new Promise((res) => {
                    const r = new FileReader();
                    r.onload = (e) => res(e.target.result);
                    r.readAsDataURL(file);
                });
                const img = await loadImage(dataUrl);
                if (img) userImages.push(img);
            }
        }

        for (let i = 0; i < totalPins; i++) {
            const story = storiesList[i % storiesList.length];
            const utmCode = String(globalSeed).padStart(3, '0');
            const customImg = userImages.length > 0 ? userImages[i % userImages.length] : null;

            const { blob, dataUrl } = await renderCustomStoryPinCanvas(story, utmCode, customImg);

            const fileName = `pin_custom_${story.feature}_${utmCode}.webp`;
            const pinTitle = `${story.title} (#${utmCode})`;

            let pinDescription = `${story.storyText}\n\n🔍 HOW TO AUDIT: Search "droidv.com" on Google to audit your rights 100% privately in your browser memory without uploading sensitive files.\n\nKeywords: ${story.keywords} #DroidV #NoSurprisesAct #PrivacyFirst #MedicalDebtRelief`;

            const pinItem = {
                id: i + 1,
                appId: 'droidv',
                appName: `Custom Story (${story.feature})`,
                fileName,
                blob,
                dataUrl,
                hookText: story.title,
                pinTitle,
                pinDescription,
                destinationUrl: '', // No-link organic search mode (story text contains Google search callout)
                boardName: 'DroidV Viral Stories & Rights',
                utmCode,
                githubUrl: null,
                uploaded: false
            };

            generatedPins.push(pinItem);
            renderPinCard(pinItem, generatedPins.length - 1);

            const pct = Math.round(((i + 1) / totalPins) * 50);
            updateStatus('Rendering Custom Story Pins...', `Pin #${i + 1} of ${totalPins} rendered (${story.badge || story.feature})`, pct, true);

            await new Promise(r => setTimeout(r, 10));
            globalSeed++;
        }

        updateGlobalSeedCounter(globalSeed);
        pinCounter.textContent = generatedPins.length;
        updateStatus('Custom Pins Ready!', `${generatedPins.length} Custom Story Pins ready. Click Upload to GitHub or Download CSV.`, 50, false);
        btnUploadGithub.disabled = false;
        btnDownloadCsv.disabled = false;

    } catch (err) {
        console.error('Custom Story Generation Error:', err);
        updateStatus('Generation Error', `Error: ${err.message}`, 0, false);
        alert(`Generation Error: ${err.message}`);
    }
}

// ---- Init on DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
    // Canvas
    canvas = document.getElementById('pinCanvas');
    ctx = canvas.getContext('2d');

    // Grid & counter
    pinsGrid = document.getElementById('pinsGrid');
    pinCounter = document.getElementById('pinCounter');

    // Status elements
    statusText = document.getElementById('statusText');
    statusDetail = document.getElementById('statusDetail');
    progressBar = document.getElementById('progressBar');
    statusDot = document.getElementById('statusDot');

    // Buttons
    btnGenerateApps = document.getElementById('btnGenerateApps');
    btnGenerateDroidVWeb = document.getElementById('btnGenerateDroidVWeb');
    btnGenerateOrganicSearch = document.getElementById('btnGenerateOrganicSearch');
    const btnGenerateCustomStories = document.getElementById('btnGenerateCustomStories');
    btnUploadGithub = document.getElementById('btnUploadGithub');
    btnDownloadCsv = document.getElementById('btnDownloadCsv');
    btnPostTumblr = document.getElementById('btnPostTumblr');
    btnDeleteGithub = document.getElementById('btnDeleteGithub');

    // Tab Elements
    const tabCustomStories = document.getElementById('tabCustomStories');
    const tabAppsEngine = document.getElementById('tabAppsEngine');
    const customStoriesPanel = document.getElementById('customStoriesPanel');
    const appsEnginePanel = document.getElementById('appsEnginePanel');

    if (tabCustomStories && tabAppsEngine) {
        tabCustomStories.addEventListener('click', () => {
            tabCustomStories.classList.add('active');
            tabAppsEngine.classList.remove('active');
            if (customStoriesPanel) customStoriesPanel.style.display = 'flex';
            if (appsEnginePanel) appsEnginePanel.style.display = 'none';
        });

        tabAppsEngine.addEventListener('click', () => {
            tabAppsEngine.classList.add('active');
            tabCustomStories.classList.remove('active');
            if (appsEnginePanel) appsEnginePanel.style.display = 'flex';
            if (customStoriesPanel) customStoriesPanel.style.display = 'none';
        });
    }

    // Inputs
    pinsPerAppInput = document.getElementById('pinsPerApp');
    droidvStoryCountInput = document.getElementById('droidvStoryCount');
    utmCampaignInput = document.getElementById('utmCampaign');
    boardNameInput = document.getElementById('boardName');
    pinStrategyModeSelect = document.getElementById('pinStrategyMode');
    imageThemeSelect = document.getElementById('imageThemeSelect');

    // Modal
    modalSlider = document.getElementById('modalSlider');
    modalImg = document.getElementById('modalImg');
    modalBadge = document.getElementById('modalBadge');
    modalTitle = document.getElementById('modalTitle');
    modalDesc = document.getElementById('modalDesc');
    modalUrl = document.getElementById('modalUrl');
    modalCounter = document.getElementById('modalCounter');
    modalClose = document.getElementById('modalClose');
    sliderPrev = document.getElementById('sliderPrev');
    sliderNext = document.getElementById('sliderNext');

    // Button listeners
    if (btnGenerateCustomStories) btnGenerateCustomStories.addEventListener('click', handleGenerateCustomStories);
    if (btnGenerateOrganicSearch) btnGenerateOrganicSearch.addEventListener('click', () => handleBulkGenerate('organic_droidv'));
    if (btnGenerateApps) btnGenerateApps.addEventListener('click', () => handleBulkGenerate('apps'));
    if (btnGenerateDroidVWeb) btnGenerateDroidVWeb.addEventListener('click', () => handleBulkGenerate('droidv'));
    btnUploadGithub.addEventListener('click', handleUploadToGithub);
    btnDownloadCsv.addEventListener('click', handleDownloadCsv);
    if (btnPostTumblr) btnPostTumblr.addEventListener('click', handlePostToTumblr);
    btnDeleteGithub.addEventListener('click', handleDeleteGithubImages);

    // Modal listeners
    modalClose.addEventListener('click', closeModal);
    modalSlider.addEventListener('click', (e) => {
        if (e.target === modalSlider) closeModal();
    });
    sliderPrev.addEventListener('click', () => {
        currentModalIndex = (currentModalIndex - 1 + generatedPins.length) % generatedPins.length;
        updateModalSlider();
    });
    sliderNext.addEventListener('click', () => {
        currentModalIndex = (currentModalIndex + 1) % generatedPins.length;
        updateModalSlider();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modalSlider.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                currentModalIndex = (currentModalIndex - 1 + generatedPins.length) % generatedPins.length;
                updateModalSlider();
            } else if (e.key === 'ArrowRight') {
                currentModalIndex = (currentModalIndex + 1) % generatedPins.length;
                updateModalSlider();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });

    // Show seed counter in status
    const seed = getGlobalSeedCounter();
    updateStatus('Ready to Generate', `Session seed starts at #${String(seed).padStart(3,'0')}. Set quantity & click "Generate Custom BG Story Pins".`, 0, false);

    console.log('DroidV Pinterest Bulk Engine initialized with Custom Story Mode. Seed counter:', seed);
});
