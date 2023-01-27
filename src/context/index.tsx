import React from "react";
import { ContextSearchProvider } from "./contextsearch";

interface GlobalContextType {
  children: any;
}

const GlobalContext: React.FC<GlobalContextType> = ({ children }) => {
  return <ContextSearchProvider>{children}</ContextSearchProvider>;
};

export default GlobalContext;
