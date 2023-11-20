import React, {useCallback, useState} from 'react';

type Props = {
  text?: string;
};

export const Text = ({text}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHovered = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleUnHovered = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      className={'Text'}
      onMouseOver={handleHovered}
      onMouseLeave={handleUnHovered}>
      {!isHovered && <div>{text}</div>}
      {isHovered && <div>I'll appear when you hover over the button.</div>}
    </div>
  );
};
