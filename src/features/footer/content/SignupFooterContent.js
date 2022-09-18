import { mobileMaxWidth } from "../../../components/media/MediaQueries";
import BaseFooterContent from "./BaseFooterContent";

export default function SignupFooterContent(props) {
  return (
    <BaseFooterContent maxWidthPx={mobileMaxWidth}/>
  );
}