/**
 * CDSS 94 - Building Thoughtful AI Systems
 * Course Website JavaScript
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initNavigation();
    initMaterialsToggle();
    initLectureTabs();
    handleHashNavigation();
    initTopNavLinks();
});

/**
 * Initialize lecture tab toggling in module cards
 */
function initLectureTabs() {
    const lectureTabs = document.querySelectorAll('.lecture-tab');

    lectureTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const lectureItem = tab.closest('.lecture-item');
            const wasActive = lectureItem.classList.contains('active');

            // Close all lecture items in this module
            const moduleCard = lectureItem.closest('.module-card');
            moduleCard.querySelectorAll('.lecture-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle clicked item (open if it was closed)
            if (!wasActive) {
                lectureItem.classList.add('active');
            }
        });
    });
}

/**
 * Initialize mobile hamburger menu
 */
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Listen for hash changes
window.addEventListener('hashchange', handleHashNavigation);

/**
 * Initialize section navigation
 */
function initNavigation() {
    const navTabs = document.querySelectorAll('.section-tab, .nav-pill');
    const scheduleSection = document.querySelector('.schedule-section');
    const calendarSection = document.querySelector('.calendar-section');
    const projectsSection = document.querySelector('.projects-section');
    const policiesSection = document.querySelector('.policies-section');

    if (!scheduleSection) return;

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Hide all sections
            scheduleSection.classList.add('hidden');
            calendarSection.classList.remove('active');
            projectsSection.classList.remove('active');
            policiesSection.classList.remove('active');

            // Show selected section
            const section = tab.dataset.section;
            if (section === 'schedule') {
                scheduleSection.classList.remove('hidden');
            } else if (section === 'calendar') {
                calendarSection.classList.add('active');
            } else if (section === 'projects') {
                projectsSection.classList.add('active');
            } else if (section === 'policies') {
                policiesSection.classList.add('active');
            }

            // Update URL hash
            const hashMap = {
                'schedule': 'syllabus',
                'calendar': 'calendar',
                'projects': 'projects',
                'policies': 'about'
            };
            history.replaceState(null, '', '#' + hashMap[section]);

            // Update top nav active state
            updateTopNavActive(hashMap[section]);
        });
    });
}

/**
 * Update top nav link active state
 */
function updateTopNavActive(hash) {
    const navLinks = document.querySelectorAll('.top-nav .nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');
        if (href && href.includes('#' + hash)) {
            link.classList.add('active');
        } else if (hash === 'syllabus' && href === 'course.html') {
            link.classList.add('active');
        }
    });
}

/**
 * Toggle materials panel on post-card click
 */
function initMaterialsToggle() {
    document.querySelectorAll('.post-card:not(.upcoming)').forEach(card => {
        if (!card.querySelector('.post-materials')) return;
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Don't toggle if clicking a link inside materials
            if (e.target.closest('.material-link')) return;
            card.classList.toggle('expanded');
        });
    });
}

/**
 * Utility: Toggle upcoming class on a post card
 * @param {string} cardSelector - CSS selector for the card
 * @param {boolean} isUpcoming - Whether the card should be upcoming
 */
function setCardUpcoming(cardSelector, isUpcoming) {
    const card = document.querySelector(cardSelector);
    if (card) {
        if (isUpcoming) {
            card.classList.add('upcoming');
        } else {
            card.classList.remove('upcoming');
        }
    }
}

/**
 * Utility: Toggle section header upcoming class
 * @param {string} headerSelector - CSS selector for the header
 * @param {boolean} isUpcoming - Whether the header should be upcoming
 */
function setSectionUpcoming(headerSelector, isUpcoming) {
    const header = document.querySelector(headerSelector);
    if (header) {
        if (isUpcoming) {
            header.classList.add('upcoming');
        } else {
            header.classList.remove('upcoming');
        }
    }
}

/**
 * Handle hash navigation from URL
 */
function handleHashNavigation() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const hashToSection = {
        'syllabus': 'schedule',
        'calendar': 'calendar',
        'projects': 'projects',
        'about': 'policies'
    };

    const section = hashToSection[hash];
    if (section) {
        const tab = document.querySelector(`.section-tab[data-section="${section}"]`) ||
                    document.querySelector(`.nav-pill[data-section="${section}"]`);
        if (tab) {
            tab.click();
        }
    }
}

/**
 * Make top nav links work on course page
 */
function initTopNavLinks() {
    const navLinks = document.querySelectorAll('.top-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.includes('#')) {
                const hash = href.split('#')[1];
                if (hash && window.location.pathname.includes('course.html')) {
                    e.preventDefault();
                    window.location.hash = hash;
                }
            }
        });
    });
}

