import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex; 
  width: 100%;
  margin: 0 auto 0 auto;
  background-color: #fafa66;
`;

const LogoLink = styled.a`
  grid-column: span 1; 
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  transition: all 0.4s ease-in-out;
  border: none; 
  @media only screen and (max-width: 750px) {
    grid-column: span 2; 
    grid-row: 1; 
  }
`;

export const ContactBox = styled.div`
  grid-column: -1 / span 4;
  text-align: left;
  display: grid; 
  & a {
    margin: 0; 
    padding-bottom: .5em;
    color: #000;
    text-decoration: none;
  }
  @media only screen and (max-width: 750px) {
    grid-column: span 4;
    text-align: center;
    grid-row: 2;
  }
`;

export const LogoWrapper = (props) => {
  return (
    <LogoLink href={props.href}>
      <img style={{ height: "100%", width: "100%", minWidth: "48px"}} src={props.src} alt={props.alt} />
    </LogoLink>
  );
};

