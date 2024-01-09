import React from 'react'
import './Homesec2.css';
import { useTranslation } from 'react-i18next';
import Package from './Package';
import moaz from '../../../images/yassermoaz.jpeg';
import flag from '../../../images/syria.png';
import im1 from '../../../images/package1_test.svg';
import im2 from '../../../images/package2_test.svg';
import im3 from '../../../images/package3_test.svg';
const Homesec2 = () => {
  const [t] = useTranslation("global");
  return (
    <div className='homesec2'>
      <div className='popular'>
        {t("Home.popular")}
      </div>
      <div className='offers_all'>
        <Package 
                text={'text this is fusha web application for reserving and send problems text this is fusha web application for reserving and send problems'} 
                country={'syria'}
                flag={flag}
                img={im1}
        />
        <Package 
                text={'text this is fusha web application for reserving and send problems'} 
                country={'syria'}
                flag={flag}
                img={im2}
        />
        <Package 
                text={'text this is fusha web application for reserving and send problems'} 
                country={'syria'}
                flag={flag}
                img={im3}
        />
        <Package 
                text={'text this is fusha web application for reserving and send problems'} 
                country={'syria'}
                flag={flag}
                img={moaz}
        />
      </div>
    </div>
  )
}

export default Homesec2