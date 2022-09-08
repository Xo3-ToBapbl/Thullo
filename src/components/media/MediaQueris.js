import { useMediaQuery } from "react-responsive";

const useDesktopQuery = () => useMediaQuery({ minWidth: 992 });
const useTabletQuery = () => useMediaQuery({ minWidth: 428, maxWidth: 991 });
const useTabletAndBelowQuery = () => useMediaQuery({ query: "(max-width: 991px)" })
const useMobileQuery = () => useMediaQuery({ maxWidth: 427 });

const Desktop = ({ children }) => {
  const isDesktop = useDesktopQuery();
  return isDesktop ? children : null
};

const Tablet = ({ children }) => {
  const isTablet = useTabletQuery();
  return isTablet ? children : null
};

const TabletAndBellow = ({ children }) => {
  const isTabletAndBelow = useTabletAndBelowQuery();
  return isTabletAndBelow ? children : null
};

const Mobile = ({ children }) => {
  const isMobile = useMobileQuery();
  return isMobile ? children : null
};

export const media = {
  Desktop: Desktop,
  Tablet: Tablet,
  TabletAndBellow: TabletAndBellow,
  Mobile: Mobile,
}