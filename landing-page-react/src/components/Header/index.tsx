import { Header, Image, Nav, Link } from "./styles";
import Logo from '../../assets/images/logo1.svg';

export function HeaderComponent() {
  return (
    <Header>
      <Image src={Logo} alt="Imagem logo" />
      <Nav>
        <Link>Comunidade Ballerini</Link>
        <Link>Tutorial</Link>
        <Link>Open Source</Link>
        <Link>Comandos</Link>
      </Nav>
    </Header>
  );
}