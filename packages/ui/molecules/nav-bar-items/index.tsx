import {Text} from '../../atoms';

type Props = {
  text?: string;
};

export const NavbarItem = ({text}: Props) => (
  <div>
    <Text text={text} />
  </div>
);
