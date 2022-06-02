import React from 'react';

function ImageCard({
  id, colSpan = '1', containerlink, imglink, title, isNsfw = false,
}) {
  return (
    <a href={containerlink} target="_blank" rel="noreferrer" aria-label="Github" id={id} className={` col-span-${colSpan} `}>
      <img height="100" width="auto" src={`${imglink}`} alt={`${title}`} className={`img-card img-card-lg ${isNsfw ? 'blur' : ''} shadow-xl `} />
    </a>
  );
}

export default ImageCard;
