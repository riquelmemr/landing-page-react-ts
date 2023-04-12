import styled from "styled-components";

interface BannerProps {
  imageUrl: string;
  altText: string;
  position?: string;
  width?: string;
  height?: string;
}

const Banner = styled.img<BannerProps>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  position: ${({ position }) => position || "block"};
  z-index: -1;
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "100%"};
`;

export default Banner;