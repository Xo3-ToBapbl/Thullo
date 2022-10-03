import Avatar from "../../shared/avatars/Avatar";
import * as styled from "./userAvatarStyled";
import { media } from "../../shared/media/MediaQueries.jsx";

export default function UserAvatar() {
  return (
    <styled.UserAvatarContainer>
      <media.Desktop>
        <Avatar />
        <styled.UserName>Xanthe Neil</styled.UserName>
        <p className="material-icons">expand_more</p>
      </media.Desktop>

      <media.Tablet>
        <Avatar />
        <p className="material-icons">expand_more</p>
      </media.Tablet>

      <media.Mobile>
        <Avatar />
      </media.Mobile>
    </styled.UserAvatarContainer>
  );
}