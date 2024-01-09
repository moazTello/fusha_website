import React from 'react'
import './Package1.css';

const PackagePrice = ({country,text,img,price}) => {
  return (
    <div className='container_offer'>
        <div className='contain_image'>
            <img className='image_offer' src={img} alt={country}/>
        </div>
        <div className='contain_text_package'>
            <p className='country_text'>{country}</p>
            <p className='text_lourem'>{text}</p>
            <div className='price'>
                <p>{price} AED</p>
                <p>per person</p>
            </div>
        </div>
    </div>
  )
}

export default PackagePrice