import styled from "styled-components";

interface IconProps {
  src: string;
  alt: string;
  width: string;
}

export const IconStyled = styled.img<IconProps>`
  src: ${props => props.src};
  alt: ${props => props.alt};
  width: ${props => props.width};
`;