import projectImage from "../../../resources/images/project.jpg";
import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import Avatar from "../../shared/avatars/Avatar";
import { isEmpty } from "../../../utils/generalUtils";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${sizes.contentOffsetRem}rem;
  width: 100%;
  padding: ${sizes.halfOffsetRem}rem;
  border-radius: ${2 * sizes.cornerRadiusRem}rem;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 3px 4px ${props => props.theme.onPrimaryShadow};
`;

export const Image = styled.img`
  height: 60%;
  width: 100%;
  aspect-ratio: auto 219 / 130;
  border-radius: ${sizes.cornerRadiusRem}rem;
  object-fit: cover;
`;

const Title = styled.h1`
  font-family: "notosans";
  font-size: 1.6rem;
  white-space: nowrap;
  color: ${(props) => props.theme.onPrimary};
`;

export default function ProjectCard(props) {
  const data = props.data;
  return (
    <Card>
      <Image src={projectImage} />
      <Title>{data.title}</Title>
      <UsersList data={data.users}/>
    </Card>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${sizes.halfOffsetRem}rem;
  height: 3rem;
`;

const OthersLabel = styled.p`
  font-family: "notosans";
  color: ${(props) => props.theme.onSecondary};
  cursor: pointer;
`;

function UsersList(props) {
  const users = props.data ?? [];
  const userAvatars = users.slice(0, 3).map((user) => <Avatar data={user}/>);
  const remainingUsersCount = users.length - 3;
  return(
    <Container>
      {userAvatars}
      { 
        isEmpty(users) ? <OthersLabel>Add related users</OthersLabel> :
        remainingUsersCount > 0 ? <OthersLabel>+ {remainingUsersCount} others</OthersLabel> : null 
      }
    </Container>
  );
}