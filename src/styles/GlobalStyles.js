import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
    --heavyWeight: 900;
    --transMed: 0.3s;
    --transSlow: 0.5s;
    --black: #1f1f1f;
    --charcoal: #3e3e3e;
    --primaryColor: #f441a5;
    --h1: 2rem;
    --h2: 1.8rem;
    --h3: 1.5rem;
    --h4: 1.25rem;
    --h5: 1.15rem;
    --h6: 1rem;
    --para: 1rem;
    --spacing: 1rem;

    @media (min-width: 768px) {
      --h1: 2.6rem;
      --h2: 2.4rem;
      --h3: 1.75rem;
      --h4: 1.5rem;
      --h5: 1.25rem;
      --h6: 1.1rem;
      --para: 1.1rem;
    }

    @media (min-width: 1200px) {
      --h1: 3rem;
      --h2: 2.8rem;
      --h3: 2rem;
      --h4: 1.75rem;
      --h5: 1.35rem;
      --para: 1.15rem;
    }
  }

* {
    box-sizing: border-box;
}
ul{
  list-style: none;
}

html {
  /* scroll-behavior: smooth; */
  &.webrowse{
    .navbar .right .btn.add,.viewport .add.btn{
      visibility: hidden;
    }
    &.logined{
      .navbar .right .btn.login{
        visibility: hidden;
      }
      .viewport .add.btn{
        visibility: visible;
      }
    }
  }
}

body {
  font-family: Mulish, sans-serif;
  color: #000;
  background-color: #fff;
}

`
export default GlobalStyles
