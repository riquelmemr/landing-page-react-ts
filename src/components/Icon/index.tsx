import React from "react"
import { IconStyled } from "./styles";

interface IconProps {
  src: string;
  alt: string;
  width: string;
  href?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, href, width }) => {
  if (href) {
    return (
      <a href={href}>
        <IconStyled src={src} alt={alt} width={width} />
      </a>
    )
  }
  
  return <IconStyled src={src} alt={alt} width={width} />
}

export default Icon;