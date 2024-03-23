import { styled } from "styled-components";

export default function Hero() {
  return (
    <Wrapper>
      <Inner></Inner>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-column: 1 / -1 !important;
  height: 100px;
`;
const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  xposition: fixed;
  xz-index: -1;
  background-imagex: radial-gradient(
      circle at 30% 80%,
      hsl(var(--color-primary-hue) 54% 56% / 0.7),
      transparent
    ),
    radial-gradient(
      circle at 80% 20%,
      hsl(var(--color-primary-hue) 54% 56% / 0.2),
      transparent
    );
`;
