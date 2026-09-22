export type Language = "en" | "zh";

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
  };
  sidebar: {
    name: string;
    role: string;
    location: string;
    github: string;
    linkedin: string;
    email: string;
  };
  languageSwitcher: {
    label: string;
    en: string;
    zh: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    cta: string;
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
    viewProject: string;
    previewAlt: (title: string) => string;
    items: { title: string; desc: string }[];
  };
  publications: {
    heading: string;
    certificationsHeading: string;
    languagesHeading: string;
    items: { title: string; venue: string; date: string; abstract: string }[];
    certifications: { name: string; issuer: string }[];
    languages: { name: string; level: string }[];
  };
  footer: {
    rights: (year: number) => string;
    builtWith: string;
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
  },
  sidebar: {
    name: "Cristian Daniel Aruperes",
    role: "IT Enthusiast",
    location: "Taoyuan City, Taiwan",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  languageSwitcher: {
    label: "Language",
    en: "EN",
    zh: "中文",
  },
  hero: {
    name: "Cristian Daniel Aruperes",
    role: "IT Enthusiast",
    tagline:
      "Building things that solve real problems — from deep learning for medical imaging to conversational chatbots and full-stack web systems.",
    cta: "Explore My Work",
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
    viewProject: "View Project",
    previewAlt: (title) => `${title} preview`,
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
        desc: "This site — a responsive single-page portfolio built with React 19, TypeScript and Tailwind, deployed to GitHub Pages.",
      },
    ],
  },
  publications: {
    heading: "Publications & Credentials",
    certificationsHeading: "Licenses & Certifications",
    languagesHeading: "Languages",
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
      { name: "English", level: "Professional working proficiency" },
      { name: "Chinese", level: "Elementary proficiency" },
    ],
  },
  footer: {
    rights: (year) => `© ${year} Cristian Daniel Aruperes. All rights reserved.`,
    builtWith: "Built with React, TypeScript and Tailwind CSS",
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
  },
  sidebar: {
    name: "阿魯沛 Cristian Daniel Aruperes",
    role: "資訊科技愛好者",
    location: "台灣 桃園市",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "電子郵件",
  },
  languageSwitcher: {
    label: "語言",
    en: "EN",
    zh: "中文",
  },
  hero: {
    name: "阿魯沛 Cristian Daniel Aruperes",
    role: "資訊科技愛好者",
    tagline:
      "打造能解決真實問題的系統 —— 從醫學影像的深度學習，到對話式聊天機器人與全端網站系統。",
    cta: "看看我的作品",
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
    viewProject: "查看專案",
    previewAlt: (title) => `${title} 預覽圖`,
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
        desc: "就是這個網站 —— 以 React 19、TypeScript 與 Tailwind 打造的響應式單頁作品集，部署於 GitHub Pages。",
      },
    ],
  },
  publications: {
    heading: "著作與證照",
    certificationsHeading: "證照與認證",
    languagesHeading: "語言能力",
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
      { name: "英文", level: "專業工作能力" },
      { name: "中文", level: "基礎溝通能力" },
    ],
  },
  footer: {
    rights: (year) => `© ${year} 阿魯沛 Cristian Daniel Aruperes. 版權所有。`,
    builtWith: "以 React、TypeScript 與 Tailwind CSS 打造",
  },
};

export const translations: Record<Language, Translation> = { en, zh };
