import React from "react";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import ImageOcean from "/assets/img/ocean.jpg";
import ComputerIcon from "/assets/img/icon_computer.svg";
import ComponentIcon from "/assets/img/icon_comp.svg";
import OkIcon from "/assets/img/icon_ok.svg";
import Card from "../../components/Card";
import { Title } from "./styles";
import Content from "../../components/Content";
import Phone from "/assets/img/phone.jpg";
import Code from "/assets/img/code.jpg";
import Children from "/assets/img/children.jpg";
import Footer from "../../components/Footer";

const Home: React.FC = () => {

  const cardContents = [
    {
      icon: ComputerIcon,
      title: "Somente para desktop",
      description: "Vamos aprender, como utilizar um framework."
    },
    {
      icon: ComponentIcon,
      title: "Criado com componentes",
      description: "Utilizamos o Styled Components."
    },
    {
      icon: OkIcon,
      title: "Fácil aproveitamento",
      description: "Estamos no caminho."
    }
  ]

  const contents = [
    {
      bannerWidth: "50%",
      bannerUrl: Phone,
      bannerAlt: "Phone",
    },
    {
      bannerWidth: "50%",
      bannerUrl: Code,
      bannerAlt: "Code",
      flexDirection: "row-reverse",
    },
    {
      bannerWidth: "50%",
      bannerUrl: Children,
      bannerAlt: "Children",
    }
  ]
  
  return (
    <React.Fragment>
      <header>
        <Container alignItems="center" justifyContent="center" height="60vh">
          <Banner imageUrl={ImageOcean} altText="Ocean" position="absolute" height="60vh" />
          <Title>Minha Primeira Página com React TS!</Title>
        </Container>
      </header>

      <main>
        <Container alignItems="center" justifyContent="center" gap="80px" height="40vh">
          {
            cardContents.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                icon={icon}
                title={title}
                description={description}
              />
            ))
          }
        </Container>

        {
          contents.map(({ bannerWidth, bannerUrl, bannerAlt, flexDirection }, index) => (
            <Content
              key={index}
              bannerWidth={bannerWidth}
              bannerUrl={bannerUrl}
              bannerAlt={bannerAlt}
              flexDirection={flexDirection}
            />
          ))
        }
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
