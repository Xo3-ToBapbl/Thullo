import { media } from "../../../../components/shared/media/MediaQueries";
import AppLogoNavigationBar from "./AppLogoNavigationBar";

export default function LoginNavigationBar(props) {
  const isMobile = media.IsMobile();
  return isMobile ? null : <AppLogoNavigationBar/>;
}