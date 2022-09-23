import useDeviceProps, { PropsPerDevice } from "../../../../hooks/useDeviceProps";
import { sizes } from "../../../../resources/constants/sizes";
import BaseFooterContent from "./BaseFooterContent";

const propsPerDevice = new PropsPerDevice(
  sizes.desktop.homeContentMaxWidthPx,
  sizes.tablet.homeContentMaxWidthPx,
  sizes.mobile.homeContentMaxWidthPx,
);

export default function HomeFooterContent(props) {
  const maxWidthPx = useDeviceProps(propsPerDevice);
  return (
    <BaseFooterContent maxWidthPx={maxWidthPx}/>
  );
}