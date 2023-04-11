import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 100vh;

  span {
    color: ${props => props.theme.colors.secondary};
  }
`

export const FooterList = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
  font-size: 18px;

  :first-child {
    list-style: none;
  }

  li {
    font-weight: 500;
    color: ${props => props.theme.colors.info};
  }
`;