import React from "react";
import { styled } from "styled-components";
import CenteredContainer from "../../app/CenteredContainer";

function ProjectPageWrapper({ children }) {
  return (
    <CenteredContainer>
      <Wrapper>{children}</Wrapper>
    </CenteredContainer>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 400px;
`;

export default ProjectPageWrapper;
