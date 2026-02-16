'use client';

import { createContext, useContext, useState } from 'react';

const ModuleContext = createContext();

export function ModuleProvider({ children }) {
  const [activeModuleTitle, setActiveModuleTitle] = useState(null);
  const [activeOverlay, setActiveOverlay] = useState(null);

  return (
    <ModuleContext.Provider value={{ activeModuleTitle, setActiveModuleTitle, activeOverlay, setActiveOverlay }}>
      {children}
    </ModuleContext.Provider>
  );
}

export function useModule() {
  return useContext(ModuleContext);
}
