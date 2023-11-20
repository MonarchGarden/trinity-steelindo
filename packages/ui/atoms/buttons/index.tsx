import React, {PropsWithChildren} from 'react';

type Props = PropsWithChildren & {text?: string};

export const Button = ({text, children}: Props) => {
  return <button title={text}>{children}</button>;
};
