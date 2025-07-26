        // =================== DATA CONFIGURATION ===================
        const cvData = {
            // Basic Information
            personalInfo: {
                fullName: {
                    vi: "LÊ VĂN CHƯƠNG",
                    ja: "レ・ヴァン・チュオン",
                    en: "LE VAN CHUONG"
                },
                jobTitle: {
                    vi: "BrSE & Full-Stack Developer",
                    ja: "BrSE & フルスタックデベロッパー",
                    en: "BrSE & Full-Stack Developer"
                }
            },

            // Section Titles
            sectionTitles: {
                contact: {
                    vi: "Liên Hệ",
                    ja: "連絡先", 
                    en: "Contact"
                },
                skills: {
                    vi: "Kỹ Năng",
                    ja: "スキル",
                    en: "Skills"
                },
                languages: {
                    vi: "Ngôn Ngữ",
                    ja: "言語",
                    en: "Languages"
                },
                about: {
                    vi: "Giới Thiệu",
                    ja: "自己紹介",
                    en: "About Me"
                },
                experience: {
                    vi: "Kinh Nghiệm Làm Việc",
                    ja: "職歴",
                    en: "Work Experience"
                },
                education: {
                    vi: "Học Vấn",
                    ja: "学歴",
                    en: "Education"
                },
                projects: {
                    vi: "My Projects",
                    ja: "マイプロジェクト",
                    en: "My Projects"
                }
            },

            // Contact Information
            contact: [
                {
                    icon: "📧",
                    value: "chuong.le.jp@gmail.com"
                },
                {
                    icon: "📱",
                    value: "Email for details"
                },
                {
                    icon: "📍",
                    value: {
                        vi: "Hà Tĩnh, Việt Nam",
                        ja: "千葉県市川市",
                        en: "Ha Tinh, Vietnam"
                    }
                },
                {
                    icon: "🌐",
                    value: "github.com/zebeel"
                }
            ],

            // Technical Skills
            skills: [
                { "name": "JavaScript" },
                { "name": "TypeScript" },
                { "name": "Node.js" },
                { "name": "Express" },
                { "name": "Vue.js" },
                { "name": "React" },
                { "name": "Angular" },
                { "name": "PHP" },
                { "name": "Laravel" },
                { "name": "Java" },
                { "name": "Spring" },
                { "name": "Python" },
                { "name": "Django" },
                { "name": "React Native" },
                { "name": "GCP" },
                { "name": "MySQL" },
                { "name": "PostgreSQL" },
                { "name": "Oracle" },
                { "name": "Spanner" },
                { "name": "MongoDB" },
                { "name": "Firestore" },
                { "name": "CICD" },
                { "name": "English" },
                { "name": "Japanese" },
                { "name": "Chinese" },
                { "name": "Vietnamese" }
            ],

            // Language Skills
            languageSkills: [
                {
                    name: {
                        vi: "Tiếng Việt",
                        ja: "ベトナム語",
                        en: "Vietnamese"
                    },
                    level: "Native",
                    percentage: 100
                },
                {
                    name: {
                        vi: "Tiếng Anh",
                        ja: "英語",
                        en: "English"
                    },
                    level: "Fluent",
                    percentage: 70
                },
                {
                    name: {
                        vi: "Tiếng Nhật",
                        ja: "日本語",
                        en: "Japanese"
                    },
                    level: "N2",
                    percentage: 75                
                },
                {
                    name: {
                        vi: "Tiếng Trung",
                        ja: "中国語",
                        en: "Chinese"
                    },
                    level: "Basic",
                    percentage: 50                
                }
            ],

            // About Me
            about: {
                main: {
                    vi: "Với hơn 2 năm kinh nghiệm BrSE Nhật – Việt và 7+ năm phát triển Web (Vue, React, Node.js, Laravel, Spring, Django). Tôi còn có kinh nghiệm phát triển mobile (React Native), triển khai hệ thống trên GCP, vận hành CI/CD, quản lý DB (MySQL, PostgreSQL, MongoDB...). Thành thạo tiếng Nhật, Anh và Việt.",
                    ja: "日越BrSEとして2年以上の経験と、7年以上のWeb開発経験があります（Vue、React、Node.js、Laravel、Spring、Django）。また、モバイル開発（React Native）、GCPでのシステム展開、CI/CD運用、データベース管理（MySQL、PostgreSQL、MongoDBなど）の経験も有しています。日本語・英語・ベトナム語が堪能です。",
                    en: "With over 2 years of experience as a Japan–Vietnam BrSE and 7+ years in web development (Vue, React, Node.js, Laravel, Spring, Django). Also experienced in mobile development (React Native), system deployment on GCP, CI/CD operations, and database management (MySQL, PostgreSQL, MongoDB...). Fluent in Japanese, English, and Vietnamese."
                },
                extended: {
                    vi: "Tôi luôn quan tâm đến việc cùng đội ngũ tạo ra những giá trị đích thực cho sản phẩm và khách hàng. Luôn nỗ lực thích nghi với thay đổi, tôi không ngừng nâng cao kỹ năng để góp phần cải thiện chất lượng sản phẩm và trải nghiệm người dùng.",
                    ja: "製品と顧客のために本当の価値を共に創出することに関心を持ち、常にチームと協力する姿勢を大切にしています。変化に柔軟に対応しながら、自分のスキルを磨き、製品の品質とユーザー体験の向上に努めています。",
                    en: "I am passionate about collaborating with the team to create genuine value for both the product and the customer. I constantly strive to adapt to changes and improve my skills to enhance product quality and user experience."
                }
            },

            // Work Experience
            experience: [
                {
                    "title": {
                    "vi": "BrSE / Buildee - Phát triển báo cáo",
                    "ja": "ブリッジSE / Buildee - 帳票開発",
                    "en": "BrSE / Buildee - Report Development"
                    },
                    "company": "Brycen / RVSTA",
                    "period": "2024/08 - NOW()",
                    "description": {
                    "vi": [
                        "Phát triển các báo cáo theo yêu cầu khách hàng trong hệ thống Buildee",
                        "Thu thập yêu cầu từ khách hàng, phân tích và xác nhận nghiệp vụ",
                        "Tạo tài liệu kỹ thuật (BD, DD) để truyền đạt cho dev team",
                        "Hỗ trợ giải đáp các vấn đề kỹ thuật và review sản phẩm trước khi bàn giao",
                        "Theo dõi tiến độ và trao đổi với khách hàng để đảm bảo yêu cầu được đáp ứng"
                    ],
                    "ja": [
                        "Buildeeシステムにおける顧客要望に基づいた帳票開発を担当",
                        "顧客からの要件ヒアリング、業務分析および確認を実施",
                        "開発チーム向けに基本設計・詳細設計の技術資料を作成",
                        "納品前に技術的な課題の解決および成果物のレビューを実施",
                        "進捗管理および顧客とのコミュニケーションで要件の達成を確保"
                    ],
                    "en": [
                        "Developed reports for Buildee system based on customer requirements",
                        "Gathered and analyzed customer requirements and confirmed business logic",
                        "Created technical documentation (basic and detailed design) for the dev team",
                        "Provided technical support and reviewed deliverables before release",
                        "Monitored project progress and communicated with clients to ensure requirements were met"
                    ]
                    }
                },
                {
                    "title": {
                    "vi": "BrSE / Hệ thống hóa quản lý vận hành & CRM",
                    "ja": "ブリッジSE / 運転管理・CRMシステム",
                    "en": "BrSE / Operation Management & CRM Systems"
                    },
                    "company": "FPT Japan / Sumitomo Heavy Industries (SHI-EV)",
                    "period": "2024/01 - 2024/08",
                    "description": {
                    "vi": [
                        "Quản lý và triển khai các dự án số hóa tại SHI-EV: vận hành quản lý, hệ thống FS, Workflow, CRM (Dynamics 365)",
                        "Họp với end-user để thu thập yêu cầu, tạo tài liệu thiết kế, và truyền đạt cho team offshore",
                        "Đề xuất giải pháp kỹ thuật nhằm nâng cao năng suất hệ thống",
                        "Quản lý cơ sở dữ liệu SQL Server và tích hợp Azure Cloud",
                        "Báo cáo tiến độ và tổ chức họp Scrum định kỳ"
                    ],
                    "ja": [
                        "SHI-EVにおけるデジタル化プロジェクトを管理：運転管理、FSシステム、ワークフロー、CRM（Dynamics 365）",
                        "エンドユーザーとの要件ヒアリング、設計書作成、オフショアチームへの共有",
                        "システムの生産性向上のため技術的解決策を提案",
                        "Azure Cloudとの連携、SQL ServerのDB管理",
                        "進捗報告および定例Scrum会議の実施"
                    ],
                    "en": [
                        "Managed digitalization projects for SHI-EV: operation management, FS system, workflow, CRM (Dynamics 365)",
                        "Conducted requirement hearings with end-users, prepared design documents, and coordinated with offshore team",
                        "Proposed technical solutions to improve system productivity",
                        "Maintained SQL Server database and integrated with Azure Cloud",
                        "Reported progress and facilitated regular Scrum meetings"
                    ]
                    }
                },
                {
                    "title": {
                    "vi": "BrSE / Full-Stack Developer - Call Center",
                    "ja": "ブリッジSE / フルスタック開発者 - コールセンター",
                    "en": "BrSE / Full-Stack Developer - Call Center"
                    },
                    "company": "FPT Japan / NTT Commuinications",
                    "period": "2021/01 - 2023/12",
                    "description": {
                    "vi": [
                        "Phát triển hệ thống Call Center cho web và mobile sử dụng Twilio Voice và WebRTC",
                        "Thiết kế cơ bản, chi tiết, lập trình, viết test và triển khai theo Agile",
                        "Xây dựng ứng dụng di động bằng React Native (Android/iOS)",
                        "Sử dụng GCP (Speech to Text, Firestore, Spanner, App Engine, Functions)",
                        "Tích hợp Firebase (Authentication, RealtimeDB)"
                    ],
                    "ja": [
                        "Twilio VoiceとWebRTCを利用し、Webおよびモバイル向けのコールセンターシステムを開発",
                        "基本設計、詳細設計、開発、単体試験を担当、アジャイル手法を適用",
                        "React NativeでAndroid/iOSアプリを構築",
                        "GCPサービス（Speech to Text、Firestore、Spanner、App Engine、Functions）を運用",
                        "Firebase（Authentication、RealtimeDB）を導入"
                    ],
                    "en": [
                        "Developed Call Center system for web and mobile using Twilio Voice and WebRTC",
                        "Responsible for basic & detailed design, coding, and unit testing under Agile",
                        "Built mobile apps for Android and iOS using React Native",
                        "Operated GCP services (Speech to Text, Firestore, Spanner, App Engine, Functions)",
                        "Integrated Firebase (Authentication, RealtimeDB)"
                    ]
                    }
                },
                {
                    "title": {
                    "vi": "Full-Stack Developer / IoT System",
                    "ja": "フルスタック開発者 / IoTシステム",
                    "en": "Full-Stack Developer / IoT System"
                    },
                    "company": "Techno Brave",
                    "period": "2020/02 - 2021/01",
                    "description": {
                    "vi": [
                        "Xử lý dữ liệu từ hàng nghìn sensor, lưu trữ và hiển thị dữ liệu theo thời gian thực",
                        "Phát triển API nhận dữ liệu, lưu vào DB, triển khai chức năng backup",
                        "Hiển thị dữ liệu phân tích trên màn hình dashboard",
                        "Sử dụng PHP (Laravel), Python, PostgreSQL, MongoDB"
                    ],
                    "ja": [
                        "数千のセンサーからデータを受信、保存し、リアルタイムに表示",
                        "データ受信APIの開発、DBへの保存、バックアップ機能を実装",
                        "解析データをダッシュボードで表示",
                        "PHP（Laravel）、Python、PostgreSQL、MongoDBを利用"
                    ],
                    "en": [
                        "Processed data from thousands of sensors, stored and displayed real-time",
                        "Developed APIs for data ingestion, database storage, and backup functions",
                        "Displayed analyzed data on dashboard interface",
                        "Used PHP (Laravel), Python, PostgreSQL, MongoDB"
                    ]
                    }
                },
                {
                    "title": {
                    "vi": "Full-Stack Developer / Parking Management System",
                    "ja": "フルスタック開発者 / 駐車場管理システム",
                    "en": "Full-Stack Developer / Parking Management System"
                    },
                    "company": "Techno Brave / NTT Data",
                    "period": "2019/09 - 2020/02",
                    "description": {
                    "vi": [
                        "Phát triển tính năng mới cho hệ thống quản lý bãi đỗ xe đa nền tảng",
                        "Thiết kế và triển khai API tích hợp",
                        "Sử dụng PHP (Laravel), MySQL"
                    ],
                    "ja": [
                        "マルチプラットフォーム対応の駐車場管理システムに新機能を追加",
                        "統合APIの設計と実装",
                        "PHP（Laravel）、MySQLを利用"
                    ],
                    "en": [
                        "Developed new features for multi-platform parking management system",
                        "Designed and implemented integration APIs",
                        "Used PHP (Laravel), MySQL"
                    ]
                    }
                },
                {
                    "title": {
                    "vi": "Magento Extension Developer",
                    "ja": "Magento拡張機能開発者",
                    "en": "Magento Extension Developer"
                    },
                    "company": "Mageplaza",
                    "period": "2017/01 - 2018/09",
                    "description": {
                    "vi": [
                        "Phát triển các extension cho Magento 2 (Gift Card, SMTP, PDF Invoice)",
                        "Thiết kế chi tiết, lập trình và triển khai tính năng",
                        "Sử dụng PHP, HTML, CSS, JS, MySQL"
                    ],
                    "ja": [
                        "Magento 2向け拡張機能（ギフトカード、SMTP、PDF請求書）を開発",
                        "詳細設計、コーディング、機能の実装",
                        "PHP、HTML、CSS、JS、MySQLを利用"
                    ],
                    "en": [
                        "Developed Magento 2 extensions (Gift Card, SMTP, PDF Invoice)",
                        "Responsible for detailed design, coding, and feature implementation",
                        "Used PHP, HTML, CSS, JS, MySQL"
                    ]
                    }
                }
                ],

            // Education
            education: [
                {
                    degree: {
                        vi: "Cử nhân Công nghệ Thông tin",
                        ja: "情報技術学士",
                        en: "Bachelor of Information Technology"
                    },
                    school: {
                        vi: "Đại học Công nghệ - ĐHQG Hà Nội",
                        ja: "ハノイ国家大学・工科大学",
                        en: "University of Engineering and Technology - VNU Hanoi"
                    },
                    period: "2010 - 2014",
                    details: {
                        vi: "GPA: 3.0/4.0 - Chuyên ngành: Kỹ thuật Phần mềm",
                        ja: "GPA: 3.0/4.0 - 専攻: ソフトウェア工学",
                        en: "GPA: 3.0/4.0 - Major: Software Engineering"
                    }
                }
            ],

            // Projects
            projects: [
                {
                    "title": {
                    "vi": "Đám cưới Khánh & Trâm",
                    "ja": "カイン＆チャムの結婚式",
                    "en": "Khanh & Tram's Wedding"
                    },
                    "period": "2024",
                    "description": {
                    "vi": "Xây dựng website lưu giữ khoảnh khắc đặc biệt trong lễ cưới của em gái, hỗ trợ xem ảnh, video và lời chúc từ bạn bè, người thân.",
                    "ja": "妹の結婚式の特別な瞬間を記録するウェブサイトを構築し、写真、動画、メッセージの共有をサポート。",
                    "en": "Developed a website to capture special moments of my sister's wedding, featuring photo and video galleries and guest messages."
                    },
                    "details": "zebeel.github.io/memories/my-lil-sis-wedding"
                },
                {
                    "title": {
                    "vi": "Cây gia phả nhà Cố Bường",
                    "ja": "ブオン家の家系図デジタル化",
                    "en": "Buong Family Tree Digitalization"
                    },
                    "period": "2023",
                    "description": {
                    "vi": "Số hóa cây gia phả của đại gia đình Cố Bường, hỗ trợ tìm kiếm, hiển thị quan hệ họ hàng và thêm thông tin thành viên.",
                    "ja": "ブオン家の家系図をデジタル化し、検索、親族関係の表示、メンバー情報の追加機能を実装。",
                    "en": "Digitized Buong family tree, enabling search, relationship visualization, and member info management."
                    },
                    "details": "zebeel.github.io/family-tree"
                },
                {
                    "title": {
                    "vi": "Volleyball Scoreboard",
                    "ja": "バレーボールスコアボード",
                    "en": "Volleyball Scoreboard"
                    },
                    "period": "2022",
                    "description": {
                    "vi": "Ứng dụng di động dùng để ghi điểm và quản lý trận đấu bóng chuyền theo thời gian thực.",
                    "ja": "バレーボール試合の得点管理をリアルタイムで行うモバイルアプリを開発。",
                    "en": "Mobile app to track volleyball match scores in real-time."
                    },
                    "details": "zebeel.github.io/volleyball-scoreboard"
                }
            ],

            // Button texts
            buttons: {
                showMore: {
                    vi: "Xem thêm",
                    ja: "詳細を見る",
                    en: "Read more"
                },
                showLess: {
                    vi: "Thu gọn",
                    ja: "閉じる",
                    en: "Show less"
                },
                details: {
                    vi: "Chi tiết",
                    ja: "詳細",
                    en: "Details"
                },
                hideDetails: {
                    vi: "Ẩn chi tiết",
                    ja: "詳細を隠す",
                    en: "Hide details"
                }
            },

            // Easter egg messages
            easterEgg: {
                vi: "🎉 Chúc mừng! Bạn đã tìm thấy Easter egg! 🎉",
                ja: "🎉 おめでとうございます！イースターエッグを見つけました！🎉",
                en: "🎉 Congratulations! You found the Easter egg! 🎉"
            }
        };

        // =================== RENDERING FUNCTIONS ===================
        let currentLang = 'vi';

        function getText(textObj) {
            if (typeof textObj === 'string') return textObj;
            return textObj[currentLang] || textObj.en || '';
        }

        function renderBasicInfo() {
            document.getElementById('full-name').textContent = getText(cvData.personalInfo.fullName);
            document.getElementById('job-title').textContent = getText(cvData.personalInfo.jobTitle);
        }

        function renderSectionTitles() {
            document.getElementById('contact-title').textContent = getText(cvData.sectionTitles.contact);
            document.getElementById('skills-title').textContent = getText(cvData.sectionTitles.skills);
            document.getElementById('languages-title').textContent = getText(cvData.sectionTitles.languages);
            document.getElementById('about-title').textContent = getText(cvData.sectionTitles.about);
            document.getElementById('experience-title').textContent = getText(cvData.sectionTitles.experience);
            document.getElementById('education-title').textContent = getText(cvData.sectionTitles.education);
            document.getElementById('projects-title').textContent = getText(cvData.sectionTitles.projects);
        }

        function renderContact() {
            const contactContent = document.getElementById('contact-content');
            contactContent.innerHTML = cvData.contact.map(item => `
                <div class="contact-item">
                    <div class="contact-icon">${item.icon}</div>
                    <span>${getText(item.value)}</span>
                </div>
            `).join('');
        }

        function renderSkills() {
            const skillsContent = document.getElementById('skills-content');
            // skillsContent.innerHTML = cvData.skills.map(skill => `
            //     <div class="skill-item">
            //         <div class="skill-name">
            //             <span>${skill.name}</span>
            //             <span>${skill.level}%</span>
            //         </div>
            //         <div class="skill-bar">
            //             <div class="skill-progress" style="--skill-width: ${skill.level}%"></div>
            //         </div>
            //     </div>
            // `).join('');
            skillsContent.innerHTML = cvData.skills.map(skill => `
                <div class="skill-tag">
                    <span>${skill.name}</span>
                </div>
            `).join('');
        }

        function renderLanguages() {
            const languagesContent = document.getElementById('languages-content');
            languagesContent.innerHTML = cvData.languageSkills.map(lang => `
                <div class="skill-item">
                    <div class="skill-name">
                        <span>${getText(lang.name)}</span>
                        <span>${lang.level}</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="--skill-width: ${lang.percentage}%"></div>
                    </div>
                </div>
            `).join('');
        }

        function renderAbout() {
            const aboutContent = document.getElementById('about-content');
            aboutContent.innerHTML = `
                <p>${getText(cvData.about.main)}</p>
                <button class="toggle-btn" onclick="toggleContent('about-extra')">${getText(cvData.buttons.showMore)}</button>
                <div id="about-extra" class="hidden-content">
                    <p style="margin-top: 15px;">${getText(cvData.about.extended)}</p>
                </div>
            `;
        }

        function renderExperience() {
            const experienceContent = document.getElementById('experience-content');
            experienceContent.innerHTML = cvData.experience.map(exp => `
                <div class="experience-item">
                    <div class="job-title">${getText(exp.title)}</div>
                    <div class="company">${exp.company}</div>
                    <div class="date">${exp.period}</div>
                    <ul>
                        ${getText(exp.description).map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }

        function renderEducation() {
            const educationContent = document.getElementById('education-content');
            educationContent.innerHTML = cvData.education.map(edu => `
                <div class="education-item">
                    <div class="job-title">${getText(edu.degree)}</div>
                    <div class="company">${getText(edu.school)}</div>
                    <div class="date">${edu.period}</div>
                    <p>${getText(edu.details)}</p>
                </div>
            `).join('');
        }

        function renderProjects() {
            const projectsContent = document.getElementById('projects-content');
            projectsContent.innerHTML = cvData.projects.map((project, index) => `
                <div class="experience-item">
                    <div class="job-title">${getText(project.title)}</div>
                    <div class="date">${project.period}</div>
                    <p>${getText(project.description)}</p>
                    <button class="toggle-btn" onclick="gotoLink('${project.details}')">${getText(cvData.buttons.details)}</button>
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
            
            // Update active button
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                }
            });
            
            // Update document language
            document.documentElement.lang = lang;
            
            // Re-render all content
            renderAllContent();
            
            // Re-initialize skill animations
            setTimeout(() => {
                animateSkills();
            }, 100);
        }

        // Add event listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                switchLanguage(btn.dataset.lang);
            });
        });

        // =================== UTILITY FUNCTIONS ===================
        
        // Animate skill bars on scroll
        function animateSkills() {
            const skillBars = document.querySelectorAll('.skill-progress');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            });

            skillBars.forEach(bar => {
                bar.style.animationPlayState = 'paused';
                observer.observe(bar);
            });
        }

        // Toggle content visibility
        function toggleContent(id) {
            const content = document.getElementById(id);
            const btn = content.previousElementSibling;
            
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                if (id.includes('about')) {
                    btn.textContent = getText(cvData.buttons.showMore);
                } else {
                    btn.textContent = getText(cvData.buttons.details);
                }
            } else {
                content.classList.add('show');
                if (id.includes('about')) {
                    btn.textContent = getText(cvData.buttons.showLess);
                } else {
                    btn.textContent = getText(cvData.buttons.hideDetails);
                }
            }
        }

        function gotoLink(url) {
            console.log(`https://${url}`);
            window.open(`https://${url}`, '_blank');
        }

        // =================== THEME MANAGEMENT ===================
        let currentTheme = 'dark'; // default theme

        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            
            if (currentTheme === 'dark') {
                body.classList.add('light-mode');
                themeIcon.textContent = '☀️';
                currentTheme = 'light';
            } else {
                body.classList.remove('light-mode');
                themeIcon.textContent = '🌙';
                currentTheme = 'dark';
            }
            
            // Save theme preference
            localStorage.setItem('cv-theme', currentTheme);
            
            // Re-initialize animations after theme change
            setTimeout(() => {
                animateSkills();
            }, 100);
        }

       function loadThemePreference() {
           const savedTheme = localStorage.getItem('cv-theme');
           if (savedTheme && savedTheme !== currentTheme) {
               toggleTheme();
           }
       }

        // Toggle visibility of controls at the top
        function toggleTopControls() {
            document.querySelector('.top-controls')
                .classList.toggle('collapsed');
        }

        // =================== COLOR PALETTE MANAGEMENT ===================
        const colorPalettes = {
            dark: [
                ['#00d4ff', '#ff006e'],
                ['#ff006e', '#8b5cf6'],
                ['#8b5cf6', '#06ffa5'],
                ['#06ffa5', '#ffbe0b'],
                ['#ffbe0b', '#fb5607'],
                ['#fb5607', '#ff006e'],
                ['#00d4ff', '#8b5cf6']
            ],
            light: [
                ['#007bff', '#dc3545'],
                ['#dc3545', '#6f42c1'],
                ['#6f42c1', '#20c997'],
                ['#20c997', '#ffc107'],
                ['#ffc107', '#fd7e14'],
                ['#fd7e14', '#dc3545'],
                ['#007bff', '#6f42c1']
            ]
        };

        function changeProfileColor() {
            currentColorIndex = (currentColorIndex + 1) % colorPalettes[currentTheme].length;
            const profileImg = document.querySelector('.profile-img');
            const colorPair = colorPalettes[currentTheme][currentColorIndex];
            profileImg.style.background = `linear-gradient(45deg, ${colorPair[0]}, ${colorPair[1]})`;
            profileImg.style.borderColor = colorPair[0];
        }

        // Smooth scrolling for better UX
        function smoothScroll() {
            document.documentElement.style.scrollBehavior = 'smooth';
        }

        // Add parallax effect to floating elements
        function addParallax() {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelectorAll('.floating-element');
                
                parallax.forEach((element, index) => {
                    const speed = 0.5 + (index * 0.1);
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        }

        // Add keyboard navigation for language switching and theme toggle
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

        // =================== INITIALIZATION ===================
        document.addEventListener('DOMContentLoaded', function() {
            // Load theme preference first
            loadThemePreference();
            
            // Initial render
            renderAllContent();
            
            // Initialize animations and effects
            animateSkills();
            smoothScroll();
            addParallax();
            
            // Add random movement to floating elements
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                setInterval(() => {
                    const randomX = Math.random() * 20 - 10;
                    const randomY = Math.random() * 20 - 10;
                    element.style.transform += ` translate(${randomX}px, ${randomY}px)`;
                }, 3000 + (index * 1000));
            });

            // Add click effect to sections
            document.querySelectorAll('.section').forEach(section => {
                section.addEventListener('click', function(e) {
                    if (e.target.tagName !== 'BUTTON') {
                        this.style.transform = 'scale(0.98)';
                        setTimeout(() => {
                            this.style.transform = '';
                        }, 150);
                    }
                });
            });

            // Add glowing effect on hover for interactive elements
            document.addEventListener('mouseover', function(e) {
                if (e.target.matches('.toggle-btn, .lang-btn, .profile-img, .theme-toggle')) {
                    const glowColor = currentTheme === 'dark' ? 'rgba(0, 212, 255, 0.6)' : 'rgba(0, 123, 255, 0.6)';
                    e.target.style.filter = `drop-shadow(0 0 10px ${glowColor})`;
                }
            });
            
            document.addEventListener('mouseout', function(e) {
                if (e.target.matches('.toggle-btn, .lang-btn, .profile-img, .theme-toggle')) {
                    e.target.style.filter = '';
                }
            });

            // Easter egg functionality
            let clickCount = 0;
            document.querySelector('.profile-img').addEventListener('click', function() {
                clickCount++;
                if (clickCount === 5) {
                    alert(getText(cvData.easterEgg));
                    clickCount = 0;
                }
            });
        });

        // =================== DATA MANAGEMENT HELPER FUNCTIONS ===================
        
        // Function to add new skill
        function addSkill(name, level) {
            cvData.skills.push({ name, level });
            renderSkills();
            animateSkills();
        }

        // Function to update skill level
        function updateSkill(skillName, newLevel) {
            const skill = cvData.skills.find(s => s.name === skillName);
            if (skill) {
                skill.level = newLevel;
                renderSkills();
                animateSkills();
            }
        }

        // Function to add new experience
        function addExperience(experienceData) {
            cvData.experience.unshift(experienceData); // Add to beginning
            renderExperience();
        }

        // Function to add new project
        function addProject(projectData) {
            cvData.projects.unshift(projectData); // Add to beginning
            renderProjects();
        }

        // Function to update contact information
        function updateContactInfo(index, newValue) {
            if (cvData.contact[index]) {
                cvData.contact[index].value = newValue;
                renderContact();
            }
        }

        // Function to update about section
        function updateAbout(newMain, newExtended) {
            cvData.about.main = newMain;
            cvData.about.extended = newExtended;
            renderAbout();
        }

        // Export functions for external use
        window.cvManager = {
            addSkill,
            updateSkill,
            addExperience,
            addProject,
            updateContactInfo,
            updateAbout,
            switchLanguage,
            toggleTheme,
            toggleTopControls,
            getCurrentLanguage: () => currentLang,
            getCurrentTheme: () => currentTheme,
            getData: () => cvData
        };
