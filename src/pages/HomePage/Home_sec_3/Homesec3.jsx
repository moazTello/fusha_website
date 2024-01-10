import React from 'react';
import './Homesec3.css';
import ImageSlider from './ImageSlider'
import img1 from '../../../images/Home_sec_1.png';
import img2 from '../../../images/galary.png';
import img3 from '../../../images/Home_sec_1.png';
import img4 from '../../../images/galary.png';

const Homesec3 = () => {
  const slider = [
    {srcIm:`${img1}`},
    {srcIm:`${img2}`},
    {srcIm:`${img3}`},
    {srcIm:`${img4}`},
  ]
  return (
    <div className='homesec3_main'>
      <ImageSlider slider={slider}/>
    </div>
  )
}

export default Homesec3