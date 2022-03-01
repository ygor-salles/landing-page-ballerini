import Logo from "../../assets/images/logo1.svg";
import { Header, Image, Nav, Link } from "./styles";

export function HeaderComponent() {
  return (
    <Header>
      <Image src={Logo} alt="Imagem logo" />
      <Nav>
        <Link href="/">Comunidade Ballerini</Link>
        <Link href="/">Tutorial</Link>
        <Link href="/">Open Source</Link>
        <Link href="/">Comandos</Link>
      </Nav>
    </Header>
  );
}
