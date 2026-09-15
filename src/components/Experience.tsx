import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface ExperienceItem {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
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
      "Serve as the bridge between factory-floor operations and modern IT/AI systems, driving Industry 4.0 transformation"
    ],
    skills: ["LLM (Claude, GPT, Gemini, Llama)", "RAG", "MCP", ".NET", "C#", "SQL Server", "Power BI", "n8n", "REST API"]
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
      "Led dataset collection and analysis; implemented and benchmarked deep learning models to identify best-performing approaches"
    ],
    skills: ["TensorFlow", "Keras", "Python", "NumPy", "Matplotlib", "Medical Image Segmentation", "Deep Learning"]
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
      "Partnered with Project Management and QA to test usability, performance and speed at every release"
    ],
    skills: ["React.js", "JavaScript", "HTML", "Azure", "JIRA", "Git", "REST API"]
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
      "Collaborated daily with a distributed team spanning Thailand, India and Singapore"
    ],
    skills: ["PHP", "Laravel", "MySQL", "WordPress", "Bootstrap", "OAuth", "Git"]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-slate-50 py-20 px-8">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Work Experience</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-600">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                  <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-blue-600 font-semibold">
                  {exp.company} <span className="text-slate-400 font-normal">· {exp.type}</span>
                </p>
                <p className="text-sm text-slate-500 mb-4">{exp.location}</p>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                      <span className="text-blue-500 mt-1.5 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
