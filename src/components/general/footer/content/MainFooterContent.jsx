import BaseFooterContent from "./BaseFooterContent";
import useDeviceProps, { PropsPerDevice } from "../../../../hooks/useDeviceProps";
import { sizes } from "../../../../resources/constants/sizes";

const propsPerDevice = new PropsPerDevice({
  desktop: sizes.desktop.mainContentMaxWidthPx,
  tablet: sizes.tablet.mainContentMaxWidthPx,
  mobile: sizes.mobile.mainContentMaxWidthPx
});

export default function MainFooterContent() {
  const [ maxWidthPx ] = useDeviceProps(propsPerDevice);
  return (
    <BaseFooterContent maxWidthPx={maxWidthPx}/>
  );
}