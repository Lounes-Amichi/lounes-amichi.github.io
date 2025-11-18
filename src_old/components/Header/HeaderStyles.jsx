import styled from 'styled-components';

const text = props => props.theme.colors.text;
const accent = props => props.theme.colors.accent;
const static1 = props => props.theme.colors.static1;
const background = props => props.theme.colors.background;
const title = props => props.theme.fonts.title;
const h4 = props => props.theme.fontSize.h4;

export const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 1rem;
    padding-top: 2rem;
    border-bottom: 1px solid ${static1} ;
    position: sticky;
    top: 0px;
    left: 0px;
    background-color: ${background};
`;

export const LogoContainer = styled.a`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    color: ${text};
    font-family: ${title};
    font-size: ${h4};
`;

export const NavContainer = styled.div`
    grid-area: 1 / 2 / 2 / 5;
    display: flex;
    justify-content: space-around;
`;

export const NavLink = styled.a`
    display: flex;
    font-family: ${title};
    align-items: center;
    transition: 0.4s ease;
    &:hover {
        color: ${accent};
    };
`

export const SocialsCont = styled.div`
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const SocialIcon = styled.a`
    border-radius: 50px;

    transition: 0.4s ease;
    &:hover {
        color: ${accent};
        transform: scale(1.2);
    };
`