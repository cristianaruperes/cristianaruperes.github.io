import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Cristian Daniel Aruperes. All rights reserved.
        </p>
        <p className="text-slate-400 text-xs mt-2">
          Built with React, TypeScript and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};