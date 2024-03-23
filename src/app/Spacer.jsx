import { styled } from "styled-components";

export default function Spacer({ height, ...delegated }) {
  return <Wrapper style={{ "--height": height + "px" }} {...delegated} />;
}

const Wrapper = styled.div`
  height: var(--height, 100px);
`;
