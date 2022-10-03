import { useMediaQuery } from "react-responsive";

export const desktopMaxWidth = 9999;
export const desktopMinWidth = 992;
export const tabletMaxWidth = 991;
export const tabletMinWidth = 451;
export const mobileMaxWidth = 450;

export const media = {
  IsDesktop: () => useMediaQuery({ minWidth: desktopMinWidth }),
  IsDesktopAndBellow: () => useMediaQuery({ maxWidth: desktopMaxWidth }),
  IsTablet: () => useMediaQuery({ minWidth: tabletMinWidth, maxWidth: tabletMaxWidth }),
  IsTabletAndBelow: () => useMediaQuery({ maxWidth: tabletMaxWidth }),
  IsMobile: () => useMediaQuery({ maxWidth: mobileMaxWidth }),

  Desktop: ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: desktopMinWidth });
    return isDesktop ? children : null;
  },

  DesktopAndBellow: ({ children }) => {
    const isDesktop = useMediaQuery({ maxWidth: desktopMaxWidth });
    return isDesktop ? children : null;
  },

  Tablet: ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: tabletMinWidth, maxWidth: tabletMaxWidth });
    return isTablet ? children : null;
  },

  TabletAndBellow: ({ children }) => {
    const isTabletAndBelow = useMediaQuery({ maxWidth: tabletMaxWidth });
    return isTabletAndBelow ? children : null;
  },

  Mobile: ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: mobileMaxWidth });
    return isMobile ? children : null;
  },
}