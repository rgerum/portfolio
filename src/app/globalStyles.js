"use client";
import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
    html,
    body {
      height: 100%;
      padding: 0;
      margin: 0;
      font-family:
        "Raleway",
        -apple-system,
        BlinkMacSystemFont,
        Segoe UI,
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        Fira Sans,
        Droid Sans,
        Helvetica Neue,
        sans-serif;
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;

      --color-white-core: 262deg 100% 99%;

      --color-white: hsl(var(--color-white-core));
      --color-gray-200: hsl(290, 30%, 96.1%);
      --color-gray-400: hsl(290, 5%, 86.1%);
      --color-primary: hsl(var(--color-primary-hue) 54% 56%);
      --color-primary-hue: 262deg;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
      html {
        color-scheme: dark;
      }
      body {
        color: white;
        background: black;
      }
    }
`;
