import {NavBackground, Text} from '../../atoms';

// type Props = {
//   logo?: React.ReactNode;
// };

// export const Navbar = ({logo}: Props) => {
export const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <NavBackground>
            <Text text="Beranda" />
            <Text text="Katalog Produk" />
          </NavBackground>
        </header>
      </div>
    </>
  );
};
