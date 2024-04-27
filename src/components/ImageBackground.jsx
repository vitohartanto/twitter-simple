import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const ImageBackground = ({ src, hash }) => {
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
        <Blurhash hash={hash} height="100vh" width="100vw" />
      </div>
      <img
        src={src}
        alt=""
        className="w-screen h-screen fixed"
        style={{ display: !imageLoaded ? 'none' : 'inline' }}
      />
    </>
  );
};

export default ImageBackground;
