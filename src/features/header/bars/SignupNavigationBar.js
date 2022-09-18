import { media } from "../../../components/media/MediaQueries";
import AppLogoNavigationBar from "./AppLogoNavigationBar";

export default function SignupNavigationBar(props) {
  const isMobile = media.IsMobile();
  return isMobile ? null : <AppLogoNavigationBar/>;
}