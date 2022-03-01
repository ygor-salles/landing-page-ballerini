import styled from "styled-components";

export const Main = styled.main`
  margin-bottom: 48px;
  border-top: 0.4px solid #FFF2E7;
`;

export const SectionPrimary = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: 'Righteous', cursive;
  font-weight: 400;
  font-size: 64px;
  color: #FFF2E7;
`;

export const SubTitle = styled.h2`
  font-family: 'Sarala', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #ECD6C4;
`;

export const Button = styled.button`
  width: 180px;
  height: 60px;
  border: none;
  background: #ECD6C4;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;

  font-family: 'Sarala', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #2F2325;

  &:hover {
    background-color: rgba(236, 214, 196, 0.53)
  }
`;

export const ImageBalleBot = styled.img`
  height: 430px;
`;

export const SectionSecondary = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 48px;
`;

export const TitleSecondary = styled.h3`
  border-top: 0.4px solid #FFF2E7;
  padding-top: 48px;
  font-family: 'Righteous', cursive;
  font-weight: 400;
  font-size: 24px;
  color: #FFF2EF;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-family: 'Sarala', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #ECD6C4;
`;

