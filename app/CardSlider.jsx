import { styled } from "@linaria/react";

export default function CardSlider({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  gap: 1rem;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  padding: 64px 50vw;
  background: var(--color-gray-200);
`;
