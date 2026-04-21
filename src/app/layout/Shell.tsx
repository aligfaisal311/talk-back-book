import React from 'react';

interface ShellProps {
  children: React.ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {children}
    </div>
  );
};

export default Shell;
