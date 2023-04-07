import React from "react";
import Container from "../../components/Container";
import BackgroundImage from "../../components/BackgroundImage";
import ImageOcean from "../../../public/assets/img/ocean.jpg";
import { TitlePage } from "./styles";
import Card from "../../components/Card";

const Home: React.FC = () => {
  return (
    <div>
      <Container alignItems="center" justifyContent="center">
        <BackgroundImage imageUrl={ImageOcean} altText="Ocean" />
        <TitlePage>Minha Primeira Página com React TS!</TitlePage>
      </Container>

      <Container alignItems="center" justifyContent="center" gap="100px">
        <Card title={"Somente para desktop"} description={"Vamos aprender, como utilizar um framework."} />
        <Card title={"Criado com componentes"} description={"Utilizamos o Styled Components."} />
        <Card title={"Fácil aproveitamento"} description={"Estamos no caminho."} />
      </Container>
    </div>
  );
};

export default Home;
