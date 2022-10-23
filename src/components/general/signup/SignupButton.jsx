import FillButton from "../../shared/buttons/AccentButton";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routeNames } from "../../../resources/constants/routeNames";

export default function SignupButton(props) {
  const [ t ] = useTranslation();
  const navigate = useNavigate();
  
  function buttonClicked(externalCallback) {
    externalCallback?.call();
    navigate(routeNames.signup);
  }

  return(
    <FillButton 
      style={props.style}
      children={t("signup")} 
      onClick={buttonClicked.bind(null, props.clickCallback)} />
  );
}