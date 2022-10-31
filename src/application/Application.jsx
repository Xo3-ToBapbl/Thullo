import ApplicationRoutes from './ApplicationRoutes';
import { ThemeProvider } from 'styled-components'; 
import { useSelectorBy } from '../hooks/useSelector';
import { reducersNames } from '../resources/constants/reducersNames';

export default function Application() {
  const theme = useSelectorBy(reducersNames.theme).value;
  
  return (
    <ThemeProvider theme={theme}>
      <ApplicationRoutes />
    </ThemeProvider>
  );
}