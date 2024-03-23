"use client";
import { styled } from "styled-components";
import LinkBar from "../../components/LinkBar";
import LinkBarCard from "../../components/LinkBarCard";
import ProjectTitle from "../../components/ProjectTitle";
import BigCardWrapper from "../../components/BigCardWrapper";
import BigCard from "../../components/BigCard";
import ProjectPageWrapper from "../../components/ProjectPageWrapper";

export default function Page() {
  return (
    <ProjectPageWrapper>
      <LinkBar style={{ "justify-content": "center" }}>
        <LinkBarCard
          href={"https://github.com/rgerum/unofficial-duolingo-stories"}
        >
          <>Github</>
        </LinkBarCard>
        <LinkBarCard href={"https://duostories.org/"}>
          <>Live Website</>
        </LinkBarCard>
      </LinkBar>
      <ProjectTitle>Duostories</ProjectTitle>
      <BigCardWrapper>
        <Image src={"https://duostories.org/Duostories.svg"} />
        <BigCard title={"Goal"}>
          <p>
            <Em>Duolingo</Em> offers format of short stories in some of their
            courses, but not all. I wanted to change that.
          </p>
          <p>
            Duostories is a <Em>community effort</Em> to translate these stories
            to more languages.
          </p>
          <p>
            We have currently translated over <Em>2000</Em> stories in over{" "}
            <Em>70</Em> for our
            <Em>5k</Em> registered users.
          </p>
        </BigCard>
      </BigCardWrapper>

      <BigCardWrapper>
        <BigCard title={"Duolingo Approved"}>
          <p>
            I negotiated with Duolingo a special <Em>license</Em> to cover our
            project and allow use to use their material.
          </p>
          <p>
            Duolingo Founder and CEO <Em>Luis von Ahn</Em> himself signed this
            license on which this project is based.
          </p>
        </BigCard>
      </BigCardWrapper>

      <BigCardWrapper>
        <BigCard title={"AI driven speech"}>
          <p>
            To provide the <Em>best learning experience</Em> Duostories provides
            audio for the stories.
          </p>
          <p>
            For a consistent and reliable audio experience Duostories integrates{" "}
            <Em>text-to-speech</Em> (TTS) services from various providers.
          </p>
          <p>
            Why various and not just a single one? As Duostories is aimed to
            cover as many languages as possible we need to take advantage of
            multiple providers.
          </p>
          <p>
            Currently we use <Em>Google</Em>, <Em>Amazon</Em>,{" "}
            <Em>Microsoft</Em> and <Em>Eleven Labs</Em>
          </p>
        </BigCard>
      </BigCardWrapper>

      <BigCardWrapper>
        <BigCard title={"Easy Editing"}>
          <p>
            Stories are not just simple texts as they include{" "}
            <Em>interactive exercises</Em>, <Em>translation tooltips</Em> and
            <Em>audio</Em>.
          </p>
          <p>
            To keep the editing experience as smooth as possible I developed a
            specially tailored markup language to represent the stories.
          </p>
          <p>
            A <Em>codemirror</Em> based editor with a synchronized live preview
            makes editing a breeze.
          </p>
        </BigCard>
      </BigCardWrapper>

      <BigCardWrapper>
        <BigCard title={"Welcoming Community"}>
          <p>
            To ensure good quality of translations into as many languages as
            possible. Duostories relies on a big group of contributors managed
            in our <Em>Discord Community</Em>.
          </p>
          <p>
            Our automatic Discord bot helps with the onboarding of new members
            and gives them access to the editor once they are approved.
          </p>
          <p>
            Our quality control system ensures that only stories approved my the
            community are published.
          </p>
        </BigCard>
      </BigCardWrapper>
    </ProjectPageWrapper>
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

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  flex-basis: 50%;
`;
