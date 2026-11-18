import {Container, Message, Lien} from './BannerStyles.jsx';


function Header(){

    return (
        <Container>
            <Message>This website isn't up to date anymore. To see recent news, check <Lien href="https://linkedin.com/in/lounes-amichi">my LinkedIn profile</Lien>.</Message>
        </Container>
    );
}

export default Header