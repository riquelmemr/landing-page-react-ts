import React from "react";
import { CardContainer, DescriptionCard, TitleCard } from "./styles";
import Icon from "../Icon";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <CardContainer>
      <Icon src={icon} alt="Card Icon" width="100px"/> 
      <TitleCard>{title}</TitleCard>
      <DescriptionCard>{description}</DescriptionCard>
    </CardContainer>
  );
};

export default Card;