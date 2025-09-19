import styled from 'styled-components';

const h1 = props => props.theme.fontSize.h1;
const h2 = props => props.theme.fontSize.h2;
const h3 = props => props.theme.fontSize.h3;
const h5 = props => props.theme.fontSize.h5;
const accent = props => props.theme.colors.accent;
const text = props => props.theme.colors.text;


export const Section = styled.section`
    display: flex;
    flex-direction: ${props => props.$row ? "row" : "column"};
    max-width: ${props => props.$view ? "100vw" : "1240px"};
    align-items: ${props => props.$view ? "center" : "normal"};
    box-sizing: content-box;
    overflow: hidden;
    padding: ${(props) => props.$nopadding ? "0" : "72px 48px 0"};
    justify-content: center;
`;

export const SectionTitle = styled.h2`
    font-size: ${props => props.$main ? h1 : h2};
    line-height: ${props => props.$main ? '72px' : '48px'};
    color: ${text};
    padding-bottom: ${props => props.$nopadding ? '0px' : '16px'};
`;

export const SectionText = styled.p`
    max-width: 800px;
    line-height: 40px;
    padding-bottom: ${h3};
    font-size: ${h5};
`;

export const Span = styled.span`
    color: ${props => props.$accent ? accent : text};
`;