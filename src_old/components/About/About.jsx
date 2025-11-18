import { Section, SectionTitle, SectionText, Span } from "../../../src/styles/globals/components.jsx";

function About() {

    return (
        <Section id="About">
            <SectionTitle $main>
                <Span $accent>Hey! </Span> <br />
                I'm Lounès Amichi.
            </SectionTitle>
            <SectionText>I am a computer science student specializing in web and software development.</SectionText>
        </Section>
    );
}

export default About