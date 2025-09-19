import styled from 'styled-components';

const primary = props => props.theme.colors.primary;
const secondary = props => props.theme.colors.secondary;


export const TechList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
    margin: 1.777rem 0px;
`;

export const Tech = styled.li`
    max-width: 324px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${secondary};
    padding: 12px;
    border-radius: 10px;
    margin-top: 8px;
`

export const TechTitle = styled.h4`
    color: ${primary};
    line-height: 32px;
    margin-bottom: 8px;
`;

export const TechParagraph = styled.p`
    text-align: justify;
`