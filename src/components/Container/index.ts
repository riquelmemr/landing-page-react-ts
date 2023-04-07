import styled from "styled-components";

interface ContainerProps {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  gap?: string;
}

const Container = styled.div<ContainerProps>`
  height: 100vh;
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap && props.gap};
`;

export default Container;