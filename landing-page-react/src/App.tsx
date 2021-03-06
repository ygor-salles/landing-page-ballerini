import { FooterComponent } from "./components/Footer";
import { HeaderComponent } from "./components/Header";
import { Routers } from "./routers.routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <Routers />
      <FooterComponent />
    </>
  );
}
