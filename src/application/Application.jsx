import ApplicationRoutes from './ApplicationRoutes';
import { ThemeProvider } from 'styled-components'; 
import { useSelector } from "react-redux";

export default function Application() {
  const theme = useSelector(state => state.theme.value);
  
  return (
    <ThemeProvider theme={theme}>
      <ApplicationRoutes />
    </ThemeProvider>
  );
}