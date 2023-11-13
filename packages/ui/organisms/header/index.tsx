import {NavBackground} from '@trinity-steelindo/ui/atoms';
import {NavbarItem} from '../../molecules';

export const Header = () => (
  <div className="NavbarItemContainer">
    <NavBackground>
      <NavbarItem text="Katalog Produk" />
      <NavbarItem text="Tentang Kami" />
    </NavBackground>
  </div>
);
