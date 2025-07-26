// =================== GLOBAL VARIABLES ===================
let currentLang = 'vi';
let isDarkTheme = false;

// =================== UTILITY FUNCTIONS ===================
function getText(textObj) {
    if (typeof textObj === 'string') return textObj;
    return textObj[currentLang] || textObj.en || '';
}

// =================== RENDERING FUNCTIONS ===================
function renderBasicInfo() {
    document.getElementById('full-name').textContent = getText(cvData.personalInfo.fullName);
    document.getElementById('job-title').textContent = getText(cvData.personalInfo.jobTitle);
}

function renderSectionTitles() {
    const sections = {
        'contact-title': { icon: 'fas fa-address-book', text: cvData.sectionTitles.contact },
        'skills-title': { icon: 'fas fa-code', text: cvData.sectionTitles.skills },
        'languages-title': { icon: 'fas fa-language', text: cvData.sectionTitles.languages },
        'about-title': { icon: 'fas fa-user', text: cvData.sectionTitles.about },
        'experience-title': { icon: 'fas fa-briefcase', text: cvData.sectionTitles.experience },
        'education-title': { icon: 'fas fa-graduation-cap', text: cvData.sectionTitles.education },
        'projects-title': { icon: 'fas fa-project-diagram', text: cvData.sectionTitles.projects }
    };

    Object.entries(sections).forEach(([id, data]) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = `
                <span class="icon-text">
                    <span class="icon has-text-info">
                        <i class="${data.icon}"></i>
                    </span>
                    <span>${getText(data.text)}</span>
                </span>
            `;
        }
    });
}

function renderContact() {
    const contactContent = document.getElementById('contact-content');
    contactContent.innerHTML = cvData.contact.map(item => `
        <div class="media">
            <div class="media-left">
                <span class="icon has-text-info">
                    ${item.icon}
                </span>
            </div>
            <div class="media-content">
                <p class="has-text-grey-dark">${getText(item.value)}</p>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const skillsContent = document.getElementById('skills-content');
    
    // Nhóm skills theo categories
    const skillCategories = {
        frontend: {
            icon: '💻',
            title: {
                vi: 'Frontend',
                ja: 'フロントエンド', 
                en: 'Frontend'
            },
            skills: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Angular']
        },
        backend: {
            icon: '⚙️',
            title: {
                vi: 'Backend',
                ja: 'バックエンド',
                en: 'Backend'
            },
            skills: ['Node.js', 'Express', 'PHP', 'Laravel', 'Java', 'Spring', 'Python', 'Django']
        },
        mobile_cloud: {
            icon: '📱',
            title: {
                vi: 'Mobile & Cloud',
                ja: 'モバイル・クラウド',
                en: 'Mobile & Cloud'
            },
            skills: ['React Native', 'GCP']
        },
        database: {
            icon: '🗄️',
            title: {
                vi: 'Databases',
                ja: 'データベース',
                en: 'Databases'
            },
            skills: ['MySQL', 'PostgreSQL', 'Oracle', 'Spanner', 'MongoDB', 'Firestore']
        },
        devops: {
            icon: '🔧',
            title: {
                vi: 'DevOps & Tools',
                ja: 'DevOps・ツール',
                en: 'DevOps & Tools'
            },
            skills: ['CICD', 'Git', 'Backlog']
        },
    };
    
    skillsContent.innerHTML = Object.entries(skillCategories).map(([key, category]) => `
        <div class="mb-4">
            <h6 class="title is-6 has-text-grey-dark mb-2">
                <span class="icon-text">
                    <span class="icon">
                        <span style="font-size: 1.2em;">${category.icon}</span>
                    </span>
                    <span>${getText(category.title)}</span>
                </span>
            </h6>
            <div class="tags">
                ${category.skills.map(skill => `
                    <span class="tag is-light">${skill}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderLanguages() {
    const languagesContent = document.getElementById('languages-content');
    languagesContent.innerHTML = cvData.languageSkills.map(lang => `
        <div class="level is-mobile mb-3">
            <div class="level-left">
                <div class="level-item">
                    <div>
                        <p class="has-text-weight-semibold">${getText(lang.name)}</p>
                        <p class="is-size-7 has-text-grey">${lang.level}</p>
                    </div>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <progress class="progress is-info is-small" value="${lang.percentage}" max="100" style="width: 100px;">
                        ${lang.percentage}%
                    </progress>
                </div>
            </div>
        </div>
    `).join('');
}

function renderAbout() {
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = `
        <p class="has-text-grey-dark">${getText(cvData.about.main)}</p>
        <div class="field mt-4">
            <p class="control">
                <button class="button is-info is-outlined is-small" onclick="toggleAboutDetails()">
                    <span class="icon is-small">
                        <i class="fas fa-plus" id="about-icon"></i>
                    </span>
                    <span id="about-btn-text">${getText(cvData.buttons.showMore)}</span>
                </button>
            </p>
        </div>
        <div id="about-details" class="is-hidden">
            <div class="notification is-light mt-3">
                <p class="has-text-grey-dark">${getText(cvData.about.extended)}</p>
            </div>
        </div>
    `;
}

function renderExperience() {
    const experienceContent = document.getElementById('experience-content');
    experienceContent.innerHTML = cvData.experience.map(exp => `
        <div class="experience-item">
            <div class="mb-3">
                <span class="tag is-info is-light is-small">${exp.period}</span>
            </div>
            <h3 class="title is-6">${getText(exp.title)}</h3>
            <p class="subtitle is-7 has-text-grey">${exp.company}</p>
            <div class="content">
                <ul>
                    ${getText(exp.description).map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const educationContent = document.getElementById('education-content');
    educationContent.innerHTML = cvData.education.map(edu => `
        <div class="education-item">
            <div class="mb-3">
                <span class="tag is-success is-light is-small">${edu.period}</span>
            </div>
            <h3 class="title is-6">${getText(edu.degree)}</h3>
            <p class="subtitle is-7 has-text-grey">${getText(edu.school)}</p>
            <p class="has-text-grey-dark">${getText(edu.details)}</p>
        </div>
    `).join('');
}

function renderProjects() {
    const projectsContent = document.getElementById('projects-content');
    projectsContent.innerHTML = cvData.projects.map(project => `
        <div class="project-item">
            <div class="level is-mobile mb-2">
                <div class="level-left">
                    <div class="level-item">
                        <span class="tag is-warning is-light is-small">${project.period}</span>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <button class="button is-link is-outlined is-small" onclick="gotoLink('${project.details}')">
                            <span class="icon is-small">
                                <i class="fas fa-external-link-alt"></i>
                            </span>
                            <span>Chi tiết</span>
                        </button>
                    </div>
                </div>
            </div>
            <h3 class="title is-6 mb-2">${getText(project.title)}</h3>
            <p class="has-text-grey-dark">${getText(project.description)}</p>
        </div>
    `).join('');
}

function renderAllContent() {
    renderBasicInfo();
    renderSectionTitles();
    renderContact();
    renderSkills();
    renderLanguages();
    renderAbout();
    renderExperience();
    renderEducation();
    renderProjects();
}

// =================== LANGUAGE SWITCHING ===================
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('is-info');
        btn.classList.add('is-light');
        if (btn.dataset.lang === lang) {
            btn.classList.remove('is-light');
            btn.classList.add('is-info');
        }
    });
    
    document.documentElement.lang = lang;
    renderAllContent();
}

// =================== THEME MANAGEMENT ===================
function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');
    
    if (isDarkTheme) {
        body.classList.remove('dark-theme');
        icon.className = 'fas fa-palette';
        isDarkTheme = false;
    } else {
        body.classList.add('dark-theme');
        icon.className = 'fas fa-sun';
        isDarkTheme = true;
    }
    
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme();
    }
}

// =================== UTILITY FUNCTIONS ===================
function toggleAboutDetails() {
    const details = document.getElementById('about-details');
    const icon = document.getElementById('about-icon');
    const text = document.getElementById('about-btn-text');
    
    if (details.classList.contains('is-hidden')) {
        details.classList.remove('is-hidden');
        icon.className = 'fas fa-minus';
        text.textContent = getText(cvData.buttons.showLess);
    } else {
        details.classList.add('is-hidden');
        icon.className = 'fas fa-plus';
        text.textContent = getText(cvData.buttons.showMore);
    }
}

function gotoLink(url) {
    window.open(`https://${url}`, '_blank');
}

function changeProfileColor() {
    const img = document.querySelector('.is-rounded');
    const colors = ['sepia(0)', 'sepia(1)', 'hue-rotate(90deg)', 'hue-rotate(180deg)', 'hue-rotate(270deg)'];
    const currentFilter = img.style.filter || 'sepia(0)';
    const currentIndex = colors.indexOf(currentFilter);
    const nextIndex = (currentIndex + 1) % colors.length;
    img.style.filter = colors[nextIndex];
}

// =================== EVENT LISTENERS ===================
document.addEventListener('DOMContentLoaded', function() {
    // Load theme
    loadTheme();
    
    // Initial render
    renderAllContent();
    
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });
    
    // Mobile navbar toggle (Bulma standard implementation)
    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (navbarBurger && navbarMenu) {
        navbarBurger.addEventListener('click', () => {
            // Toggle the "is-active" class on both the burger and the menu
            navbarBurger.classList.toggle('is-active');
            navbarMenu.classList.toggle('is-active');
        });
        
        // Close mobile menu when clicking on menu items
        document.querySelectorAll('.navbar-item').forEach(item => {
            item.addEventListener('click', () => {
                navbarBurger.classList.remove('is-active');
                navbarMenu.classList.remove('is-active');
            });
        });
    }
    
    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Easter egg
    let clickCount = 0;
    document.querySelector('.is-rounded').addEventListener('click', function() {
        clickCount++;
        changeProfileColor();
        
        if (clickCount === 5) {
            const notification = document.createElement('div');
            notification.className = 'notification is-info is-light';
            notification.innerHTML = `
                <button class="delete" onclick="this.parentElement.remove()"></button>
                ${getText(cvData.easterEgg)}
            `;
            notification.style.position = 'fixed';
            notification.style.top = '80px';
            notification.style.right = '20px';
            notification.style.zIndex = '9999';
            notification.style.maxWidth = '300px';
            
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 3000);
            clickCount = 0;
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    switchLanguage('vi');
                    break;
                case '2':
                    e.preventDefault();
                    switchLanguage('ja');
                    break;
                case '3':
                    e.preventDefault();
                    switchLanguage('en');
                    break;
                case 't':
                case 'T':
                    e.preventDefault();
                    toggleTheme();
                    break;
            }
        }
    });
});

// =================== EXPORT ===================
window.cvManager = {
    switchLanguage,
    toggleTheme,
    getCurrentLanguage: () => currentLang,
    getCurrentTheme: () => isDarkTheme ? 'dark' : 'light',
    getData: () => cvData
};