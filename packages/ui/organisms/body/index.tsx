import React, {PropsWithChildren} from 'react';
import {motion} from 'framer-motion';

type Props = PropsWithChildren & {
  showsOnce: boolean;
};

export const Body = ({children, showsOnce}: Props) => {
  return (
    <motion.div
      className="relative flex h-screen flex-col items-center justify-between overflow-hidden bg-colorBackground text-xl sm:block"
      initial="hidden"
      animate={showsOnce ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
};
