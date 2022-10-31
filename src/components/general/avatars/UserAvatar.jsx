import Avatar from "../../shared/avatars/Avatar";
import * as styled from "./userAvatarStyled";
import { media } from "../../shared/media/MediaQueries.jsx";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { StateToObjectFactory } from "../../../factories/stateToObjectFactory";
import { useEffect } from "react";
import { getCurrent } from "../../../slices/currentUserSlice";
import { useSelectorBy } from "../../../hooks/useSelector";
import { reducersNames } from "../../../resources/constants/reducersNames";

export default function UserAvatar() {
  const [ t ] = useTranslation();
  const dispatch = useDispatch();
  const userState = useSelectorBy(reducersNames.user);
  const titleFactory = new StateToObjectFactory({
    loading: () => t("loading"),
    success: () => `${userState.data.firstName} ${userState.data.lastName}`,
    failed: () => t("errorGenericClickToReload"),
  });

  useEffect(() => {
    dispatch(getCurrent());
    return () => { };
  }, [dispatch]);

  function userAvatarClicked() {
    if (userState.isFailed) {
      dispatch(getCurrent());
    }
  }

  return (
    <styled.UserAvatarContainer 
      title={titleFactory.getFor(userState)} 
      onClick={userAvatarClicked}>

      <media.Desktop children={<UserAvatarDesktop userState={userState} />} />
      <media.Tablet children={<UserAvatarTablet userState={userState} />} />
      <media.Mobile children={<UserAvatarMobile userState={userState} />} />
      
    </styled.UserAvatarContainer>
  );
}

function UserAvatarDesktop(props) {
  const [ t ] = useTranslation();
  const userState = props.userState;
  const componentFactory = new StateToObjectFactory({
    loading: () => 
      <>
        <Avatar isLoading={true} />
        <styled.UserName>{t("loading")}</styled.UserName>
      </>,

    success: () => 
      <>
        <Avatar data={userState.data} />
        <styled.UserName>{userState.data.firstName} {userState.data.lastName}</styled.UserName>
        <p className="material-icons">expand_more</p>
      </>,
      
    failed: () => 
      <>
        <Avatar isError={true} />
        <styled.UserName>{t("error")}</styled.UserName>
      </>,
  });
  return componentFactory.getFor(userState);
}

function UserAvatarTablet(props) {
  const userState = props.userState;
  const componentFactory = new StateToObjectFactory({
    loading: () => <Avatar isLoading={true} />,
    failed: () => <Avatar isError={true} />,
    success: () => 
    <>
      <Avatar data={userState.data} />
      <p className="material-icons">expand_more</p>
    </>,
  });

  return componentFactory.getFor(userState);
}

function UserAvatarMobile(props) {
  const userState = props.userState;
  const componentFactory = new StateToObjectFactory({
    loading: () => <Avatar isLoading={true} />,
    failed: () => <Avatar isError={true} />,
    success: () => <Avatar data={userState.data} />,
  });

  return componentFactory.getFor(userState);
}