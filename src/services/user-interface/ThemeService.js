import { themeNames } from "../../resources/constants/ThemeNames";
import { storageKeys } from "../../resources/constants/StorageKeys";

const themes = {
  light: {
    name: themeNames.light,
  
    primary: "#ffffff",
    onPrimary: "#000000",
    onPrimaryShadow: "#f0f0f0",
    
    secondary: "#F8F9FD",
    onSecondary: "#333333",
  
    accent: "#2F80ED",
    onAccent: "#f6f6f6",
  
    neutral: "#82848D",
    divider: "#dfe1e6",
  },

  dark: {
    name: themeNames.dark,
  
    primary: "#1A1C20",
    onPrimary: "#D0CCC6",
    onPrimaryShadow: "#151419",
  
    secondary: "#151419",
    onSecondary: "#82848D",
  
    accent: "#2F80ED",
    onAccent: "#f6f6f6",
  
    neutral: "#82848D",
    divider: "#383d3f",
  }
}

export const themeService = (() => {
  const initialThemeName = localStorage.getItem(storageKeys.themeName) ?? themeNames.light;
  const initialTheme = themes[initialThemeName];

  return {
    theme: initialTheme,

    setCurrent(themeName) {
      if (this.theme.name === themeName) {
        return;
      }

      this.theme = themes[themeName] ?? this.theme;
      localStorage.setItem(storageKeys.themeName, this.theme.name);
    }
  };

})();