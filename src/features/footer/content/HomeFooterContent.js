import useDeviceProps, { PropsPerDevice } from "../../../hooks/UseDeviceProps";
import { sizes } from "../../../resources/constants/Sizes";
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