import { themeNames } from "../../resources/constants/ThemeNames";

export const themeService = (() => {
  const lightTheme = {
    name: themeNames.light,
    primary: "#ffffff",
  };

  const darkTheme = {
    name: themeNames.dark,
    primary: "#1A1C20",
  };

  return {
    theme: lightTheme,

    setCurrent(theme) {
      switch(theme) {
        case themeNames.light:
          this.theme = lightTheme; 
          break;
        
        case themeNames.dark:
          this.theme = darkTheme;
          break;

        default: 
          this.theme = lightTheme;
      }
    }
  };

})();