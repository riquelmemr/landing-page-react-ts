import styled from "styled-components";

interface IconProps {
  width: string;
}

export const IconStyled = styled.img<IconProps>`
  width: ${props => props.width};
`;