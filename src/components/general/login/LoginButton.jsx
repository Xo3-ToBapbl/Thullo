import OutlineButton from "../../shared/buttons/OutlineButton";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routeNames } from "../../../resources/constants/routeNames";


export default function LoginButton(props) {
  const [ t ] = useTranslation();
  const navigate = useNavigate();

  return(
    <OutlineButton 
      style={props.style}
      children={t("logIn")} 
      onClick={buttonClicked.bind(null, props.clickCallback)} />
  );

  function buttonClicked(externalCallback) {
    externalCallback?.call();
    navigate(routeNames.login);
  }
}