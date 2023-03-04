import React from 'react';
import Text from './Text';

const Anchor = ({ src, children, ...props }) => {
  return (
    <a href={src} target='blank'>
      <Text {...props}>{children}</Text>
    </a>
  );
};

export default Anchor;
