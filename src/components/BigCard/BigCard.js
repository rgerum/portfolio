import React from "react";

import { styled } from "styled-components";

function BigCard({ children, title, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      {title && <H2>{title}</H2>}
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--color-white);
  border-radius: 10px;
  padding: 2rem;
  position: relative;
  scroll-snap-align: center;
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
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  }
`;

export default BigCard;
