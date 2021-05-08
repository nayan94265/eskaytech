import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import {Link} from 'react-router-dom'

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
            <Content1>
            
            <Wrap>
            <Link>
               <p>Jacketing</p>
               </Link>
            </Wrap>
           
           
            
            <Wrap>
              <Link >
              <p>Plumbing</p>
              </Link>
            </Wrap>

            <Wrap>
              <Link>
              <p>Plastering</p>
              </Link>
            </Wrap>

            <Wrap>
              <Link >
              <p>Flooring</p>
              </Link>
            </Wrap>
            <Wrap>
              <Link>
              <p>Water Proofing</p>
              </Link>
            </Wrap>
            <Wrap>
              <Link>
              <p>Electric work</p>
              </Link>
            </Wrap>
            <Wrap>
              <Link>
              <p>Painting</p>
              </Link>
            </Wrap>
            <Wrap>
              <Link>
              <p>Structure Repair</p>
              </Link>
            </Wrap>


            </Content1>
       


        <img/>
    </Container>
    
    );
}



const Container = styled.div`

position: relative;
min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top:25px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
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
  a{
      
      font-size:25px;
      text-align:center;
      text-decoration:none;
      color:black;
      
  }
 
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Home;