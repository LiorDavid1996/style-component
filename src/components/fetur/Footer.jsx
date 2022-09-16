import { Container } from "../styles/containar.style";
import{StyleFlex} from '../styles/Flex.style'
import {FooterStyle} from '../styles/Footer.styled'
import SocialIcons from "./Sociallcons";
 export default function Footer() {
     return(
       <FooterStyle>
            <Container>
                <img src="./images/logo_white.svg" alt=""/>
                <StyleFlex>
                <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
                </StyleFlex>
                <p>&copy; 2022 Huddle. All rights reserved</p>
            </Container>

            </FooterStyle>
     )
 }