import React from 'react';
import './Tours1.css';
import Package from '../../HomePage/Home_sec_2/Package';
import { useTranslation } from 'react-i18next';
import moaz from '../../../images/yassermoaz.jpeg';
import flag from '../../../images/syria.png';
import bri from '../../../images/Flag_of_the_United_Kingdom_(1-2).svg.webp';
import im1 from '../../../images/package1_test.png';
import im2 from '../../../images/package2_test.png';
import im3 from '../../../images/package3_test.png';
import im4 from '../../../images/package4_test.png';

const Tours1 = () => {
  const [t] = useTranslation("global");
  return (
    <div className='tours_1_main'>
    <div className='popular'>
      {t("tours.destenation")}
    </div>
    <div className='offers_all'>
      <Package 
              text={'text this is fusha web application for reserving and send problems text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={flag}
              img={moaz}
      />
      <Package 
              text={'text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={bri}
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
              flag={bri}
              img={im3}
      />
      <Package 
              text={'text this is fusha web application for reserving and send problems text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={flag}
              img={im4}
      />
      <Package 
              text={'text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={flag}
              img={moaz}
      />
      <Package 
              text={'text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={bri}
              img={moaz}
      />
      <Package 
              text={'text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={flag}
              img={im1}
      />
      <Package 
              text={'text this is fusha web application for reserving and send problems text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={flag}
              img={moaz}
      />
      <Package 
              text={'text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={bri}
              img={im4}
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
              flag={bri}
              img={moaz}
      />
      <Package 
              text={'text this is fusha web application for reserving and send problems text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={bri}
              img={im3}
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
              img={im4}
      />
      <Package 
              text={'text this is fusha web application for reserving and send problems'} 
              country={'syria'}
              flag={bri}
              img={im1}
      />
    </div>
  </div>
  )
}

export default Tours1