import Avatar from "../../shared/avatars/Avatar";
import * as styled from "./userAvatarStyled";
import { media } from "../../shared/media/MediaQueries.jsx";

export default function UserAvatar() {
  const data = {
    img: null,
    firstName: "Peter",
    lastName: "Jackson"
  };
  return (
    <styled.UserAvatarContainer>
      <media.Desktop>
        <Avatar data={data} />
        <styled.UserName>Xanthe Neil</styled.UserName>
        <p className="material-icons">expand_more</p>
      </media.Desktop>

      <media.Tablet>
        <Avatar data={data} />
        <p className="material-icons">expand_more</p>
      </media.Tablet>

      <media.Mobile>
        <Avatar data={data} />
      </media.Mobile>
    </styled.UserAvatarContainer>
  );
}