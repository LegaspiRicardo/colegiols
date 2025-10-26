import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-[100vw] overflow-x-hidden`}>
      <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;