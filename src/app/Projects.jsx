import CenteredContainer from "./CenteredContainer";
import CardSlider from "./CardSlider";
import BigCard from "./BigCard";
import { styled } from "styled-components";
import Link from "next/link";

function BigCardProject({ children, ...delegated }) {
  return (
    <WrapperCard {...delegated}>
      <CardContent>{children}</CardContent>
    </WrapperCard>
  );
}

const WrapperCard = styled(Link)`
  position: relative;
  scroll-snap-align: center;
  outline-offset: 1px;
`;

const CardContent = styled.div`
  background: var(--color-white);
  border-radius: 10px;
  padding: 1rem 2rem;
  scroll-snap-align: center;
  transition: transform 0.2s ease-in-out;
  outline-offset: 1px;
  ${WrapperCard}:hover &,
  ${WrapperCard}:focus-visible & {
    transform: translate(-5px, -5px);
    filter: drop-shadow(5px 5px 10px hsl(290 100% 10% / 0.5));
  }
`;

export default function Projects() {
  return (
    <>
      <WrapperProjects>
        <TitleProjects>Projects</TitleProjects>

        <CardSlider>
          <BigCardProject href="/saenopy">
            <Title>Saenopy</Title>
            <Image
              src={
                "https://saenopy.readthedocs.io/en/latest/_images/Liver_fibroblasts.png"
              }
            />
            <p>
              Finite element solver for <em>3D cell traction</em> forces by
              computer vision and complex mathematical modeling, with user
              interface & visualization.
            </p>
            <Tags>
              <Tag>Python</Tag>
              <Tag>Qt</Tag>
              <Tag>Computer vision</Tag>
            </Tags>
            <More>read more...</More>
          </BigCardProject>
          <BigCardProject href="/duostories">
            <Title>Duostories</Title>
            <Image src={"DuostoriesMain.png"} />
            <p>
              Web platform for language learning (70+ languages), integrations
              with AWS, Azure, Google for TTS 5.3k registered users.
            </p>
            <Tags>
              <Tag>JavaScript</Tag>
              <Tag>React</Tag>
              <Tag>Nextjs</Tag>
              <Tag>PostgreSQL</Tag>
            </Tags>
            <More>read more...</More>
          </BigCardProject>
          <BigCardProject href="https://www.elifesciences.org/articles/si-78823-2022-05-19-1">
            <Title>Flow Cytometry</Title>
            <Image
              src={
                "https://iiif.elifesciences.org/lax:78823%2Felife-78823-fig1-v2.tif/full/1500,/0/default.jpg"
              }
            />
          </BigCardProject>
          <BigCardProject href={"#"}>
            <Title>Saenopy</Title>
          </BigCardProject>
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

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--color-primary);
`;

const Image = styled.img`
  width: 300px;
  display: block;
  aspect-ratio: 1;
  object-fit: cover;
`;

const More = styled.p`
  display: block;
  width: fit-content;
  color: var(--color-primary);
  margin-left: auto;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.div`
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.5rem;
  border-radius: 5px;
`;
