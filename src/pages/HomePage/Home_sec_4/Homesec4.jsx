import React from 'react'
import './Homesec4.css';
import { useTranslation } from 'react-i18next';
// import { BsCheck2Circle } from "react-icons/bs";
// import { FaRegChessQueen } from "react-icons/fa6";
import experience from '../../../images/experience.svg';
import guarantee from '../../../images/guarantee.svg';
import service from '../../../images/service.svg';

const Homesec4 = () => {
  const [t] = useTranslation("global");
  return (
    <div className='Home4_main'>
      <div className='home4_why'>
      {t("home4.why")}
      </div>
      <div className='home4_boxes'>
        <div className='home4_container'>
          <img src={guarantee} alt=''/>
          <p className='home4_title'>{t("home4.guarantee")}</p>
          <p className='home4_laurem'>{t("home4.guaranting")}</p>
        </div>
        <div className='home4_container'>
          <img src={service} alt=''/>
          <p className='home4_title'>{t("home4.service")}</p>
          <p className='home4_laurem'>{t("home4.best")}</p>
        </div>
        <div className='home4_container'>
          <img src={experience} alt=''/>
          <p className='home4_title'>{t("home4.experience")}</p>
          <p className='home4_laurem'>{t("home4.our")}</p>
        </div>
      </div>
    </div>
  )
}

export default Homesec4