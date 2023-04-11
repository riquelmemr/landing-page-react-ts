import React from "react";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import ImageOcean from "/assets/img/ocean.jpg";
import ComputerIcon from "/assets/img/icon_computer.svg";
import ComponentIcon from "/assets/img/icon_comp.svg";
import OkIcon from "/assets/img/icon_ok.svg";
import Card from "../../components/Card";
import { Title } from "./styles";
import TextContent from "../../components/TextContent";
import Phone from "/assets/img/phone.jpg";
import Code from "/assets/img/code.jpg";
import Children from "/assets/img/children.jpg";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <header>
        <Container alignItems="center" justifyContent="center">
          <Banner imageUrl={ImageOcean} altText="Ocean" />
          <Title>Minha Primeira Página com React TS!</Title>
        </Container>
      </header>

      <main>
        <Container alignItems="center" justifyContent="center" gap="80px">
          <Card
            icon={ComputerIcon}
            title={"Somente para desktop"}
            description={"Vamos aprender, como utilizar um framework."}
          />
          <Card
            icon={ComponentIcon}
            title={"Criado com componentes"}
            description={"Utilizamos o Styled Components."}
          />
          <Card
            icon={OkIcon}
            title={"Fácil aproveitamento"}
            description={"Estamos no caminho."}
          />
        </Container>

        <Container>
          <TextContent />
          <Banner
            width="50%"
            position="block"
            imageUrl={Phone}
            altText="Phone Image"
          />
        </Container>

        <Container flexDirection="row-reverse">
          <TextContent />
          <Banner
            width="50%"
            position="block"
            imageUrl={Code}
            altText="Code Image"
          />
        </Container>

        <Container>
          <TextContent />
          <Banner
            width="50%"
            position="block"
            imageUrl={Children}
            altText="Children Image"
          />
        </Container>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
