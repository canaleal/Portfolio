import React from 'react';

function ImageCard({
  id, colSpan = '1', imglink, title, isNsfw = false,
}) {
  return (
    <div id={id} className={` col-span-${colSpan} `}>
      <img height="100" width="auto" src={`${imglink}`} alt={`${title}`} className={`img-card img-card-lg ${isNsfw ? 'blur' : ''} shadow-xl `} />
    </div>
  );
}

export default ImageCard;
