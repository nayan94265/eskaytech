
import React from 'react';
import styled from 'styled-components';
// import statebank from './Images/statebank.png';


// https://ibb.co/1s1g8DT
// https://ibb.co/312rVmp
// https://ibb.co/4Fv42Sb
// https://ibb.co/znqGhfn
// https://ibb.co/42gLqKM
// https://ibb.co/QNcgG2y
// https://ibb.co/XjRxzzg
// https://ibb.co/4Wc1ddR
// https://ibb.co/hKmBb6W
// https://ibb.co/PmP8MVt
// https://ibb.co/gjbSHrB
// https://ibb.co/QQyvNq1
// https://ibb.co/Bt2ZGKb
// https://ibb.co/thFC0V5
// https://ibb.co/vxfCDsF
// https://ibb.co/vBntXhH
// https://ibb.co/fk24xrp
// https://ibb.co/N6DCYPN
// https://ibb.co/wdjCV8S
// https://ibb.co/SwqZS81


const TopClients = () => {
    return (
    //   <Container>
    //     <h1>Top Clients</h1>
    //     <Content>
    //     <WrapContent>
    //    <img src="https://i.ibb.co/vBntXhH/statebank.png" alt="statebank" border="0" />
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/timeofdindia.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/Arf.jpg"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/HP.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/LT.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/bharatp.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/titan.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/acc.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/jaydeep.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/unity.jpg"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/stdchd.jpg"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/hcc.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/shapori.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/jmc.jpg"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/ecoil.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/marathi.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/aimil.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/cidco.jpg"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/bsnl.png"/>
    //     </WrapContent>
    //     <WrapContent>
    //         <img src="/Images/hindi.png"/>
    //     </WrapContent>
       
    //     </Content>
    //     </Container>


    <Container>
        <h1>Top Clients</h1>
        <Content>
        <WrapContent>
       <img src="https://i.ibb.co/vBntXhH/statebank.png" alt="statebank" border="0" />
        </WrapContent>
        <WrapContent>
            <img src="/Images/timeofdindia.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/Arf.jpg"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/HP.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/LT.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/bharatp.png"/>
        </WrapContent>
        <WrapContent>
        <img src="https://i.ibb.co/7SLVPBn/titan.png" alt="titan" border="0" />
        </WrapContent>
        <WrapContent>
            <img src="/Images/acc.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/jaydeep.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/unity.jpg"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/stdchd.jpg"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/hcc.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/shapori.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/jmc.jpg"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/ecoil.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/marathi.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/aimil.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/cidco.jpg"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/bsnl.png"/>
        </WrapContent>
        <WrapContent>
            <img src="/Images/hindi.png"/>
        </WrapContent>
       
        </Content>
        </Container>

    );
    }

const Container = styled.div`

h1{
  text-align:center;
  text-decoration:underline;
}
`;

const Content = styled.div`
  display:grid;
  grid-gap: 25px; 
   gap: 25px;
  overflow:hidden;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top:25px;
  margin-right:10px;

  /* background-color:green; */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const WrapContent = styled.div`
  display:flex;
  justify-content:center;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  overflow:hidden;
  
  /* background-color: blue; */
  img{
    /* min-height:30px; */
  max-width:50%;
  max-height:50%;
  margin-top:20px;
  @media (max-width: 768px) {
      align-items:center;
   width:50px;
   height:50px;
  }
 
  }

`;

export default TopClients;
