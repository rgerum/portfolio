import { styled } from "@linaria/react";
import BigCard from "../BigCard";
import CenteredContainer from "../CenteredContainer";

export default function Page() {
    return (
        <>
            <CenteredContainer>
                <Wrapper>
                    <Title>Duostories</Title>
                    <Group>
                        <Image src={"https://duostories.org/Duostories.svg"} />
                        <BigCard>
                            <H2>Goal</H2>
                            <p><Em>Duolingo</Em> offers format of short stories in some of their courses, but not all.
                            I wanted to change that.</p>
                            <p>Duostories is a <Em>community effort</Em> to translate these stories to more languages.</p>
                            <p>We have currently translated over <Em>2000</Em> stories in over <Em>70</Em> for our
                            <Em>5k</Em> registered users.</p>
                        </BigCard>
                    </Group>

                    <Group>
                        <BigCard>
                            <H2>Duolingo Approved</H2>
                            <p>I negotiated with Duolingo a special <Em>license</Em> to cover our project and allow use to use
                            their material.</p>
                            <p>Duolingo Founder and CEO <Em>Luis von Ahn</Em> himself signed this license on which this
                            project is based.</p>
                        </BigCard>
                    </Group>

                    <Group>
                        <BigCard>
                            <H2>AI driven speech</H2>
                            <p>To provide the <Em>best learning experience</Em> Duostories provides audio for the stories.</p>
                            <p>For a consistent and reliable audio experience Duostories integrates <Em>text-to-speech</Em> (TTS)
                            services from various providers.</p>
                            <p>Why various and not just a single one? As Duostories is aimed to cover as many languages
                            as possible we need to take advantage of multiple providers.</p>
                            <p>Currently we use <Em>Google</Em>, <Em>Amazon</Em>, <Em>Microsoft</Em> and <Em>Eleven Labs</Em></p>
                        </BigCard>
                    </Group>

                    <Group>
                        <BigCard>
                            <H2>Easy Editing</H2>
                            <p>Stories are not just simple texts as they include <Em>interactive exercises</Em>, <Em>translation tooltips</Em> and
                            <Em>audio</Em>.</p>
                            <p>To keep the editing experience as smooth as possible I developed a specially tailored
                            markup language to represent the stories.</p>
                            <p>A <Em>codemirror</Em> based editor with a synchronized live preview makes editing a breeze.</p>
                        </BigCard>
                    </Group>

                    <Group>
                        <BigCard>
                            <H2>Welcoming Community</H2>
                            <p>To ensure good quality of translations into as many languages as possible. Duostories
                                relies on a big group of contributors managed in our <Em>Discord Community</Em>.</p>
                            <p>Our automatic Discord bot helps with the onboarding of new members and gives them access
                            to the editor once they are approved.</p>
                            <p>Our quality control system ensures that only stories approved my the community are published.</p>
                        </BigCard>
                    </Group>


                    <Group style={{"justify-content": "center"}}>
                        <BigCard2 href={"https://github.com/rgerum/unofficial-duolingo-stories"}>
                            <H3>Github</H3>
                        </BigCard2>
                        <BigCard2 href={"https://duostories.org/"}>
                            <H3>Live Website</H3></BigCard2>
                    </Group>
                </Wrapper>
            </CenteredContainer>
        </>
    );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 400px;
`;

const Em = styled.em`
  font-style: normal;
  font-weight: bold;
  color: var(--color-primary);
`;

const Title = styled.h1`
  height: 150px;
  font-size: 4rem;
  display: grid;
  place-content: center;
  font-weight: 300;
  letter-spacing: 0.2em;
`;

const Group = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
  animation: fadeing 0.5s both;
  
  &:nth-child(1) {
    animation-delay: 250ms;
  }

  &:nth-child(2) {
    animation-delay: 500ms;
  }

  &:nth-child(3) {
    animation-delay: 750ms;
  }

  &:nth-child(4) {
    animation-delay: 1000ms;
  }
  @keyframes fadeing {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  flex-basis: 50%;
`;

const H2 = styled.h2`
  margin: 0;
  margin-top: -16px;
  margin-bottom: 16px;
  background: var(--color-gray-400);
  width: fit-content;
  padding: 16px;
  position: relative;
  padding-left: 40px;
  padding-right: 32px;
  left: -40px;
  border-radius: 10px 100vw 100vw 10px;
  box-shadow: 1px 1px 1px hsl(0 0 0 / 0.9);
  letter-spacing: 0.05em;
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 8px;
    height: 5px;
    transform: translateY(100%);
    transform-origin: left bottom;
    background: black;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 100%
    );
  }
`;

const H3 = styled.h3`
`

const BigCard2 = styled.a`
  background: var(--color-white);
  border-radius: 10px;
  padding: 2rem;
  position: relative;
  scroll-snap-align: center;
`;