import Logo from "../../assets/images/logo1.svg";
import { Header, Image, Nav, Link } from "./styles";

export function HeaderComponent() {
  return (
    <Header>
      <Image src={Logo} alt="Imagem logo" />
      <Nav>
        <Link href="/a">Comunidade Ballerini</Link>
        <Link href="/a">Tutorial</Link>
        <Link href="/a">Open Source</Link>
        <Link href="/a">Comandos</Link>
      </Nav>
    </Header>
  );
}
