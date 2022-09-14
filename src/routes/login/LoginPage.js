import styled from 'styled-components';
import { useSelector } from "react-redux";

const Content = styled.div`
  background-color: red;
  height: 100px;
  width: 100%;
`;

export default function LoginPage() {
  const theme = useSelector(state => state.theme.value);
  const isMenuVisible = useSelector(state => state.navigationBar.isMenuVisible);
  
  return (
    <Content>

    </Content>
  );
}