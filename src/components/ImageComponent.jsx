import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const ImageComponent = ({ src, hash }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
        <Blurhash hash={hash} height="" width="" />
      </div>
      <img
        src={src}
        alt=""
        style={{ display: !imageLoaded ? 'none' : 'inline' }}
      />
    </>
  );
};

export default ImageComponent;
