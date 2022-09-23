import { mobileMaxWidth } from "../../../shared/media/MediaQueries";
import BaseFooterContent from "./BaseFooterContent";

export default function LoginFooterContent(props) {
  return (
    <BaseFooterContent maxWidthPx={mobileMaxWidth}/>
  );
}