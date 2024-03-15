import { styled } from "@linaria/react";

export default function ProfilePic({ ...delegated }) {
  return (
    <>
      <Wrapper2 {...delegated}>
        <Me2 src={"Richard.jpg"} />
      </Wrapper2>
      <Wrapper {...delegated}>
        <Me src={"Richard.jpg"} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  --size: 150px;
  width: var(--size);
  height: var(--size);
  border-radius: 100vw;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(25%, -50%);
  filter: drop-shadow(0 0 2px hsl(0deg 0% 0% / 0.5));
`;

const Wrapper2 = styled(Wrapper)`
  filter: blur(50px);
`;

const Me = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const Me2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  filter: blur(20px);
`;
