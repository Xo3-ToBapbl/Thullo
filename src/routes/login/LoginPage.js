import styled from 'styled-components';
import { useSelector } from "react-redux";
import { sizes } from '../../resources/constants/Sizes';

const Content = styled.div`
  height: 300px;
  width: 100%;
  padding-top: ${sizes.navBarLargeHeight}rem;
`;

export default function LoginPage() {
  const theme = useSelector(state => state.theme.value);
  const isMenuVisible = useSelector(state => state.menu.isMenuVisible);
  
  return (
    <Content>
      Content
    </Content>
  );
}