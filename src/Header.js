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
           
        <Logo>
          <img src="/Images/eskaylogo.jpeg" alt="Eskay" />
        </Logo>

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
        <MenuItem><Link to="/" style={{ textDecoration: 'none',color:'black' }}><p>Home</p></Link></MenuItem>
        <MenuItem><Link to="/about" style={{ textDecoration: 'none',color:'black'  }}>About Us</Link></MenuItem>
        <MenuItem><Link to="/" style={{ textDecoration: 'none',color:'black'  }}>Our Top Clients</Link></MenuItem>
        <MenuItem><Link to="/" style={{ textDecoration: 'none',color:'black'  }}>Services</Link></MenuItem>
        <MenuItem><Link to="/contact" style={{ textDecoration: 'none',color:'black'  }}>Contact Us</Link></MenuItem>
       
      </Menu>

            <NavMenu>
              <a>
                <span>Home</span>
              </a>
             
              <a> 
                <span>About Us</span>
              </a>
              <a>
                
                <span>Our Top Clients</span>
              </a>
              <a>
               
                <span>Services</span>
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
  height: 150px;

  background-color:white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  /* border-bottom:1px solid black; */
`;




const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  margin-top:10px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  padding-left:60px;
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
      font-size: 18px;
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
  width: 250px;

  margin-top: 15px;
  top:0;
  /* max-height: 70px; */
  font-size: 0;
  display: inline-block;
  
@media (max-width: 768px) {
 left:0;
  }
  img {
    display: block;
    width: 100%;
  }
`;

const Navimg=styled.div`
visibility: hidden;
position: absolute;
right: 0px;
padding-right:6px;
margin-right:5px;


@media (max-width: 768px) {
    visibility: visible;
  }

`;

export default Header;