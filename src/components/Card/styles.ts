import styled from "styled-components";

export const CardContainer = styled.div`
  width: 400px;
  height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TitleCard = styled.h3`
  color: #000000;
  font-size: 30px;
  font-weight: bold;
`;

export const DescriptionCard = styled.p`
  font-size: 22px;
  text-align: center;
  height: 60px;
`;

interface CardIconProps {
  src: string;
}

export const CardIcon = styled.img<CardIconProps>` 
  src: ${props => props.src};
  width: 100px;
  color: #333333;
`;
