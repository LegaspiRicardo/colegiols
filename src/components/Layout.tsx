// src/components/Layout.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="pt-16 min-h-screen">
      {children}
    </main>
  );
};

export default Layout;