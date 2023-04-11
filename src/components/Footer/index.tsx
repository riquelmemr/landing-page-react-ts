import React from "react";
import { FooterContainer, FooterList } from "./styles";
import Banner from "../Banner";
import { Title } from "../../pages/Home/styles";
import ImageOcean from "/assets/img/ocean.jpg";
import Facebook from "/assets/img/face.svg";
import Twitter from "/assets/img/twitter.svg";
import Instagram from "/assets/img/insta.svg";
import Icon from "../Icon";
import Container from "../Container";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="70%"
      >
        <Banner
          imageUrl={ImageOcean}
          altText="Ocean"
          position="absolute"
          height="70%"
        />
        <Title>Contato</Title>
      </Container>
      <Container
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height="30%"
        padding="150px"
      >
        <div>
          <FooterList>
            <li>About</li>
            <li>Contact</li>
            <li>Terms of Use</li>
            <li>Privace Policy</li>
          </FooterList>
          <span>&copy; Your website 2020. All Rights Reserved.</span>
        </div>
        <div>
          <FooterList>
            <li>
              <Icon href="#" src={Facebook} alt="Facebook" width="40px" />
            </li>
            <li>
              <Icon href="#" src={Twitter} alt="Twitter" width="40px" />
            </li>
            <li>
              <Icon href="#" src={Instagram} alt="Instagram" width="40px" />
            </li>
          </FooterList>
        </div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
