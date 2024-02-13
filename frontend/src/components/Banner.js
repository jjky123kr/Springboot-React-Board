import React from 'react';
import banner from '../img/banner.png'

const Banner = () => {
  const bannerStyle = {
    width: '100%',
    height: '250px',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

 

  return (
    <div style={bannerStyle}>
      <img
        src={banner} // require로 가져온 이미지의 경로
        alt="Banner"
        style={imageStyle}
      />
    </div>
  );
};

export default Banner;
