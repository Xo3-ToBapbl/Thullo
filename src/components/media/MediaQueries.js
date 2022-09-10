import { useMediaQuery } from "react-responsive";

export const media = {
  Desktop: ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  },

  Tablet: ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 451, maxWidth: 991 });
    return isTablet ? children : null
  },

  TabletAndBellow: ({ children }) => {
    const isTabletAndBelow = useMediaQuery({ maxWidth: 991 })
    return isTabletAndBelow ? children : null
  },

  Mobile: ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 450 });
    return isMobile ? children : null
  },
}