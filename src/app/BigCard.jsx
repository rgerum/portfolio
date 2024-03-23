import { styled } from "styled-components";

export default function BigCard({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background: var(--color-white);
  border-radius: 10px;
  padding: 2rem;
  position: relative;
  scroll-snap-align: center;
`;
