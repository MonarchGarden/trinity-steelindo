import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren;

export const Body = ({children}: Props) => {
  return <body className="bg-colorBackground px-10 py-10">{children}</body>;
};
