import React from "react";

export const ColorModeContext = React.createContext();

const ColorModeProvider = ({ children, initialMode }) => {
  const [mode, setMode] = React.useState(initialMode);
  const toggleMode = () => {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  };

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
