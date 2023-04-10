import React from "react";
import Container from "../../components/Container";
import BackgroundImage from "../../components/BackgroundImage";
import ImageOcean from "/assets/img/ocean.jpg";
import ComputerIcon from "/assets/img/icon_computer.svg";
import ComponentIcon from "/assets/img/icon_comp.svg";
import OkIcon from "/assets/img/icon_ok.svg";
import Card from "../../components/Card";
import { TitlePage } from "./styles";
import TextContent from "../../components/TextContent";
import Phone from "/assets/img/phone.jpg";
import Code from "/assets/img/code.jpg";
import Children from "/assets/img/children.jpg";

const Home: React.FC = () => {
  return (
    <div>
      <Container alignItems="center" justifyContent="center">
        <BackgroundImage imageUrl={ImageOcean} altText="Ocean" />
        <TitlePage>Minha Primeira Página com React TS!</TitlePage>
      </Container>

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
        <BackgroundImage width="50%" position="block" imageUrl={Phone} altText="Phone Image" />
      </Container>

      <Container>
        <BackgroundImage width="50%" position="block" imageUrl={Code} altText="Code Image" />
        <TextContent />
      </Container>

      <Container>
        <TextContent />
        <BackgroundImage width="50%" position="block" imageUrl={Children} altText="Children Image" />
      </Container>
    </div>
  );
};

export default Home;
