import CenteredContainer from "./CenteredContainer";
import CardSlider from "./CardSlider";
import BigCard from "./BigCard";
import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <WrapperProjects>
        <TitleProjects>Projects</TitleProjects>

        <CardSlider>
          <ProjectCard
            title={"Saenopy"}
            href={"/saenopy"}
            image={
              "https://saenopy.readthedocs.io/en/latest/_images/Liver_fibroblasts.png"
            }
            tags={["Python", "Qt", "Computer vision"]}
          >
            <p>
              Finite element solver for <em>3D cell traction</em> forces by
              computer vision and complex mathematical modeling, with user
              interface & visualization.
            </p>
          </ProjectCard>
          <ProjectCard
            href="/duostories"
            title={"Duostories"}
            image={"DuostoriesMain.png"}
            tags={["JavaScript", "React", "Nextjs", "PostgreSQL"]}
          >
            <p>
              Web platform for language learning (70+ languages), integrations
              with AWS, Azure, Google for TTS 5.3k registered users.
            </p>
          </ProjectCard>
          <ProjectCard
            href="https://www.elifesciences.org/articles/si-78823-2022-05-19-1"
            title={"Flow Cytometry"}
            image={
              "https://iiif.elifesciences.org/lax:78823%2Felife-78823-fig1-v2.tif/full/1500,/0/default.jpg"
            }
          ></ProjectCard>
        </CardSlider>
      </WrapperProjects>
    </>
  );
}

const WrapperProjects = styled.div`
  background: var(--color-white);
`;

const TitleProjects = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: var(--color-primary);
  position: sticky;
  top: 80px;
  margin: 0;
  padding: 16px max(2 * 24px, (100% - 1000px) / 2 + 2 * 24px);
  z-index: 1;

  background: hsl(var(--color-white-core) / 0.75);
  backdrop-filter: blur(10px);
`;
