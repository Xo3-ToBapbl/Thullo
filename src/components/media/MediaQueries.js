import { useMediaQuery } from "react-responsive";

const desktopMaxWidth = 992;
const tabletMaxWidth = 991;
const tabletMinWidth = 451;
const mobileMaxWidth = 450;

export const media = {
  IsDesktop: () => useMediaQuery({ minWidth: desktopMaxWidth }),
  IsTablet: () => useMediaQuery({ minWidth: tabletMinWidth, maxWidth: tabletMaxWidth }),
  IsTabletAndBelow: () => useMediaQuery({ maxWidth: tabletMaxWidth }),
  IsMobile: () => useMediaQuery({ maxWidth: mobileMaxWidth }),

  Desktop: ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: desktopMaxWidth })
    return isDesktop ? children : null
  },

  Tablet: ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: tabletMinWidth, maxWidth: tabletMaxWidth });
    return isTablet ? children : null
  },

  TabletAndBellow: ({ children }) => {
    const isTabletAndBelow = useMediaQuery({ maxWidth: tabletMaxWidth })
    return isTabletAndBelow ? children : null
  },

  Mobile: ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: mobileMaxWidth });
    return isMobile ? children : null
  },
}