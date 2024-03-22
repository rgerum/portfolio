import "./style.linaria.global";
import HeaderBar from "./HeaderBar";
import React from "react";
import { styled } from "@linaria/react";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="show-banner" type="importmap">
          {`
        {
          "imports": {
            "three": "https://unpkg.com/three@v0.158.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@v0.158.0/examples/jsm/"
          }
        }
              `}
        </Script>
        <Background />
        <Container>
          <HeaderBar />
          {children}
        </Container>
      </body>
    </html>
  );
}

const Container = styled.div`
  display: grid;
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  background-image: radial-gradient(
      circle at 30% 80%,
      hsl(var(--color-primary-hue) 54% 56% / 0.7),
      transparent
    ),
    radial-gradient(
      circle at 80% 20%,
      hsl(var(--color-primary-hue) 54% 56% / 0.2),
      transparent
    );
`;
