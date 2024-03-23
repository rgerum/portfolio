import React from "react";
import { styled } from "styled-components";

const LinkBarCard = styled.a`
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

export default LinkBarCard;
