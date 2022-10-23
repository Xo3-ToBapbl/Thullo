import { themeNames } from "../../resources/constants/themeNames";
import { storageKeys } from "../../resources/constants/storageKeys";

const themes = {
  light: {
    name: themeNames.light,
  
    primary: "#ffffff",
    onPrimary: "#000000",
    onPrimaryShadow: "#f0f0f0",
    
    secondary: "#F8F9FD",
    onSecondary: "#333333",
    onSecondaryShadow: "#f0f0f0",
  
    accent: "#2F80ED",
    onAccent: "#f6f6f6",
  
    neutral: "#e9e9e9",
    onNeutral: "#82848D",
    neutralAccent: "#82848D",
    divider: "#dfe1e6",

    success: "#219653",
    onSuccess: "#F8F9FD",

    invalid: "#C91A06",
    invalidBackground: "#FDE8E7",

    onColored: "#ffffff",
  },

  dark: {
    name: themeNames.dark,
  
    primary: "#1A1C20",
    onPrimary: "#D0CCC6",
    onPrimaryShadow: "#151419",
  
    secondary: "#151419",
    onSecondary: "#82848D",
    onSecondaryShadow: "#101010",
  
    accent: "#2F80ED",
    onAccent: "#f6f6f6",
  
    neutral: "#27292e",
    onNeutral: "#82848D",
    neutralAccent: "#82848D",
    divider: "#383d3f",

    success: "#187841",
    onSuccess: "#F8F9FD",

    invalid: "#C91A06",
    invalidBackground: "#efcbca",

    onColored: "#ffffff",
  }
};

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