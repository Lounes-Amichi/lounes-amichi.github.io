import styled from 'styled-components';

const text = props => props.theme.colors.text;
const accent = props => props.theme.colors.accent;
const static1 = props => props.theme.colors.static1;
const background = props => props.theme.colors.background;
const body = props => props.theme.fonts.body;
const h5 = props => props.theme.fontSize.h5;

export const Container = styled.div`
    display:grid;
    grid-template-rows: 1fr;
    padding: 0.5rem;
    border-bottom: 1px solid ${static1} ;
    position: sticky;
    top: 0px;
    left: 0px;
    background-color: ${accent};
`;

export const Message = styled.p`
    text-align: center;
    color: ${background};
    font-family: ${body};
    font-size: ${h5};
`;

export const Lien = styled.a`
    color: ${text};
    text-decoration: underline;
`;