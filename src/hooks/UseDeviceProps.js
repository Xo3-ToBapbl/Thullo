import { media } from "../components/media/MediaQueries";

export const desktop = "desktop";
export const tablet = "tablet";
export const mobile = "mobile";
export const defaultDevice = "defaultDevice";

export function PropsPerDevice(desktop, tablet, mobile, defaultDevice) {
  this.desktop = desktop;
  this.tablet = tablet;
  this.mobile = mobile;
  this.defaultDevice = defaultDevice ?? desktop;
}

let previousDevice = defaultDevice;

export default function useDeviceProps(propsPerDevice) {
  let device = useDeviceName();

  device = device === defaultDevice ? previousDevice : device;
  previousDevice = device;

  return propsPerDevice[device]; 
}

function useDeviceName() {
  const isDesktop = media.IsDesktop();
  const isTablet = media.IsTablet();
  const isMobile = media.IsMobile();

  if (isDesktop) return desktop;
  if (isTablet) return tablet;
  if (isMobile) return mobile;

  return defaultDevice;
}