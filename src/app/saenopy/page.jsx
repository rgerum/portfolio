"use client";
import { styled } from "styled-components";
import ThreeScene from "./ThreeScene";
import FiberView from "./fiber_view";
import { Book, GitHub, Globe } from "react-feather";
import ThreeSceneB from "./ThreeSceneB";
import ThreeSceneC from "./ThreeSceneC";
import LinkBar from "@components/LinkBar";
import LinkBarCard from "@components/LinkBarCard";
import ProjectTitle from "@components/ProjectTitle";
import BigCard from "@components/BigCard";
import BigCardWrapper from "../../components/BigCardWrapper";
import ImageCarousel from "../../components/ImageCarousel";
import ProjectPageWrapper from "../../components/ProjectPageWrapper";

export default function Page() {
  return (
    <ProjectPageWrapper>
      <LinkBar>
        <LinkBarCard href={"https://github.com/rgerum/saenopy"}>
          <GitHub />
          <>Github</>
        </LinkBarCard>
        <LinkBarCard href={"https://saenopy.readthedocs.io/en/latest/"}>
          <Book />
          <>Read the Docs</>
        </LinkBarCard>
        <LinkBarCard href={"https://doi.org/10.1101/2022.11.16.516758"}>
          <Globe />
          <>Publication</>
        </LinkBarCard>
      </LinkBar>
      <ProjectTitle>Saenopy</ProjectTitle>
      <BigCardWrapper data-overhang="left">
        <Image src={"Logo.svg"} />
        <BigCard title={"Goal"}>
          <p>
            Measuring force generation of cells is natural environments is
            essential to understand e.g. tissue healing, tumor metastasis, and
            immune responses.
          </p>
          <p>
            Saenopy allows to measure these forces in a naturalistic 3D collagen
            environment.
          </p>
        </BigCard>
      </BigCardWrapper>
      <BigCardWrapper data-overhang="right">
        {/*<Image style={{"background": "var(--color-white)"}}
                   src={"https://saenopy.readthedocs.io/en/latest/_images/fiber.png"}/>*/}
        <FiberView />
        <BigCard title={"Implementation"}>
          <p>
            The force reconstruction is based on a{" "}
            <Em>Finite Element Solver</Em> original developed by{" "}
            <a href="http://dx.doi.org/10.1038/nmeth.3685">Steinwachs et al.</a>{" "}
            The volume is approximated by a grid of tetrahedral elements.
          </p>
          <p>
            Each element is represented by a non-linear stiffness function
            representing the fibers of the material.
          </p>
          <p>
            Heavy calculations are done using <Em>Numpy</Em> vectorization and{" "}
            <Em>Numba</Em> jit-compilation.
          </p>
        </BigCard>
      </BigCardWrapper>

      <BigCardWrapper data-overhang="left">
        <ImageCarousel
          images={[
            "saenopy_interface/screen1.png",
            "saenopy_interface/screen2.png",
            "saenopy_interface/screen3.png",
            "saenopy_interface/screen4.png",
            "saenopy_interface/screen5.png",
            "saenopy_interface/screen6.png",
            "saenopy_interface/screen7.png",
          ]}
        />

        <BigCard title={"Interface & Visualization"}>
          <p>
            A clear and easy to use interface using <Em>Qt</Em> guides the user
            through the process and allows to use the software without
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
      </BigCardWrapper>

      <BigCardWrapper data-overhang="right">
        <ThreeScene2 />
        <BigCard title={"Data"}>
          <p>
            Cells are embedded in a 3D collagen matrix and imaged using a{" "}
            <Em>confocal microscope</Em> with reflection mode. A contrast mode
            that visualizes the fibers.
          </p>
          <p>
            A stack of images is recorded before and after relaxing the cell
            with a drug.
          </p>
        </BigCard>
      </BigCardWrapper>

      <BigCardWrapper data-overhang="left">
        <ThreeScene2B />
        <BigCard title={"Deformations"}>
          <p>
            Deformations are calculated using a{" "}
            <Em>3D particle image velocimetry (PIV)</Em> algorithm.
          </p>
          <p>
            This algorithm uses a 3D cross-correlation to find a match of the
            &quot;relaxed&quot; image stack in the &quot;deformed&quot; image
            stack.
          </p>
        </BigCard>
      </BigCardWrapper>

      <BigCardWrapper data-overhang="right">
        <ThreeScene2C />
        <BigCard title={"Forces"}>
          <p>
            The calculation of the forces from the deformations is the core part
            of saenopy.
          </p>
          <p>
            The iterative algorithm tries to reconstruct the forces in the
            non-linear material. Tikhonov regularization ensure forces do not
            diverge.
          </p>
        </BigCard>
      </BigCardWrapper>
    </ProjectPageWrapper>
  );
}

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

const Em = styled.em`
  font-style: normal;
  font-weight: bold;
  color: var(--color-primary);
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  flex-basis: 50%;
`;
