import './App.css';
import {Routes} from './state/Routes';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme/theme';
import {themeSelector} from './state/theme/theme.selectors';
import {useSelector} from 'react-redux';

function App() {
  const localTheme = useSelector(themeSelector);
  return (
    <ThemeProvider theme={theme[localTheme]}>
      <div className="container-fluid" style={{background: 'rgb(20, 23, 26)'}}>
        <div className="row">
          <Routes />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
