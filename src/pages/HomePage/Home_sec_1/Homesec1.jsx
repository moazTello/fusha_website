import React from 'react';
import './Home_sec_1.css'
import Logo from '../../../images/Logo.svg';
import { useTranslation } from 'react-i18next';

const Homesec1 = () => {
  const [t] = useTranslation("global");
  return (
    <div className='Home_sec_1_main'>
      <div>
        <img src={Logo} className='logo' alt='fusha'/>
      </div>
      <div className='dream_container'>
        <p className='dream'>{t("Home.dream")}</p>
        <p className='dream1'>{t("Home.dream1")}</p>  
      </div>
      <div className='explore_div'>
        <button className='explore'>
          {t("Home.explore")}
        </button>
      </div>
    </div>
  )
}

export default Homesec1