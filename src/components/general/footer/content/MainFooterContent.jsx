import useDeviceProps, { PropsPerDevice } from "../../../../hooks/useDeviceProps";
import BaseFooterContent from "./BaseFooterContent";
import { sizes } from "../../../../resources/constants/sizes";

const propsPerDevice = new PropsPerDevice(
  sizes.desktop.mainContentMaxWidthPx,
  sizes.tablet.mainContentMaxWidthPx,
  sizes.mobile.mainContentMaxWidthPx,
);

export default function MainFooterContent(props) {
  const maxWidthPx = useDeviceProps(propsPerDevice);
  return (
    <BaseFooterContent maxWidthPx={maxWidthPx}/>
  );
}