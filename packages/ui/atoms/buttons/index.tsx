import {PropsWithChildren} from 'react';

type Props = PropsWithChildren;
// & {
//   type?: string;
//   size?: number;
//   color?: string;
// };

// export const Button = ({type, size, color, children}: Props) => {
export const Button = ({children}: Props) => {
  return <button className="Button-Style">{children}</button>;
};
