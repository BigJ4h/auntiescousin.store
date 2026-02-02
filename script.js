/**
 * Advanced Portfolio Application
 * Modern Industrial Design with Interactive Features
 * Modern Industrial Design with Interactive Features
 */

(function() {
    'use strict';
    // Initialize GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // State Management
    const state = {
        cursor: { x: 0, y: 0 },
        physicsEngine: null,
        projects: [
            {
                id: 1,
                title: 'Combat System Architecture',
                description: 'Built a combat system that handles 100+ players fighting simultaneously without lag. The hit detection runs in under 10ms and uses smart caching to avoid redundant calculations.',
                url: 'games/game1.html',
                image: 'https://via.placeholder.com/800x450/1a1a1a/ef4444?text=Combat+System',
                video: null,
                tech: ['Luau', 'Roblox Studio', 'RemoteEvents'],
                stats: ['100+ concurrent players', 'Optimized memory by 20%', 'Sub-10ms hit detection'],
                problem: 'The game needed a combat system that could handle large-scale battles without performance drops. Previous implementations would freeze when 50+ players fought at once.',
                performanceData: {
                    labels: ['Before', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    values: [150, 120, 80, 45, 10]
                },
                codeSnippet: `-- Combat System Core
local CombatSystem = {}
CombatSystem.__index = CombatSystem

function CombatSystem.new(player)
    local self = setmetatable({}, CombatSystem)
    self.player = player
    self.damageCache = {}
    return self
end

function CombatSystem:CalculateDamage(target, weapon)
    local cacheKey = target.UserId .. weapon.id
    if self.damageCache[cacheKey] then
        return self.damageCache[cacheKey]
    end
    
    local damage = weapon.baseDamage * self:GetMultiplier(target)
    self.damageCache[cacheKey] = damage
    return damage
end

return CombatSystem`
            },
            {
                id: 2,
                title: 'Economy & Data Persistence',
                description: 'Created a bulletproof economy system that processes thousands of transactions daily. Zero data loss in production, even during server crashes.',
                url: 'games/game2.html',
                image: 'https://via.placeholder.com/800x450/1a1a1a/ef4444?text=Economy+System',
                video: null,
                tech: ['Luau', 'DataStores', 'RemoteFunctions'],
                stats: ['99.9% uptime', 'Handles 10k+ transactions/day', 'Zero data loss'],
                problem: 'Players were losing currency due to failed saves. The studio needed a system that guaranteed data persistence even when things went wrong.',
                performanceData: {
                    labels: ['Before', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    values: [15, 5, 2, 0.5, 0]
                },
                codeSnippet: `-- Secure Data Store Manager
local DataStoreService = game:GetService("DataStoreService")
local EconomyStore = DataStoreService:GetDataStore("Economy")

local function SavePlayerData(player, data)
    local success, err = pcall(function()
        EconomyStore:SetAsync(player.UserId, data)
    end)
    
    if not success then
        warn("Data save failed:", err)
        -- Retry logic here
    end
end`
            },
            {
                id: 3,
                title: 'UI Framework & Animation System',
                description: 'Built a UI system that stays at 60 FPS no matter how many elements are on screen. Everything is modular so adding new screens takes minutes, not hours.',
                url: 'games/game3.html',
                image: 'https://via.placeholder.com/800x450/1a1a1a/ef4444?text=UI+Framework',
                video: null,
                tech: ['Luau', 'TweenService', 'Roact'],
                stats: ['60 FPS animations', 'Modular component system', 'Zero UI lag'],
                problem: 'The game UI was lagging whenever multiple menus were open. Players complained about stuttering and delayed button responses.',
                performanceData: {
                    labels: ['Before', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    values: [45, 55, 58, 59, 60]
                },
                codeSnippet: `-- Animation Controller
local TweenService = game:GetService("TweenService")

local AnimationController = {}
AnimationController.animations = {}

function AnimationController:Animate(instance, properties, duration)
    local tween = TweenService:Create(
        instance,
        TweenInfo.new(duration, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
        properties
    )
    tween:Play()
    return tween
end`
            },
            {
                id: 4,
                title: 'Networking & Anti-Exploit',
                description: 'Stopped exploiters dead in their tracks. Built a system that catches suspicious activity before it causes damage, with zero false positives.',
                url: 'games/game4.html',
                image: 'https://via.placeholder.com/800x450/1a1a1a/ef4444?text=Networking',
                video: null,
                tech: ['Luau', 'RemoteEvents', 'Rate Limiting'],
                stats: ['99% exploit prevention', 'Sub-50ms latency', 'Scalable architecture'],
                problem: 'Exploiters were ruining the game economy by spawning items and currency. The studio needed protection that wouldn\'t affect legitimate players.',
                performanceData: {
                    labels: ['Before', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    values: [30, 60, 80, 95, 99]
                },
                codeSnippet: `-- Rate Limiter
local RateLimiter = {}
RateLimiter.requests = {}

function RateLimiter:Check(player, action, limit, window)
    local key = player.UserId .. action
    local now = tick()
    
    if not self.requests[key] then
        self.requests[key] = {}
    end
    
    -- Clean old requests
    for i = #self.requests[key], 1, -1 do
        if now - self.requests[key][i] > window then
            table.remove(self.requests[key], i)
        end
    end
    
    if #self.requests[key] >= limit then
        return false
    end
    
    table.insert(self.requests[key], now)
    return true
end`
            },
            {
                id: 5,
                title: 'Modular Ability System',
                description: 'Created an ability system that can handle any type of power or skill. Adding new abilities is just a matter of creating a new module - no need to touch existing code.',
                url: 'games/game5.html',
                image: 'https://via.placeholder.com/800x450/1a1a1a/ef4444?text=Ability+System',
                video: null,
                tech: ['Luau', 'ModuleScripts', 'State Management'],
                stats: ['Unlimited ability types', 'Modular architecture', 'Easy to extend'],
                problem: 'Every new ability required rewriting core systems. The codebase was becoming unmaintainable as more abilities were added.',
                performanceData: {
                    labels: ['Before', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    values: [5, 10, 20, 50, 100]
                },
                codeSnippet: `-- Ability Base Class
local Ability = {}
Ability.__index = Ability

function Ability.new(name, cooldown)
    local self = setmetatable({}, Ability)
    self.name = name
    self.cooldown = cooldown
    self.lastUsed = 0
    return self
end

function Ability:CanUse()
    return tick() - self.lastUsed >= self.cooldown
end

function Ability:Use(player, target)
    if not self:CanUse() then return false end
    self.lastUsed = tick()
    self:Execute(player, target)
    return true
end`
            },
            {
                id: 6,
                title: 'Leaderboard & Analytics',
                description: 'Built a leaderboard that updates in real-time for millions of players. Sorting and ranking happens instantly, even with massive datasets.',
                url: 'games/game6.html',
                image: 'https://via.placeholder.com/800x450/1a1a1a/ef4444?text=Leaderboard',
                video: null,
                tech: ['Luau', 'DataStores', 'OrderedDataStore'],
                stats: ['Real-time updates', 'Handles 1M+ entries', 'Efficient sorting'],
                problem: 'The leaderboard was slow and would sometimes show outdated rankings. With millions of players, the system needed to be fast and accurate.',
                performanceData: {
                    labels: ['Before', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    values: [5000, 2000, 500, 100, 10]
                },
                codeSnippet: `-- Leaderboard Manager
local OrderedDataStore = game:GetService("DataStoreService"):GetOrderedDataStore("Leaderboard")

local LeaderboardManager = {}

function LeaderboardManager:UpdateScore(player, score)
    OrderedDataStore:SetAsync(player.UserId, score)
end

function LeaderboardManager:GetTopPlayers(limit)
    return OrderedDataStore:GetSortedAsync(false, limit)
end`
            }
        ],
        stack: [
            { name: 'Luau', icon: '⚡', category: 'Language', description: 'Type-safe Lua variant' },
            { name: 'Roblox-ts', icon: '🔷', category: 'Language', description: 'TypeScript for Roblox' },
            { name: 'DataStores', icon: '💾', category: 'Persistence', description: 'Secure data storage' },
            { name: 'Knit', icon: '🧩', category: 'Framework', description: 'Service-oriented architecture' },
            { name: 'RemoteEvents', icon: '📡', category: 'Networking', description: 'Client-server communication' },
            { name: 'TweenService', icon: '✨', category: 'Animation', description: 'Smooth interpolations' }
        ],
        process: [
            { number: '01', title: 'Discovery', description: 'Understanding requirements, analyzing game mechanics, and identifying technical challenges.' },
            { number: '02', title: 'Architecture', description: 'Designing scalable systems, defining data structures, and planning the implementation approach.' },
            { number: '03', title: 'Development', description: 'Writing clean, modular code with proper error handling and performance optimization.' },
            { number: '04', title: 'Testing', description: 'Rigorous testing for edge cases, performance profiling, and exploit prevention.' },
            { number: '05', title: 'Deployment', description: 'Production deployment with monitoring, logging, and continuous optimization.' }
        ],
        terminalCommands: [
            { command: 'help', description: 'Show available commands', action: showHelp },
            { command: 'clear', description: 'Clear terminal', action: clearTerminal },
            { command: 'projects', description: 'Navigate to projects section', action: () => navigateToSection('projects') },
            { command: 'contact', description: 'Navigate to contact section', action: () => navigateToSection('contact') },
            { command: 'stack', description: 'Navigate to stack section', action: () => navigateToSection('stack') },
            { command: 'debug', description: 'Toggle wireframe mode', action: toggleWireframe }
        ],
        wireframeMode: false,
        scrollVelocity: 0,
        lastScrollTime: Date.now(),
        lastScrollY: 0
    };

    // DOM Elements
    const $ = {
        preloader: document.getElementById('preloader'),
        preloaderPercentage: document.getElementById('preloaderPercentage'),
        preloader3D: document.getElementById('preloader3D'),
        cursor: document.getElementById('cursor'),
        cursorDot: document.getElementById('cursorDot'),
        fluidCanvas: document.getElementById('fluidCanvas'),
        physicsCanvas: document.getElementById('physicsCanvas'),
        nav: document.getElementById('nav'),
        sidebarNav: document.getElementById('sidebarNav'),
        sidebarIndicator: document.getElementById('sidebarIndicator'),
        commandTerminal: document.getElementById('commandTerminal'),
        terminalInput: document.getElementById('terminalInput'),
        terminalResults: document.getElementById('terminalResults'),
        terminalClose: document.getElementById('terminalClose'),
        commandTrigger: document.getElementById('commandTrigger'),
        bentoGrid: document.getElementById('bentoGrid'),
        stackGrid: document.getElementById('stackGrid'),
        techCategories: document.getElementById('techCategories'),
        techCloudCanvas: document.getElementById('techCloudCanvas'),
        techCloudContainer: document.getElementById('techCloudContainer'),
        tickerTrack: document.getElementById('tickerTrack'),
        projectsGrid: document.getElementById('projectsGrid'),
        arsenalGrid: document.getElementById('arsenalGrid'),
        octahedronContainer: document.getElementById('octahedronContainer'),
        sphereContainer: document.getElementById('sphereContainer'),
        projects3DCanvas: document.getElementById('projects3DCanvas'),
        projects3DContainer: document.getElementById('projects3DContainer'),
        processTimeline: document.getElementById('processTimeline'),
        contactForm: document.getElementById('contactForm'),
        executeBtn: document.getElementById('executeBtn'),
        energyBeamCanvas: document.getElementById('energyBeamCanvas'),
        codeModal: document.getElementById('codeModal'),
        codeModalTitle: document.getElementById('codeModalTitle'),
        codeModalContent: document.getElementById('codeModalContent'),
        codeModalClose: document.getElementById('codeModalClose'),
        codePreviewBtn: document.getElementById('codePreviewBtn'),
        codePreviewPopup: document.getElementById('codePreviewPopup'),
        caseStudyModal: document.getElementById('caseStudyModal'),
        caseStudyContainer: document.getElementById('caseStudyContainer'),
        caseStudyTitle: document.getElementById('caseStudyTitle'),
        caseStudyClose: document.getElementById('caseStudyClose'),
        problemView: document.getElementById('problemView'),
        solutionView: document.getElementById('solutionView'),
        problemText: document.getElementById('problemText'),
        caseStudyCode: document.getElementById('caseStudyCode'),
        performanceGraph: document.getElementById('performanceGraph'),
        sphereContainer: document.getElementById('sphereContainer'),
        sections: document.querySelectorAll('.section'),
        navLinks: document.querySelectorAll('.nav-link'),
        sidebarLinks: document.querySelectorAll('.sidebar-link'),
        body: document.body
    };

    // Custom Cursor - Optimized for performance
    function initCustomCursor() {
        if (!$.cursor || !$.cursorDot) return;

        let cursorX = 0;
        let cursorY = 0;
        let dotX = 0;
        let dotY = 0;

        // Use requestAnimationFrame for smooth updates
        function updateCursor() {
            // Smooth interpolation for main cursor
            cursorX += (state.cursor.x - cursorX) * 0.15;
            cursorY += (state.cursor.y - cursorY) * 0.15;
            
            // Direct follow for dot
            dotX = state.cursor.x;
            dotY = state.cursor.y;

            $.cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
            $.cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;

            requestAnimationFrame(updateCursor);
        }
        updateCursor();

        document.addEventListener('mousemove', (e) => {
            state.cursor.x = e.clientX;
            state.cursor.y = e.clientY;
        }, { passive: true });

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .project-card, .bento-item, .stack-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                $.cursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                $.cursor.classList.remove('hover');
            });
        });

        // Click effect
        document.addEventListener('mousedown', () => {
            $.cursor.classList.add('click');
        });
        document.addEventListener('mouseup', () => {
            $.cursor.classList.remove('click');
        });
    }

    // Physics Background
    function initPhysicsBackground() {
        if (typeof Matter === 'undefined' || !$.physicsCanvas) return;

        const { Engine, Render, World, Bodies, Mouse, MouseConstraint } = Matter;
        
        const engine = Engine.create();
        const render = Render.create({
            canvas: $.physicsCanvas,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: 'transparent',
                pixelRatio: window.devicePixelRatio
            }
        });

        // Create particles
        const particles = [];
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const size = Math.random() * 4 + 2;
            
            const particle = Bodies.circle(x, y, size, {
                restitution: 0.8,
                friction: 0.1,
                density: 0.001,
                render: {
                    fillStyle: '#ef4444',
                    opacity: 0.3
                }
            });
            
            particles.push(particle);
        }

        // Walls
        const walls = [
            Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 1, { isStatic: true }),
            Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 1, { isStatic: true }),
            Bodies.rectangle(0, window.innerHeight / 2, 1, window.innerHeight, { isStatic: true }),
            Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 1, window.innerHeight, { isStatic: true })
        ];
        World.add(engine.world, [...particles, ...walls]);
    
        // Mouse interaction
        const mouse = Mouse.create($.physicsCanvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });
        World.add(engine.world, mouseConstraint);

        // Mouse tracking
        document.addEventListener('mousemove', (e) => {
            const rect = $.physicsCanvas.getBoundingClientRect();
            mouse.position.x = e.clientX - rect.left;
            mouse.position.y = e.clientY - rect.top;
        });

        // Run engine
        Engine.run(engine);
        Render.run(render);

        // Handle resize
        window.addEventListener('resize', () => {
            render.options.width = window.innerWidth;
            render.options.height = window.innerHeight;
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
        });

        state.physicsEngine = engine;
    }

    // Navigation
    function initNavigation() {
        // Scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                $.nav.classList.add('scrolled');
            } else {
                $.nav.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        });

        // Smooth scroll
        $.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                navigateToSection(section);
            });
        });

        // Active section highlighting
        if (typeof ScrollTrigger !== 'undefined') {
            $.sections.forEach(section => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    onEnter: () => {
                        const id = section.id;
                        $.navLinks.forEach(link => {
                            link.classList.toggle('active', link.getAttribute('data-section') === id);
                        });
                    }
                });
            });
        }
    }

    function navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeCommandTerminal();
        }
    }

    // Command Terminal
    function initCommandTerminal() {
        $.commandTrigger.addEventListener('click', openCommandTerminal);
        $.terminalClose.addEventListener('click', closeCommandTerminal);
        
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if ($.commandTerminal.classList.contains('active')) {
                    closeCommandTerminal();
                } else {
                    openCommandTerminal();
                }
            }
            if (e.key === 'Escape' && $.commandTerminal.classList.contains('active')) {
                closeCommandTerminal();
            }
        });
        
        $.terminalInput.addEventListener('input', handleTerminalInput);
        $.terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                executeCommand($.terminalInput.value.trim());
                $.terminalInput.value = '';
            }
        });
    }

    function openCommandTerminal() {
        $.commandTerminal.classList.add('active');
        $.terminalInput.focus();
        renderTerminalResults('Type "help" for available commands.');
    }

    function closeCommandTerminal() {
        $.commandTerminal.classList.remove('active');
        $.terminalInput.value = '';
        $.terminalResults.innerHTML = '';
    }

    function handleTerminalInput(e) {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            renderTerminalResults('Type "help" for available commands.');
            return;
        }

        const matches = state.terminalCommands.filter(cmd => 
            cmd.command.toLowerCase().includes(query)
        );
        
        if (matches.length > 0) {
            let html = '<div class="terminal-result-item">Available commands:</div>';
            matches.forEach(cmd => {
                html += `<div class="terminal-result-item">$ ${cmd.command} - ${cmd.description}</div>`;
            });
            renderTerminalResults(html);
        } else {
            renderTerminalResults(`Command not found: "${query}". Type "help" for available commands.`);
        }
    }

    function executeCommand(command) {
        const cmd = state.terminalCommands.find(c => c.command === command.toLowerCase());
        if (cmd) {
            cmd.action();
            renderTerminalResults(`$ ${command}\n${cmd.description}`);
        } else {
            renderTerminalResults(`$ ${command}\nCommand not found. Type "help" for available commands.`);
        }
    }

    function showHelp() {
        let html = '<div class="terminal-result-item">Available commands:</div>';
        state.terminalCommands.forEach(cmd => {
            html += `<div class="terminal-result-item">$ ${cmd.command} - ${cmd.description}</div>`;
        });
        renderTerminalResults(html);
    }

    function clearTerminal() {
        $.terminalResults.innerHTML = '';
    }

    function changeTheme() {
        // Theme switching logic (if needed)
        renderTerminalResults('$ theme\nTheme switching not implemented yet.');
    }

    function renderTerminalResults(html) {
        $.terminalResults.innerHTML = html;
    }

    // Stack Section
    function renderStack() {
        if (!$.stackGrid) return;

        $.stackGrid.innerHTML = state.stack.map(item => `
            <div class="stack-item" draggable="true">
                <div class="stack-icon">${item.icon}</div>
                <div class="stack-name">${item.name}</div>
                <div class="stack-category">${item.category}</div>
            </div>
        `).join('');

        // Drag and drop
        const stackItems = $.stackGrid.querySelectorAll('.stack-item');
        stackItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.effectAllowed = 'move';
                item.style.opacity = '0.5';
            });
            item.addEventListener('dragend', () => {
                item.style.opacity = '1';
            });
            item.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            });
        });
    }

    // Projects Section

    // Process Timeline
    function renderProcess() {
        if (!$.processTimeline) return;

        $.processTimeline.innerHTML = state.process.map((item, index) => `
            <div class="process-item" data-index="${index}">
                <div class="process-number">${item.number}</div>
                <h3 class="process-title">${item.title}</h3>
                <p class="process-description">${item.description}</p>
            </div>
        `).join('');

        // Scroll animations
        if (typeof ScrollTrigger !== 'undefined') {
            $.processTimeline.querySelectorAll('.process-item').forEach((item, index) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: 'top 80%',
                    onEnter: () => {
                        item.classList.add('visible', 'active');
                        if (index > 0) {
                            item.previousElementSibling?.classList.remove('active');
                        }
                    }
                });
            });
        }
    }

    // Code Modal
    function showCodeModal(title, code) {
        $.codeModalTitle.textContent = title;
        $.codeModalContent.textContent = code;
        $.codeModal.classList.add('active');
    }

    function closeCodeModal() {
        $.codeModal.classList.remove('active');
    }

    $.codeModalClose.addEventListener('click', closeCodeModal);
    $.codeModal.querySelector('.code-modal-overlay').addEventListener('click', closeCodeModal);

    // Contact Form
    function initContactForm() {
        if (!$.contactForm) return;

        $.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData($.contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Validation
            let isValid = true;
            
            if (!data.name || data.name.trim().length < 2) {
                showFormError('name', 'Name must be at least 2 characters');
                isValid = false;
            } else {
                clearFormError('name');
            }

            if (!data.email || !isValidEmail(data.email)) {
                showFormError('email', 'Please enter a valid email address');
                isValid = false;
            } else {
                clearFormError('email');
            }

            if (!data.message || data.message.trim().length < 10) {
                showFormError('message', 'Message must be at least 10 characters');
                isValid = false;
            } else {
                clearFormError('message');
            }

            if (isValid) {
                // Form submission logic here
                console.log('Form submitted:', data);
                alert('Thank you! Your message has been sent.');
                $.contactForm.reset();
            }
        });

        // Real-time validation
        ['name', 'email', 'message'].forEach(field => {
            const input = document.getElementById(field);
            if (input) {
                input.addEventListener('blur', () => {
                    validateField(field, input.value);
                });
                input.addEventListener('input', () => {
                    if (input.classList.contains('error')) {
                        validateField(field, input.value);
                    }
                });
            }
        });
    }

    function validateField(field, value) {
        switch(field) {
            case 'name':
                if (!value || value.trim().length < 2) {
                    showFormError('name', 'Name must be at least 2 characters');
                } else {
                    clearFormError('name');
                }
                break;
            case 'email':
                if (!value || !isValidEmail(value)) {
                    showFormError('email', 'Please enter a valid email address');
                } else {
                    clearFormError('email');
                }
                break;
            case 'message':
                if (!value || value.trim().length < 10) {
                    showFormError('message', 'Message must be at least 10 characters');
                } else {
                    clearFormError('message');
                }
                break;
        }
    }

    function showFormError(field, message) {
        const input = document.getElementById(field);
        const error = document.getElementById(field + 'Error');
        if (input) input.classList.add('error');
        if (error) error.textContent = message;
    }

    function clearFormError(field) {
        const input = document.getElementById(field);
        const error = document.getElementById(field + 'Error');
        if (input) input.classList.remove('error');
        if (error) error.textContent = '';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Scroll Animations
    function initScrollAnimations() {
        if (typeof ScrollTrigger === 'undefined') return;

        // Section reveals
        $.sections.forEach((section, index) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Project cards
        if ($.projectsGrid) {
            gsap.utils.toArray('.project-card').forEach((card, index) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }

        // Stack items
        if ($.stackGrid) {
            gsap.utils.toArray('.stack-item').forEach((item, index) => {
                gsap.from(item, {
                    opacity: 0,
                    scale: 0.8,
                    rotation: -10,
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }
    }
    // Micro-interactions
    function initMicroInteractions() {
        // Button press effect
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                gsap.to(btn, { scale: 0.95, duration: 0.1 });
            });
            btn.addEventListener('mouseup', () => {
                gsap.to(btn, { scale: 1, duration: 0.2, ease: 'back.out(1.7)' });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { scale: 1, duration: 0.2 });
            });
        });
    }

    // Advanced Loading Screen with Stages
    function initPreloader() {
        // Get elements directly if not in $ object (fixes timing issue)
        const preloader = $.preloader || document.getElementById('preloader');
        const preloaderPercentage = $.preloaderPercentage || document.getElementById('preloaderPercentage');
        
        if (!preloader || !preloaderPercentage) {
            showAllSections();
            return;
        }
        
        // Update $ object for consistency
        $.preloader = preloader;
        $.preloaderPercentage = preloaderPercentage;

        // Initialize 3D cube
        let cubeScene, cubeCamera, cubeRenderer, cube;
        if (typeof THREE !== 'undefined' && preloader) {
            const container = document.getElementById('preloader3D');
            if (container) {
                cubeScene = new THREE.Scene();
                cubeCamera = new THREE.PerspectiveCamera(75, 200/200, 0.1, 1000);
                cubeRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                cubeRenderer.setSize(200, 200);
                cubeRenderer.setClearColor(0x000000, 0);
                container.appendChild(cubeRenderer.domElement);

                const geometry = new THREE.BoxGeometry(50, 50, 50);
                const edges = new THREE.EdgesGeometry(geometry);
                const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xef4444 }));
                cubeScene.add(line);
                cubeCamera.position.z = 100;

                function animateCube() {
                    if (line) {
                        line.rotation.x += 0.01;
                        line.rotation.y += 0.01;
                    }
                    cubeRenderer.render(cubeScene, cubeCamera);
                    if (!preloader || !preloader.classList.contains('hidden')) {
                        requestAnimationFrame(animateCube);
                    }
                }
                animateCube();
                cube = line;
            }
        }

        // Initialize 3D progress bar
        let barFill = document.querySelector('.preloader-3d-bar-fill');
        if (!barFill) {
            const bar = document.getElementById('preloader3DBar');
            if (bar) {
                barFill = document.createElement('div');
                barFill.className = 'preloader-3d-bar-fill';
                bar.appendChild(barFill);
            }
        }

        // Stage management
        const stages = [
            { start: 0, end: 30, text: 'BOOTING_KERNEL', line: 1 },
            { start: 30, end: 70, text: 'LOADING_MODULES', line: 2 },
            { start: 70, end: 100, text: 'ESTABLISHING_SECURE_CONNECTION', line: 3 }
        ];
        let currentStage = 0;

        let progress = 0;
        const interval = setInterval(() => {
            let increment = 2;
            if (progress >= 70) increment = 5; // Speed up at stage 3
            
            progress += increment;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }

            // Update stage
            for (let i = 0; i < stages.length; i++) {
                const stage = stages[i];
                if (progress >= stage.start && progress < stage.end && i >= currentStage) {
                    currentStage = i;
                    const selector = '.log-line[data-stage="' + stage.line + '"]';
                    const logLine = document.querySelector(selector);
                    if (logLine) {
                        const allLogLines = document.querySelectorAll('.log-line');
                        for (let j = 0; j < allLogLines.length; j++) {
                            allLogLines[j].style.display = 'none';
                        }
                        logLine.style.display = 'block';
                        logLine.style.opacity = '1';
                    }
                }
            }

            // Update 3D bar
            if (barFill) {
                barFill.style.width = progress + '%';
            }

            if (preloaderPercentage) {
                preloaderPercentage.textContent = Math.floor(progress) + '%';
            }

            if (progress >= 100) {
            setTimeout(() => {
                    // Explode cube
                    if (cube && typeof gsap !== 'undefined') {
                        gsap.to(cube.scale, {
                            x: 0,
                            y: 0,
                            z: 0,
                            duration: 0.5,
                            ease: 'power2.in'
                        });
                    }
                    // Split screen
                    if (preloader) {
                        preloader.classList.add('splitting');
                        setTimeout(() => {
                            preloader.classList.add('hidden');
                            showAllSections();
                            if (typeof gsap !== 'undefined') {
                                gsap.from('.nav', { opacity: 0, y: -20, duration: 0.6, delay: 0.2 });
                                gsap.from('.hero', { opacity: 0, y: 30, duration: 0.8, delay: 0.4 });
                            }
                        }, 800);
                    }
                }, 500);
            }
        }, 50);
    }


    // WebGL Fluid Background
    function initFluidBackground() {
        if (!$.fluidCanvas) return;
        const canvas = $.fluidCanvas;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let time = 0;
        function animate() {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Simple noise-based fluid effect
            for (let y = 0; y < canvas.height; y += 4) {
                for (let x = 0; x < canvas.width; x += 4) {
                    const noise = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.7) * Math.sin(time * 0.5);
                    const alpha = (noise + 1) * 0.1;
                    ctx.fillStyle = `rgba(239, 68, 68, ${alpha})`;
                    ctx.fillRect(x, y, 4, 4);
                }
            }
            requestAnimationFrame(animate);
        }
        animate();

        window.addEventListener('scroll', () => {
            const scrollDelta = Math.abs(window.scrollY - state.lastScrollY);
            const timeDelta = Date.now() - state.lastScrollTime;
            state.scrollVelocity = scrollDelta / timeDelta;
            state.lastScrollY = window.scrollY;
            state.lastScrollTime = Date.now();
        });
    }

    // Bento Grid with Magnetic Effect
    function renderBentoGrid() {
        if (!$.bentoGrid) return;

        $.bentoGrid.innerHTML = state.stack.map(item => `
            <div class="bento-item" data-item="${item.name}">
                <div class="bento-icon">${item.icon}</div>
                <div class="bento-name">${item.name}</div>
                <div class="bento-category">${item.category}</div>
                </div>
        `).join('');

        // Magnetic effect
        const items = $.bentoGrid.querySelectorAll('.bento-item');
        items.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotateX = (y / rect.height) * 10;
                const rotateY = (x / rect.width) * -10;
                
                gsap.to(item, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Social Proof Ticker with Physics
    function initTicker() {
        if (!$.tickerTrack) return;

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;
        let velocity = 0;
        let lastX = 0;
        let lastTime = Date.now();

        $.tickerTrack.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - $.tickerTrack.offsetLeft;
            scrollLeft = $.tickerTrack.scrollLeft;
            $.tickerTrack.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - $.tickerTrack.offsetLeft;
            const walk = (x - startX) * 2;
            $.tickerTrack.scrollLeft = scrollLeft - walk;
            
            const now = Date.now();
            const deltaTime = now - lastTime;
            if (deltaTime > 0) {
                velocity = (e.pageX - lastX) / deltaTime;
            }
            lastX = e.pageX;
            lastTime = now;
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            $.tickerTrack.style.cursor = 'grab';
            
            // Apply inertia
            if (Math.abs(velocity) > 0.1) {
                let momentum = velocity * 100;
                const friction = 0.95;
                const animate = () => {
                    momentum *= friction;
                    $.tickerTrack.scrollLeft -= momentum;
                    if (Math.abs(momentum) > 0.1) {
                        requestAnimationFrame(animate);
                    }
                };
                animate();
            }
        });

        // Auto-scroll
        let autoScroll = 0;
        function tick() {
            if (!isDragging) {
                autoScroll += 0.5;
                $.tickerTrack.style.transform = `translateX(-${autoScroll}px)`;
                if (autoScroll > $.tickerTrack.scrollWidth / 2) {
                    autoScroll = 0;
                }
            }
            requestAnimationFrame(tick);
        }
        tick();
    }

    // Case Study Modal
    function showCaseStudy(project) {
        if (!$.caseStudyModal) return;
        
        $.caseStudyTitle.textContent = project.title;
        $.problemText.textContent = project.problem || 'No problem description available.';
        $.caseStudyCode.textContent = project.codeSnippet;
        $.caseStudyModal.classList.add('active');

        // Toggle buttons
        const toggleBtns = $.caseStudyModal.querySelectorAll('.toggle-btn');
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                toggleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const view = btn.getAttribute('data-view');
                $.problemView.classList.toggle('active', view === 'problem');
                $.solutionView.classList.toggle('active', view === 'solution');
                
                if (view === 'solution' && project.performanceData) {
                    renderPerformanceGraph(project.performanceData);
                }
            });
        });

        if (project.performanceData) {
            renderPerformanceGraph(project.performanceData);
        }
    }

    function closeCaseStudy() {
        if ($.caseStudyModal) {
            $.caseStudyModal.classList.remove('active');
        }
    }

    function renderPerformanceGraph(data) {
        if (!$.performanceGraph || typeof Chart === 'undefined') return;
        
        const ctx = $.performanceGraph.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Response Time (ms)',
                    data: data.values,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: '#a0a0a0' }
                    },
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: '#a0a0a0' }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // Wireframe Mode
    function toggleWireframe() {
        state.wireframeMode = !state.wireframeMode;
        if (state.wireframeMode) {
            $.body.classList.add('wireframe');
            renderTerminalResults('$ debug\nWireframe mode enabled. All elements now show bounding boxes.');
        } else {
            $.body.classList.remove('wireframe');
            renderTerminalResults('$ debug\nWireframe mode disabled.');
        }
    }

    // Update command terminal functions
    function changeTheme() {
        renderTerminalResults('$ theme\nTheme switching not implemented yet.');
    }



    // Show all sections - defined early so it can be called from preloader
    function showAllSections() {
        if (!$.sections || $.sections.length === 0) return;
        $.sections.forEach(section => {
            section.classList.add('visible');
        });
        // Also ensure main content is visible
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.opacity = '1';
            mainContent.style.visibility = 'visible';
        }
        // Show nav
        if ($.nav) {
            $.nav.style.opacity = '1';
        }
    }

    // 3D Octahedron Follower
    function init3DOctahedron() {
        if (typeof THREE === 'undefined' || !$.octahedronContainer) return;
        
        const container = $.octahedronContainer;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Create octahedron wireframe
        const vertices = [
            0, 50, 0,    // top
            50, 0, 0,   // front right
            0, 0, 50,   // front
            -50, 0, 0,  // back left
            0, 0, -50,  // back
            0, -50, 0   // bottom
        ];
        
        const indices = [
            0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1,
            5, 2, 1, 5, 3, 2, 5, 4, 3, 5, 1, 4
        ];
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();
        
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ 
            color: 0xef4444,
            linewidth: 2
        }));
        scene.add(line);
        camera.position.z = 150;

        let targetX = 0, targetY = 0;
        document.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 80;
            targetY = ((e.clientY - rect.top) / rect.height - 0.5) * -80;
        }, { passive: true });

        function animate() {
            line.position.x += (targetX - line.position.x) * 0.05;
            line.position.y += (targetY - line.position.y) * 0.05;
            line.rotation.x += 0.005;
            line.rotation.y += 0.005;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Magnetic Button Effect with Spring Physics
    function initMagneticButtons() {
        const magneticButtons = document.querySelectorAll('.magnetic-btn');
        const stiffness = 400;
        const damping = 30;
        
        magneticButtons.forEach(btn => {
            let x = 0, y = 0;
            let vx = 0, vy = 0;
            
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const dx = e.clientX - centerX;
                const dy = e.clientY - centerY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    const targetX = dx * force * 0.3;
                    const targetY = dy * force * 0.3;
                    
                    // Spring physics
                    const fx = (targetX - x) * stiffness;
                    const fy = (targetY - y) * stiffness;
                    
                    vx += fx * 0.016;
                    vy += fy * 0.016;
                    vx *= damping / (damping + 1);
                    vy *= damping / (damping + 1);
                    
                    x += vx * 0.016;
                    y += vy * 0.016;
                    
                    btn.style.transform = `translate(${x}px, ${y}px)`;
                }
            }, { passive: true });
            
            btn.addEventListener('mouseleave', () => {
                // Spring back
                const springBack = () => {
                    const fx = -x * stiffness;
                    const fy = -y * stiffness;
                    
                    vx += fx * 0.016;
                    vy += fy * 0.016;
                    vx *= damping / (damping + 1);
                    vy *= damping / (damping + 1);
                    
                    x += vx * 0.016;
                    y += vy * 0.016;
                    
                    btn.style.transform = `translate(${x}px, ${y}px)`;
                    
                    if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
                        requestAnimationFrame(springBack);
                    } else {
                        x = 0;
                        y = 0;
                        vx = 0;
                        vy = 0;
                        btn.style.transform = 'translate(0, 0)';
                    }
                };
                springBack();
            });
        });
    }

    // Live Stats with Region Detection
    function initLiveStats() {
        const regionEl = document.getElementById('currentRegion');
        if (regionEl) {
            try {
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const city = timezone.split('/').pop().replace('_', ' ');
                const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                regionEl.textContent = `${city} // ${time}`;
                
                // Update time every minute
                setInterval(() => {
                    const newTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                    regionEl.textContent = `${city} // ${newTime}`;
                }, 60000);
            } catch (e) {
                regionEl.textContent = 'Unknown Region';
            }
        }
    }

    // Tech Cloud 3D
    function initTechCloud() {
        if (typeof THREE === 'undefined' || !$.techCloudCanvas) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, $.techCloudContainer.offsetWidth / $.techCloudContainer.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize($.techCloudContainer.offsetWidth, $.techCloudContainer.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        $.techCloudCanvas.parentElement.replaceChild(renderer.domElement, $.techCloudCanvas);
        
        const icons = state.stack;
        const particles = [];
        icons.forEach((icon, i) => {
            const geometry = new THREE.BoxGeometry(20, 20, 20);
            const material = new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true });
            const mesh = new THREE.Mesh(geometry, material);
            const angle = (i / icons.length) * Math.PI * 2;
            mesh.position.x = Math.cos(angle) * 100;
            mesh.position.y = Math.sin(angle) * 100;
            mesh.position.z = (Math.random() - 0.5) * 100;
            scene.add(mesh);
            particles.push({ mesh, angle, radius: 100 });
        });
        
        camera.position.z = 200;
        
        function animate() {
            particles.forEach((particle, i) => {
                particle.angle += 0.01;
                particle.mesh.position.x = Math.cos(particle.angle) * particle.radius;
                particle.mesh.position.y = Math.sin(particle.angle) * particle.radius;
                particle.mesh.rotation.x += 0.01;
                particle.mesh.rotation.y += 0.01;
            });
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Projects 3D Cards
    function initProjects3D() {
        if (typeof THREE === 'undefined' || !$.projects3DCanvas) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, $.projects3DContainer.offsetWidth / $.projects3DContainer.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize($.projects3DContainer.offsetWidth, $.projects3DContainer.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        $.projects3DCanvas.parentElement.replaceChild(renderer.domElement, $.projects3DCanvas);
        
        const cards = [];
        state.projects.forEach((project, i) => {
            const geometry = new THREE.PlaneGeometry(80, 60);
            const material = new THREE.MeshBasicMaterial({ color: 0x1f1f1f, wireframe: true });
            const card = new THREE.Mesh(geometry, material);
            card.position.x = (i - state.projects.length / 2) * 100;
            card.position.z = -50;
            scene.add(card);
            cards.push(card);
        });
        
        camera.position.z = 300;
        
        let scrollY = 0;
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY * 0.5;
        }, { passive: true });
        
        function animate() {
            cards.forEach((card, i) => {
                card.rotation.y = scrollY * 0.001;
                card.rotation.x = Math.sin(scrollY * 0.01 + i) * 0.2;
            });
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Ghosting Effect
    function initGhostingEffect() {
        if (typeof ScrollTrigger === 'undefined') return;
        
        const ghostElements = document.querySelectorAll('.ghost-text');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;
            const scrollVelocity = Math.abs(scrollDelta);
            
            ghostElements.forEach(el => {
                if (scrollVelocity > 5) {
                    const skew = Math.min(scrollDelta * 0.1, 10);
                    gsap.to(el, {
                        skewX: skew,
                        opacity: 0.8,
                        duration: 0.1
                    });
                } else {
                    gsap.to(el, {
                        skewX: 0,
                        opacity: 1,
                        duration: 0.3
                    });
                }
            });
            
            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    // Sidebar Navigation - Fixed Scroll Accuracy
    function initSidebarNav() {
        if (!$.sidebarNav || !$.sidebarIndicator) return;
        
        const sections = Array.from($.sections).filter(s => {
            const id = s.id;
            return id === 'hero' || id === 'stack' || id === 'projects' || id === 'contact';
        });
        const sidebarLinks = Array.from($.sidebarLinks);
        const sidebarTrack = $.sidebarNav.querySelector('.sidebar-track');
        
        if (!sidebarTrack) return;
        
        function updateSidebarIndicator() {
            const trackHeight = sidebarTrack.offsetHeight;
            const indicatorSize = 8; // Size of the indicator dot
            const maxPosition = trackHeight - indicatorSize;
            
            // Get scroll position
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollableHeight = documentHeight - windowHeight;
            
            // Calculate scroll progress (0 to 1)
            const scrollProgress = scrollableHeight > 0 ? Math.min(scrollTop / scrollableHeight, 1) : 0;
            
            // Map to track position (0 to maxPosition)
            const indicatorPosition = scrollProgress * maxPosition;
            
            // Update indicator position
            $.sidebarIndicator.style.top = indicatorPosition + 'px';
            
            // Update active link based on which section is in view
            const viewportCenter = window.innerHeight / 2;
            let activeIndex = 0;
            let minDistance = Infinity;
            
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionBottom = rect.bottom;
                const sectionCenter = sectionTop + (sectionBottom - sectionTop) / 2;
                
                // Check if section is near viewport center
                if (sectionTop <= viewportCenter && sectionBottom >= viewportCenter) {
                    const distance = Math.abs(sectionCenter - viewportCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        activeIndex = index;
                    }
                }
            });
            
            // Fallback: if no section is centered, find the closest one
            if (minDistance === Infinity) {
                sections.forEach((section, index) => {
                    const rect = section.getBoundingClientRect();
                    const sectionCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(sectionCenter - viewportCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        activeIndex = index;
                    }
                });
            }
            
            sidebarLinks.forEach((link, index) => {
                link.classList.toggle('active', index === activeIndex);
            });
        }
        
        // Use requestAnimationFrame for smooth updates
        let ticking = false;
        function onScroll() {
            if (!ticking) {
        requestAnimationFrame(() => {
                    updateSidebarIndicator();
                    ticking = false;
                });
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', () => {
            updateSidebarIndicator();
        }, { passive: true });
        updateSidebarIndicator();
        
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                navigateToSection(section);
            });
        });
    }

    // UPLINK Form with Binary Stream
    function initUplinkForm() {
        if (!$.contactForm) return;
        
        const uplinkSendBtn = document.getElementById('uplinkSendBtn');
        const uplinkStatus = document.getElementById('uplinkStatus');
        
        $.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData($.contactForm);
            const message = formData.get('message');
            
            if (!message) return;
            
            // Convert message to binary stream
            const messageText = $.contactForm.querySelector('#message');
            const rect = messageText.getBoundingClientRect();
            
            // Create binary particles
            const binaryChars = ['0', '1'];
            for (let i = 0; i < 100; i++) {
                const binary = document.createElement('div');
                binary.className = 'binary-stream';
                binary.textContent = binaryChars[Math.floor(Math.random() * 2)];
                binary.style.left = (rect.left + Math.random() * rect.width) + 'px';
                binary.style.top = (rect.top + Math.random() * rect.height) + 'px';
                document.body.appendChild(binary);
                
                setTimeout(() => {
                    binary.remove();
                }, 2000);
            }
            
            // Hide form, show status
            $.contactForm.style.opacity = '0';
            setTimeout(() => {
                $.contactForm.style.display = 'none';
                if (uplinkStatus) {
                    uplinkStatus.style.display = 'block';
                }
            }, 500);
        });
    }

    // Terminal Form (fallback)
    function initTerminalForm() {
        if (!$.contactForm) return;
        initUplinkForm();
    }

    // Code Preview Button
    function initCodePreview() {
        if ($.codePreviewBtn && $.codePreviewPopup) {
            $.codePreviewBtn.addEventListener('mouseenter', () => {
                $.codePreviewPopup.style.display = 'block';
            });
        }
    }

    // Render Arsenal with Bento Grid Expansion
    function renderArsenal() {
        if (!$.arsenalGrid) {
            if ($.techCategories) {
                renderStack();
            }
            return;
        }
        
        const arsenalData = [];
        
        $.arsenalGrid.innerHTML = arsenalData.map((item, index) => `
            <div class="arsenal-item" data-index="${index}">
                <div class="arsenal-category">${item.icon} ${item.category}</div>
                <div class="arsenal-description">${item.description}</div>
            </div>
        `).join('');
        
        // Bento grid expansion
        const items = $.arsenalGrid.querySelectorAll('.arsenal-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const isExpanded = item.classList.contains('expanded');
                
                // Close all
                items.forEach(i => {
                    i.classList.remove('expanded', 'pushed');
                });
                
                // Expand clicked item
                if (!isExpanded) {
                    item.classList.add('expanded');
                    items.forEach(i => {
                        if (i !== item) {
                            i.classList.add('pushed');
                        }
                    });
                }
            });
        });
    }

    // Render Stack (fallback)
    function renderStack() {
        if ($.techCategories) {
            const categories = {
                'Back-end Systems': ['Luau', 'Roblox-ts', 'DataStores', 'Knit'],
                'UI/UX Engineering': ['TweenService', 'Roact', 'RemoteEvents'],
                'Game Physics': ['Raycasting', 'Collision Detection'],
                'Optimization': ['Memory Management', 'Performance Profiling']
            };
            
            $.techCategories.innerHTML = Object.entries(categories).map(([category, skills]) => `
                <div class="tech-category">
                    <h3 class="tech-category-title">${category}</h3>
                    ${skills.map(skill => `
                        <div class="tech-skill">
                            <div class="tech-skill-name">
                                <span>${skill}</span>
                                <span>90%</span>
                            </div>
                            <div class="tech-skill-bar">
                                <div class="tech-skill-fill" style="width: 90%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('');
            
            setTimeout(() => {
                document.querySelectorAll('.tech-skill-fill').forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }, 500);
        }
    }

    // Render Archive with Holographic Previews
    function renderArchive() {
        const archiveGrid = document.getElementById('archiveGrid');
        if (!archiveGrid && !$.projectsGrid) return;
        
        const target = archiveGrid || $.projectsGrid;
        
        target.innerHTML = state.projects.map(project => `
            <div class="archive-item" data-project-id="${project.id}">
                <div class="archive-media">
                    <img src="${project.image}" alt="${project.title}" class="archive-image" loading="lazy" />
                    <div class="blueprint-overlay"></div>
            </div>
                <div class="archive-content">
                    <div class="archive-brief">[PROJECT_NAME]</div>
                    <h3 class="archive-title">${project.title}</h3>
                    <div class="archive-brief">The Brief:</div>
                    <p class="archive-execution">${project.problem || 'Tasked with building a high-performance system.'}</p>
                    <div class="archive-brief">The Execution:</div>
                    <p class="archive-execution">${project.description}</p>
                    <div class="project-specs">
                        <div class="spec-item">
                            <span class="spec-label">Latency</span>
                            <span class="spec-value">< 40ms</span>
                            </div>
                        <div class="spec-item">
                            <span class="spec-label">Architecture</span>
                            <span class="spec-value">Knit Framework</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Security</span>
                            <span class="spec-value">Anti-Exploit Level 7</span>
                </div>
            </div>
                    <button class="project-code-btn" data-code="${project.id}">View Code</button>
                </div>
            </div>
        `).join('');
        
        // Holographic glitch effect on hover
        const archiveItems = target.querySelectorAll('.archive-item');
        archiveItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('glitch');
                setTimeout(() => {
                    item.classList.remove('glitch');
                }, 300);
            });
            
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('project-code-btn')) return;
                const projectId = parseInt(item.getAttribute('data-project-id'));
                const project = state.projects.find(p => p.id === projectId);
                if (project) {
                    showCaseStudy(project);
                }
            });
        });

        // Code button handlers
        target.querySelectorAll('.project-code-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = parseInt(btn.getAttribute('data-code'));
                const project = state.projects.find(p => p.id === projectId);
                if (project) {
                    showCaseStudy(project);
                }
            });
        });
    }

    // Render Projects (fallback)
    function renderProjects() {
        if ($.projectsGrid && !document.getElementById('archiveGrid')) {
        } else if ($.projectsGrid) {
            // Old format
            $.projectsGrid.innerHTML = state.projects.map(project => `
                <div class="project-card" data-project-id="${project.id}">
                    <div class="project-media">
                        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy" />
                    </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                        <button class="project-code-btn" data-code="${project.id}">View Code</button>
                </div>
                </div>
        `).join('');
        }
    }

    // Data-Viz: Coordinate Tracker
    function initCoordinateTracker() {
        const mouseX = document.getElementById('mouseX');
        const mouseY = document.getElementById('mouseY');
        if (!mouseX || !mouseY) return;

        let x = 0, y = 0;
        let targetX = 0, targetY = 0;

        document.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        }, { passive: true });

        function update() {
            // Jitter effect
            x += (targetX - x) * 0.1;
            y += (targetY - y) * 0.1;
            const jitterX = (Math.random() - 0.5) * 0.5;
            const jitterY = (Math.random() - 0.5) * 0.5;
            
            mouseX.textContent = (x + jitterX).toFixed(2);
            mouseY.textContent = (y + jitterY).toFixed(2);
            requestAnimationFrame(update);
        }
        update();
    }

    // Data-Viz: RAM Monitor Jitter
    function initRAMMonitor() {
        const ramBars = document.querySelectorAll('.ram-bar');
        if (ramBars.length === 0) return;

        function jitter() {
            ramBars.forEach((bar, i) => {
                const baseHeight = parseFloat(bar.style.height) || 50;
                const jitter = (Math.random() - 0.5) * 2;
                const newHeight = Math.max(20, Math.min(90, baseHeight + jitter));
                bar.style.height = newHeight + '%';
            });
            setTimeout(jitter, 100 + Math.random() * 200);
        }
        jitter();
    }

    // Mechanical Tab Switch
    function initMechanicalTabs() {
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        const sections = document.querySelectorAll('.section');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                const targetEl = document.getElementById(targetSection);
                if (!targetEl) return;

                // Mark all sections
                sections.forEach(section => {
                    section.classList.remove('switching-out', 'switching-in', 'active');
                    if (section === targetEl) {
                        section.classList.add('switching-in');
            setTimeout(() => {
                            section.classList.add('active');
                        }, 50);
                    } else if (section.classList.contains('visible')) {
                        section.classList.add('switching-out');
                    }
                });

                // Scroll to section
                setTimeout(() => {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 200);
            });
        });
    }

    // Biometric Button
    function initBiometricButton() {
        const uplinkBtn = document.getElementById('uplinkSendBtn');
        if (!uplinkBtn) return;

        // Create biometric ring
        const ring = document.createElement('div');
        ring.className = 'biometric-ring';
        uplinkBtn.appendChild(ring);

        let holdTimer = null;
        let isHolding = false;

        uplinkBtn.addEventListener('mousedown', () => {
            isHolding = true;
            uplinkBtn.classList.add('holding');
            holdTimer = setTimeout(() => {
                if (isHolding) {
                    uplinkBtn.closest('form')?.requestSubmit();
                    uplinkBtn.classList.remove('holding');
                    isHolding = false;
                }
            }, 2000);
        });

        uplinkBtn.addEventListener('mouseup', () => {
            isHolding = false;
            uplinkBtn.classList.remove('holding');
            if (holdTimer) clearTimeout(holdTimer);
        });

        uplinkBtn.addEventListener('mouseleave', () => {
            isHolding = false;
            uplinkBtn.classList.remove('holding');
            if (holdTimer) clearTimeout(holdTimer);
        });
    }

    // Blueprint Overlay
    function initBlueprintOverlay() {
        const archiveItems = document.querySelectorAll('.archive-item');
        archiveItems.forEach(item => {
            const overlay = document.createElement('div');
            overlay.className = 'blueprint-overlay';
            const media = item.querySelector('.archive-media');
            if (media) {
                media.appendChild(overlay);
            }
        });
    }

    // Radar Chart for Arsenal
    function initRadarChart() {
        const container = document.getElementById('arsenalGrid');
        if (!container) return;

        const canvas = document.createElement('canvas');
        canvas.id = 'radarChartCanvas';
        const radarContainer = document.createElement('div');
        radarContainer.className = 'radar-chart-container';
        radarContainer.appendChild(canvas);
        
        // Insert before arsenal grid
        container.parentNode.insertBefore(radarContainer, container);

        if (typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / 400, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(container.offsetWidth, 400);
        renderer.setClearColor(0x000000, 0);

        const skills = ['Optimization', 'Physics', 'Backend', 'UI', 'Security', 'Networking'];
        const values = [90, 85, 95, 80, 88, 92];
        const radius = 100;
        const centerY = 0;

        // Create radar web
        const webGeometry = new THREE.BufferGeometry();
        const webMaterial = new THREE.LineBasicMaterial({ color: 0x10b981, opacity: 0.3, transparent: true });
        
        const webPoints = [];
        for (let i = 0; i < skills.length; i++) {
            const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            webPoints.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, 0));
        }
        webGeometry.setFromPoints(webPoints);
        const web = new THREE.LineSegments(webGeometry, webMaterial);
        scene.add(web);

        // Create skill points
        const points = [];
        skills.forEach((skill, i) => {
            const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
            const value = values[i];
            const x = Math.cos(angle) * radius * (value / 100);
            const y = Math.sin(angle) * radius * (value / 100);
            
            const geometry = new THREE.SphereGeometry(3, 16, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0xef4444 });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(x, y, 0);
            scene.add(sphere);
            points.push({ sphere, angle, baseValue: value });
        });

        camera.position.z = 250;

        function animate() {
            points.forEach((point, i) => {
                const hovered = document.querySelector(`.arsenal-item[data-index="${i}"]:hover`);
                if (hovered) {
                    const scale = 1.2;
                    point.sphere.scale.set(scale, scale, scale);
                    // Distort web toward this point
                    const targetAngle = point.angle;
                    // Simple distortion effect
            } else {
                    point.sphere.scale.set(1, 1, 1);
                }
            });
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Time-Travel Scrollbar
    function initTimeTravelScrollbar() {
        const scrollbar = document.getElementById('timeTravelScrollbar');
        const thumb = document.getElementById('scrollbarThumb');
        const commits = document.getElementById('scrollbarCommits');
        const directory = document.getElementById('scrollbarDirectory');
        const code = document.getElementById('scrollbarCode');
        const bgCanvas = document.getElementById('scrollbar3DBg');
        
        if (!scrollbar || !thumb) return;

        // Initialize 3D Background
        if (bgCanvas && typeof THREE !== 'undefined') {
            initScrollbar3DBackground(bgCanvas);
        }

        const commitsList = [
            'feat: build_042',
            'feat: build_041',
            'fix: performance_040',
            'feat: build_039',
            'feat: build_038',
            'refactor: architecture_037'
        ];

        if (commits) {
            commits.innerHTML = commitsList.map(hash => 
                `<div class="commit-hash">${hash}</div>`
            ).join('');
        }

        let codeText = 'function init() {\n  // System initialization\n  loadModules();\n  connectDatabase();\n}';
        let codeIndex = 0;
        let isScrollingDown = true;

        function updateScrollbar() {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
            
            // Update thumb position
            const thumbHeight = thumb.offsetHeight;
            const maxTop = scrollbar.offsetHeight - thumbHeight;
            thumb.style.top = (scrollPercent * maxTop) + 'px';

            // Update active commit
            if (commits) {
                const commitIndex = Math.floor(scrollPercent * (commitsList.length - 1));
                commits.querySelectorAll('.commit-hash').forEach((el, i) => {
                    el.classList.toggle('active', i === commitIndex);
                });
            }

            // Update directory
            if (directory) {
                const sections = ['Work', 'Stack', 'Projects', 'Contact'];
                const sectionIndex = Math.floor(scrollPercent * (sections.length - 1));
                directory.textContent = `C:/Portfolio/${sections[sectionIndex]}/`;
            }

            // Update code typing
            if (code) {
                const newIsDown = scrollTop > (state.lastScrollY || 0);
                if (newIsDown !== isScrollingDown) {
                    isScrollingDown = newIsDown;
                    codeIndex = 0;
                }
                state.lastScrollY = scrollTop;

                if (isScrollingDown) {
                    codeIndex = Math.floor(scrollPercent * codeText.length);
                    code.textContent = codeText.substring(0, codeIndex) + '█';
                } else {
                    codeIndex = Math.floor((1 - scrollPercent) * codeText.length);
                    code.textContent = codeText.substring(0, codeIndex) + '█';
                }
            }
        }

        window.addEventListener('scroll', updateScrollbar, { passive: true });
        updateScrollbar();
    }

    // 3D Creative Background for Time-Travel Scrollbar
    function initScrollbar3DBackground(canvas) {
        if (typeof THREE === 'undefined' || !canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Create floating code blocks
        const codeBlocks = [];
        const codeSnippets = [
            'function init()',
            'loadModules()',
            'connectDB()',
            'class System',
            'export default',
            'const config =',
            'async function',
            'return data'
        ];

        codeSnippets.forEach((snippet, i) => {
            // Create 3D text-like structure using boxes
            const group = new THREE.Group();
            
            // Main block
            const blockGeometry = new THREE.BoxGeometry(30, 8, 2);
            const blockMaterial = new THREE.MeshBasicMaterial({ 
                color: 0xef4444,
                wireframe: true,
                transparent: true,
                opacity: 0.4
            });
            const block = new THREE.Mesh(blockGeometry, blockMaterial);
            group.add(block);

            // Add smaller detail boxes
            for (let j = 0; j < snippet.length; j++) {
                const detail = new THREE.BoxGeometry(2, 2, 2);
                const detailMesh = new THREE.Mesh(detail, blockMaterial);
                detailMesh.position.set(
                    (j - snippet.length / 2) * 3,
                    Math.sin(j) * 2,
                    Math.cos(j) * 2
                );
                group.add(detailMesh);
            }

            // Position in 3D space
            const angle = (i / codeSnippets.length) * Math.PI * 2;
            const radius = 80;
            group.position.set(
                Math.cos(angle) * radius,
                (i - codeSnippets.length / 2) * 20,
                Math.sin(angle) * radius
            );
            
            scene.add(group);
            codeBlocks.push({ group, angle, radius, baseY: (i - codeSnippets.length / 2) * 20 });
        });

        // Create particle connections between commits
        const particles = [];
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 100;
        const positions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 200;
            positions[i + 1] = (Math.random() - 0.5) * 300;
            positions[i + 2] = (Math.random() - 0.5) * 200;
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x10b981,
            size: 2,
            transparent: true,
            opacity: 0.6
        });
        const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleSystem);

        // Create connecting lines
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = new Float32Array(particleCount * 6);
        for (let i = 0; i < particleCount; i += 2) {
            const index = i * 3;
            linePositions[index] = positions[index];
            linePositions[index + 1] = positions[index + 1];
            linePositions[index + 2] = positions[index + 2];
            linePositions[index + 3] = positions[(i + 1) * 3];
            linePositions[index + 4] = positions[(i + 1) * 3 + 1];
            linePositions[index + 5] = positions[(i + 1) * 3 + 2];
        }
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x10b981,
            transparent: true,
            opacity: 0.2
        });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        // Create floating geometric shapes
        const shapes = [];
        const shapeTypes = [
            () => new THREE.OctahedronGeometry(8, 0),
            () => new THREE.TetrahedronGeometry(8, 0),
            () => new THREE.IcosahedronGeometry(8, 0)
        ];

        for (let i = 0; i < 15; i++) {
            const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            const geometry = shapeType();
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL((i / 15) * 0.3 + 0.5, 0.7, 0.5),
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(
                (Math.random() - 0.5) * 150,
                (Math.random() - 0.5) * 250,
                (Math.random() - 0.5) * 150
            );
            scene.add(mesh);
            shapes.push(mesh);
        }

        // Create DNA helix structure
        const helixGroup = new THREE.Group();
        const helixPoints = 50;
        for (let i = 0; i < helixPoints; i++) {
            const t = (i / helixPoints) * Math.PI * 4;
            const radius = 40;
            const x = Math.cos(t) * radius;
            const y = (i - helixPoints / 2) * 3;
            const z = Math.sin(t) * radius;
            
            const sphere = new THREE.SphereGeometry(2, 8, 8);
            const sphereMaterial = new THREE.MeshBasicMaterial({
                color: 0xef4444,
                transparent: true,
                opacity: 0.5
            });
            const sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
            sphereMesh.position.set(x, y, z);
            helixGroup.add(sphereMesh);
        }
        scene.add(helixGroup);

        camera.position.set(0, 0, 200);
        camera.lookAt(0, 0, 0);

        let scrollProgress = 0;
        let time = 0;

        function animate() {
            time += 0.01;
            scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

            // Animate code blocks
            codeBlocks.forEach((block, i) => {
                block.angle += 0.005;
                block.group.position.x = Math.cos(block.angle) * block.radius;
                block.group.position.z = Math.sin(block.angle) * block.radius;
                block.group.position.y = block.baseY + Math.sin(time + i) * 10;
                block.group.rotation.y += 0.01;
                block.group.rotation.x = Math.sin(time * 0.5 + i) * 0.2;
            });

            // Animate particles
            const positions = particleSystem.geometry.attributes.position;
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                positions.array[i3 + 1] += Math.sin(time + i) * 0.5;
                if (positions.array[i3 + 1] > 150) positions.array[i3 + 1] = -150;
            }
            positions.needsUpdate = true;

            // Animate shapes
            shapes.forEach((shape, i) => {
                shape.rotation.x += 0.01;
                shape.rotation.y += 0.015;
                shape.position.y += Math.sin(time + i) * 0.3;
                shape.scale.setScalar(1 + Math.sin(time * 2 + i) * 0.1);
            });

            // Rotate helix
            helixGroup.rotation.y += 0.02;
            helixGroup.position.y = scrollProgress * 100 - 50;

            // Rotate camera based on scroll
            const cameraAngle = scrollProgress * Math.PI * 2;
            camera.position.x = Math.cos(cameraAngle) * 200;
            camera.position.z = Math.sin(cameraAngle) * 200;
            camera.lookAt(0, scrollProgress * 50 - 25, 0);

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        });
    }

    // Terminal Easter Eggs
    function initTerminalEasterEggs() {
        let typedText = '';
        const helpModal = document.getElementById('terminalHelpModal');
        const helpClose = document.getElementById('helpClose');
        const hidden3D = document.getElementById('hidden3DObject');

        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) return;
            
            if (e.key === 'Backspace') {
                typedText = typedText.slice(0, -1);
            } else if (e.key.length === 1) {
                typedText += e.key.toLowerCase();
            }

            // Check for commands
            if (typedText.includes('robux')) {
                typedText = '';
                transformToRobux();
            } else if (typedText.includes('dark')) {
                typedText = '';
                switchToDarkMode();
            } else if (typedText.includes('help')) {
                typedText = '';
                if (helpModal) {
                    helpModal.classList.add('active');
                }
            } else if (typedText.includes('secret')) {
                typedText = '';
                showHidden3D();
            }

            // Limit length
            if (typedText.length > 20) {
                typedText = typedText.slice(-20);
            }
        });

        if (helpClose) {
            helpClose.addEventListener('click', () => {
                if (helpModal) helpModal.classList.remove('active');
            });
        }

        function transformToRobux() {
            // Transform physics particles to Robux coins
            const canvas = document.getElementById('physicsCanvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                // Visual effect - particles turn gold
                setTimeout(() => {
                    // Reset after 5 seconds
                }, 5000);
            }
        }

        function switchToDarkMode() {
            document.documentElement.style.setProperty('--color-accent', '#8b0000');
            document.documentElement.style.setProperty('--color-accent-glow', 'rgba(139, 0, 0, 0.5)');
            setTimeout(() => {
                document.documentElement.style.setProperty('--color-accent', '#ef4444');
                document.documentElement.style.setProperty('--color-accent-glow', 'rgba(239, 68, 68, 0.3)');
            }, 10000);
        }

        function showHidden3D() {
            if (!hidden3D || typeof THREE === 'undefined') return;
            
            hidden3D.classList.add('active');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(300, 300);
            renderer.setClearColor(0x000000, 0);
            hidden3D.innerHTML = '';
            hidden3D.appendChild(renderer.domElement);

            // Create crown
            const crownGroup = new THREE.Group();
            const geometry = new THREE.ConeGeometry(30, 40, 8);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0xffd700,
                wireframe: true
            });
            const crown = new THREE.Mesh(geometry, material);
            crownGroup.add(crown);

            for (let i = 0; i < 5; i++) {
                const spike = new THREE.ConeGeometry(5, 20, 8);
                const spikeMesh = new THREE.Mesh(spike, material);
                spikeMesh.position.set(
                    Math.cos((i / 5) * Math.PI * 2) * 25,
                    25,
                    Math.sin((i / 5) * Math.PI * 2) * 25
                );
                crownGroup.add(spikeMesh);
            }

            scene.add(crownGroup);
            camera.position.z = 150;

            function animate() {
                crownGroup.rotation.y += 0.02;
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }
            animate();

            setTimeout(() => {
                hidden3D.classList.remove('active');
                hidden3D.innerHTML = '';
            }, 5000);
        }
    }

    // Hardware Footer
    function initHardwareFooter() {
        const memoryLoad = document.getElementById('memoryLoad');
        const statusLED = document.getElementById('statusLED');
        const statusText = document.getElementById('statusText');
        const commitMessage = document.getElementById('commitMessage');

        // Simulate memory load
        if (memoryLoad) {
            setInterval(() => {
                const load = 10 + Math.random() * 5;
                memoryLoad.textContent = load.toFixed(1) + '%';
            }, 2000);
        }

        // Fetch GitHub commit (mock for now)
        if (commitMessage) {
            // In production, use: fetch('https://api.github.com/repos/username/repo/commits')
            commitMessage.textContent = 'feat: implement glass console UI';
        }

        // Status LED
        if (statusLED && statusText) {
            // Simulate availability
            const isAvailable = true; // Change based on actual availability
            if (isAvailable) {
                statusLED.className = 'led led-green';
                statusText.textContent = 'ACTIVE';
            } else {
                statusLED.className = 'led led-red';
                statusText.textContent = 'BUSY';
            }
        }
    }

    // Logic Node Map
    function initLogicNodeMap() {
        const modal = document.getElementById('logicNodeModal');
        const close = document.getElementById('logicNodeClose');
        const canvas = document.getElementById('logicNodeCanvas');
        
        if (!modal || !canvas) return;

        // Open modal when clicking "View Code" buttons
        document.querySelectorAll('.project-code-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                modal.classList.add('active');
                renderLogicNodes(canvas);
            });
        });

        if (close) {
            close.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.querySelector('.modal-overlay')?.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    function renderLogicNodes(canvas) {
        if (typeof THREE === 'undefined' || !canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        renderer.setClearColor(0x000000, 0);

        const nodes = [
            { name: 'DataStore', pos: [0, 0, 0], connections: ['ProfileService', 'RemoteEvents'] },
            { name: 'ProfileService', pos: [-100, 50, 0], connections: ['DataStore'] },
            { name: 'RemoteEvents', pos: [100, 50, 0], connections: ['DataStore', 'Matchmaking'] },
            { name: 'Matchmaking', pos: [150, -50, 0], connections: ['RemoteEvents', 'Raycast'] },
            { name: 'Raycast', pos: [0, -100, 0], connections: ['Matchmaking'] }
        ];

        const nodeMeshes = [];
        nodes.forEach(node => {
            const geometry = new THREE.SphereGeometry(10, 16, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(...node.pos);
            scene.add(mesh);
            nodeMeshes.push({ mesh, node });
        });

        // Draw connections
        nodes.forEach((node) => {
            node.connections.forEach(connName => {
                const connNode = nodes.find(n => n.name === connName);
                if (connNode) {
                    const geometry = new THREE.BufferGeometry().setFromPoints([
                        new THREE.Vector3(...node.pos),
                        new THREE.Vector3(...connNode.pos)
                    ]);
                    const material = new THREE.LineBasicMaterial({ color: 0x10b981, opacity: 0.3, transparent: true });
                    const line = new THREE.Line(geometry, material);
                    scene.add(line);
                }
            });
        });

        camera.position.z = 200;

        function animate() {
            nodeMeshes.forEach(({ mesh }) => {
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.01;
            });
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Portal Hover Effect
    function initPortalHover() {
        const archiveItems = document.querySelectorAll('.archive-item');
        archiveItems.forEach(item => {
            const image = item.querySelector('.archive-image');
            if (!image) return;

            const canvas = document.createElement('canvas');
            canvas.className = 'portal-canvas';
            const media = item.querySelector('.archive-media');
            if (media) {
                media.appendChild(canvas);
            }

            item.addEventListener('mouseenter', () => {
                createPortalEffect(canvas, image);
            });
        });
    }

    function createPortalEffect(canvas, image) {
        const ctx = canvas.getContext('2d');
        canvas.width = image.offsetWidth;
        canvas.height = image.offsetHeight;

        let time = 0;
        function animate() {
            time += 0.05;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Simple displacement effect using Perlin-like noise
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const noise = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time * 0.7);
                    const index = (y * canvas.width + x) * 4;
                    imageData.data[index] = 255 * (noise + 1) / 2;
                    imageData.data[index + 1] = 255 * (noise + 1) / 2;
                    imageData.data[index + 2] = 255;
                    imageData.data[index + 3] = 100;
                }
            }
            ctx.putImageData(imageData, 0, 0);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // 3D Cube Transitions
    function init3DCubeTransitions() {
        const cubeContainer = document.createElement('div');
        cubeContainer.className = 'cube-container';
        const canvas = document.createElement('canvas');
        canvas.id = 'cubeCanvas';
        cubeContainer.appendChild(canvas);
        document.body.appendChild(cubeContainer);

        if (typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // Create cube faces with content
        const faces = ['hero', 'stack', 'projects', 'contact'];
        const cubeGroup = new THREE.Group();

        faces.forEach((face, i) => {
            const geometry = new THREE.PlaneGeometry(200, 200);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0x1a1a1a,
                wireframe: true,
                side: THREE.DoubleSide
            });
            const mesh = new THREE.Mesh(geometry, material);
            
            const angle = (i / faces.length) * Math.PI * 2;
            mesh.position.x = Math.cos(angle) * 100;
            mesh.position.z = Math.sin(angle) * 100;
            mesh.lookAt(0, 0, 0);
            cubeGroup.add(mesh);
        });

        scene.add(cubeGroup);
        camera.position.set(0, 0, 300);

        // Bloom effect (simplified)
        let rotationTarget = 0;
        document.querySelectorAll('.nav-link[data-section]').forEach((link, i) => {
            link.addEventListener('click', () => {
                cubeContainer.classList.add('active');
                rotationTarget = (i / faces.length) * Math.PI * 2;
                setTimeout(() => {
                    cubeContainer.classList.remove('active');
                }, 1000);
            });
        });

        let currentRotation = 0;
        function animate() {
            currentRotation += (rotationTarget - currentRotation) * 0.1;
            cubeGroup.rotation.y = currentRotation;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Video Gallery Configuration
    // Add your video files to the /videos folder and update these paths
    const videoConfig = [
        {
            id: 1,
            title: 'Permadeath System',
            description: 'A fully implemented permanent death system that properly handles player elimination data cleanup and state management. Includes secure death tracking inventory handling and prevention of unintended respawns to preserve game balance and progression integrity.',
            src: 'videos/rec1.mp4',
            thumbnail: null
        },
        {
            id: 2,
            title: 'Settings Showcase',
            description: 'A complete settings system with real time updates. Features include graphics options audio controls accessibility settings and saved user preferences. All configurations persist across sessions with no data loss.',
            src: 'videos/rec2.mp4',
            thumbnail: null
        },
        {
            id: 3,
            title: 'Movement System',
            description: 'Advanced directional movement and dashing with smooth responsive character control. Optimized physics calculations ensure low latency input handling. Supports complex terrain interaction while maintaining consistent performance across platforms.',
            src: 'videos/rec3.mp4',
            thumbnail: null
        },
        {
            id: 4,
            title: 'Zipline and Revive System',
            description: 'A dynamic zipline traversal system combined with integrated revive mechanics. Includes smooth rope movement collision handling and team based revival. Network optimization ensures all players see synchronized movement and revive states in real time.',
            src: 'videos/rec4.mp4',
            thumbnail: null
        }
    ];

    // Render Video Gallery
    function renderVideoGallery() {
        const gallery = document.getElementById('videoGallery');
        if (!gallery) {
            console.warn('Video gallery element not found');
            return;
        }

        if (!videoConfig || videoConfig.length === 0) {
            gallery.innerHTML = `
                <div class="video-placeholder">
                    <div class="placeholder-content">
                        <div class="placeholder-icon">⚠</div>
                        <p class="placeholder-text">No videos configured</p>
                </div>
            </div>
        `;
            return;
        }

        console.log('Rendering video gallery with', videoConfig.length, 'videos');

        gallery.innerHTML = videoConfig.map(video => `
            <div class="video-card" data-video-id="${video.id}">
                <div class="corner-accent top-left"></div>
                <div class="corner-accent top-right"></div>
                <div class="corner-accent bottom-left"></div>
                <div class="corner-accent bottom-right"></div>
                <div class="video-wrapper">
                    <video 
                        preload="metadata" 
                        poster="${video.thumbnail || ''}"
                        src="${video.src}"
                    >
                        <source src="${video.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="video-loading"></div>
                    <div class="video-overlay">
                        <button class="video-play-btn" aria-label="Play video"></button>
                </div>
                    <div class="video-controls">
                        <div class="video-progress">
                            <div class="video-progress-bar"></div>
            </div>
                        <div class="video-time">
                            <span class="video-time-current">0:00</span> / <span class="video-time-duration">0:00</span>
                            </div>
                        </div>
                    <div class="video-status">PAUSED</div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-description">${video.description}</p>
            </div>
                </div>
        `).join('');

        // Initialize video interactions
        initVideoPlayers();
        
        // Log if videos were rendered
        const renderedCards = gallery.querySelectorAll('.video-card');
        console.log('Video cards rendered:', renderedCards.length);
    }

    // Initialize Video Players
    function initVideoPlayers() {
        const videoCards = document.querySelectorAll('.video-card');
        
        videoCards.forEach(card => {
            const video = card.querySelector('video');
            const playBtn = card.querySelector('.video-play-btn');
            const overlay = card.querySelector('.video-overlay');
            const progressBar = card.querySelector('.video-progress-bar');
            const progressContainer = card.querySelector('.video-progress');
            const timeCurrent = card.querySelector('.video-time-current');
            const timeDuration = card.querySelector('.video-time-duration');
            const status = card.querySelector('.video-status');
            const loading = card.querySelector('.video-loading');

            if (!video || !playBtn) return;

            // Video source is already set in HTML, ensure it loads
            if (video.src) {
                video.load();
            } else if (video.querySelector('source')) {
                // Fallback: use source tag
                const source = video.querySelector('source');
                if (source && source.src) {
                    video.src = source.src;
                    video.load();
                }
            }

            // Format time
            function formatTime(seconds) {
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs.toString().padStart(2, '0')}`;
            }

            // Update duration when metadata loads
            video.addEventListener('loadedmetadata', () => {
                if (video.duration && isFinite(video.duration)) {
                    timeDuration.textContent = formatTime(video.duration);
                }
                if (loading) loading.style.display = 'none';
                console.log('✓ Video loaded:', video.src);
            });

            // Handle video errors
            video.addEventListener('error', (e) => {
                console.error('✗ Video error:', video.src, video.error?.message || 'Unknown error');
                if (loading) loading.style.display = 'none';
                if (status) {
                    status.textContent = 'ERROR';
                    status.style.color = '#ef4444';
                }
            });

            // Handle video load start
            video.addEventListener('loadstart', () => {
                console.log('→ Loading video:', video.src);
                if (loading) loading.style.display = 'flex';
            });

            // Update progress
            video.addEventListener('timeupdate', () => {
                const progress = (video.currentTime / video.duration) * 100;
                progressBar.style.width = progress + '%';
                timeCurrent.textContent = formatTime(video.currentTime);
            });

            // Play/Pause functionality
            function togglePlay() {
                if (video.paused) {
                    video.play();
                    card.classList.add('playing');
                    status.textContent = 'PLAYING';
                } else {
                    video.pause();
                    card.classList.remove('playing');
                    status.textContent = 'PAUSED';
                }
            }

            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePlay();
            });

            video.addEventListener('click', togglePlay);

            // Progress bar click
            progressContainer.addEventListener('click', (e) => {
                const rect = progressContainer.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                video.currentTime = percent * video.duration;
            });

            // Video ended
            video.addEventListener('ended', () => {
                card.classList.remove('playing');
                status.textContent = 'ENDED';
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
            });

            // Loading state
            video.addEventListener('loadstart', () => {
                loading.style.display = 'flex';
            });

            video.addEventListener('canplay', () => {
                loading.style.display = 'none';
            });

            // Pause other videos when one plays
            video.addEventListener('play', () => {
                videoCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        const otherVideo = otherCard.querySelector('video');
                        if (otherVideo && !otherVideo.paused) {
                            otherVideo.pause();
                            otherCard.classList.remove('playing');
                            const otherStatus = otherCard.querySelector('.video-status');
                            if (otherStatus) otherStatus.textContent = 'PAUSED';
                        }
                    }
                });
            });
        });
    }

    // Initialize
    function init() {
        initPreloader();
        initCustomCursor();
        initMagneticButtons();
        initFluidBackground();
        initPhysicsBackground();
        init3DOctahedron();
        initLiveStats();
        initGhostingEffect();
        initNavigation();
        initSidebarNav();
        initCommandTerminal();
        initTicker();
        renderVideoGallery();
        renderArsenal();
        initContactForm();
        initUplinkForm();
        initCodePreview();
        initScrollAnimations();
        initMicroInteractions();
        initCoordinateTracker();
        initRAMMonitor();
        initMechanicalTabs();
        initBiometricButton();
        initBlueprintOverlay();
        initRadarChart();
        initTimeTravelScrollbar();
        initTerminalEasterEggs();
        initHardwareFooter();
        initLogicNodeMap();
        initPortalHover();
        init3DCubeTransitions();
        // Hover effects for cursor
        const hoverElements = document.querySelectorAll('a, button, .project-card, .bento-item, .stack-item, .video-card, .nav-link, .sidebar-link');
        for (let i = 0; i < hoverElements.length; i++) {
            const el = hoverElements[i];
            el.addEventListener('mouseenter', function() {
                if ($.cursor) {
                    $.cursor.classList.add('hover');
                }
            });
            el.addEventListener('mouseleave', function() {
                if ($.cursor) {
                    $.cursor.classList.remove('hover');
                }
            });
        }

        // Case study modal close
        if ($.caseStudyClose) {
            $.caseStudyClose.addEventListener('click', closeCaseStudy);
        }
        if ($.caseStudyModal) {
            const overlay = $.caseStudyModal.querySelector('.case-study-overlay');
            if (overlay) {
                overlay.addEventListener('click', closeCaseStudy);
            }
        }

        // Fallback: show sections after 3 seconds if preloader didn't handle it
        setTimeout(function() {
            if ($.preloader && !$.preloader.classList.contains('hidden')) {
                // Preloader is still showing, force hide and show content
                $.preloader.classList.add('hidden');
                showAllSections();
            } else if ($.sections && $.sections.length > 0 && !$.sections[0].classList.contains('visible')) {
                // Sections not visible, show them
                showAllSections();
            }
        }, 3000);
    }

    // Physics Background
    function initPhysicsBackground() {
        if (typeof Matter === 'undefined' || !$.physicsCanvas) return;

        const { Engine, Render, World, Bodies, Mouse, MouseConstraint } = Matter;
        
        const engine = Engine.create();
        const render = Render.create({
            canvas: $.physicsCanvas,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: 'transparent',
                pixelRatio: window.devicePixelRatio
            }
        });

        // Create particles
        const particles = [];
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const size = Math.random() * 4 + 2;
            
            const particle = Bodies.circle(x, y, size, {
                restitution: 0.8,
                friction: 0.1,
                density: 0.001,
                render: {
                    fillStyle: '#ef4444',
                    opacity: 0.3
                }
            });
            
            particles.push(particle);
        }

        // Walls
        const walls = [
            Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 1, { isStatic: true }),
            Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 1, { isStatic: true }),
            Bodies.rectangle(0, window.innerHeight / 2, 1, window.innerHeight, { isStatic: true }),
            Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 1, window.innerHeight, { isStatic: true })
        ];

        World.add(engine.world, [...particles, ...walls]);

        // Mouse interaction
        const mouse = Mouse.create($.physicsCanvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });
        World.add(engine.world, mouseConstraint);

        // Mouse tracking
        document.addEventListener('mousemove', (e) => {
            const rect = $.physicsCanvas.getBoundingClientRect();
            mouse.position.x = e.clientX - rect.left;
            mouse.position.y = e.clientY - rect.top;
        });

        // Run engine
        Engine.run(engine);
        Render.run(render);

        // Handle resize
        window.addEventListener('resize', () => {
            render.options.width = window.innerWidth;
            render.options.height = window.innerHeight;
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
        });

        state.physicsEngine = engine;
    }

    // Navigation
    function initNavigation() {
        // Scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                $.nav.classList.add('scrolled');
            } else {
                $.nav.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        });

        // Smooth scroll
        $.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                navigateToSection(section);
            });
        });

        // Active section highlighting
        if (typeof ScrollTrigger !== 'undefined') {
            $.sections.forEach(section => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    onEnter: () => {
                        const id = section.id;
                        $.navLinks.forEach(link => {
                            link.classList.toggle('active', link.getAttribute('data-section') === id);
                        });
                    }
                });
            });
        }
    }

    function navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeCommandTerminal();
        }
    }

    // Command Terminal
    function initCommandTerminal() {
        $.commandTrigger.addEventListener('click', openCommandTerminal);
        $.terminalClose.addEventListener('click', closeCommandTerminal);
        
        document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
                if ($.commandTerminal.classList.contains('active')) {
                    closeCommandTerminal();
            } else {
                    openCommandTerminal();
                }
            }
            if (e.key === 'Escape' && $.commandTerminal.classList.contains('active')) {
                closeCommandTerminal();
            }
        });

        $.terminalInput.addEventListener('input', handleTerminalInput);
        $.terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                executeCommand($.terminalInput.value.trim());
                $.terminalInput.value = '';
            }
        });
    }

    function openCommandTerminal() {
        $.commandTerminal.classList.add('active');
        $.terminalInput.focus();
        renderTerminalResults('Type "help" for available commands.');
    }

    function closeCommandTerminal() {
        $.commandTerminal.classList.remove('active');
        $.terminalInput.value = '';
        $.terminalResults.innerHTML = '';
    }

    function handleTerminalInput(e) {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            renderTerminalResults('Type "help" for available commands.');
            return;
        }

        const matches = state.terminalCommands.filter(cmd => 
            cmd.command.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            let html = '<div class="terminal-result-item">Available commands:</div>';
            matches.forEach(cmd => {
                html += `<div class="terminal-result-item">$ ${cmd.command} - ${cmd.description}</div>`;
            });
            renderTerminalResults(html);
        } else {
            renderTerminalResults(`Command not found: "${query}". Type "help" for available commands.`);
        }
    }

    function executeCommand(command) {
        const cmd = state.terminalCommands.find(c => c.command === command.toLowerCase());
        if (cmd) {
            cmd.action();
            renderTerminalResults(`$ ${command}\n${cmd.description}`);
        } else {
            renderTerminalResults(`$ ${command}\nCommand not found. Type "help" for available commands.`);
        }
    }

    function showHelp() {
        let html = '<div class="terminal-result-item">Available commands:</div>';
        state.terminalCommands.forEach(cmd => {
            html += `<div class="terminal-result-item">$ ${cmd.command} - ${cmd.description}</div>`;
        });
        renderTerminalResults(html);
    }

    function clearTerminal() {
        $.terminalResults.innerHTML = '';
    }

    function changeTheme() {
        // Theme switching logic (if needed)
        renderTerminalResults('$ theme\nTheme switching not implemented yet.');
    }

    function renderTerminalResults(html) {
        $.terminalResults.innerHTML = html;
    }

    // Stack Section
    function renderStack() {
        if (!$.stackGrid) return;

        $.stackGrid.innerHTML = state.stack.map(item => `
            <div class="stack-item" draggable="true">
                <div class="stack-icon">${item.icon}</div>
                <div class="stack-name">${item.name}</div>
                <div class="stack-category">${item.category}</div>
            </div>
        `).join('');

        // Drag and drop
        const stackItems = $.stackGrid.querySelectorAll('.stack-item');
        stackItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.effectAllowed = 'move';
                item.style.opacity = '0.5';
            });
            item.addEventListener('dragend', () => {
                item.style.opacity = '1';
            });
            item.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            });
        });
    }

    // Projects Section

    // Process Timeline
    function renderProcess() {
        if (!$.processTimeline) return;

        $.processTimeline.innerHTML = state.process.map((item, index) => `
            <div class="process-item" data-index="${index}">
                <div class="process-number">${item.number}</div>
                <h3 class="process-title">${item.title}</h3>
                <p class="process-description">${item.description}</p>
            </div>
        `).join('');

        // Scroll animations
        if (typeof ScrollTrigger !== 'undefined') {
            $.processTimeline.querySelectorAll('.process-item').forEach((item, index) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: 'top 80%',
                    onEnter: () => {
                        item.classList.add('visible', 'active');
                        if (index > 0) {
                            item.previousElementSibling?.classList.remove('active');
                        }
                    }
                });
            });
        }
    }

    // Code Modal
    function showCodeModal(title, code) {
        $.codeModalTitle.textContent = title;
        $.codeModalContent.textContent = code;
        $.codeModal.classList.add('active');
    }

    function closeCodeModal() {
        $.codeModal.classList.remove('active');
    }

    $.codeModalClose.addEventListener('click', closeCodeModal);
    $.codeModal.querySelector('.code-modal-overlay').addEventListener('click', closeCodeModal);

    // Contact Form
    function initContactForm() {
        if (!$.contactForm) return;

        $.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData($.contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Validation
            let isValid = true;
            
            if (!data.name || data.name.trim().length < 2) {
                showFormError('name', 'Name must be at least 2 characters');
                isValid = false;
            } else {
                clearFormError('name');
            }

            if (!data.email || !isValidEmail(data.email)) {
                showFormError('email', 'Please enter a valid email address');
                isValid = false;
            } else {
                clearFormError('email');
            }

            if (!data.message || data.message.trim().length < 10) {
                showFormError('message', 'Message must be at least 10 characters');
                isValid = false;
            } else {
                clearFormError('message');
            }

            if (isValid) {
                // Form submission logic here
                console.log('Form submitted:', data);
                alert('Thank you! Your message has been sent.');
                $.contactForm.reset();
            }
        });

        // Real-time validation
        ['name', 'email', 'message'].forEach(field => {
            const input = document.getElementById(field);
            if (input) {
                input.addEventListener('blur', () => {
                    validateField(field, input.value);
                });
                input.addEventListener('input', () => {
                    if (input.classList.contains('error')) {
                        validateField(field, input.value);
                    }
                });
            }
        });
    }

    function validateField(field, value) {
        switch(field) {
            case 'name':
                if (!value || value.trim().length < 2) {
                    showFormError('name', 'Name must be at least 2 characters');
                } else {
                    clearFormError('name');
                }
                break;
            case 'email':
                if (!value || !isValidEmail(value)) {
                    showFormError('email', 'Please enter a valid email address');
                } else {
                    clearFormError('email');
                }
                break;
            case 'message':
                if (!value || value.trim().length < 10) {
                    showFormError('message', 'Message must be at least 10 characters');
                } else {
                    clearFormError('message');
                }
                break;
        }
    }

    function showFormError(field, message) {
        const input = document.getElementById(field);
        const error = document.getElementById(field + 'Error');
        if (input) input.classList.add('error');
        if (error) error.textContent = message;
    }

    function clearFormError(field) {
        const input = document.getElementById(field);
        const error = document.getElementById(field + 'Error');
        if (input) input.classList.remove('error');
        if (error) error.textContent = '';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Scroll Animations
    function initScrollAnimations() {
        if (typeof ScrollTrigger === 'undefined') return;

        // Section reveals
        $.sections.forEach((section, index) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Project cards
        if ($.projectsGrid) {
            gsap.utils.toArray('.project-card').forEach((card, index) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }

        // Stack items
        if ($.stackGrid) {
            gsap.utils.toArray('.stack-item').forEach((item, index) => {
                gsap.from(item, {
                    opacity: 0,
                    scale: 0.8,
                    rotation: -10,
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }
    }

    // Micro-interactions
    function initMicroInteractions() {
        // Button press effect
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                gsap.to(btn, { scale: 0.95, duration: 0.1 });
            });
            btn.addEventListener('mouseup', () => {
                gsap.to(btn, { scale: 1, duration: 0.2, ease: 'back.out(1.7)' });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { scale: 1, duration: 0.2 });
            });
        });
    }

    // Advanced Loading Screen with Stages
    function initPreloader() {
        // Get elements directly if not in $ object (fixes timing issue)
        const preloader = $.preloader || document.getElementById('preloader');
        const preloaderPercentage = $.preloaderPercentage || document.getElementById('preloaderPercentage');
        
        if (!preloader || !preloaderPercentage) {
            showAllSections();
            return;
        }
        
        // Update $ object for consistency
        $.preloader = preloader;
        $.preloaderPercentage = preloaderPercentage;

        // Initialize 3D cube
        let cubeScene, cubeCamera, cubeRenderer, cube;
        if (typeof THREE !== 'undefined' && preloader) {
            const container = document.getElementById('preloader3D');
            if (container) {
                cubeScene = new THREE.Scene();
                cubeCamera = new THREE.PerspectiveCamera(75, 200/200, 0.1, 1000);
                cubeRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                cubeRenderer.setSize(200, 200);
                cubeRenderer.setClearColor(0x000000, 0);
                container.appendChild(cubeRenderer.domElement);

                const geometry = new THREE.BoxGeometry(50, 50, 50);
                const edges = new THREE.EdgesGeometry(geometry);
                const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xef4444 }));
                cubeScene.add(line);
                cubeCamera.position.z = 100;

                function animateCube() {
                    if (line) {
                        line.rotation.x += 0.01;
                        line.rotation.y += 0.01;
                    }
                    cubeRenderer.render(cubeScene, cubeCamera);
                    if (!preloader || !preloader.classList.contains('hidden')) {
                        requestAnimationFrame(animateCube);
                    }
                }
                animateCube();
                cube = line;
            }
        }

        // Initialize 3D progress bar
        let barFill = document.querySelector('.preloader-3d-bar-fill');
        if (!barFill) {
            const bar = document.getElementById('preloader3DBar');
            if (bar) {
                barFill = document.createElement('div');
                barFill.className = 'preloader-3d-bar-fill';
                bar.appendChild(barFill);
            }
        }

        // Stage management
        const stages = [
            { start: 0, end: 30, text: 'BOOTING_KERNEL', line: 1 },
            { start: 30, end: 70, text: 'LOADING_MODULES', line: 2 },
            { start: 70, end: 100, text: 'ESTABLISHING_SECURE_CONNECTION', line: 3 }
        ];
        let currentStage = 0;

        let progress = 0;
        const interval = setInterval(() => {
            let increment = 2;
            if (progress >= 70) increment = 5; // Speed up at stage 3
            
            progress += increment;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }

            // Update stage
            for (let i = 0; i < stages.length; i++) {
                const stage = stages[i];
                if (progress >= stage.start && progress < stage.end && i >= currentStage) {
                    currentStage = i;
                    const selector = '.log-line[data-stage="' + stage.line + '"]';
                    const logLine = document.querySelector(selector);
                    if (logLine) {
                        const allLogLines = document.querySelectorAll('.log-line');
                        for (let j = 0; j < allLogLines.length; j++) {
                            allLogLines[j].style.display = 'none';
                        }
                        logLine.style.display = 'block';
                        logLine.style.opacity = '1';
                    }
                }
            }

            // Update 3D bar
            if (barFill) {
                barFill.style.width = progress + '%';
            }

            if (preloaderPercentage) {
                preloaderPercentage.textContent = Math.floor(progress) + '%';
            }

            if (progress >= 100) {
                setTimeout(() => {
                    // Explode cube
                    if (cube && typeof gsap !== 'undefined') {
                        gsap.to(cube.scale, {
                            x: 0,
                            y: 0,
                            z: 0,
                            duration: 0.5,
                            ease: 'power2.in'
                        });
                    }
                    // Split screen
                    if (preloader) {
                        preloader.classList.add('splitting');
                        setTimeout(() => {
                            preloader.classList.add('hidden');
                            showAllSections();
                            if (typeof gsap !== 'undefined') {
                                gsap.from('.nav', { opacity: 0, y: -20, duration: 0.6, delay: 0.2 });
                                gsap.from('.hero', { opacity: 0, y: 30, duration: 0.8, delay: 0.4 });
                            }
                        }, 800);
                    }
                }, 500);
            }
        }, 50);
    }


    // WebGL Fluid Background
    function initFluidBackground() {
        if (!$.fluidCanvas) return;
        const canvas = $.fluidCanvas;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let time = 0;
        function animate() {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Simple noise-based fluid effect
            for (let y = 0; y < canvas.height; y += 4) {
                for (let x = 0; x < canvas.width; x += 4) {
                    const noise = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.7) * Math.sin(time * 0.5);
                    const alpha = (noise + 1) * 0.1;
                    ctx.fillStyle = `rgba(239, 68, 68, ${alpha})`;
                    ctx.fillRect(x, y, 4, 4);
                }
            }
            requestAnimationFrame(animate);
        }
        animate();

        window.addEventListener('scroll', () => {
            const scrollDelta = Math.abs(window.scrollY - state.lastScrollY);
            const timeDelta = Date.now() - state.lastScrollTime;
            state.scrollVelocity = scrollDelta / timeDelta;
            state.lastScrollY = window.scrollY;
            state.lastScrollTime = Date.now();
        });
    }

    // Bento Grid with Magnetic Effect
    function renderBentoGrid() {
        if (!$.bentoGrid) return;

        $.bentoGrid.innerHTML = state.stack.map(item => `
            <div class="bento-item" data-item="${item.name}">
                <div class="bento-icon">${item.icon}</div>
                <div class="bento-name">${item.name}</div>
                <div class="bento-category">${item.category}</div>
                </div>
        `).join('');

        // Magnetic effect
        const items = $.bentoGrid.querySelectorAll('.bento-item');
        items.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotateX = (y / rect.height) * 10;
                const rotateY = (x / rect.width) * -10;
                
                gsap.to(item, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Social Proof Ticker with Physics
    function initTicker() {
        if (!$.tickerTrack) return;

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;
        let velocity = 0;
        let lastX = 0;
        let lastTime = Date.now();

        $.tickerTrack.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - $.tickerTrack.offsetLeft;
            scrollLeft = $.tickerTrack.scrollLeft;
            $.tickerTrack.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
                e.preventDefault();
            const x = e.pageX - $.tickerTrack.offsetLeft;
            const walk = (x - startX) * 2;
            $.tickerTrack.scrollLeft = scrollLeft - walk;
            
            const now = Date.now();
            const deltaTime = now - lastTime;
            if (deltaTime > 0) {
                velocity = (e.pageX - lastX) / deltaTime;
            }
            lastX = e.pageX;
            lastTime = now;
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            $.tickerTrack.style.cursor = 'grab';
            
            // Apply inertia
            if (Math.abs(velocity) > 0.1) {
                let momentum = velocity * 100;
                const friction = 0.95;
                const animate = () => {
                    momentum *= friction;
                    $.tickerTrack.scrollLeft -= momentum;
                    if (Math.abs(momentum) > 0.1) {
                        requestAnimationFrame(animate);
                    }
                };
                animate();
            }
        });

        // Auto-scroll
        let autoScroll = 0;
        function tick() {
            if (!isDragging) {
                autoScroll += 0.5;
                $.tickerTrack.style.transform = `translateX(-${autoScroll}px)`;
                if (autoScroll > $.tickerTrack.scrollWidth / 2) {
                    autoScroll = 0;
                }
            }
            requestAnimationFrame(tick);
        }
        tick();
    }

    // Case Study Modal
    function showCaseStudy(project) {
        if (!$.caseStudyModal) return;
        
        $.caseStudyTitle.textContent = project.title;
        $.problemText.textContent = project.problem || 'No problem description available.';
        $.caseStudyCode.textContent = project.codeSnippet;
        $.caseStudyModal.classList.add('active');

        // Toggle buttons
        const toggleBtns = $.caseStudyModal.querySelectorAll('.toggle-btn');
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                toggleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const view = btn.getAttribute('data-view');
                $.problemView.classList.toggle('active', view === 'problem');
                $.solutionView.classList.toggle('active', view === 'solution');
                
                if (view === 'solution' && project.performanceData) {
                    renderPerformanceGraph(project.performanceData);
                }
            });
        });

        if (project.performanceData) {
            renderPerformanceGraph(project.performanceData);
        }
    }

    function closeCaseStudy() {
        if ($.caseStudyModal) {
            $.caseStudyModal.classList.remove('active');
        }
    }

    function renderPerformanceGraph(data) {
        if (!$.performanceGraph || typeof Chart === 'undefined') return;
        
        const ctx = $.performanceGraph.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Response Time (ms)',
                    data: data.values,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: '#a0a0a0' }
                    },
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: '#a0a0a0' }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // Wireframe Mode
    function toggleWireframe() {
        state.wireframeMode = !state.wireframeMode;
        if (state.wireframeMode) {
            $.body.classList.add('wireframe');
            renderTerminalResults('$ debug\nWireframe mode enabled. All elements now show bounding boxes.');
        } else {
            $.body.classList.remove('wireframe');
            renderTerminalResults('$ debug\nWireframe mode disabled.');
        }
    }

    // Update command terminal functions
    function changeTheme() {
        renderTerminalResults('$ theme\nTheme switching not implemented yet.');
    }



    // Show all sections - defined early so it can be called from preloader
    function showAllSections() {
        if (!$.sections || $.sections.length === 0) return;
        $.sections.forEach(section => {
            section.classList.add('visible');
        });
        // Also ensure main content is visible
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.opacity = '1';
            mainContent.style.visibility = 'visible';
        }
        // Show nav
        if ($.nav) {
            $.nav.style.opacity = '1';
        }
    }

    // 3D Octahedron Follower
    function init3DOctahedron() {
        if (typeof THREE === 'undefined' || !$.octahedronContainer) return;
        
        const container = $.octahedronContainer;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Create octahedron wireframe
        const vertices = [
            0, 50, 0,    // top
            50, 0, 0,   // front right
            0, 0, 50,   // front
            -50, 0, 0,  // back left
            0, 0, -50,  // back
            0, -50, 0   // bottom
        ];
        
        const indices = [
            0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1,
            5, 2, 1, 5, 3, 2, 5, 4, 3, 5, 1, 4
        ];
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();
        
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ 
            color: 0xef4444,
            linewidth: 2
        }));
        scene.add(line);
        camera.position.z = 150;

        let targetX = 0, targetY = 0;
        document.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 80;
            targetY = ((e.clientY - rect.top) / rect.height - 0.5) * -80;
        }, { passive: true });

        function animate() {
            line.position.x += (targetX - line.position.x) * 0.05;
            line.position.y += (targetY - line.position.y) * 0.05;
            line.rotation.x += 0.005;
            line.rotation.y += 0.005;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Magnetic Button Effect with Spring Physics
    function initMagneticButtons() {
        const magneticButtons = document.querySelectorAll('.magnetic-btn');
        const stiffness = 400;
        const damping = 30;
        
        magneticButtons.forEach(btn => {
            let x = 0, y = 0;
            let vx = 0, vy = 0;
            
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const dx = e.clientX - centerX;
                const dy = e.clientY - centerY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    const targetX = dx * force * 0.3;
                    const targetY = dy * force * 0.3;
                    
                    // Spring physics
                    const fx = (targetX - x) * stiffness;
                    const fy = (targetY - y) * stiffness;
                    
                    vx += fx * 0.016;
                    vy += fy * 0.016;
                    vx *= damping / (damping + 1);
                    vy *= damping / (damping + 1);
                    
                    x += vx * 0.016;
                    y += vy * 0.016;
                    
                    btn.style.transform = `translate(${x}px, ${y}px)`;
                }
            }, { passive: true });
            
            btn.addEventListener('mouseleave', () => {
                // Spring back
                const springBack = () => {
                    const fx = -x * stiffness;
                    const fy = -y * stiffness;
                    
                    vx += fx * 0.016;
                    vy += fy * 0.016;
                    vx *= damping / (damping + 1);
                    vy *= damping / (damping + 1);
                    
                    x += vx * 0.016;
                    y += vy * 0.016;
                    
                    btn.style.transform = `translate(${x}px, ${y}px)`;
                    
                    if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
                        requestAnimationFrame(springBack);
                    } else {
                        x = 0;
                        y = 0;
                        vx = 0;
                        vy = 0;
                        btn.style.transform = 'translate(0, 0)';
                    }
                };
                springBack();
            });
        });
    }

    // Live Stats with Region Detection
    function initLiveStats() {
        const regionEl = document.getElementById('currentRegion');
        if (regionEl) {
            try {
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const city = timezone.split('/').pop().replace('_', ' ');
                const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                regionEl.textContent = `${city} // ${time}`;
                
                // Update time every minute
                setInterval(() => {
                    const newTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                    regionEl.textContent = `${city} // ${newTime}`;
                }, 60000);
            } catch (e) {
                regionEl.textContent = 'Unknown Region';
            }
        }
    }

    // Tech Cloud 3D
    function initTechCloud() {
        if (typeof THREE === 'undefined' || !$.techCloudCanvas) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, $.techCloudContainer.offsetWidth / $.techCloudContainer.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize($.techCloudContainer.offsetWidth, $.techCloudContainer.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        $.techCloudCanvas.parentElement.replaceChild(renderer.domElement, $.techCloudCanvas);
        
        const icons = state.stack;
        const particles = [];
        icons.forEach((icon, i) => {
            const geometry = new THREE.BoxGeometry(20, 20, 20);
            const material = new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true });
            const mesh = new THREE.Mesh(geometry, material);
            const angle = (i / icons.length) * Math.PI * 2;
            mesh.position.x = Math.cos(angle) * 100;
            mesh.position.y = Math.sin(angle) * 100;
            mesh.position.z = (Math.random() - 0.5) * 100;
            scene.add(mesh);
            particles.push({ mesh, angle, radius: 100 });
        });
        
        camera.position.z = 200;
        
        function animate() {
            particles.forEach((particle, i) => {
                particle.angle += 0.01;
                particle.mesh.position.x = Math.cos(particle.angle) * particle.radius;
                particle.mesh.position.y = Math.sin(particle.angle) * particle.radius;
                particle.mesh.rotation.x += 0.01;
                particle.mesh.rotation.y += 0.01;
            });
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Projects 3D Cards
    function initProjects3D() {
        if (typeof THREE === 'undefined' || !$.projects3DCanvas) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, $.projects3DContainer.offsetWidth / $.projects3DContainer.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize($.projects3DContainer.offsetWidth, $.projects3DContainer.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        $.projects3DCanvas.parentElement.replaceChild(renderer.domElement, $.projects3DCanvas);
        
        const cards = [];
        state.projects.forEach((project, i) => {
            const geometry = new THREE.PlaneGeometry(80, 60);
            const material = new THREE.MeshBasicMaterial({ color: 0x1f1f1f, wireframe: true });
            const card = new THREE.Mesh(geometry, material);
            card.position.x = (i - state.projects.length / 2) * 100;
            card.position.z = -50;
            scene.add(card);
            cards.push(card);
        });
        
        camera.position.z = 300;
        
        let scrollY = 0;
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY * 0.5;
        }, { passive: true });
        
        function animate() {
            cards.forEach((card, i) => {
                card.rotation.y = scrollY * 0.001;
                card.rotation.x = Math.sin(scrollY * 0.01 + i) * 0.2;
            });
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Ghosting Effect
    function initGhostingEffect() {
        if (typeof ScrollTrigger === 'undefined') return;
        
        const ghostElements = document.querySelectorAll('.ghost-text');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;
            const scrollVelocity = Math.abs(scrollDelta);
            
            ghostElements.forEach(el => {
                if (scrollVelocity > 5) {
                    const skew = Math.min(scrollDelta * 0.1, 10);
                    gsap.to(el, {
                        skewX: skew,
                        opacity: 0.8,
                        duration: 0.1
                    });
                } else {
                    gsap.to(el, {
                        skewX: 0,
                        opacity: 1,
                        duration: 0.3
                    });
                }
            });
            
            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    // Sidebar Navigation - Fixed Scroll Accuracy
    function initSidebarNav() {
        if (!$.sidebarNav || !$.sidebarIndicator) return;
        
        const sections = Array.from($.sections).filter(s => {
            const id = s.id;
            return id === 'hero' || id === 'stack' || id === 'projects' || id === 'contact';
        });
        const sidebarLinks = Array.from($.sidebarLinks);
        const sidebarTrack = $.sidebarNav.querySelector('.sidebar-track');
        
        if (!sidebarTrack) return;
        
        function updateSidebarIndicator() {
            const trackHeight = sidebarTrack.offsetHeight;
            const indicatorSize = 8; // Size of the indicator dot
            const maxPosition = trackHeight - indicatorSize;
            
            // Get scroll position
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollableHeight = documentHeight - windowHeight;
            
            // Calculate scroll progress (0 to 1)
            const scrollProgress = scrollableHeight > 0 ? Math.min(scrollTop / scrollableHeight, 1) : 0;
            
            // Map to track position (0 to maxPosition)
            const indicatorPosition = scrollProgress * maxPosition;
            
            // Update indicator position
            $.sidebarIndicator.style.top = indicatorPosition + 'px';
            
            // Update active link based on which section is in view
            const viewportCenter = window.innerHeight / 2;
            let activeIndex = 0;
            let minDistance = Infinity;
            
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionBottom = rect.bottom;
                const sectionCenter = sectionTop + (sectionBottom - sectionTop) / 2;
                
                // Check if section is near viewport center
                if (sectionTop <= viewportCenter && sectionBottom >= viewportCenter) {
                    const distance = Math.abs(sectionCenter - viewportCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        activeIndex = index;
                    }
                }
            });
            
            // Fallback: if no section is centered, find the closest one
            if (minDistance === Infinity) {
                sections.forEach((section, index) => {
                    const rect = section.getBoundingClientRect();
                    const sectionCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(sectionCenter - viewportCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        activeIndex = index;
                    }
                });
            }
            
            sidebarLinks.forEach((link, index) => {
                link.classList.toggle('active', index === activeIndex);
            });
        }
        
        // Use requestAnimationFrame for smooth updates
        let ticking = false;
        function onScroll() {
            if (!ticking) {
        requestAnimationFrame(() => {
                    updateSidebarIndicator();
                    ticking = false;
                });
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', () => {
            updateSidebarIndicator();
        }, { passive: true });
        updateSidebarIndicator();
        
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
            e.preventDefault();
                const section = link.getAttribute('data-section');
                navigateToSection(section);
            });
        });
    }

    // UPLINK Form with Binary Stream
    function initUplinkForm() {
        if (!$.contactForm) return;
        
        const uplinkSendBtn = document.getElementById('uplinkSendBtn');
        const uplinkStatus = document.getElementById('uplinkStatus');
        
        $.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData($.contactForm);
            const message = formData.get('message');
            
            if (!message) return;
            
            // Convert message to binary stream
            const messageText = $.contactForm.querySelector('#message');
            const rect = messageText.getBoundingClientRect();
            
            // Create binary particles
            const binaryChars = ['0', '1'];
            for (let i = 0; i < 100; i++) {
                const binary = document.createElement('div');
                binary.className = 'binary-stream';
                binary.textContent = binaryChars[Math.floor(Math.random() * 2)];
                binary.style.left = (rect.left + Math.random() * rect.width) + 'px';
                binary.style.top = (rect.top + Math.random() * rect.height) + 'px';
                document.body.appendChild(binary);
                
                setTimeout(() => {
                    binary.remove();
                }, 2000);
            }
            
            // Hide form, show status
            $.contactForm.style.opacity = '0';
            setTimeout(() => {
                $.contactForm.style.display = 'none';
                if (uplinkStatus) {
                    uplinkStatus.style.display = 'block';
                }
            }, 500);
        });
    }

    // Terminal Form (fallback)
    function initTerminalForm() {
        if (!$.contactForm) return;
        initUplinkForm();
    }

    // Code Preview Button
    function initCodePreview() {
        if ($.codePreviewBtn && $.codePreviewPopup) {
            $.codePreviewBtn.addEventListener('mouseenter', () => {
                $.codePreviewPopup.style.display = 'block';
            });
        }
    }

    // Render Arsenal with Bento Grid Expansion
    function renderArsenal() {
        if (!$.arsenalGrid) {
            if ($.techCategories) {
                renderStack();
            }
            return;
        }
        
        const arsenalData = [];
        
        $.arsenalGrid.innerHTML = arsenalData.map((item, index) => `
            <div class="arsenal-item" data-index="${index}">
                <div class="arsenal-category">${item.icon} ${item.category}</div>
                <div class="arsenal-description">${item.description}</div>
            </div>
        `).join('');
        
        // Bento grid expansion
        const items = $.arsenalGrid.querySelectorAll('.arsenal-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const isExpanded = item.classList.contains('expanded');
                
                // Close all
                items.forEach(i => {
                    i.classList.remove('expanded', 'pushed');
                });
                
                // Expand clicked item
                if (!isExpanded) {
                    item.classList.add('expanded');
                    items.forEach(i => {
                        if (i !== item) {
                            i.classList.add('pushed');
                        }
                    });
                }
            });
        });
    }

    // Render Stack (fallback)
    function renderStack() {
        if ($.techCategories) {
            const categories = {
                'Back-end Systems': ['Luau', 'Roblox-ts', 'DataStores', 'Knit'],
                'UI/UX Engineering': ['TweenService', 'Roact', 'RemoteEvents'],
                'Game Physics': ['Raycasting', 'Collision Detection'],
                'Optimization': ['Memory Management', 'Performance Profiling']
            };
            
            $.techCategories.innerHTML = Object.entries(categories).map(([category, skills]) => `
                <div class="tech-category">
                    <h3 class="tech-category-title">${category}</h3>
                    ${skills.map(skill => `
                        <div class="tech-skill">
                            <div class="tech-skill-name">
                                <span>${skill}</span>
                                <span>90%</span>
                            </div>
                            <div class="tech-skill-bar">
                                <div class="tech-skill-fill" style="width: 90%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('');
            
            setTimeout(() => {
                document.querySelectorAll('.tech-skill-fill').forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }, 500);
        }
    }

    // Render Archive with Holographic Previews
    function renderArchive() {
        const archiveGrid = document.getElementById('archiveGrid');
        if (!archiveGrid && !$.projectsGrid) return;
        
        const target = archiveGrid || $.projectsGrid;
        
        target.innerHTML = state.projects.map(project => `
            <div class="archive-item" data-project-id="${project.id}">
                <div class="archive-media">
                    <img src="${project.image}" alt="${project.title}" class="archive-image" loading="lazy" />
                    <div class="blueprint-overlay"></div>
            </div>
                <div class="archive-content">
                    <div class="archive-brief">[PROJECT_NAME]</div>
                    <h3 class="archive-title">${project.title}</h3>
                    <div class="archive-brief">The Brief:</div>
                    <p class="archive-execution">${project.problem || 'Tasked with building a high-performance system.'}</p>
                    <div class="archive-brief">The Execution:</div>
                    <p class="archive-execution">${project.description}</p>
                    <div class="project-specs">
                        <div class="spec-item">
                            <span class="spec-label">Latency</span>
                            <span class="spec-value">< 40ms</span>
                            </div>
                        <div class="spec-item">
                            <span class="spec-label">Architecture</span>
                            <span class="spec-value">Knit Framework</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Security</span>
                            <span class="spec-value">Anti-Exploit Level 7</span>
                </div>
            </div>
                    <button class="project-code-btn" data-code="${project.id}">View Code</button>
                </div>
            </div>
        `).join('');

        // Holographic glitch effect on hover
        const archiveItems = target.querySelectorAll('.archive-item');
        archiveItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('glitch');
                setTimeout(() => {
                    item.classList.remove('glitch');
                }, 300);
            });
            
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('project-code-btn')) return;
                const projectId = parseInt(item.getAttribute('data-project-id'));
                const project = state.projects.find(p => p.id === projectId);
                if (project) {
                    showCaseStudy(project);
                }
            });
        });

        // Code button handlers
        target.querySelectorAll('.project-code-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = parseInt(btn.getAttribute('data-code'));
                const project = state.projects.find(p => p.id === projectId);
                if (project) {
                    showCaseStudy(project);
                }
            });
        });
    }

    // Render Projects (fallback)
    function renderProjects() {
        if ($.projectsGrid && !document.getElementById('archiveGrid')) {
            renderArchive();
        } else if ($.projectsGrid) {
            // Old format
            $.projectsGrid.innerHTML = state.projects.map(project => `
                <div class="project-card" data-project-id="${project.id}">
                    <div class="project-media">
                        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy" />
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <button class="project-code-btn" data-code="${project.id}">View Code</button>
                    </div>
                </div>
            `).join('');
        }
    }

    // Data-Viz: Coordinate Tracker
    function initCoordinateTracker() {
        const mouseX = document.getElementById('mouseX');
        const mouseY = document.getElementById('mouseY');
        if (!mouseX || !mouseY) return;

        let x = 0, y = 0;
        let targetX = 0, targetY = 0;

        document.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        }, { passive: true });

        function update() {
            // Jitter effect
            x += (targetX - x) * 0.1;
            y += (targetY - y) * 0.1;
            const jitterX = (Math.random() - 0.5) * 0.5;
            const jitterY = (Math.random() - 0.5) * 0.5;
            
            mouseX.textContent = (x + jitterX).toFixed(2);
            mouseY.textContent = (y + jitterY).toFixed(2);
            requestAnimationFrame(update);
        }
        update();
    }

    // Data-Viz: RAM Monitor Jitter
    function initRAMMonitor() {
        const ramBars = document.querySelectorAll('.ram-bar');
        if (ramBars.length === 0) return;

        function jitter() {
            ramBars.forEach((bar, i) => {
                const baseHeight = parseFloat(bar.style.height) || 50;
                const jitter = (Math.random() - 0.5) * 2;
                const newHeight = Math.max(20, Math.min(90, baseHeight + jitter));
                bar.style.height = newHeight + '%';
            });
            setTimeout(jitter, 100 + Math.random() * 200);
        }
        jitter();
    }

    // Mechanical Tab Switch
    function initMechanicalTabs() {
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        const sections = document.querySelectorAll('.section');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
            e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                const targetEl = document.getElementById(targetSection);
                if (!targetEl) return;

                // Mark all sections
                sections.forEach(section => {
                    section.classList.remove('switching-out', 'switching-in', 'active');
                    if (section === targetEl) {
                        section.classList.add('switching-in');
            setTimeout(() => {
                            section.classList.add('active');
                        }, 50);
                    } else if (section.classList.contains('visible')) {
                        section.classList.add('switching-out');
                    }
                });

                // Scroll to section
                setTimeout(() => {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 200);
            });
        });
    }

    // Biometric Button
    function initBiometricButton() {
        const uplinkBtn = document.getElementById('uplinkSendBtn');
        if (!uplinkBtn) return;

        // Create biometric ring
        const ring = document.createElement('div');
        ring.className = 'biometric-ring';
        uplinkBtn.appendChild(ring);

        let holdTimer = null;
        let isHolding = false;

        uplinkBtn.addEventListener('mousedown', () => {
            isHolding = true;
            uplinkBtn.classList.add('holding');
            holdTimer = setTimeout(() => {
                if (isHolding) {
                    uplinkBtn.closest('form')?.requestSubmit();
                    uplinkBtn.classList.remove('holding');
                    isHolding = false;
                }
            }, 2000);
        });

        uplinkBtn.addEventListener('mouseup', () => {
            isHolding = false;
            uplinkBtn.classList.remove('holding');
            if (holdTimer) clearTimeout(holdTimer);
        });

        uplinkBtn.addEventListener('mouseleave', () => {
            isHolding = false;
            uplinkBtn.classList.remove('holding');
            if (holdTimer) clearTimeout(holdTimer);
        });
    }

    // Blueprint Overlay
    function initBlueprintOverlay() {
        const archiveItems = document.querySelectorAll('.archive-item');
        archiveItems.forEach(item => {
            const overlay = document.createElement('div');
            overlay.className = 'blueprint-overlay';
            const media = item.querySelector('.archive-media');
            if (media) {
                media.appendChild(overlay);
            }
        });
    }

    // Radar Chart for Arsenal
    function initRadarChart() {
        const container = document.getElementById('arsenalGrid');
        if (!container) return;

        const canvas = document.createElement('canvas');
        canvas.id = 'radarChartCanvas';
        const radarContainer = document.createElement('div');
        radarContainer.className = 'radar-chart-container';
        radarContainer.appendChild(canvas);
        
        // Insert before arsenal grid
        container.parentNode.insertBefore(radarContainer, container);

        if (typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / 400, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(container.offsetWidth, 400);
        renderer.setClearColor(0x000000, 0);

        const skills = ['Optimization', 'Physics', 'Backend', 'UI', 'Security', 'Networking'];
        const values = [90, 85, 95, 80, 88, 92];
        const radius = 100;
        const centerY = 0;

        // Create radar web
        const webGeometry = new THREE.BufferGeometry();
        const webMaterial = new THREE.LineBasicMaterial({ color: 0x10b981, opacity: 0.3, transparent: true });
        
        const webPoints = [];
        for (let i = 0; i < skills.length; i++) {
            const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            webPoints.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, 0));
        }
        webGeometry.setFromPoints(webPoints);
        const web = new THREE.LineSegments(webGeometry, webMaterial);
        scene.add(web);

        // Create skill points
        const points = [];
        skills.forEach((skill, i) => {
            const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
            const value = values[i];
            const x = Math.cos(angle) * radius * (value / 100);
            const y = Math.sin(angle) * radius * (value / 100);
            
            const geometry = new THREE.SphereGeometry(3, 16, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0xef4444 });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(x, y, 0);
            scene.add(sphere);
            points.push({ sphere, angle, baseValue: value });
        });

        camera.position.z = 250;

        function animate() {
            points.forEach((point, i) => {
                const hovered = document.querySelector(`.arsenal-item[data-index="${i}"]:hover`);
                if (hovered) {
                    const scale = 1.2;
                    point.sphere.scale.set(scale, scale, scale);
                    // Distort web toward this point
                    const targetAngle = point.angle;
                    // Simple distortion effect
            } else {
                    point.sphere.scale.set(1, 1, 1);
                }
            });
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Time-Travel Scrollbar
    function initTimeTravelScrollbar() {
        const scrollbar = document.getElementById('timeTravelScrollbar');
        const thumb = document.getElementById('scrollbarThumb');
        const commits = document.getElementById('scrollbarCommits');
        const directory = document.getElementById('scrollbarDirectory');
        const code = document.getElementById('scrollbarCode');
        const bgCanvas = document.getElementById('scrollbar3DBg');
        
        if (!scrollbar || !thumb) return;

        // Initialize 3D Background
        if (bgCanvas && typeof THREE !== 'undefined') {
            initScrollbar3DBackground(bgCanvas);
        }

        const commitsList = [
            'feat: build_042',
            'feat: build_041',
            'fix: performance_040',
            'feat: build_039',
            'feat: build_038',
            'refactor: architecture_037'
        ];

        if (commits) {
            commits.innerHTML = commitsList.map(hash => 
                `<div class="commit-hash">${hash}</div>`
            ).join('');
        }

        let codeText = 'function init() {\n  // System initialization\n  loadModules();\n  connectDatabase();\n}';
        let codeIndex = 0;
        let isScrollingDown = true;

        function updateScrollbar() {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
            
            // Update thumb position
            const thumbHeight = thumb.offsetHeight;
            const maxTop = scrollbar.offsetHeight - thumbHeight;
            thumb.style.top = (scrollPercent * maxTop) + 'px';

            // Update active commit
            if (commits) {
                const commitIndex = Math.floor(scrollPercent * (commitsList.length - 1));
                commits.querySelectorAll('.commit-hash').forEach((el, i) => {
                    el.classList.toggle('active', i === commitIndex);
                });
            }

            // Update directory
            if (directory) {
                const sections = ['Work', 'Stack', 'Projects', 'Contact'];
                const sectionIndex = Math.floor(scrollPercent * (sections.length - 1));
                directory.textContent = `C:/Portfolio/${sections[sectionIndex]}/`;
            }

            // Update code typing
            if (code) {
                const newIsDown = scrollTop > (state.lastScrollY || 0);
                if (newIsDown !== isScrollingDown) {
                    isScrollingDown = newIsDown;
                    codeIndex = 0;
                }
                state.lastScrollY = scrollTop;

                if (isScrollingDown) {
                    codeIndex = Math.floor(scrollPercent * codeText.length);
                    code.textContent = codeText.substring(0, codeIndex) + '█';
                } else {
                    codeIndex = Math.floor((1 - scrollPercent) * codeText.length);
                    code.textContent = codeText.substring(0, codeIndex) + '█';
                }
            }
        }

        window.addEventListener('scroll', updateScrollbar, { passive: true });
        updateScrollbar();
    }

    // 3D Creative Background for Time-Travel Scrollbar
    function initScrollbar3DBackground(canvas) {
        if (typeof THREE === 'undefined' || !canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Create floating code blocks
        const codeBlocks = [];
        const codeSnippets = [
            'function init()',
            'loadModules()',
            'connectDB()',
            'class System',
            'export default',
            'const config =',
            'async function',
            'return data'
        ];

        codeSnippets.forEach((snippet, i) => {
            // Create 3D text-like structure using boxes
            const group = new THREE.Group();
            
            // Main block
            const blockGeometry = new THREE.BoxGeometry(30, 8, 2);
            const blockMaterial = new THREE.MeshBasicMaterial({ 
                color: 0xef4444,
                wireframe: true,
                transparent: true,
                opacity: 0.4
            });
            const block = new THREE.Mesh(blockGeometry, blockMaterial);
            group.add(block);

            // Add smaller detail boxes
            for (let j = 0; j < snippet.length; j++) {
                const detail = new THREE.BoxGeometry(2, 2, 2);
                const detailMesh = new THREE.Mesh(detail, blockMaterial);
                detailMesh.position.set(
                    (j - snippet.length / 2) * 3,
                    Math.sin(j) * 2,
                    Math.cos(j) * 2
                );
                group.add(detailMesh);
            }

            // Position in 3D space
            const angle = (i / codeSnippets.length) * Math.PI * 2;
            const radius = 80;
            group.position.set(
                Math.cos(angle) * radius,
                (i - codeSnippets.length / 2) * 20,
                Math.sin(angle) * radius
            );
            
            scene.add(group);
            codeBlocks.push({ group, angle, radius, baseY: (i - codeSnippets.length / 2) * 20 });
        });

        // Create particle connections between commits
        const particles = [];
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 100;
        const positions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 200;
            positions[i + 1] = (Math.random() - 0.5) * 300;
            positions[i + 2] = (Math.random() - 0.5) * 200;
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x10b981,
            size: 2,
            transparent: true,
            opacity: 0.6
        });
        const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleSystem);

        // Create connecting lines
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = new Float32Array(particleCount * 6);
        for (let i = 0; i < particleCount; i += 2) {
            const index = i * 3;
            linePositions[index] = positions[index];
            linePositions[index + 1] = positions[index + 1];
            linePositions[index + 2] = positions[index + 2];
            linePositions[index + 3] = positions[(i + 1) * 3];
            linePositions[index + 4] = positions[(i + 1) * 3 + 1];
            linePositions[index + 5] = positions[(i + 1) * 3 + 2];
        }
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x10b981,
            transparent: true,
            opacity: 0.2
        });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        // Create floating geometric shapes
        const shapes = [];
        const shapeTypes = [
            () => new THREE.OctahedronGeometry(8, 0),
            () => new THREE.TetrahedronGeometry(8, 0),
            () => new THREE.IcosahedronGeometry(8, 0)
        ];

        for (let i = 0; i < 15; i++) {
            const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            const geometry = shapeType();
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL((i / 15) * 0.3 + 0.5, 0.7, 0.5),
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(
                (Math.random() - 0.5) * 150,
                (Math.random() - 0.5) * 250,
                (Math.random() - 0.5) * 150
            );
            scene.add(mesh);
            shapes.push(mesh);
        }

        // Create DNA helix structure
        const helixGroup = new THREE.Group();
        const helixPoints = 50;
        for (let i = 0; i < helixPoints; i++) {
            const t = (i / helixPoints) * Math.PI * 4;
            const radius = 40;
            const x = Math.cos(t) * radius;
            const y = (i - helixPoints / 2) * 3;
            const z = Math.sin(t) * radius;
            
            const sphere = new THREE.SphereGeometry(2, 8, 8);
            const sphereMaterial = new THREE.MeshBasicMaterial({
                color: 0xef4444,
                transparent: true,
                opacity: 0.5
            });
            const sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
            sphereMesh.position.set(x, y, z);
            helixGroup.add(sphereMesh);
        }
        scene.add(helixGroup);

        camera.position.set(0, 0, 200);
        camera.lookAt(0, 0, 0);

        let scrollProgress = 0;
        let time = 0;

        function animate() {
            time += 0.01;
            scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

            // Animate code blocks
            codeBlocks.forEach((block, i) => {
                block.angle += 0.005;
                block.group.position.x = Math.cos(block.angle) * block.radius;
                block.group.position.z = Math.sin(block.angle) * block.radius;
                block.group.position.y = block.baseY + Math.sin(time + i) * 10;
                block.group.rotation.y += 0.01;
                block.group.rotation.x = Math.sin(time * 0.5 + i) * 0.2;
            });

            // Animate particles
            const positions = particleSystem.geometry.attributes.position;
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                positions.array[i3 + 1] += Math.sin(time + i) * 0.5;
                if (positions.array[i3 + 1] > 150) positions.array[i3 + 1] = -150;
            }
            positions.needsUpdate = true;

            // Animate shapes
            shapes.forEach((shape, i) => {
                shape.rotation.x += 0.01;
                shape.rotation.y += 0.015;
                shape.position.y += Math.sin(time + i) * 0.3;
                shape.scale.setScalar(1 + Math.sin(time * 2 + i) * 0.1);
            });

            // Rotate helix
            helixGroup.rotation.y += 0.02;
            helixGroup.position.y = scrollProgress * 100 - 50;

            // Rotate camera based on scroll
            const cameraAngle = scrollProgress * Math.PI * 2;
            camera.position.x = Math.cos(cameraAngle) * 200;
            camera.position.z = Math.sin(cameraAngle) * 200;
            camera.lookAt(0, scrollProgress * 50 - 25, 0);

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        });
    }

    // Terminal Easter Eggs
    function initTerminalEasterEggs() {
        let typedText = '';
        const helpModal = document.getElementById('terminalHelpModal');
        const helpClose = document.getElementById('helpClose');
        const hidden3D = document.getElementById('hidden3DObject');

        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) return;
            
            if (e.key === 'Backspace') {
                typedText = typedText.slice(0, -1);
            } else if (e.key.length === 1) {
                typedText += e.key.toLowerCase();
            }

            // Check for commands
            if (typedText.includes('robux')) {
                typedText = '';
                transformToRobux();
            } else if (typedText.includes('dark')) {
                typedText = '';
                switchToDarkMode();
            } else if (typedText.includes('help')) {
                typedText = '';
                if (helpModal) {
                    helpModal.classList.add('active');
                }
            } else if (typedText.includes('secret')) {
                typedText = '';
                showHidden3D();
            }

            // Limit length
            if (typedText.length > 20) {
                typedText = typedText.slice(-20);
            }
        });

        if (helpClose) {
            helpClose.addEventListener('click', () => {
                if (helpModal) helpModal.classList.remove('active');
            });
        }

        function transformToRobux() {
            // Transform physics particles to Robux coins
            const canvas = document.getElementById('physicsCanvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                // Visual effect - particles turn gold
                setTimeout(() => {
                    // Reset after 5 seconds
                }, 5000);
            }
        }

        function switchToDarkMode() {
            document.documentElement.style.setProperty('--color-accent', '#8b0000');
            document.documentElement.style.setProperty('--color-accent-glow', 'rgba(139, 0, 0, 0.5)');
            setTimeout(() => {
                document.documentElement.style.setProperty('--color-accent', '#ef4444');
                document.documentElement.style.setProperty('--color-accent-glow', 'rgba(239, 68, 68, 0.3)');
            }, 10000);
        }

        function showHidden3D() {
            if (!hidden3D || typeof THREE === 'undefined') return;
            
            hidden3D.classList.add('active');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(300, 300);
            renderer.setClearColor(0x000000, 0);
            hidden3D.innerHTML = '';
            hidden3D.appendChild(renderer.domElement);

            // Create crown
            const crownGroup = new THREE.Group();
            const geometry = new THREE.ConeGeometry(30, 40, 8);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0xffd700,
                wireframe: true
            });
            const crown = new THREE.Mesh(geometry, material);
            crownGroup.add(crown);

            for (let i = 0; i < 5; i++) {
                const spike = new THREE.ConeGeometry(5, 20, 8);
                const spikeMesh = new THREE.Mesh(spike, material);
                spikeMesh.position.set(
                    Math.cos((i / 5) * Math.PI * 2) * 25,
                    25,
                    Math.sin((i / 5) * Math.PI * 2) * 25
                );
                crownGroup.add(spikeMesh);
            }

            scene.add(crownGroup);
            camera.position.z = 150;

            function animate() {
                crownGroup.rotation.y += 0.02;
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }
            animate();

            setTimeout(() => {
                hidden3D.classList.remove('active');
                hidden3D.innerHTML = '';
            }, 5000);
        }
    }

    // Hardware Footer
    function initHardwareFooter() {
        const memoryLoad = document.getElementById('memoryLoad');
        const statusLED = document.getElementById('statusLED');
        const statusText = document.getElementById('statusText');
        const commitMessage = document.getElementById('commitMessage');

        // Simulate memory load
        if (memoryLoad) {
            setInterval(() => {
                const load = 10 + Math.random() * 5;
                memoryLoad.textContent = load.toFixed(1) + '%';
            }, 2000);
        }

        // Fetch GitHub commit (mock for now)
        if (commitMessage) {
            // In production, use: fetch('https://api.github.com/repos/username/repo/commits')
            commitMessage.textContent = 'feat: implement glass console UI';
        }

        // Status LED
        if (statusLED && statusText) {
            // Simulate availability
            const isAvailable = true; // Change based on actual availability
            if (isAvailable) {
                statusLED.className = 'led led-green';
                statusText.textContent = 'ACTIVE';
            } else {
                statusLED.className = 'led led-red';
                statusText.textContent = 'BUSY';
            }
        }
    }

    // Logic Node Map
    function initLogicNodeMap() {
        const modal = document.getElementById('logicNodeModal');
        const close = document.getElementById('logicNodeClose');
        const canvas = document.getElementById('logicNodeCanvas');
        
        if (!modal || !canvas) return;

        // Open modal when clicking "View Code" buttons
        document.querySelectorAll('.project-code-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                modal.classList.add('active');
                renderLogicNodes(canvas);
            });
        });

        if (close) {
            close.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.querySelector('.modal-overlay')?.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    function renderLogicNodes(canvas) {
        if (typeof THREE === 'undefined' || !canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        renderer.setClearColor(0x000000, 0);

        const nodes = [
            { name: 'DataStore', pos: [0, 0, 0], connections: ['ProfileService', 'RemoteEvents'] },
            { name: 'ProfileService', pos: [-100, 50, 0], connections: ['DataStore'] },
            { name: 'RemoteEvents', pos: [100, 50, 0], connections: ['DataStore', 'Matchmaking'] },
            { name: 'Matchmaking', pos: [150, -50, 0], connections: ['RemoteEvents', 'Raycast'] },
            { name: 'Raycast', pos: [0, -100, 0], connections: ['Matchmaking'] }
        ];

        const nodeMeshes = [];
        nodes.forEach(node => {
            const geometry = new THREE.SphereGeometry(10, 16, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(...node.pos);
            scene.add(mesh);
            nodeMeshes.push({ mesh, node });
        });

        // Draw connections
        nodes.forEach((node) => {
            node.connections.forEach(connName => {
                const connNode = nodes.find(n => n.name === connName);
                if (connNode) {
                    const geometry = new THREE.BufferGeometry().setFromPoints([
                        new THREE.Vector3(...node.pos),
                        new THREE.Vector3(...connNode.pos)
                    ]);
                    const material = new THREE.LineBasicMaterial({ color: 0x10b981, opacity: 0.3, transparent: true });
                    const line = new THREE.Line(geometry, material);
                    scene.add(line);
                }
            });
        });

        camera.position.z = 200;

        function animate() {
            nodeMeshes.forEach(({ mesh }) => {
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.01;
            });
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Portal Hover Effect
    function initPortalHover() {
        const archiveItems = document.querySelectorAll('.archive-item');
        archiveItems.forEach(item => {
            const image = item.querySelector('.archive-image');
            if (!image) return;

            const canvas = document.createElement('canvas');
            canvas.className = 'portal-canvas';
            const media = item.querySelector('.archive-media');
            if (media) {
                media.appendChild(canvas);
            }

            item.addEventListener('mouseenter', () => {
                createPortalEffect(canvas, image);
            });
        });
    }

    function createPortalEffect(canvas, image) {
        const ctx = canvas.getContext('2d');
        canvas.width = image.offsetWidth;
        canvas.height = image.offsetHeight;

        let time = 0;
        function animate() {
            time += 0.05;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Simple displacement effect using Perlin-like noise
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const noise = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time * 0.7);
                    const index = (y * canvas.width + x) * 4;
                    imageData.data[index] = 255 * (noise + 1) / 2;
                    imageData.data[index + 1] = 255 * (noise + 1) / 2;
                    imageData.data[index + 2] = 255;
                    imageData.data[index + 3] = 100;
                }
            }
            ctx.putImageData(imageData, 0, 0);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // 3D Cube Transitions
    function init3DCubeTransitions() {
        const cubeContainer = document.createElement('div');
        cubeContainer.className = 'cube-container';
        const canvas = document.createElement('canvas');
        canvas.id = 'cubeCanvas';
        cubeContainer.appendChild(canvas);
        document.body.appendChild(cubeContainer);

        if (typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // Create cube faces with content
        const faces = ['hero', 'stack', 'projects', 'contact'];
        const cubeGroup = new THREE.Group();

        faces.forEach((face, i) => {
            const geometry = new THREE.PlaneGeometry(200, 200);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0x1a1a1a,
                wireframe: true,
                side: THREE.DoubleSide
            });
            const mesh = new THREE.Mesh(geometry, material);
            
            const angle = (i / faces.length) * Math.PI * 2;
            mesh.position.x = Math.cos(angle) * 100;
            mesh.position.z = Math.sin(angle) * 100;
            mesh.lookAt(0, 0, 0);
            cubeGroup.add(mesh);
        });

        scene.add(cubeGroup);
        camera.position.set(0, 0, 300);

        // Bloom effect (simplified)
        let rotationTarget = 0;
        document.querySelectorAll('.nav-link[data-section]').forEach((link, i) => {
            link.addEventListener('click', () => {
                cubeContainer.classList.add('active');
                rotationTarget = (i / faces.length) * Math.PI * 2;
                setTimeout(() => {
                    cubeContainer.classList.remove('active');
                }, 1000);
            });
        });

        let currentRotation = 0;
        function animate() {
            currentRotation += (rotationTarget - currentRotation) * 0.1;
            cubeGroup.rotation.y = currentRotation;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Render Video Gallery
    function renderVideoGallery() {
        const gallery = document.getElementById('videoGallery');
        if (!gallery) {
            console.warn('Video gallery element not found');
            return;
        }

        if (!videoConfig || videoConfig.length === 0) {
            gallery.innerHTML = `
                <div class="video-placeholder">
                    <div class="placeholder-content">
                        <div class="placeholder-icon">⚠</div>
                        <p class="placeholder-text">No videos configured</p>
                    </div>
                </div>
            `;
            return;
        }

        console.log('Rendering video gallery with', videoConfig.length, 'videos');

        gallery.innerHTML = videoConfig.map(video => `
            <div class="video-card" data-video-id="${video.id}">
                <div class="corner-accent top-left"></div>
                <div class="corner-accent top-right"></div>
                <div class="corner-accent bottom-left"></div>
                <div class="corner-accent bottom-right"></div>
                <div class="video-wrapper">
                    <video 
                        preload="metadata" 
                        poster="${video.thumbnail || ''}"
                        src="${video.src}"
                    >
                        <source src="${video.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="video-loading"></div>
                    <div class="video-overlay">
                        <button class="video-play-btn" aria-label="Play video"></button>
                    </div>
                    <div class="video-controls">
                        <div class="video-progress">
                            <div class="video-progress-bar"></div>
                        </div>
                        <div class="video-time">
                            <span class="video-time-current">0:00</span> / <span class="video-time-duration">0:00</span>
                        </div>
                    </div>
                    <div class="video-status">PAUSED</div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-description">${video.description}</p>
                </div>
            </div>
        `).join('');

        // Initialize video interactions
        initVideoPlayers();
        
        // Log if videos were rendered
        const renderedCards = gallery.querySelectorAll('.video-card');
        console.log('Video cards rendered:', renderedCards.length);
    }

    // Initialize Video Players
    function initVideoPlayers() {
        const videoCards = document.querySelectorAll('.video-card');
        
        videoCards.forEach(card => {
            const video = card.querySelector('video');
            const playBtn = card.querySelector('.video-play-btn');
            const overlay = card.querySelector('.video-overlay');
            const progressBar = card.querySelector('.video-progress-bar');
            const progressContainer = card.querySelector('.video-progress');
            const timeCurrent = card.querySelector('.video-time-current');
            const timeDuration = card.querySelector('.video-time-duration');
            const status = card.querySelector('.video-status');
            const loading = card.querySelector('.video-loading');

            if (!video || !playBtn) return;

            // Video source is already set in HTML, ensure it loads
            if (video.src) {
                video.load();
            } else if (video.querySelector('source')) {
                // Fallback: use source tag
                const source = video.querySelector('source');
                if (source && source.src) {
                    video.src = source.src;
                    video.load();
                }
            }

            // Format time
            function formatTime(seconds) {
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs.toString().padStart(2, '0')}`;
            }

            // Update duration when metadata loads
            video.addEventListener('loadedmetadata', () => {
                if (video.duration && isFinite(video.duration)) {
                    timeDuration.textContent = formatTime(video.duration);
                }
                if (loading) loading.style.display = 'none';
                console.log('✓ Video loaded:', video.src);
            });

            // Handle video errors
            video.addEventListener('error', (e) => {
                console.error('✗ Video error:', video.src, video.error?.message || 'Unknown error');
                if (loading) loading.style.display = 'none';
                if (status) {
                    status.textContent = 'ERROR';
                    status.style.color = '#ef4444';
                }
            });

            // Handle video load start
            video.addEventListener('loadstart', () => {
                console.log('→ Loading video:', video.src);
                if (loading) loading.style.display = 'flex';
            });

            // Update progress
            video.addEventListener('timeupdate', () => {
                const progress = (video.currentTime / video.duration) * 100;
                progressBar.style.width = progress + '%';
                timeCurrent.textContent = formatTime(video.currentTime);
            });

            // Play/Pause functionality
            function togglePlay() {
                if (video.paused) {
                    video.play();
                    card.classList.add('playing');
                    status.textContent = 'PLAYING';
                } else {
                    video.pause();
                    card.classList.remove('playing');
                    status.textContent = 'PAUSED';
                }
            }

            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePlay();
            });

            video.addEventListener('click', togglePlay);

            // Progress bar click
            progressContainer.addEventListener('click', (e) => {
                const rect = progressContainer.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                video.currentTime = percent * video.duration;
            });

            // Video ended
            video.addEventListener('ended', () => {
                card.classList.remove('playing');
                status.textContent = 'ENDED';
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
            });

            // Loading state
            video.addEventListener('loadstart', () => {
                loading.style.display = 'flex';
            });

            video.addEventListener('canplay', () => {
                loading.style.display = 'none';
            });

            // Pause other videos when one plays
            video.addEventListener('play', () => {
                videoCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        const otherVideo = otherCard.querySelector('video');
                        if (otherVideo && !otherVideo.paused) {
                            otherVideo.pause();
                            otherCard.classList.remove('playing');
                            const otherStatus = otherCard.querySelector('.video-status');
                            if (otherStatus) otherStatus.textContent = 'PAUSED';
                        }
                    }
                });
            });
        });
    }

    // Initialize
    function init() {
        initPreloader();
        initCustomCursor();
        initMagneticButtons();
        initFluidBackground();
        initPhysicsBackground();
        init3DOctahedron();
        initLiveStats();
        initGhostingEffect();
        initNavigation();
        initSidebarNav();
        initCommandTerminal();
        initTicker();
        renderVideoGallery();
        renderArsenal();
        renderArchive();
        renderProcess();
        initContactForm();
        initUplinkForm();
        initCodePreview();
        initScrollAnimations();
        initMicroInteractions();
        initCoordinateTracker();
        initRAMMonitor();
        initMechanicalTabs();
        initBiometricButton();
        initBlueprintOverlay();
        initRadarChart();
        initTimeTravelScrollbar();
        initTerminalEasterEggs();
        initHardwareFooter();
        initLogicNodeMap();
        initPortalHover();
        init3DCubeTransitions();

        // Case study modal close
        if ($.caseStudyClose) {
            $.caseStudyClose.addEventListener('click', closeCaseStudy);
        }
        if ($.caseStudyModal) {
            $.caseStudyModal.querySelector('.case-study-overlay')?.addEventListener('click', closeCaseStudy);
        }

        // Fallback: show sections after 3 seconds if preloader didn't handle it
        setTimeout(() => {
            if ($.preloader && !$.preloader.classList.contains('hidden')) {
                // Preloader is still showing, force hide and show content
                $.preloader.classList.add('hidden');
                showAllSections();
            } else if ($.sections && $.sections.length > 0 && !$.sections[0].classList.contains('visible')) {
                // Sections not visible, show them
                showAllSections();
            }
        }, 3000);
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
