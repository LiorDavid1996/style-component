import "./Hader.css";
import React from "react";
import { HeaderStyle,Container,Nav,Logo,Image } from "../../styles/containar.style"; 
import { StyledButton } from "../../styles/button";
import { StyleFlex } from "../../styles/Flex.style";

export default function Header() {
  return (
      <HeaderStyle >
          <Container>
            <Nav>
              <Logo src='./imges/imge5.svg' alt='' />
           <StyledButton> try it free</StyledButton>
          </Nav>
          <StyleFlex>
            <div>
              <h1>Build The Community your Fans Will Love</h1>
              <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
              </p>
              <StyledButton bg='#ff0099' color='#fff'>
              Get Started For Free
            </StyledButton>
          </div>

          <Image src='./imges/img3.svg' alt='' />
            
        </StyleFlex>
          
        </Container>
      </HeaderStyle>
  );
};

 
