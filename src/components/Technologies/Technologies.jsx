import { Section, SectionTitle, SectionText } from '../../styles/globals/components';
import { TechList, Tech, TechContainer, TechTitle, TechParagraph } from './TechnologyStyles';
import { DiReact, DiPython } from 'react-icons/di';
import { SiArduino } from 'react-icons/si';

function Technologies() {

    return (
        <Section id='Techs'>
            <SectionTitle>Technologies</SectionTitle>
            <SectionText>
                I've worked with a wide set of technologies in multiple domains, ranging from web design to software and hardware development.
            </SectionText>
            <TechList>
                <Tech>
                    <DiReact size="3.158rem"/>
                    <TechContainer>
                        <TechTitle>Web design</TechTitle>
                        <TechParagraph>I have a lot of experience with the classic web design tools like HTML, JavaScript and CSS.
                            On the backend, I've worked with languages such as PHP and Node.JS.<br />
                            I have also started working with ReactJS to improve my design workflow.
                        </TechParagraph>
                    </TechContainer>
                </Tech>
                <Tech>
                    <DiPython size="3.158rem" />
                    <TechContainer>
                        <TechTitle>Software</TechTitle>
                        <TechParagraph>Most of my experience with software development comes from Python. It's the first programming language I learned. <br />
                            I also have some experience in this context with C++ thanks to Unreal Engine.
                        </TechParagraph>
                    </TechContainer>
                </Tech>
                <Tech>
                    <SiArduino size="3.158rem" />
                    <TechContainer>
                        <TechTitle>Hardware</TechTitle>
                        <TechParagraph>I often work with Raspberry Pi and Arduino. I have designed some simple systems with the latter. <br />
                            I also have some experience with the design and assembly of more complex boards with KiCAD.
                        </TechParagraph>
                    </TechContainer>
                </Tech>
            </TechList>
        </Section>
    );
}

export default Technologies