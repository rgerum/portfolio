import React from "react";
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

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--color-primary);
`;

const ProjectImage = styled.img`
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

function ProjectCard({ href, title, image, children, tags }) {
  return (
    <BigCardProject href={href}>
      <Title>{title}</Title>
      <ProjectImage width={300} src={image} />
      {children}
      {tags && (
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      )}
      <More>read more...</More>
    </BigCardProject>
  );
}

export default ProjectCard;
