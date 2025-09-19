import styled from 'styled-components';

const accent = props => props.theme.colors.accent;
const secondary = props => props.theme.colors.secondary;
const text = props => props.theme.colors.text;
const h5 = props => props.theme.fontSize.h5;

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding: 3.158rem;
    place-items: center;
    column-gap: 2.369rem;
    row-gap: 3.158rem;
`;

export const ProjectCard = styled.div`
    border-radius: 10px;
    box-shadow: 3px 3px 20px ${accent};
    text-align: center;
    width: 400px;
    overflow: hidden;
    background-color: ${secondary};
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`;

export const TitleContent = styled.div`
    width: 100%;
    text-align: center;
    color: ${text};
`;

export const Hr = styled.hr`
    width: 50px;
    height: 2px;
    margin: 24px auto;
    border: none;
    background-color: ${accent};
`;

export const CardInfo = styled.p`
    width: 100%;
    padding: 0px 50px;
    text-align: justify;
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
    padding: 1.777rem;
`;

export const Tag = styled.li`
    font-size: ${h5}; 
`