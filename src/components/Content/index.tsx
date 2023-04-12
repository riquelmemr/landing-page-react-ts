import React from "react";
import { TextContainer } from "./styles";
import Container from "../Container";
import Banner from "../Banner";

interface ContentProps {
  flexDirection?: string;
  bannerWidth?: string;
  bannerPosition?: string;
  bannerUrl: string;
  bannerAlt: string;
}

const Content: React.FC<ContentProps> = ({ bannerWidth, bannerPosition, bannerUrl, bannerAlt, flexDirection }) => {
  return (
    <Container flexDirection={flexDirection}>
      <TextContainer>
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          provident cum quae doloribus rerum esse reiciendis necessitatibus,
          impedit quam, optio illum, quasi saepe recusandae sapiente sed id
          beatae eum delectus? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquam provident cum quae doloribus rerum esse
          reiciendis necessitatibus, impedit quam, optio illum, quasi saepe
          recusandae sapiente sed id beatae eum delectus? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Aliquam provident cum quae
          doloribus rerum esse reiciendis necessitatibus, impedit quam, optio
          illum, quasi saepe recusandae sapiente sed id beatae eum delectus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          provident cum quae doloribus rerum esse reiciendis necessitatibus,
          impedit quam, optio illum, quasi saepe recusandae sapiente sed id
          beatae eum delectus?
        </p>
      </TextContainer>
      <Banner
        width={bannerWidth}
        position={bannerPosition}
        imageUrl={bannerUrl}
        altText={bannerAlt}
      />
    </Container>
  );
};

export default Content;
