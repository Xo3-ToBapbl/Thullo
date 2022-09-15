import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routeNames } from "../../resources/constants/RouteNames";
import FillButton from "../../components/buttons/FillButton";


export default function SignupButton(props) {
  const [ t ] = useTranslation();
  const navigate = useNavigate();

  return(
    <FillButton 
      style={props.style}
      children={t("signup")} 
      onClick={buttonClicked.bind(null, props.clickCallback)} />
  );

  function buttonClicked(externalCallback) {
    externalCallback?.call();
    navigate(routeNames.signup);
  }
}