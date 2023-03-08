import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Edit() {
  const {
    state: {
      imageUrlList,
      price: detailPrice,
      location,
      title: detailTitle,
      content: detailContent,
    },
  } = useLocation();
  return <div></div>;
}
