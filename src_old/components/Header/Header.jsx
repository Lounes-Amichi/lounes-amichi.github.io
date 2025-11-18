import { Container, LogoContainer, NavContainer, NavLink, SocialsCont, SocialIcon } from './HeaderStyles.jsx';
import { DiCssdeck } from "react-icons/di";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Header(){

    return (
        <Container>
            <LogoContainer href="#">
                    <DiCssdeck size='2.369rem'/>
                    <span>Portfolio</span>
            </LogoContainer>
            <NavContainer>
                <NavLink href="#About">About</NavLink>
                <NavLink href="#Techs">Technologies</NavLink>
                <NavLink href="#Projects">Projects</NavLink>
                {/* 
                <NavLink href="#CCs">Certifications</NavLink>
                <NavLink href="#Contact">Contact</NavLink>
                */}
            </NavContainer>
            <SocialsCont>
                <SocialIcon href="https://www.github.com/Lounes-Amichi">
                    <AiFillGithub size="1.777rem"/>
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/lounès-amichi/">
                    <AiFillLinkedin size="1.777rem" />
                </SocialIcon>
            </SocialsCont>
        </Container>
    );
}

export default Header