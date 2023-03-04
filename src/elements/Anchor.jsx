import React from 'react';
import Text from './Text';

const Anchor = ({ url, children, ...props }) => {
  return (
    <a href={url} target='blank'>
      <Text {...props}>{children}</Text>
    </a>
  );
};

export default Anchor;
