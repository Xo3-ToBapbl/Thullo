import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routeNames } from "../../../resources/constants/routeNames";
import FillButton from "../../shared/buttons/FillButton";

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