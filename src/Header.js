import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import { blue } from '@material-ui/core/colors';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";



const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


    return (
        <Container>
           
        {/* <Logo>
          <img src="/Images/amazon.png" alt="Disney+" />
        </Logo> */}

        <Navimg
         aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}> 
        <MenuIcon/>
        </Navimg>
      
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem><Link to="/"><p style={{textDecoration:'none'}}>Home</p></Link></MenuItem>
        <MenuItem><Link to="/about">About Us</Link></MenuItem>
        <MenuItem><Link to="/">Staff Profile</Link></MenuItem>
        <MenuItem><Link to="/">Services</Link></MenuItem>
        <MenuItem><Link to="/">Projects</Link></MenuItem>
        <MenuItem><Link to="/">Safety Precautions & Training</Link></MenuItem>
        <MenuItem><Link to="/contact">Contact Us</Link></MenuItem>
       
      </Menu>

            <NavMenu>

              
              
              <a>
                <span>Home</span>
              </a>
             
              <a>
                
                <span>About Us</span>
              </a>
              <a>
                
                <span>Staff Profile</span>
              </a>
              <a>
               
                <span>Services</span>
              </a>
              <a>
                
                <span>Projects</span>
              </a>
              <a>
                
                <span>Safety Precaution & Training</span>
              </a>
              <a>
                
                <span>Contact Us</span>
              </a>
             
            </NavMenu>
          
        </Container>

    );
}

const Container =styled.div`
margin:0;
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;

  /* background-color: #090b13; */
  background-color:whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;




const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration:none;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      /* color: rgb(249, 249, 249); */
      color:black;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      cursor: pointer;
      text-transform: uppercase;
      &:before {
        /* background-color: rgb(249, 249, 249); */
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
        
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const Navimg=styled.div`

opacity: 0;

@media (max-width: 768px) {
    opacity: 1;
  }

`;

export default Header;