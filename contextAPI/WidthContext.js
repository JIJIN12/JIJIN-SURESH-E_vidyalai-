import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const WidthContext = createContext();

// Create the provider component
export const WindowWidthProvider = ({ children }) => {
  const [isSmallerDevice, setIsSmallerDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallerDevice(width < 500);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WidthContext.Provider value={{ isSmallerDevice }}>
      {children}
    </WidthContext.Provider>
  );
};

// Custom hook to use the WidthContext
export const useWindowWidth = () => {
  return useContext(WidthContext);
};
