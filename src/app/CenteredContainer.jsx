import { styled } from "styled-components";

export default function CenteredContainer({ children, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <WrapperInner>{children}</WrapperInner>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /*background: var(--color-white);*/
  width: 100%;
`;

const WrapperInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`;
