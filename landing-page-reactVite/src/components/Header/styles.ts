import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 24px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Image = styled.img`
  height: 72px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Link = styled.a`
  font-family: 'Sarala', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #FFF2E7;
`;