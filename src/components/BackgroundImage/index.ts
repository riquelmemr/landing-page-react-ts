import styled from "styled-components";

interface BackgroundImageProps {
  imageUrl: string;
  altText: string;
}

const BackgroundImage = styled.img<BackgroundImageProps>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
`;

export default BackgroundImage;