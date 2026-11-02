export type Language = "en" | "zh" | "id";

export interface Translation {
  meta: {
    htmlLang: string;
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    education: string;
    portfolio: string;
    publications: string;
    contact: string;
  };
  sidebar: {
    name: string;
    role: string;
    location: string;
    github: string;
    linkedin: string;
    email: string;
  };
  menu: {
    open: string;
    close: string;
  };
  languageSwitcher: {
    label: string;
    en: string;
    zh: string;
    id: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    cta: string;
    ctaSecondary: string;
    status: string;
    photoAlt: string;
    stats: { value: number; suffix: string; label: string }[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    skills: { title: string; desc: string }[];
  };
  experience: {
    heading: string;
    items: {
      title: string;
      company: string;
      type: string;
      period: string;
      location: string;
      highlights: string[];
    }[];
  };
  tools: {
    heading: string;
    categories: { ai: string; web: string; data: string; workflow: string };
  };
  journey: {
    heading: string;
    education: string;
    work: string;
    /** Label on the right-hand end of the rail. */
    now: string;
  };
  education: {
    heading: string;
    items: {
      degree: string;
      school: string;
      period: string;
      note: string;
      honor: string;
    }[];
  };
  portfolio: {
    heading: string;
    /** Heading for the home page's selected-projects section. */
    featuredHeading: string;
    /** Label on the button linking from the home page to the full portfolio. */
    viewAll: string;
    viewProject: string;
    previewAlt: (title: string) => string;
    filterLabel: string;
    /** Keys line up with `ProjectCategory` in components/Portfolio.tsx. */
    categories: { all: string; ai: string; dataViz: string; web: string };
    privateProject: string;
    items: { title: string; desc: string }[];
  };
  publications: {
    heading: string;
    certificationsHeading: string;
    languagesHeading: string;
    /** Label on the link through to a paper. */
    viewPaper: string;
    items: { title: string; venue: string; date: string; abstract: string }[];
    certifications: { name: string; issuer: string }[];
    languages: { name: string; level: string }[];
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  contact: {
    heading: string;
    intro: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    socialLabel: string;
    cta: string;
  };
  footer: {
    rights: (year: number) => string;
    builtWith: string;
    tagline: string;
  };
  notFound: {
    heading: string;
    body: string;
    back: string;
  };
}

const en: Translation = {
  meta: {
    htmlLang: "en",
    title: "Cristian Daniel Aruperes | IT Enthusiast",
    description:
      "Cristian Daniel Aruperes — IT Specialist in Taoyuan City, Taiwan. 5+ years across web development, data analysis and AI solutions. MS in Information Management, Yuan-Ze University.",
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    portfolio: "Portfolio",
    publications: "Publications",
    contact: "Contact",
  },
  sidebar: {
    name: "Cristian Daniel Aruperes",
    role: "IT Enthusiast",
    location: "Taoyuan City, Taiwan",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  menu: {
    open: "Open menu",
    close: "Close menu",
  },
  languageSwitcher: {
    label: "Language",
    en: "EN",
    zh: "中文",
    id: "ID",
  },
  hero: {
    name: "Cristian Daniel Aruperes",
    role: "IT Enthusiast",
    tagline:
      "Building things that solve real problems — from deep learning for medical imaging to conversational chatbots and full-stack web systems.",
    cta: "Explore My Work",
    ctaSecondary: "Get In Touch",
    status: "Open to IT & AI opportunities",
    photoAlt: "Cristian Daniel Aruperes",
    stats: [
      { value: 5, suffix: "+", label: "Years in IT" },
      { value: 4, suffix: "", label: "Companies" },
      { value: 2, suffix: "", label: "Publications" },
      { value: 7, suffix: "", label: "Projects shipped" },
    ],
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "Hi, it's me Cris. I've spent the past 5+ years working in IT, with a strong background in web development, data analysis and AI solutions. I hold a Master's degree in Information Management from Yuan-Ze University.",
      "Along the way I've faced my share of challenges and problem-solving opportunities that taught me how to make sound decisions and adapt to modern frameworks and technologies. I believe the newest technology is valuable, but maintaining stability and reliability remains just as important. Working with clients and colleagues across different countries has also helped me adapt to different environments and cultures.",
      "I'm eager to explore opportunities in the IT field, including roles beyond my current experience, with a strong motivation to continuously learn, adapt and expand my technical expertise in fast-evolving AI and automation environments.",
    ],
    skills: [
      {
        title: "AI & Machine Learning",
        desc: "LLMs, RAG, TensorFlow, Keras, medical image segmentation",
      },
      {
        title: "Web Development",
        desc: "React, .NET / C#, Laravel, PHP, REST APIs",
      },
      {
        title: "Data & Automation",
        desc: "SQL Server, Power BI dashboards, n8n, BPM workflows",
      },
    ],
  },
  experience: {
    heading: "Work Experience",
    items: [
      {
        title: "Information Technology Specialist",
        company: "HO YU TEXTILE CO., LTD.",
        type: "Permanent",
        period: "Oct 2025 – Present",
        location: "Taiwan · On-site",
        highlights: [
          "Design and develop internal ERP, EIP and MES web platforms supporting core business operations",
          "Build AI chatbots tailored to individual departments' workflows and information needs",
          "Deploy enterprise-wide data visualization dashboards, giving every department self-service analytics",
          "Lead digitalization initiatives, converting manual paper-based processes into automated digital workflows",
          "Design BPM workflows that standardize data collection, minimizing manual entry errors",
          "Serve as the bridge between factory-floor operations and modern IT/AI systems, driving Industry 4.0 transformation",
        ],
      },
      {
        title: "Research Assistant",
        company: "Yuan-Ze University",
        type: "Part-time",
        period: "Aug 2022 – Jan 2024",
        location: "Taoyuan City, Taiwan · On-site",
        highlights: [
          "Conducted graduate research on medical imaging AI: lung nodule detection and segmentation (thesis focus), boil-off gas detection, and brain & retina segmentation",
          "Collaborated with external partners Far Eastern Memorial Hospital and U-Ming Company on applied research",
          "Authored papers and presented findings at academic meetings and conferences",
          "Led dataset collection and analysis; implemented and benchmarked deep learning models to identify best-performing approaches",
        ],
      },
      {
        title: "Software Engineer",
        company: "PT Bussan Auto Finance",
        type: "Permanent",
        period: "Aug 2021 – Mar 2022",
        location: "Jakarta, Indonesia · On-site",
        highlights: [
          "Delivered “Sandia Services,” an internal administrative platform, ahead of schedule while supporting parallel team initiatives",
          "Built and maintained websites and interfaces for a company serving 8.2 million+ customers",
          "Ensured cross-platform accessibility and responsive design across desktop and mobile",
          "Partnered with Project Management and QA to test usability, performance and speed at every release",
        ],
      },
      {
        title: "Software Developer",
        company: "KiLK Productions Pte Ltd",
        type: "Full-time",
        period: "Mar 2019 – Jun 2021",
        location: "Singapore · Remote",
        highlights: [
          "Developed and maintained core digital products for Singapore-based client Alpome Pte. Ltd.",
          "Led integration of the AirAsia API, enabling third-party service connectivity on the client's platform",
          "Owned end-to-end website management across the client's full site portfolio — uptime, updates and performance",
          "Built new web and mobile applications from the ground up, and delivered product demos and customer support",
          "Collaborated daily with a distributed team spanning Thailand, India and Singapore",
        ],
      },
    ],
  },
  tools: {
    heading: "Tools I Use",
    categories: {
      ai: "AI & Machine Learning",
      web: "Web Development",
      data: "Data & BI",
      workflow: "Automation & Workflow",
    },
  },
  journey: {
    heading: "My Journey",
    education: "Education",
    work: "Work",
    now: "Now",
  },
  education: {
    heading: "Education",
    items: [
      {
        degree: "Master of Science — Information Management",
        school: "Yuan-Ze University",
        period: "Feb 2022 – Feb 2024",
        note: "Taoyuan City, Taiwan. Thesis on deep learning for lung nodule segmentation and measurement in CT images.",
        honor: "Full Scholarship — tuition waiver and monthly stipend",
      },
      {
        degree: "Bachelor's Degree — Computer Science, Informatics",
        school: "Universitas Klabat",
        period: "Aug 2015 – Dec 2018",
        note: "Activities: Student Association of Computer Science, Basketball Club.",
        honor: "Summa Cum Laude — top students in the Computer Science faculty",
      },
    ],
  },
  portfolio: {
    heading: "Portfolio",
    featuredHeading: "Selected Work",
    viewAll: "View All Projects",
    viewProject: "View Project",
    previewAlt: (title) => `${title} preview`,
    filterLabel: "Filter projects by category",
    categories: {
      all: "All",
      ai: "AI & Machine Learning",
      dataViz: "Data Visualization",
      web: "Web Systems",
    },
    privateProject: "Internal project — source not public",
    items: [
      {
        title: "Lung Nodule Analysis",
        desc: "Deep learning research on lung nodule segmentation and measurement in CT images, advancing automated medical image analysis.",
      },
      {
        title: "LINE Chatbot — YZU University",
        desc: "Conversational assistant answering questions about university programs, campus facilities and the admission process.",
      },
      {
        title: "LINE Chatbot — Bali Tourism",
        desc: "Tourism chatbot giving fast, accurate answers that help tourists and locals navigate and explore the city.",
      },
      {
        title: "School Management System",
        desc: "Information system for schools handling student and academic records, built on Laravel with a Bootstrap frontend.",
      },
      {
        title: "Clinic Management System",
        desc: "Information system for a general clinic covering patient records and visits, built on Laravel with a Bootstrap frontend.",
      },
      {
        title: "Personal Portfolio",
        desc: "This site — a responsive multi-page portfolio built with React 19, TypeScript and Tailwind, deployed to GitHub Pages.",
      },
      {
        title: "Enterprise BI Dashboards",
        desc: "Company-wide Power BI dashboards giving every department self-service analytics, fed by SQL Server and automated BPM data collection.",
      },
    ],
  },
  publications: {
    heading: "Publications & Credentials",
    certificationsHeading: "Licenses & Certifications",
    languagesHeading: "Languages",
    viewPaper: "Read the paper",
    items: [
      {
        title:
          "Lung Nodule Analysis in CT Images: Deep Learning for Segmentation and Measurement",
        venue: "Association for Computing Machinery (ACM), New York, United States",
        date: "Sep 9, 2024",
        abstract:
          "Contributes not only to nodule segmentation but extends to nodule measurement — a critical stage in lung cancer diagnosis. Built on a meticulously curated dataset and deep learning techniques, the findings hold potential to improve early detection and treatment strategies for individuals at risk of lung cancer.",
      },
      {
        title: "The Development of Web Portal for Higher Education in North Sulawesi",
        venue: "Corisindo",
        date: "Aug 28, 2021",
        abstract:
          "Addresses limited and inefficiently published information about colleges in North Sulawesi, which makes it hard for prospective students and parents to identify trusted institutions. Using a modified waterfall method and the Laravel framework, the research delivered a web portal that stores, manages and presents accurate, up-to-date college information.",
      },
    ],
    certifications: [
      {
        name: "Cisco Certified Network Associate Routing and Switching (CCNA)",
        issuer: "Cisco",
      },
    ],
    languages: [
      { name: "Indonesian", level: "Native proficiency" },
      { name: "English", level: "Professional working proficiency" },
      { name: "Chinese", level: "Elementary proficiency" },
    ],
  },
  faq: {
    heading: "FAQ",
    items: [
      {
        q: "What kind of roles are you open to?",
        a: "Roles across IT and software — web development, data and AI — including ones that stretch beyond my current experience. I'm motivated to keep learning and to grow into fast-moving AI and automation work.",
      },
      {
        q: "What are your strongest tools?",
        a: "Day to day I work with .NET / C#, React, SQL Server and Power BI, and I build AI features on top of LLMs with RAG. On the research side it's Python, TensorFlow and Keras.",
      },
      {
        q: "Where are you based?",
        a: "Taoyuan City, Taiwan. I've worked on-site in Taiwan and Indonesia, and remotely for a Singapore-based company with teammates across Thailand, India and Singapore.",
      },
      {
        q: "Which languages do you work in?",
        a: "English at a professional working level, Indonesian natively, and Chinese at a basic conversational level.",
      },
      {
        q: "What's the best way to reach you?",
        a: "Email is best — cristianaruperes12@gmail.com. You can also find me on LinkedIn and GitHub.",
      },
    ],
  },
  contact: {
    heading: "Get In Touch",
    intro:
      "Interested in working together, or just want to talk about AI, data or web systems? I'd be glad to hear from you.",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Taoyuan City, Taiwan",
    socialLabel: "Elsewhere",
    cta: "Send me an email",
  },
  footer: {
    rights: (year) => `© ${year} Cristian Daniel Aruperes. All rights reserved.`,
    builtWith: "Built with React, TypeScript and Tailwind CSS",
    tagline: "Built from scratch, not from a template.",
  },
  notFound: {
    heading: "Page not found",
    body: "That page does not exist. Try one of the sections in the menu.",
    back: "Back to home",
  },
};

const zh: Translation = {
  meta: {
    htmlLang: "zh-Hant-TW",
    title: "阿魯沛 Cristian Daniel Aruperes | 資訊科技愛好者",
    description:
      "阿魯沛 Cristian Daniel Aruperes — 位於台灣桃園市的資訊科技專員。擁有五年以上網站開發、資料分析與 AI 解決方案經驗，元智大學資訊管理碩士。",
  },
  nav: {
    home: "首頁",
    about: "關於我",
    experience: "工作經歷",
    education: "學歷",
    portfolio: "作品集",
    publications: "著作與證照",
    contact: "聯絡",
  },
  sidebar: {
    name: "阿魯沛 Cristian Daniel Aruperes",
    role: "資訊科技愛好者",
    location: "台灣 桃園市",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "電子郵件",
  },
  menu: {
    open: "開啟選單",
    close: "關閉選單",
  },
  languageSwitcher: {
    label: "語言",
    en: "EN",
    zh: "中文",
    id: "ID",
  },
  hero: {
    name: "阿魯沛 Cristian Daniel Aruperes",
    role: "資訊科技愛好者",
    tagline:
      "打造能解決真實問題的系統 —— 從醫學影像的深度學習，到對話式聊天機器人與全端網站系統。",
    cta: "看看我的作品",
    ctaSecondary: "與我聯絡",
    status: "正在尋找 IT 與 AI 領域的機會",
    photoAlt: "阿魯沛 Cristian Daniel Aruperes",
    stats: [
      { value: 5, suffix: "+", label: "年資訊科技經驗" },
      { value: 4, suffix: "", label: "任職公司" },
      { value: 2, suffix: "", label: "學術論文" },
      { value: 7, suffix: "", label: "完成專案" },
    ],
  },
  about: {
    heading: "關於我",
    paragraphs: [
      "你好，我是 Cris。過去五年多我一直在資訊科技領域工作，專長為網站開發、資料分析與 AI 解決方案，並取得元智大學資訊管理碩士學位。",
      "一路走來，我遇過各式各樣的挑戰與解決問題的機會，這些經驗讓我學會做出穩健的判斷，也能快速適應新的框架與技術。我認為最新的技術固然有價值，但維持系統的穩定與可靠同樣重要。與來自不同國家的客戶和同事合作，也讓我更能適應不同的環境與文化。",
      "我期待在資訊科技領域探索更多機會，包含超出目前經驗範圍的職務，並持續學習、調適，在快速演進的 AI 與自動化環境中擴展自己的技術深度。",
    ],
    skills: [
      {
        title: "人工智慧與機器學習",
        desc: "大型語言模型（LLM）、RAG、TensorFlow、Keras、醫學影像分割",
      },
      {
        title: "網站開發",
        desc: "React、.NET / C#、Laravel、PHP、REST API",
      },
      {
        title: "資料與自動化",
        desc: "SQL Server、Power BI 儀表板、n8n、BPM 流程",
      },
    ],
  },
  experience: {
    heading: "工作經歷",
    items: [
      {
        title: "資訊科技專員",
        company: "和友紡織股份有限公司",
        type: "正職",
        period: "2025 年 10 月 – 至今",
        location: "台灣 · 現場",
        highlights: [
          "設計並開發支援核心營運的內部 ERP、EIP 與 MES 網站平台",
          "依各部門的作業流程與資訊需求，建置客製化 AI 聊天機器人",
          "導入全公司資料視覺化儀表板，讓各部門都能自助分析數據",
          "主導數位化專案，將紙本人工作業轉換為自動化的數位流程",
          "設計 BPM 流程以標準化資料蒐集，降低人工輸入錯誤",
          "擔任廠務現場與現代 IT／AI 系統之間的橋樑，推動工業 4.0 轉型",
        ],
      },
      {
        title: "研究助理",
        company: "元智大學",
        type: "兼職",
        period: "2022 年 8 月 – 2024 年 1 月",
        location: "台灣 桃園市 · 現場",
        highlights: [
          "從事醫學影像 AI 的研究所研究：肺結節偵測與分割（論文主題）、蒸發氣體偵測，以及腦部與視網膜影像分割",
          "與外部合作單位亞東紀念醫院、裕民航運共同進行應用研究",
          "撰寫論文並於學術研討會與會議中發表研究成果",
          "主導資料集蒐集與分析，實作並比較多種深度學習模型以找出最佳方案",
        ],
      },
      {
        title: "軟體工程師",
        company: "PT Bussan Auto Finance",
        type: "正職",
        period: "2021 年 8 月 – 2022 年 3 月",
        location: "印尼 雅加達 · 現場",
        highlights: [
          "提前完成內部行政平台「Sandia Services」，同時支援其他團隊專案",
          "為服務 820 萬名以上客戶的企業建置並維運網站與介面",
          "確保跨平台可及性，並在桌機與行動裝置上皆維持響應式設計",
          "與專案管理及 QA 團隊合作，於每次改版時測試易用性、效能與速度",
        ],
      },
      {
        title: "軟體開發工程師",
        company: "KiLK Productions Pte Ltd",
        type: "全職",
        period: "2019 年 3 月 – 2021 年 6 月",
        location: "新加坡 · 遠端",
        highlights: [
          "為新加坡客戶 Alpome Pte. Ltd. 開發並維護核心數位產品",
          "主導 AirAsia API 整合，讓客戶平台可串接第三方服務",
          "負責客戶旗下所有網站的全面維運 —— 包含服務可用性、更新與效能",
          "從零打造全新的網站與行動應用程式，並負責產品展示與客戶支援",
          "每日與橫跨泰國、印度與新加坡的分散式團隊協作",
        ],
      },
    ],
  },
  tools: {
    heading: "我使用的工具",
    categories: {
      ai: "人工智慧與機器學習",
      web: "網站開發",
      data: "資料與商業智慧",
      workflow: "自動化與流程",
    },
  },
  journey: {
    heading: "我的歷程",
    education: "學業",
    work: "工作",
    now: "現在",
  },
  education: {
    heading: "學歷",
    items: [
      {
        degree: "理學碩士 — 資訊管理",
        school: "元智大學",
        period: "2022 年 2 月 – 2024 年 2 月",
        note: "台灣桃園市。碩士論文主題為以深度學習進行 CT 影像中的肺結節分割與量測。",
        honor: "全額獎學金 — 免學雜費並提供每月生活津貼",
      },
      {
        degree: "學士 — 資訊工程",
        school: "Universitas Klabat（克拉巴特大學）",
        period: "2015 年 8 月 – 2018 年 12 月",
        note: "社團活動：資訊工程系學會、籃球社。",
        honor: "最高榮譽畢業 (Summa Cum Laude) — 資訊工程學院最優秀學生之一",
      },
    ],
  },
  portfolio: {
    heading: "作品集",
    featuredHeading: "精選作品",
    viewAll: "查看所有作品",
    viewProject: "查看專案",
    previewAlt: (title) => `${title} 預覽圖`,
    filterLabel: "依類別篩選專案",
    categories: {
      all: "全部",
      ai: "人工智慧與機器學習",
      dataViz: "資料視覺化",
      web: "網站系統",
    },
    privateProject: "內部專案 —— 原始碼未公開",
    items: [
      {
        title: "肺結節影像分析",
        desc: "以深度學習研究 CT 影像中的肺結節分割與量測，推進醫學影像的自動化分析。",
      },
      {
        title: "LINE 聊天機器人 — 元智大學",
        desc: "對話式助理，可回答關於學校科系、校園設施與入學申請流程的問題。",
      },
      {
        title: "LINE 聊天機器人 — 峇里島旅遊",
        desc: "旅遊聊天機器人，提供快速且準確的回覆，協助遊客與在地居民探索城市。",
      },
      {
        title: "學校管理系統",
        desc: "處理學生與學務資料的校務資訊系統，以 Laravel 開發並搭配 Bootstrap 前端。",
      },
      {
        title: "診所管理系統",
        desc: "涵蓋病患資料與就診紀錄的一般診所資訊系統，以 Laravel 開發並搭配 Bootstrap 前端。",
      },
      {
        title: "個人作品集網站",
        desc: "就是這個網站 —— 以 React 19、TypeScript 與 Tailwind 打造的響應式多頁作品集，部署於 GitHub Pages。",
      },
      {
        title: "企業 BI 儀表板",
        desc: "全公司導入的 Power BI 儀表板，讓各部門都能自助分析數據；資料來源為 SQL Server 與自動化的 BPM 資料蒐集流程。",
      },
    ],
  },
  publications: {
    heading: "著作與證照",
    certificationsHeading: "證照與認證",
    languagesHeading: "語言能力",
    viewPaper: "閱讀論文",
    items: [
      {
        title: "CT 影像之肺結節分析：運用深度學習進行分割與量測",
        venue: "美國計算機協會（ACM），美國紐約",
        date: "2024 年 9 月 9 日",
        abstract:
          "本研究不僅著重於結節分割，更延伸至結節量測 —— 這是肺癌診斷的關鍵環節。研究以精心整理的資料集與深度學習技術為基礎，其成果有助於改善肺癌高風險族群的早期偵測與治療策略。",
      },
      {
        title: "北蘇拉威西高等教育資訊入口網站之開發",
        venue: "Corisindo",
        date: "2021 年 8 月 28 日",
        abstract:
          "針對北蘇拉威西地區大專院校資訊有限且發布效率不佳的問題 —— 這使得準大學生與家長難以辨識值得信賴的學校。本研究採用改良式瀑布式開發法與 Laravel 框架，打造出可儲存、管理並呈現準確且即時校務資訊的入口網站。",
      },
    ],
    certifications: [
      {
        name: "Cisco 網路認證工程師：路由與交換 (CCNA)",
        issuer: "Cisco",
      },
    ],
    languages: [
      { name: "印尼文", level: "母語" },
      { name: "英文", level: "專業工作能力" },
      { name: "中文", level: "基礎溝通能力" },
    ],
  },
  faq: {
    heading: "常見問題",
    items: [
      {
        q: "你正在尋找什麼樣的職務？",
        a: "資訊科技與軟體領域的各類職務 —— 包含網站開發、資料與 AI，也包含超出我目前經驗範圍的工作。我樂於持續學習，並希望在快速演進的 AI 與自動化領域中成長。",
      },
      {
        q: "你最擅長的工具有哪些？",
        a: "日常工作主要使用 .NET / C#、React、SQL Server 與 Power BI，並運用大型語言模型（LLM）與 RAG 建置 AI 功能。研究方面則以 Python、TensorFlow 與 Keras 為主。",
      },
      {
        q: "你目前在哪裡？",
        a: "台灣桃園市。我曾在台灣與印尼現場工作，也曾為新加坡的公司遠端工作，團隊成員分布於泰國、印度與新加坡。",
      },
      {
        q: "你使用哪些語言溝通？",
        a: "英文具備專業工作能力，印尼文為母語，中文則為基礎溝通能力。",
      },
      {
        q: "聯絡你最好的方式是什麼？",
        a: "電子郵件最快 —— cristianaruperes12@gmail.com。也歡迎透過 LinkedIn 或 GitHub 與我聯繫。",
      },
    ],
  },
  contact: {
    heading: "與我聯絡",
    intro:
      "想合作，或只是想聊聊 AI、資料與網站系統嗎？歡迎隨時與我聯繫。",
    emailLabel: "電子郵件",
    locationLabel: "所在地",
    locationValue: "台灣 桃園市",
    socialLabel: "其他平台",
    cta: "寄信給我",
  },
  footer: {
    rights: (year) => `© ${year} 阿魯沛 Cristian Daniel Aruperes. 版權所有。`,
    builtWith: "以 React、TypeScript 與 Tailwind CSS 打造",
    tagline: "一行一行寫出來的，不是套版。",
  },
  notFound: {
    heading: "找不到頁面",
    body: "這個頁面不存在，請從選單中選擇其他章節。",
    back: "回到首頁",
  },
};

const id: Translation = {
  meta: {
    htmlLang: "id",
    title: "Cristian Daniel Aruperes | Penggiat IT",
    description:
      "Cristian Daniel Aruperes — IT Specialist di Taoyuan City, Taiwan. Pengalaman 5+ tahun di pengembangan web, analisis data dan solusi AI. Magister Manajemen Informasi, Yuan-Ze University.",
  },
  nav: {
    home: "Beranda",
    about: "Tentang Saya",
    experience: "Pengalaman",
    education: "Pendidikan",
    portfolio: "Portofolio",
    publications: "Publikasi",
    contact: "Kontak",
  },
  sidebar: {
    name: "Cristian Daniel Aruperes",
    role: "Penggiat IT",
    location: "Taoyuan City, Taiwan",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  menu: {
    open: "Buka menu",
    close: "Tutup menu",
  },
  languageSwitcher: {
    label: "Bahasa",
    en: "EN",
    zh: "中文",
    id: "ID",
  },
  hero: {
    name: "Cristian Daniel Aruperes",
    role: "Penggiat IT",
    tagline:
      "Membangun sistem yang menyelesaikan masalah nyata — mulai dari deep learning untuk citra medis hingga chatbot percakapan dan sistem web full-stack.",
    cta: "Lihat Karya Saya",
    ctaSecondary: "Hubungi Saya",
    status: "Terbuka untuk peluang di bidang IT & AI",
    photoAlt: "Cristian Daniel Aruperes",
    stats: [
      { value: 5, suffix: "+", label: "Tahun di bidang IT" },
      { value: 4, suffix: "", label: "Perusahaan" },
      { value: 2, suffix: "", label: "Publikasi" },
      { value: 7, suffix: "", label: "Proyek selesai" },
    ],
  },
  about: {
    heading: "Tentang Saya",
    paragraphs: [
      "Halo, saya Cris. Lebih dari lima tahun terakhir saya berkarier di bidang IT, dengan latar belakang kuat di pengembangan web, analisis data dan solusi AI. Saya menyelesaikan studi magister Manajemen Informasi di Yuan-Ze University.",
      "Sepanjang perjalanan itu saya menghadapi berbagai tantangan dan kesempatan memecahkan masalah yang mengajarkan saya mengambil keputusan yang tepat serta beradaptasi dengan framework dan teknologi modern. Menurut saya teknologi terbaru memang bernilai, tetapi menjaga stabilitas dan keandalan sistem sama pentingnya. Bekerja dengan klien dan rekan dari berbagai negara juga membuat saya terbiasa menyesuaikan diri dengan lingkungan dan budaya yang berbeda.",
      "Saya antusias menjajaki peluang di bidang IT, termasuk peran di luar pengalaman saya saat ini, dengan motivasi kuat untuk terus belajar, beradaptasi dan memperluas keahlian teknis di lingkungan AI dan automasi yang berkembang pesat.",
    ],
    skills: [
      {
        title: "AI & Machine Learning",
        desc: "LLM, RAG, TensorFlow, Keras, segmentasi citra medis",
      },
      {
        title: "Pengembangan Web",
        desc: "React, .NET / C#, Laravel, PHP, REST API",
      },
      {
        title: "Data & Automasi",
        desc: "SQL Server, dashboard Power BI, n8n, alur kerja BPM",
      },
    ],
  },
  experience: {
    heading: "Pengalaman Kerja",
    items: [
      {
        title: "Information Technology Specialist",
        company: "HO YU TEXTILE CO., LTD.",
        type: "Tetap",
        period: "Okt 2025 – Sekarang",
        location: "Taiwan · Di kantor",
        highlights: [
          "Merancang dan mengembangkan platform web ERP, EIP dan MES internal yang menopang operasional inti perusahaan",
          "Membangun chatbot AI yang disesuaikan dengan alur kerja dan kebutuhan informasi tiap departemen",
          "Menerapkan dashboard visualisasi data untuk seluruh perusahaan, sehingga setiap departemen dapat menganalisis datanya sendiri",
          "Memimpin inisiatif digitalisasi, mengubah proses manual berbasis kertas menjadi alur kerja digital yang otomatis",
          "Merancang alur kerja BPM yang menstandarkan pengumpulan data dan menekan kesalahan input manual",
          "Menjadi jembatan antara operasional lantai pabrik dan sistem IT/AI modern, mendorong transformasi Industri 4.0",
        ],
      },
      {
        title: "Asisten Peneliti",
        company: "Yuan-Ze University",
        type: "Paruh waktu",
        period: "Agu 2022 – Jan 2024",
        location: "Taoyuan City, Taiwan · Di kampus",
        highlights: [
          "Melakukan riset pascasarjana di bidang AI untuk citra medis: deteksi dan segmentasi nodul paru (fokus tesis), deteksi boil-off gas, serta segmentasi otak dan retina",
          "Berkolaborasi dengan mitra eksternal Far Eastern Memorial Hospital dan U-Ming Company dalam riset terapan",
          "Menulis makalah dan mempresentasikan hasil penelitian di pertemuan serta konferensi akademik",
          "Memimpin pengumpulan dan analisis dataset; mengimplementasikan dan membandingkan model deep learning untuk menemukan pendekatan terbaik",
        ],
      },
      {
        title: "Software Engineer",
        company: "PT Bussan Auto Finance",
        type: "Tetap",
        period: "Agu 2021 – Mar 2022",
        location: "Jakarta, Indonesia · Di kantor",
        highlights: [
          "Menyelesaikan “Sandia Services”, platform administrasi internal, lebih cepat dari jadwal sambil mendukung inisiatif tim lainnya",
          "Membangun dan memelihara situs serta antarmuka untuk perusahaan dengan 8,2 juta+ nasabah",
          "Memastikan aksesibilitas lintas platform dan desain responsif di desktop maupun perangkat mobile",
          "Bekerja sama dengan tim Project Management dan QA untuk menguji kegunaan, performa dan kecepatan di setiap rilis",
        ],
      },
      {
        title: "Software Developer",
        company: "KiLK Productions Pte Ltd",
        type: "Penuh waktu",
        period: "Mar 2019 – Jun 2021",
        location: "Singapura · Remote",
        highlights: [
          "Mengembangkan dan memelihara produk digital utama untuk klien asal Singapura, Alpome Pte. Ltd.",
          "Memimpin integrasi AirAsia API sehingga platform klien dapat terhubung dengan layanan pihak ketiga",
          "Mengelola seluruh portofolio situs klien dari hulu ke hilir — ketersediaan, pembaruan dan performa",
          "Membangun aplikasi web dan mobile baru dari nol, serta memberikan demo produk dan dukungan pelanggan",
          "Berkolaborasi setiap hari dengan tim tersebar di Thailand, India dan Singapura",
        ],
      },
    ],
  },
  tools: {
    heading: "Tools yang Saya Gunakan",
    categories: {
      ai: "AI & Machine Learning",
      web: "Pengembangan Web",
      data: "Data & BI",
      workflow: "Automasi & Alur Kerja",
    },
  },
  journey: {
    heading: "Perjalanan Saya",
    education: "Pendidikan",
    work: "Pekerjaan",
    now: "Sekarang",
  },
  education: {
    heading: "Pendidikan",
    items: [
      {
        degree: "Magister Sains — Manajemen Informasi",
        school: "Yuan-Ze University",
        period: "Feb 2022 – Feb 2024",
        note: "Taoyuan City, Taiwan. Tesis mengenai deep learning untuk segmentasi dan pengukuran nodul paru pada citra CT.",
        honor: "Beasiswa Penuh — bebas biaya kuliah dan tunjangan bulanan",
      },
      {
        degree: "Sarjana — Ilmu Komputer, Informatika",
        school: "Universitas Klabat",
        period: "Agu 2015 – Des 2018",
        note: "Kegiatan: Himpunan Mahasiswa Ilmu Komputer, Klub Basket.",
        honor: "Summa Cum Laude — mahasiswa terbaik di Fakultas Ilmu Komputer",
      },
    ],
  },
  portfolio: {
    heading: "Portofolio",
    featuredHeading: "Karya Pilihan",
    viewAll: "Lihat Semua Proyek",
    viewProject: "Lihat Proyek",
    previewAlt: (title) => `Pratinjau ${title}`,
    filterLabel: "Saring proyek berdasarkan kategori",
    categories: {
      all: "Semua",
      ai: "AI & Machine Learning",
      dataViz: "Visualisasi Data",
      web: "Sistem Web",
    },
    privateProject: "Proyek internal — kode sumber tidak dipublikasikan",
    items: [
      {
        title: "Analisis Nodul Paru",
        desc: "Riset deep learning untuk segmentasi dan pengukuran nodul paru pada citra CT, memajukan analisis citra medis secara otomatis.",
      },
      {
        title: "Chatbot LINE — Universitas YZU",
        desc: "Asisten percakapan yang menjawab pertanyaan seputar program studi, fasilitas kampus dan proses pendaftaran.",
      },
      {
        title: "Chatbot LINE — Pariwisata Bali",
        desc: "Chatbot pariwisata yang memberi jawaban cepat dan akurat untuk membantu wisatawan maupun warga lokal menjelajahi kota.",
      },
      {
        title: "Sistem Manajemen Sekolah",
        desc: "Sistem informasi sekolah untuk mengelola data siswa dan akademik, dibangun dengan Laravel dan frontend Bootstrap.",
      },
      {
        title: "Sistem Manajemen Klinik",
        desc: "Sistem informasi klinik umum yang mencakup rekam medis dan kunjungan pasien, dibangun dengan Laravel dan frontend Bootstrap.",
      },
      {
        title: "Portofolio Pribadi",
        desc: "Situs ini — portofolio multi-halaman yang responsif, dibangun dengan React 19, TypeScript dan Tailwind, di-deploy ke GitHub Pages.",
      },
      {
        title: "Dashboard BI Perusahaan",
        desc: "Dashboard Power BI untuk seluruh perusahaan yang memberi setiap departemen analisis mandiri, bersumber dari SQL Server dan pengumpulan data BPM otomatis.",
      },
    ],
  },
  publications: {
    heading: "Publikasi & Sertifikasi",
    certificationsHeading: "Lisensi & Sertifikasi",
    languagesHeading: "Bahasa",
    viewPaper: "Baca publikasinya",
    items: [
      {
        title:
          "Lung Nodule Analysis in CT Images: Deep Learning for Segmentation and Measurement",
        venue: "Association for Computing Machinery (ACM), New York, Amerika Serikat",
        date: "9 Sep 2024",
        abstract:
          "Penelitian ini tidak hanya membahas segmentasi nodul, tetapi juga pengukurannya — tahap penting dalam diagnosis kanker paru. Berbekal dataset yang disusun dengan cermat dan teknik deep learning, temuannya berpotensi memperbaiki deteksi dini serta strategi pengobatan bagi mereka yang berisiko terkena kanker paru.",
      },
      {
        title: "The Development of Web Portal for Higher Education in North Sulawesi",
        venue: "Corisindo",
        date: "28 Agu 2021",
        abstract:
          "Penelitian ini menyoroti terbatasnya informasi perguruan tinggi di Sulawesi Utara serta publikasinya yang kurang efisien, sehingga calon mahasiswa dan orang tua sulit mengenali institusi yang tepercaya. Dengan metode waterfall termodifikasi dan framework Laravel, penelitian ini menghasilkan portal web yang menyimpan, mengelola dan menyajikan informasi kampus secara akurat dan mutakhir.",
      },
    ],
    certifications: [
      {
        name: "Cisco Certified Network Associate Routing and Switching (CCNA)",
        issuer: "Cisco",
      },
    ],
    languages: [
      { name: "Indonesia", level: "Bahasa ibu" },
      { name: "Inggris", level: "Kemampuan kerja profesional" },
      { name: "Mandarin", level: "Kemampuan dasar" },
    ],
  },
  faq: {
    heading: "Tanya Jawab",
    items: [
      {
        q: "Peran seperti apa yang Anda cari?",
        a: "Berbagai peran di bidang IT dan software — pengembangan web, data dan AI — termasuk yang berada di luar pengalaman saya saat ini. Saya termotivasi untuk terus belajar dan berkembang di bidang AI serta automasi yang bergerak cepat.",
      },
      {
        q: "Apa tools yang paling Anda kuasai?",
        a: "Sehari-hari saya bekerja dengan .NET / C#, React, SQL Server dan Power BI, serta membangun fitur AI di atas LLM dengan RAG. Untuk riset, saya menggunakan Python, TensorFlow dan Keras.",
      },
      {
        q: "Anda berdomisili di mana?",
        a: "Taoyuan City, Taiwan. Saya pernah bekerja di kantor di Taiwan dan Indonesia, serta remote untuk perusahaan asal Singapura dengan rekan tim di Thailand, India dan Singapura.",
      },
      {
        q: "Bahasa apa saja yang Anda gunakan?",
        a: "Inggris pada tingkat kerja profesional, Indonesia sebagai bahasa ibu, dan Mandarin pada tingkat dasar.",
      },
      {
        q: "Cara terbaik menghubungi Anda?",
        a: "Lewat email — cristianaruperes12@gmail.com. Saya juga bisa dihubungi melalui LinkedIn dan GitHub.",
      },
    ],
  },
  contact: {
    heading: "Hubungi Saya",
    intro:
      "Tertarik bekerja sama, atau sekadar ingin berbincang soal AI, data dan sistem web? Saya senang mendengar kabar dari Anda.",
    emailLabel: "Email",
    locationLabel: "Lokasi",
    locationValue: "Taoyuan City, Taiwan",
    socialLabel: "Tautan lain",
    cta: "Kirim email ke saya",
  },
  footer: {
    rights: (year) => `© ${year} Cristian Daniel Aruperes. Seluruh hak cipta dilindungi.`,
    builtWith: "Dibangun dengan React, TypeScript dan Tailwind CSS",
    tagline: "Ditulis dari nol, bukan dari template.",
  },
  notFound: {
    heading: "Halaman tidak ditemukan",
    body: "Halaman tersebut tidak ada. Silakan pilih salah satu bagian di menu.",
    back: "Kembali ke beranda",
  },
};

export const translations: Record<Language, Translation> = { en, zh, id };
