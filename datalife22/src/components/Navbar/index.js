import {
    Nav,
    NavContainer,
    Button,
    NavItem,
  } from "./navbar_components";
  
  import { useState, useEffect } from "react";
  import { Squeeze as Hamburger } from "hamburger-react";
  
  const Navbar = () => {
    const [isOpen, setStatus] = useState(false);
  
    useEffect(() => {
      const navbar = document.getElementsByTagName("nav")[0];
      const navContainer = document.getElementsByClassName("navContainer")[0];
  
      if (isOpen) {
        navbar.classList.add("open");
        //setTimeout(()=>{navContainer.classList.add("open")},200);
        navContainer.classList.add("open");
      } else {
        navbar.classList.remove("open");
        navContainer.classList.remove("open");
      }
    }, [isOpen]);
  
    return (
      <Nav className="navbar">
        <Button
          onClick={() => setStatus(!isOpen)}
          onKeyDown={() => setStatus(!isOpen)}
        >
          <Hamburger size={32} />
        </Button>
            <NavContainer style={{width:"60%"}} className="navContainer">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/results">Results</NavItem>
              <NavItem to="/team">Team</NavItem>
              <NavItem to="/about">About</NavItem>
            </NavContainer>
         </Nav>
    );
  };
  
  export default Navbar;