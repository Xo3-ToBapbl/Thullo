import { themeNames } from "../../resources/constants/ThemeNames";

const themes = {
  light: {
    name: themeNames.light,
  
    primary: "#ffffff",
    onPrimaryShadow: "#f0f0f0",
    
    secondary: "#F8F9FD",
    onSecondary: "#333333",
  
    accent: "#2F80ED",
    onAccent: "#f6f6f6",
  
    neutral: "#82848D",
  },

  dark: {
    name: themeNames.dark,
  
    primary: "#1A1C20",
    onPrimaryShadow: "#151419",
  
    secondary: "#151419",
    onSecondary: "#82848D",
  
    accent: "#2F80ED",
    onAccent: "#f6f6f6",
  
    neutral: "#82848D",
  }
}

export const themeService = (() => {
  const initialThemeName = localStorage.getItem("themeName") ?? themeNames.light;
  const initialTheme = themes[initialThemeName];

  return {
    theme: initialTheme,

    setCurrent(themeName) {
      if (this.theme.name === themeName) {
        return;
      }

      this.theme = themes[themeName] ?? this.theme;
      localStorage.setItem("themeName", this.theme.name);
    }
  };

})();