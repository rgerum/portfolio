import { styled } from "@linaria/react";
import BigCard from "../BigCard";
import CenteredContainer from "../CenteredContainer";
import ThreeScene from "./ThreeScene";
import FiberView from "./fiber_view";
import { Book, GitHub, Globe } from "react-feather";
import ImageFader from "./image_fader";
import ThreeSceneB from "./ThreeSceneB";
import ThreeSceneC from "./ThreeSceneC";

export default function Page() {
  return (
    <>
      <CenteredContainer>
        <Wrapper>
          <LinkBar>
            <BigCard2 href={"https://github.com/rgerum/saenopy"}>
              <GitHub />
              <>Github</>
            </BigCard2>
            <BigCard2 href={"https://saenopy.readthedocs.io/en/latest/"}>
              <Book />
              <>Read the Docs</>
            </BigCard2>
            <BigCard2 href={"https://doi.org/10.1101/2022.11.16.516758"}>
              <Globe />
              <>Publication</>
            </BigCard2>
          </LinkBar>
          <Title>Saenopy</Title>
          <Group data-overhang="left">
            <Image src={"Logo.svg"} />
            <BigCard>
              <H2>Goal</H2>
              <p>
                Measuring force generation of cells is natural environments is
                essential to understand e.g. tissue healing, tumor metastasis,
                and immune responses.
              </p>
              <p>
                Saenopy allows to measure these forces in a naturalistic 3D
                collagen environment.
              </p>
            </BigCard>
          </Group>
          <Group data-overhang="right">
            <BigCard>
              <H2>Implementation</H2>
              <p>
                The force reconstruction is based on a{" "}
                <Em>Finite Element Solver</Em> original developed by{" "}
                <a href="http://dx.doi.org/10.1038/nmeth.3685">
                  Steinwachs et al.
                </a>{" "}
                The volume is approximated by a grid of tetrahedral elements.
              </p>
              <p>
                Each element is represented by a non-linear stiffness function
                representing the fibers of the material.
              </p>
              <p>
                Heavy calculations are done using <Em>Numpy</Em> vectorization
                and <Em>Numba</Em> jit-compilation.
              </p>
            </BigCard>
            {/*<Image style={{"background": "var(--color-white)"}}
                   src={"https://saenopy.readthedocs.io/en/latest/_images/fiber.png"}/>*/}
            <FiberView />
          </Group>

          <Group data-overhang="left">
            <ImageFader />

            <BigCard>
              <H2>Interface & Visualization</H2>
              <p>
                A clear and easy to use interface using <Em>Qt</Em> guides the
                user through the process and allows to use the software without
                specialized knowledge of the algorithm.
              </p>
              <p>
                I see <Em>visual feedback</Em> as a key element to make sure the
                user understands what the software is doing and can spot errors.
              </p>
              <p>
                Therefore, Saenopy is no black box. Every intermediate step is
                visualized in an interactive way using <Em>VTK</Em>.
              </p>
            </BigCard>
            {/*<Image style={{"background": "var(--color-white)"}} src={"https://saenopy.readthedocs.io/en/latest/_images/Gif_nk_dynamic_example.gif"} />*/}
          </Group>

          <Group data-overhang="right">
            <BigCard>
              <H2>Data</H2>
              <p>
                Cells are embedded in a 3D collagen matrix and imaged using a{" "}
                <Em>confocal microscope</Em> with reflection mode. A contrast
                mode that visualizes the fibers.
              </p>
              <p>
                A stack of images is recorded before and after relaxing the cell
                with a drug.
              </p>
            </BigCard>
            <ThreeScene2 />
          </Group>

          <Group data-overhang="left">
            <ThreeScene2B />
            <BigCard>
              <H2>Deformations</H2>
              <p>
                Deformations are calculated using a{" "}
                <Em>3D particle image velocimetry (PIV)</Em> algorithm.
              </p>
              <p>
                This algorithm uses a 3D cross-correlation to find a match of
                the "relaxed" image stack in the "deformed" image stack.
              </p>
            </BigCard>
          </Group>

          <Group data-overhang="right">
            <BigCard>
              <H2>Forces</H2>
              <p>
                The calculation of the forces from the deformations is the core
                part of saenopy.
              </p>
              <p>
                The iterative algorithm tries to reconstruct the forces in the
                non-linear material. Tikhonov regularization ensure forces do
                not diverge.
              </p>
            </BigCard>
            <ThreeScene2C />
          </Group>
        </Wrapper>
      </CenteredContainer>
    </>
  );
}

const LinkBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: calc(86px - 16px);
  height: 0;
  width: fit-content;
  margin-left: calc(100% + 64px + 16px);
  transform: translateY(32px);

  @media (max-width: 1470px) {
    position: absolute;
    margin: revert;
    top: 0;
  }
`;

const ThreeScene2 = styled(ThreeScene)`
  flex-basis: 50%;
  width: 330px;
  height: 300px;
`;

const ThreeScene2B = styled(ThreeSceneB)`
  flex-basis: 50%;
  width: 330px;
  height: 300px;
`;

const ThreeScene2C = styled(ThreeSceneC)`
  flex-basis: 50%;
  width: 330px;
  height: 300px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 400px;
`;

const Em = styled.em`
  font-style: normal;
  font-weight: bold;
  color: var(--color-primary);
`;

const Title = styled.h1`
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

  &:nth-child(1) {
    animation-delay: 250ms;
  }

  &:nth-child(2) {
    animation-delay: 500ms;
  }

  &:nth-child(3) {
    animation-delay: 750ms;
  }

  &:nth-child(4) {
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
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  flex-basis: 50%;
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

const H3 = styled.h3``;

const BigCard2 = styled.a`
  background: var(--color-white);
  text-decoration: underline;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  width: 150px;
`;
