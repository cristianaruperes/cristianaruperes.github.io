import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 border-t">
      © {new Date().getFullYear()} Cristian Aruperes. All rights reserved.
    </footer>
  );
};