import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
       <Content>
        <Wrap>
          <Box><span>Comapny Email:</span> <p>EskayConstruction@gmail.com</p></Box>
        </Wrap>
        <Wrap>
        <Box><span>Address:</span> <p>77/C, 1st Floor, Kamgar Nagar, Kurla (East), Mumbai – 400 024.</p></Box>
        </Wrap>
        <Wrap>
        <Box><span>Contact no. -</span> <p>9086556789</p></Box>
        </Wrap>
        </Content>
       
      </Container>
    );
}

 const Container = styled.div`

  background-color:#34373C;
  position: relative;
  
  bottom: 0;
  width: 100%;
  box-sizing:inherit;
  padding:20px 0;
  overflow:hidden
   
  /* @media (max-width: 768px) {
    padding:30px 15px;
  } */
`;
   
 const Wrap = styled.div`
    text-align: center;
    margin:auto;
    @media (max-width: 768px) {
          margin:10px;
            
         }
    

`;
   const Box =styled.div`
 
  
      span{
       font-size:20px;
       color:white;
        text-align:center;
        text-decoration:underline;
        padding-left:0;
        @media (max-width: 768px) {
          font-size:18px;
     
         }

       
      }
      p{
        margin:5px;
        color:white;
        font-size:17px;
        @media (max-width: 768px) {
          font-size:16px;
            
         }
      }
   `;
     const Content =styled.div`
     
     margin:auto;
     display: flex;
     justify-content: center;
    align-content: space-between;

    @media (max-width: 768px) {
    flex-wrap:wrap;
  }
   
     `;

export default Footer;