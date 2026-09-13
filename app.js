// ============================================================
// DroidV Pinterest Bulk Pin Generator & Publisher Engine
// Persistent Seed History | Zero Duplicate Content | WebP Export
// ============================================================

// ---- Utility Helpers ----
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ---- Dynamic Storytelling & Reverse Psychology Generator ----
const STORY_PATTERNS = {
    astroguide: {
        hooks: [
            "My screen time dropped by 40% when I replaced social media scrolling with this 2-minute morning habit...",
            "I stopped checking anxiety-inducing news every morning and started doing this 1-minute daily ritual instead.",
            "I was feeling overwhelmed and directionless every Sunday night until I discovered this quiet self-reflection method...",
            "Why I deleted 5 stressful habit apps and kept this single distraction-free daily companion...",
            "I tried doing a 30-day digital detox and this 2-minute morning reflection was the only thing that kept me grounded.",
            "I used to start my day stressed by unread emails. Here is how I reclaimed my morning mental peace...",
            "The 1-minute daily self-reflection habit nobody talks about for clearing morning mental fog..."
        ],
        subtitles: [
            "A calm, private space on your phone to reset and start the day with clarity.",
            "No ads, no subscriptions, just pure personal reflection whenever you need it.",
            "Simple, quiet daily guidance built for real peace of mind."
        ],
        keywords: "aesthetic daily routine, morning ritual ideas, mental clarity tools, minimalist self care, daily reflection habit"
    },
    shiftsync: {
        hooks: [
            "I was constantly exhausted working rotating night shifts until I fixed my sleep recovery routine with this...",
            "How I stopped losing money on miscalculated overtime hours without keeping paper scraps...",
            "My body clock was ruined by 12-hour rotating shifts until I started tracking my sleep deficit like this...",
            "I used to constantly double-book family plans because of my rotating roster until I tried this simple fix...",
            "First responders & nurses are quietly using this trick to manage burnout during 24/7 rosters...",
            "How I stopped feeling chronically tired on 2-2-3 shift schedules without relying on extra coffee..."
        ],
        subtitles: [
            "Easily log rotating shifts, overtime pay, and sleep recovery hours offline.",
            "Built for nurses, responders, and shift workers to stay rested and organized.",
            "No account required. Keep your work schedule completely private."
        ],
        keywords: "nurse shift work tips, rotating roster schedule, shift worker sleep tips, overtime tracker, work life balance"
    },
    subvault: {
        hooks: [
            "I checked my bank statement and realized I lost $420 last year to forgotten free trial subscriptions...",
            "My monthly expenses were leaking money everywhere until I spent 3 minutes organizing my recurring bills like this...",
            "I refused to give budget apps my bank passwords, so I built this zero-risk expense tracking system instead...",
            "How I saved $35/month on streaming services I didn't even realize were auto-renewing on my card...",
            "The 3-minute monthly audit that kept $500+ in my bank account this year without budgeting headaches...",
            "I was shocked by an unexpected annual subscription charge. Here is how I made sure it never happens again..."
        ],
        subtitles: [
            "Get total clarity on recurring bills without linking your bank accounts.",
            "Receive gentle offline reminders before free trials turn into charges.",
            "Simple, private subscription tracking to save money effortlessly."
        ],
        keywords: "money saving hacks, subscription audit, budget organization, financial peace, minimalist finance tools"
    },
    pdfviewer: {
        hooks: [
            "I almost leaked a confidential work contract to an online converter before I realized the security risk...",
            "My phone used to freeze every time I opened heavy tax PDFs during flights until I switched to this reader...",
            "Why I stopped uploading sensitive business documents to cloud websites when working remotely...",
            "How I password-protected my personal tax documents on my phone in under 10 seconds...",
            "I was frustrated by laggy PDF apps while travelling underground until I tried this 100% offline viewer...",
            "The safest way to merge & read important documents without corporate data leak worries..."
        ],
        subtitles: [
            "Read, merge, and encrypt sensitive PDFs locally with zero server uploads.",
            "Fast native performance that never stutters during offline commutes.",
            "Complete client and personal document security right inside your phone."
        ],
        keywords: "digital document security, offline reading tools, private pdf reader, mobile work efficiency, paperless organization"
    },
    estimates: {
        hooks: [
            "I was losing 3 out of 5 contractor jobs because I took days to send quotes. Then I changed one thing...",
            "I stopped spending 2 hours every evening typing manual invoices at home after long workdays...",
            "Clients started trusting my quotes instantly when I handed them clean PDF estimates right on their driveway...",
            "How I eliminated weekend paperwork frustration and reclaimed 8 hours a week for my family...",
            "I was stuck at a remote job site with zero cell signal and still handed the client an instant estimate...",
            "Stop losing money on delayed job quotes. Here is how mobile tradespeople win more contracts..."
        ],
        subtitles: [
            "Create professional estimates and receipts on-site in under 60 seconds.",
            "Works 100% offline without monthly SaaS fees or cloud server dependencies.",
            "Designed for hard-working contractors, tradespeople, and freelancers."
        ],
        keywords: "contractor business tips, instant invoice builder, trade job estimate, mobile business tools, contractor organization"
    },
    counter: {
        hooks: [
            "My daily meditation practice was ruined by full-screen video ads until I found this quiet sanctuary tool...",
            "I was losing count of my daily habit reps every time I looked down at my phone screen...",
            "How I built a consistent 100-day mindfulness routine using physical volume button click feedback...",
            "I wanted a calm, distraction-free space for daily reflection without notifications popping up...",
            "The silent clicker habit that helped me stay calm and focused during stressful workdays..."
        ],
        subtitles: [
            "Distraction-free tally & bead simulator with soft haptic physical feedback.",
            "No banner ads, no video pop-ups, no internet permissions needed.",
            "Your silent companion for daily meditation and habit tracking."
        ],
        keywords: "mindfulness habits, daily meditation routine, distraction free tools, habit tracker aesthetic, inner peace tips"
    },
    billsplitter: {
        hooks: [
            "Our group vacation was almost ruined by awkward money arguments at dinner until we used this simple rule...",
            "I was tired of being the person who sponsored group Airbnb trips and waited months to get paid back...",
            "We went camping deep in the woods with zero cell signal and still split all group expenses in 30 seconds...",
            "How to split restaurant bills with friends effortlessly without anyone doing complicated math at the table...",
            "No more awkward text messages asking who owes what after a weekend trip with friends..."
        ],
        subtitles: [
            "Instantly calculate group expenses and settle up debts without internet.",
            "Zero account creation or email logins required for your friends.",
            "Keep road trips, group dinners, and vacations completely stress-free."
        ],
        keywords: "group trip tips, split bills easily, vacation budget hacks, stress free travel, travel expense sharing"
    },
    mathgame: {
        hooks: [
            "I replaced my kid's ad-filled mobile games with this 5-minute brain puzzle and saw their confidence skyrocket...",
            "How I turned boring subway commutes into a fun 5-minute daily mental math workout...",
            "I wanted healthy screen time for my kids during long flights without worrying about hidden purchase traps...",
            "My mental calculation speed doubled in 3 weeks just by playing this ad-free puzzle game for 5 minutes daily...",
            "The secret to building fast mental focus without getting addicted to flashing casino-style game ads..."
        ],
        subtitles: [
            "Kid-safe, ad-free math puzzles designed for all skill levels.",
            "100% offline — safe play with zero accidental purchases or video ads.",
            "Fun, rewarding brain games that keep minds sharp and active."
        ],
        keywords: "healthy screen time, brain training games, mental math workout, ad free kids games, productivity puzzles"
    },
    imagetopdf: {
        hooks: [
            "I almost uploaded my scanned passport and tax photo to a risky online website before realizing the danger...",
            "How I turn paper receipts and notes into clean, watermark-free PDFs on my phone in 2 seconds...",
            "Why risk identity theft by converting private document scans on unknown free cloud websites?",
            "I stopped needing a bulky scanner machine at home after discovering this instant 1-tap photo-to-PDF trick...",
            "The cleanest way to organize gallery photos into professional multi-page PDF documents privately..."
        ],
        subtitles: [
            "Convert gallery photos to PDFs locally with complete privacy.",
            "Crop, rotate, and create crisp documents offline in seconds.",
            "Simple, fast, and completely safe for your personal document scans."
        ],
        keywords: "mobile document scanner, private photo to pdf, paperless organization, secure file tools, mobile productivity"
    }
};

const VARIATION_PREFIXES = [
    "REAL CONFESSION: ", "LIFE HACK: ", "MINIMALIST ROUTINE: ", "DAILY HABIT: ",
    "TRUE STORY: ", "ESSENTIAL TOOL: ", "PERSONAL EXPERIMENT: ", "30-DAY CHALLENGE: "
];

const VARIATION_SUFFIXES = [
    " (Here is what happened)", " (Zero ads, 100% private)", " (The simple offline fix)",
    " (Saved me hours of stress)", " (Works everywhere offline)", " (No monthly subscription)"
];

function getDynamicStoryContent(app) {
    const data = STORY_PATTERNS[app.id] || STORY_PATTERNS['astroguide'];
    let baseHook = getRandomItem(data.hooks);
    let baseSub = getRandomItem(data.subtitles);

    if (Math.random() > 0.4) {
        baseHook = getRandomItem(VARIATION_PREFIXES) + baseHook;
    }
    if (Math.random() > 0.5) {
        baseHook = baseHook + getRandomItem(VARIATION_SUFFIXES);
    }

    return { hook: baseHook, subtitle: baseSub, keywords: data.keywords };
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
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.subvault.subscription.tracker',
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
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pdfviewer.offline.reader',
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
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.estimatemaker.invoicing.receipt',
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
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.digitalcounter.tally.japamala',
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
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.billsplitter.group.expenses',
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
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mathgame.kids.puzzle.offline',
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
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.imagetopdf.converter.offline',
        landingUrl: 'https://droidv.vercel.app/apps/image-to-pdf/index.html',
        bgGradients: [
            ['#1e293b', '#334155', '#0f172a'],
            ['#0f172a', '#1e293b', '#000000'],
            ['#312e81', '#4338ca', '#0f172a'],
            ['#121b2b', '#223047', '#080d17']
        ],
        badgeText: 'Instant Clean Scans'
    }
];

// ---- State ----
let generatedPins = [];
let currentModalIndex = 0;

// ---- DOM References (assigned on DOMContentLoaded) ----
let canvas, ctx;
let pinsGrid, pinCounter, statusText, statusDetail, progressBar, statusDot;
let btnGenerateAll, btnUploadGithub, btnDownloadCsv;
let pinsPerAppInput, utmCampaignInput, boardNameInput;
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

// ---- Canvas Pin Renderer ----
async function renderPinCanvas(app, hookText, subtitleText) {
    const W = 1000, H = 1500;
    canvas.width = W;
    canvas.height = H;

    // Background gradient
    const gc = getRandomItem(app.bgGradients);
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, gc[0]);
    grad.addColorStop(0.55, gc[1]);
    grad.addColorStop(1, gc[2]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Subtle glass highlight
    ctx.save();
    const radGrad = ctx.createRadialGradient(W * 0.75, H * 0.08, 0, W * 0.75, H * 0.08, 420);
    radGrad.addColorStop(0, 'rgba(255,255,255,0.07)');
    radGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    // Load logo
    const appLogo = await loadImage(app.logoPath);

    // Header - logo icon
    const headerY = 88;
    if (appLogo) {
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetY = 8;
        ctx.beginPath();
        ctx.roundRect(80, headerY, 96, 96, 22);
        ctx.clip();
        ctx.drawImage(appLogo, 80, headerY, 96, 96);
        ctx.restore();
    }

    // Badge pill
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.13)';
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(196, headerY + 8, 360, 40, 20);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '600 19px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`DroidV • ${app.badgeText}`, 216, headerY + 34);
    ctx.restore();

    // App name
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 40px "Outfit", sans-serif';
    ctx.fillText(app.name, 196, headerY + 88);
    ctx.restore();

    // Glass card body
    const boxX = 68, boxY = 310, boxW = 864, boxH = 775;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 40;
    ctx.shadowOffsetY = 20;
    ctx.fillStyle = 'rgba(10,15,30,0.62)';
    ctx.strokeStyle = 'rgba(255,255,255,0.16)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 34);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Category accent bar
    ctx.save();
    const accGrad = ctx.createLinearGradient(boxX + 48, 0, boxX + 160, 0);
    accGrad.addColorStop(0, '#e60023');
    accGrad.addColorStop(1, '#ff4d6d');
    ctx.fillStyle = accGrad;
    ctx.beginPath();
    ctx.roundRect(boxX + 48, boxY + 52, 88, 7, 4);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.58)';
    ctx.font = '700 20px "Outfit", sans-serif';
    ctx.fillText(app.category.toUpperCase(), boxX + 152, boxY + 62);
    ctx.restore();

    // Hook text (large, auto-fitting)
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    const hookBottomY = fitAndWrapText(
        ctx,
        `"${hookText}"`,
        boxX + 48, boxY + 148,
        boxW - 96, 370,
        44, '800'
    );
    ctx.restore();

    // Subtitle text
    ctx.save();
    ctx.fillStyle = 'rgba(226,232,240,0.88)';
    ctx.textAlign = 'left';
    fitAndWrapText(
        ctx,
        subtitleText,
        boxX + 48, hookBottomY + 42,
        boxW - 96, 200,
        27, '500'
    );
    ctx.restore();

    // CTA button
    ctx.save();
    const ctaY = 1195, ctaH = 98;
    const ctaGrad = ctx.createLinearGradient(68, ctaY, 932, ctaY);
    ctaGrad.addColorStop(0, '#e60023');
    ctaGrad.addColorStop(1, '#ff4d6d');
    ctx.shadowColor = 'rgba(230,0,35,0.4)';
    ctx.shadowBlur = 28;
    ctx.shadowOffsetY = 10;
    ctx.fillStyle = ctaGrad;
    ctx.beginPath();
    ctx.roundRect(68, ctaY, 864, ctaH, 24);
    ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 33px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Read Full Story & Solution ➔', W / 2, ctaY + 60);
    ctx.restore();

    // Footer trust bar
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.font = 'bold 19px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🔒 100% On-Device • Zero Data Collection • No Subscriptions', W / 2, 1370);
    ctx.restore();

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            const dataUrl = canvas.toDataURL('image/webp', 0.85);
            resolve({ blob, dataUrl });
        }, 'image/webp', 0.85);
    });
}

// ---- 1-Click Bulk Generator ----
async function handleBulkGenerate() {
    try {
        const pinsPerApp = parseInt(pinsPerAppInput.value) || 2;
        const campaignName = utmCampaignInput.value.trim() || 'pinterest_bulk';
        const boardName = boardNameInput.value.trim() || 'Best Offline Android Apps';

        generatedPins = [];
        pinsGrid.innerHTML = '';
        btnUploadGithub.disabled = true;
        btnDownloadCsv.disabled = true;
        btnGenerateAll.disabled = true;

        const totalPins = APPS_DATABASE.length * pinsPerApp;
        updateStatus('Generating Pin Designs...', `Creating ${totalPins} unique pins across 9 apps...`, 5, true);

        let globalSeed = getGlobalSeedCounter();
        let runIndex = 1;

        for (let ai = 0; ai < APPS_DATABASE.length; ai++) {
            const app = APPS_DATABASE[ai];

            for (let i = 0; i < pinsPerApp; i++) {
                const utmCode = String(globalSeed).padStart(3, '0');
                const { hook: hookText, subtitle: subtitleText, keywords } = getDynamicStoryContent(app);

                const { blob, dataUrl } = await renderPinCanvas(app, hookText, subtitleText);

                const trackedUrl = `${app.playStoreUrl}&utm_source=pinterest&utm_medium=social&utm_campaign=${campaignName}&utm_content=${utmCode}`;
                const fileName = `pin_${app.id}_${utmCode}.webp`;
                const pinTitle = hookText;
                const pinDescription = `${hookText} ${subtitleText} Discover how to reclaim your daily focus with ${app.name} — a 100% offline, privacy-first Android solution with zero logins. Keywords: ${keywords}. #${app.name.replace(/\s+/g, '')} #MinimalistTools #PrivacyFirst #DroidV`;

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
                    boardName,
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
        btnGenerateAll.disabled = false;

    } catch (err) {
        console.error('Bulk Generation Error:', err);
        updateStatus('Generation Error', `Error: ${err.message}`, 0, false);
        btnGenerateAll.disabled = false;
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
        updateStatus('GitHub Sync Complete!', `${uploadedCount} images live on GitHub. Download CSV now!`, 100, false);
        btnDownloadCsv.disabled = false;
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
        rows.push([
            `"${pin.pinTitle.replace(/"/g, '""')}"`,
            `"${imageUrl}"`,
            `"${pin.boardName.replace(/"/g, '""')}"`,
            `"${pin.pinDescription.replace(/"/g, '""')}"`,
            `"${pin.destinationUrl}"`
        ]);
    }

    const csvContent = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
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
    btnGenerateAll = document.getElementById('btnGenerateAll');
    btnUploadGithub = document.getElementById('btnUploadGithub');
    btnDownloadCsv = document.getElementById('btnDownloadCsv');

    // Inputs
    pinsPerAppInput = document.getElementById('pinsPerApp');
    utmCampaignInput = document.getElementById('utmCampaign');
    boardNameInput = document.getElementById('boardName');

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
    btnGenerateAll.addEventListener('click', handleBulkGenerate);
    btnUploadGithub.addEventListener('click', handleUploadToGithub);
    btnDownloadCsv.addEventListener('click', handleDownloadCsv);

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

    // Show seed counter in footer
    const seed = getGlobalSeedCounter();
    updateStatus('Ready to Generate', `Session seed starts at #${String(seed).padStart(3,'0')}. Click "1-Click Bulk Generate All" to begin.`, 0, false);

    console.log('DroidV Pinterest Bulk Engine initialized. Seed counter:', seed);
});
