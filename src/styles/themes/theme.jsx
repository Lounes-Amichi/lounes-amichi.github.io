import { ThemeProvider } from 'styled-components';
import dark from './dark.jsx';
import light from './light.jsx'
import GlobalStyles from '../globals/globals.jsx';

function Theme({children}) {
    let theme = localStorage.getItem('theme');
    if (theme == null) {
        localStorage.setItem('theme', 'dark');
        theme = 'dark';
    }

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}

export default Theme;