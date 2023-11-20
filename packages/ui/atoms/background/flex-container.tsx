import React, {PropsWithChildren} from 'react';
import './style.css';
type Props = PropsWithChildren;

export const FlexContainer = ({children}: Props) => (
  <div className="flex items-center justify-center px-6 sm:px-16">
    {children}
  </div>
);
