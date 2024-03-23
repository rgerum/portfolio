"use client";
import Image from "next/image";
import { styled } from "styled-components";
import HeaderBar from "./HeaderBar";
import Hero from "./Hero";
import BigCard from "./BigCard";
import ProfilePic from "./ProfilePic";
import React from "react";
import CenteredContainer from "./CenteredContainer";
import Spacer from "./Spacer";
import CardSlider from "./CardSlider";
import Projects from "./Projects";

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.025em;

  & a {
    text-decoration: none;
    color: #0070f3;
  }

  & a:hover,
  & a:focus,
  & a:active {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;

const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family:
    Menlo,
    Monaco,
    Lucida Console,
    Liberation Mono,
    DejaVu Sans Mono,
    Bitstream Vera Sans Mono,
    Courier New,
    monospace;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;

const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
  max-width: 300px;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export default function Home() {
  return (
    <>
      <Main>
        <Spacer height={100} />

        <CenteredContainer>
          <BigCard>
            <Spacer height={60} />
            <ProfilePic />
            <Title>About Me</Title>
            <p>
              I started programming as a teenager when I realized that playing
              computer games is fun, but it&apos;s actually more fun to develop
              my own.
            </p>
            <p>
              The same desire to find out how things work fueled my curiosity to
              study physics. Here again I realized how important programming
              skills are to analyse and visualize data.
            </p>
          </BigCard>
        </CenteredContainer>

        <Spacer height={100} />

        <Projects />
      </Main>
      <Footer></Footer>
    </>
  );
}
