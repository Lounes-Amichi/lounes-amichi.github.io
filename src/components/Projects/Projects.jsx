import { Section, SectionTitle, SectionText } from '../../styles/globals/components';
import { GridContainer, ProjectCard, Img, TitleContent, Hr, CardInfo, TagList, Tag } from './ProjectsStyles';
import { projects } from '../../constants';

function Projects() {

    return (
        <Section id="Projects">
            <SectionTitle>Projects</SectionTitle>
            <SectionText>Links to repositories and projects will be available soon.</SectionText>
            <GridContainer>
                {projects.map((p, i) => {
                    return (
                        <ProjectCard key={i}>
                            <Img src={p.image} />
                            <TitleContent>
                                <h2>{p.title}</h2>
                                <Hr />
                            </TitleContent>
                            <CardInfo>{p.description}</CardInfo>
                            <div>
                                <Hr />
                                <TitleContent>Techs used:</TitleContent>
                                <TagList>
                                    {p.tags.map((t, i) => {
                                        return <Tag key={i}>{t}</Tag>;
                                    })}
                                </TagList>
                            </div>
                        </ProjectCard>
                    );
                })}
            </GridContainer>
        </Section>
    );
}

export default Projects