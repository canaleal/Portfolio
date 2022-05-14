import React from 'react';
import { Link } from 'react-router-dom';

function GalleryCard({ artElement }) {
  const {
    id, colSpan, imglink, title, isNsfw,
  } = artElement;
  return (
    <Link to={{ pathname: `/gallery/${id}` }} className={` col-span-${colSpan} shadow-xl `}>
      <img height="100" width="auto" src={`${imglink}`} alt={`${title}`} className={`card card-lg ${isNsfw ? 'blur' : ''}`} loading="lazy" />
    </Link>
  );
}

export default GalleryCard;
