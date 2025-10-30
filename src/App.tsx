import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <img
            src="https://avatars.githubusercontent.com/u/000000?v=4"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-2">Cristiana Daniel Aruperes</h1>
          <p className="text-lg opacity-90 mb-4">
            IT Enthusiast
          </p>
          <div className="space-x-4">
            <a
              href="https://github.com/cristianaruperes"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-200"
            >
              GitHub
            </a>
            <a
              href="mailto:cristianaruperes@gmail.com"
              className="underline hover:text-indigo-200"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a passionate frontend developer with experience building
          responsive, user-friendly websites using React, TailwindCSS, and modern web technologies. 
          I enjoy turning design ideas into clean, interactive interfaces.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Frontend Developer – ABC Corp</h3>
              <p className="text-sm text-gray-600">2022 – Present</p>
              <p className="text-gray-700 mt-2">
                Developed and maintained React-based applications, improving performance and UI accessibility.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Web Designer – Creative Studio</h3>
              <p className="text-sm text-gray-600">2020 – 2022</p>
              <p className="text-gray-700 mt-2">
                Designed responsive layouts, collaborated with developers, and implemented UX improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">B.S. in Computer Science</h3>
            <p className="text-sm text-gray-600">University of Example – 2016–2020</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "React Portfolio",
                desc: "Personal website built with React + Tailwind.",
                link: "https://github.com/cristianaruperes/my-react-bio",
              },
              {
                title: "Landing Page",
                desc: "Responsive product landing page design.",
                link: "#",
              },
              {
                title: "UI Components",
                desc: "Reusable React components collection.",
                link: "#",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Cristiana Ruperes — Built with React & Tailwind
      </footer>
    </div>
  );
};

export default App;
