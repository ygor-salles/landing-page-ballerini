import BalleBotSvg from "../../assets/images/ballebot.svg";
import {
  Main,
  Button,
  Content,
  ImageBalleBot,
  Paragraph,
  SectionPrimary,
  SectionSecondary,
  SubTitle,
  Title,
  TitleSecondary,
} from "./styles";

export function HomePage() {
  const handleAdd = () => {
    // eslint-disable-next-line no-alert
    alert("Adicionado");
  };

  return (
    <Main>
      <SectionPrimary>
        <Content>
          <Title>Balle Bot</Title>
          <SubTitle>Deixe a sua comunidade segura de um jeito fácil</SubTitle>
          <Button onClick={handleAdd}>Me adicione!</Button>
        </Content>
        <ImageBalleBot src={BalleBotSvg} alt="Imagem Balle Bot" />
      </SectionPrimary>

      <SectionSecondary>
        <TitleSecondary>O que ela faz por você?</TitleSecondary>
        <Paragraph>
          1. Cria um <strong>sistema de verificação capcha</strong> para novos
          membros garantirem que não são robôs
        </Paragraph>
        <Paragraph>
          2. Possui um <strong>sistema de banimento automático</strong> para
          links suspeitos que forem enviados na comunidade
        </Paragraph>
        <Paragraph>
          3. <strong>Sistema de avisos e banimento manual</strong>, para pessoas
          administradoras utilizarem
        </Paragraph>
      </SectionSecondary>
    </Main>
  );
}
