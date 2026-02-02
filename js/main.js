/**
 * CDSS 94 - Building Thoughtful AI Systems
 * Course Website JavaScript
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMaterialsToggle();
    handleHashNavigation();
});

/**
 * Initialize section navigation
 */
function initNavigation() {
    const navPills = document.querySelectorAll('.nav-pill');
    const scheduleSection = document.querySelector('.schedule-section');
    const calendarSection = document.querySelector('.calendar-section');
    const projectsSection = document.querySelector('.projects-section');
    const policiesSection = document.querySelector('.policies-section');

    navPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Update active pill
            navPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Hide all sections
            scheduleSection.classList.add('hidden');
            calendarSection.classList.remove('active');
            projectsSection.classList.remove('active');
            policiesSection.classList.remove('active');

            // Show selected section
            const section = pill.dataset.section;
            if (section === 'schedule') {
                scheduleSection.classList.remove('hidden');
            } else if (section === 'calendar') {
                calendarSection.classList.add('active');
            } else if (section === 'projects') {
                projectsSection.classList.add('active');
            } else if (section === 'policies') {
                policiesSection.classList.add('active');
            }
        });
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
        const pill = document.querySelector(`.nav-pill[data-section="${section}"]`);
        if (pill) {
            pill.click();
        }
    }
}

