import BalleriniSvg from '../../assets/images/BALLERINI.svg'
import { Footer } from './styles';

export function FooterComponent() {
  return (
    <Footer>
      <img src={BalleriniSvg} alt="Image Ballerni" />
    </Footer>
  );
}