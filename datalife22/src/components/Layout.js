import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Grid = styled.div`
    display: grid;
    min-height: 100%;
    width: auto;
    gap: 8px;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(100px, auto);
    //grid-template-rows: repeat(12, 100px);
    transition: all 0.7s ease-in-out;

    //Large - Desktop
    max-width: 1040px;
    margin: 2em auto 2em auto;
    //Medium - Laptop
    @media only screen and (min-width: 1240px) and (max-width: 1439px) {
        margin: 2em 200px 2em 200px;
    }
    //Small - Tablet
    @media only screen and (min-width: 905px) and (max-width: 1239px) {
        margin: 2em auto 2em auto;
        max-width: 840px; 
    }
    @media only screen and (min-width: 600px) and (max-width: 904px) {
        grid-template-columns: repeat(8, 1fr);
        margin: 2em 32px 2em 32px;
    }
    //Extra Small - Mobile
    @media only screen and (max-width: 599px) {
        grid-template-columns: repeat(4, 1fr);
        margin: 2em 16px 2em 16px; 
    }
`;

export {Grid};

const Layout = (props) => {
  return (
    <>
      <Navbar />
        <Grid>
            {props.children}
        </Grid>
      <Footer />
    </>
  );
}

export default Layout;