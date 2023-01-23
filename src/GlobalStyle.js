import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
     --maxWidth: 1280px;
     --white: #f0f8ff;
     --lightGrey: #eee;
     --medGrey: #353535;
     --darkGrey:#1c1c1c;
     --fontLarge: 2.5rem;
     --fontBig: 1.5rem;
     --fontMed: 1.2rem;
     --fontSmall: 1rem;
}

* {
     box-sizing: border-box;
     font-family: 'Abel', sans-serif;

}

body {
	margin:0;
	padding:0;
     background:linear-gradient(225deg, rgba(170, 170, 170, 1) 10%, rgba(53, 53, 53, 1) 20%, rgba(170, 170, 170, 1) 30%, rgba(53, 53, 53, 1) 40%, rgba(170, 170, 170, 1) 50%, rgba(53, 53, 53, 1) 60%, rgba(170, 170, 170, 1) 70%, rgba(53, 53, 53, 1) 80%, rgba(170, 170, 170, 1) 90%);
     background-attachment: fixed;

     h1 {
          font-size: 2rem;
          font-weight: 600;
          color: var(--white);
     }

     h3 {
          font-size: 1.1rem;
          font-weight: 600;
     }

     p {
          font-size: 1rem;
          color: var(--white);
     }

}

img{
     max-width: 100%;
}

li{
     list-style: none;
}

a{
     text-decoration: none;
}

`;
