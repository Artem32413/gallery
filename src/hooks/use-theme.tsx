import { useLayoutEffect, useState } from "react";

interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useTheme = (): ThemeState => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("app-theme") || "light",
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
