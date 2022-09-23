import { media } from "../../../../components/shared/media/MediaQueries";
import AppLogoNavigationBar from "./AppLogoNavigationBar";

export default function SignupNavigationBar(props) {
  const isMobile = media.IsMobile();
  return isMobile ? null : <AppLogoNavigationBar/>;
}