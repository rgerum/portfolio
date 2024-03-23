import React from "react";
import { styled } from "styled-components";

function BigCardWrapper({ children, ...delegated }) {
  return <Group {...delegated}>{children}</Group>;
}

const Group = styled.div`
  display: flex;
  gap: 1rem;
  width: auto;
  align-items: center;
  animation: fadeing 0.5s both;

  &[data-overhang="left"] {
    --overhang: clamp(-64px, -100vw + 1000px, 0px);
    margin-left: var(--overhang);
  }
  &[data-overhang="right"] {
    --overhang: clamp(-64px, -100vw + 1000px, 0px);
    margin-right: var(--overhang);
  }

  &:nth-of-type(2n + 1) {
    flex-direction: row-reverse;
  }

  &:nth-of-type(1) {
    animation-delay: 250ms;
  }

  &:nth-of-type(2) {
    animation-delay: 500ms;
  }

  &:nth-of-type(3) {
    animation-delay: 750ms;
  }

  &:nth-of-type(4) {
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

  @media (max-width: 500px) {
    flex-direction: column;

    &:nth-of-type(2n + 1) {
      flex-direction: column;
    }
  }
`;
export default BigCardWrapper;
