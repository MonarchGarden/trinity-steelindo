import React, {PropsWithChildren} from 'react';

type Props = PropsWithChildren & {text?: string};

export const Button = ({text, children}: Props) => {
  return (
    <button className="Button-Style" title={text}>
      {children}
    </button>
  );
};
