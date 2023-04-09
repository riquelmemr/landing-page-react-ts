import React from "react";
import Container from "../../components/Container";
import BackgroundImage from "../../components/BackgroundImage";
import ImageOcean from "/assets/img/ocean.jpg";
import { TitlePage } from "./styles";
import Card from "../../components/Card";
import ComputerIcon from "/assets/img/icon_computer.svg";
import ComponentIcon from "/assets/img/icon_comp.svg";
import OkIcon from "/assets/img/icon_ok.svg";

const Home: React.FC = () => {
  return (
    <div>
      <Container alignItems="center" justifyContent="center">
        <BackgroundImage imageUrl={ImageOcean} altText="Ocean" />
        <TitlePage>Minha Primeira Página com React TS!</TitlePage>
      </Container>

      <Container alignItems="center" justifyContent="center" gap="80px">
        <Card icon={ComputerIcon} title={"Somente para desktop"} description={"Vamos aprender, como utilizar um framework."} />
        <Card icon={ComponentIcon} title={"Criado com componentes"} description={"Utilizamos o Styled Components."} />
        <Card icon={OkIcon} title={"Fácil aproveitamento"} description={"Estamos no caminho."} />
      </Container>
    </div>
  );
};

export default Home;
