import styled from "styled-components";

interface ContainerProps {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  gap?: string;
  width?: string;
  height?: string;
  padding?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  padding: ${(props) => props.padding};
`;

export default Container;