import React from "react";
import { CardContainer, IconCard, TitleCard } from "./styles";
import Computer from "../../../public/assets/img/icon_computer.svg";

interface CardProps {
  title: string;
  description: string;
}

// Criar IconCard dinâmico
const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <CardContainer>
      <IconCard src={Computer} alt="Computer" /> 
      <TitleCard>{title}</TitleCard>
      <p>{description}</p>
    </CardContainer>
  );
};

export default Card;