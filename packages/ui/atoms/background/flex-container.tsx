import React, {PropsWithChildren} from 'react';
import './style.css';
type Props = PropsWithChildren;

export const FlexContainer = ({children}: Props) => (
  <div className="flex ">{children}</div>
);
