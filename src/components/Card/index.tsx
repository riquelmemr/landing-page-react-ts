import React from "react";
import { CardContainer, CardIcon, DescriptionCard, TitleCard } from "./styles";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <CardContainer>
      <CardIcon src={icon} alt="Card Icon" /> 
      <TitleCard>{title}</TitleCard>
      <DescriptionCard>{description}</DescriptionCard>
    </CardContainer>
  );
};

export default Card;