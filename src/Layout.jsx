import { Section } from './styles/globals/components.jsx';
import Theme from './styles/themes/theme.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Technologies from './components/Technologies/Technologies.jsx';
import Projects from './components/Projects/Projects.jsx';

function Layout(){
    return (
        <Theme>
            <Header />
            <Section $view $nopadding>
                <Section $nopadding>
                    <About />
                    <Technologies />
                    <Projects />
                </Section>
            </Section>
        </Theme>
    );
}

export default Layout