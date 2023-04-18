import React, { createContext, useEffect, useState } from "react";

type NavigationContextType = {
  path: string;
  navigate: (to: string) => void;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [path, setPath] = useState(window.location.pathname);

  const handlePopstate = () => {
    setPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setPath(to);
  };

  return <NavigationContext.Provider value={{ path, navigate }}>{children}</NavigationContext.Provider>;
};

export { NavigationContext, NavigationProvider };
export type { NavigationContextType };
