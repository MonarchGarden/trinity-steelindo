import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren;

export const ContainerWidth = ({children}: Props) => {
  return <div className="xl:max-w-[1500px]">{children}</div>;
};
