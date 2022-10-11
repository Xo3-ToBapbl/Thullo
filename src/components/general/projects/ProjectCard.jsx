import projectImage from "../../../resources/images/project.jpg";
import Avatar from "../../shared/avatars/Avatar";
import * as styled from "./projectCardStyled";
import { isEmpty } from "../../../utils/generalUtils";
import { Trans, useTranslation } from "react-i18next";

export default function ProjectCard(props) {
  const data = props.data;
  return (
    <styled.Card>
      <styled.Image src={projectImage} />
      <styled.Title>{data.title}</styled.Title>
      <UsersList data={data.users}/>
    </styled.Card>
  );
}

function UsersList(props) {
  const users = props.data ?? [];
  const userAvatars = users.slice(0, 3).map((user) => <Avatar key={user.id} data={user}/>);
  const remainingUsersCount = users.length - 3;
  const [ t ] = useTranslation();

  return(
    <styled.Container>
      {userAvatars}
      { 
        isEmpty(users) ? <styled.OthersLabel>{t("noOtherUsers")}</styled.OthersLabel> :
        remainingUsersCount > 0 ? 
          <styled.OthersLabel>
            <Trans i18nKey="plusOthers" count={remainingUsersCount}/>
          </styled.OthersLabel> : null 
      }
    </styled.Container>
  );
}