import React from 'react';
import './Homesec2.css';

const Package = ({country,text,img,flag}) => {
  return (
    <div className='container_offer'>
        <div className='contain_image'>
            <img className='image_offer' src={img} alt={country}/>
            <img className='flag' src={flag} alt={country}/>
        </div>
        <div className='contain_text'>
            <p className='country_text'>{country}</p>
            <p className='text_lourem'>{text}</p>
        </div>
    </div>
  )
}

export default Package