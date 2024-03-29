import React from "react";
import { styled } from "styled-components";

const ProjectTitle = styled.h1`
  height: 150px;
  font-size: 4rem;
  display: grid;
  place-content: center;
  font-weight: 300;
  letter-spacing: 0.2em;
  text-shadow: 0 0 40px var(--color-white);
  transition: letter-spacing 1s;

  background-image: linear-gradient(6deg, black, hsl(0deg 0% 69.44%));
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default ProjectTitle;
