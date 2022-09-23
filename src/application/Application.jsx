import ApplicationRoutes from './ApplicationRoutes';
import { ThemeProvider } from 'styled-components'; 
import { useSelector } from "react-redux";
import { requestExecutorEventTarget } from '../services/api/requestExecutor';
import { refreshCurrentUser } from '../slices/authSlice';
import { eventNames } from '../resources/constants/eventNames';

requestExecutorEventTarget.addEventListener(eventNames.userRefreshed, (e) => refreshCurrentUser(e.detail));

export default function Application() {
  const theme = useSelector(state => state.theme.value);
  
  return (
    <ThemeProvider theme={theme}>
      <ApplicationRoutes />
    </ThemeProvider>
  );
}