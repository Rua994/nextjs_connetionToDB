import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="flex items-center justify-center h-screen">{children}</div>;
};

export default Layout;
