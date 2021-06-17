import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import {Link} from 'react-router-dom'
import TopClients from './TopClients';
import Footer from './Footer';

const Home = () => {
    return (
    <Container>
        <ImgSlider/>
        <Content>
       <h2> Welcome To Eskay Construction Technology</h2>
   <h3>Mistry Construction and Engineers (A sister Concern)</h3>
<p>Mistry Constructions is a well-established firm in Mumbai. We are engaged in offering efficient services like interior and exterior painting services, plumbing, water proofing contracts and other related services. We have successfully been serving this industry for the past 16 years. Our firm provides services for both residential and commercial sectors.</p>
<p>
We provide high-quality services to our customers which meet their expectations. With our exclusive painting services, we add beauty to your interiors and exteriors. We have excellent team of professionals who are highly dedicated in providing the best services to our customers. Our professionals always focus on offering remarkable solutions to a huge number of clients. We render.</p>

        </Content>
        <TopClients/>
            <Content1>
            
            <Wrap>
               <Box>
               <span>Jacketing</span>
               </Box>
            </Wrap>
           
            <Wrap>
              
            <Box>
               <span>Plumbing</span>
               </Box>
              
            </Wrap>

            <Wrap>
            
            <Box>
               <span>Plastering</span>
               </Box>
              
            </Wrap>

            <Wrap>
              
            <Box>
               <span>Flooring</span>
               </Box>
              
            </Wrap>
            <Wrap>
            
            <Box>
               <span>Structure Repair</span>
               </Box>
              
            </Wrap>
            <Wrap>
            
            <Box>
               <span>Water Proofing</span>
               </Box>
              
            </Wrap>
            <Wrap>
            
            <Box>
               <span>Electric Work</span>
               </Box>
              
            </Wrap>
            <Wrap>
            
            <Box>
               <span>Painting</span>
               </Box>
              
            </Wrap>
            </Content1>
    </Container>
   
    
    );
}



const Container = styled.div`

position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;

  top: 72px;
  padding: 10px calc(2vw + 5px);
  margin-bottom:90px;
  
  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1; 
  } 
`;

const Content = styled.div`

margin:0;
background-color:whitesmoke;
margin-top:25px;
padding:5px;
h2{
text-align:center;
/* font-family: "Lucida Console", "Courier New", monospace; */
/* font-family: "Brush Script MT", cursive; */
font-family: Garamond, serif;

}
h3{
    text-align:center;
    /* font-family: "Lucida Console", "Courier New", monospace; */
    font-family: Garamond, serif;
}
p{
  margin: 0;
  line-height: 1.5;
  letter-spacing: 1.5px;
  padding:5px;
  opacity: 0.6;

}
`;



const Content1 = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  overflow:hidden;
 margin:auto;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top:25px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding: 20%;
  border-radius: 10px;
  /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-color:whitesmoke;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  opacity: 2.5;
  overflow:hidden;
  text-decoration:none;
 
 
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;


const Box = styled.div`
padding:auto;
margin: auto;
display:flex;
justify-content: center;

span{
      
      font-size:30px;
      text-align:center;
      text-decoration:none;
      color:black;
      padding-left:10px;
      @media (max-width: 768px) {
        font-size:18px;
  }


      
      
  }

`;


export default Home;