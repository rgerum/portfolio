"use client";
import { styled } from "styled-components";
import React from "react";

export default function ImageFader() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Set up the interval
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 7); // Increment the count
    }, 1000); // 1000 ms = 1 second

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  let images = [
    "saenopy_interface/screen1.png",
    "saenopy_interface/screen2.png",
    "saenopy_interface/screen3.png",
    "saenopy_interface/screen4.png",
    "saenopy_interface/screen5.png",
    "saenopy_interface/screen6.png",
    "saenopy_interface/screen7.png",
  ];
  return (
    <Wrapper>
      {images.map((image, index) => (
        <Image key={index} src={image} data-visible={index === count} />
      ))}
      <WrapperPoints>
        {images.map((image, index) => (
          <Point key={index} data-visible={index === count} />
        ))}
      </WrapperPoints>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  flex-basis: 500px;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  position: relative;
  opacity: 1;
  transition: opacity 300ms ease-in-out;
  z-index: 1;

  &[data-visible="false"] {
    opacity: 0;
    z-index: 0;
    transition: opacity 0ms 300ms ease-in-out;
  }

  &:not(:first-of-type) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const WrapperPoints = styled.ol`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Point = styled.li`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  transition: background-color 500ms ease-in-out;

  &[data-visible="false"] {
    background: var(--white);
  }
`;
