import React from "react";
import { styled } from "styled-components";

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

export default LinkBar;
