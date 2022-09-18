import { mobileMaxWidth } from "../../../components/media/MediaQueries";
import BaseFooterContent from "./BaseFooterContent";

export default function LoginFooterContent(props) {
  return (
    <BaseFooterContent maxWidthPx={mobileMaxWidth}/>
  );
}