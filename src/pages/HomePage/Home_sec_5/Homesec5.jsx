import React from 'react'
import './Homesec5.css';
import { useTranslation } from 'react-i18next';
// import { BsCheck2Circle } from "react-icons/bs";
// import { FaRegChessQueen } from "react-icons/fa6";
import airplane from '../../../images/airplane.png';
import ship from '../../../images/ship.svg';
import hiking from '../../../images/hiking.svg';



const Homesec5 = () => {
  const [t] = useTranslation("global");
  return (
    <div className='Home5_main'>
      <div className='home5_why'>
      {t("home5.have")}
      </div>
      <div className='home5_boxes'>
        <div className='home5_container'>
          <img className='img5' src={airplane} alt=''/>
          <div className='home5_text'>
            <p className='home5_title'>{t("home5.Booking")}</p>
            <p className='home5_laurem'>{t("home5.lourem")}</p>
          </div>
        </div>
        <div className='home5_container'>
            <div className='home5_content'>
            <img className='img5' src={ship} alt=''/>
            <div className='home5_text'>
                <p className='home5_title'>{t("home5.Sailing")}</p>
                <p className='home5_laurem'>{t("home5.lourem")}</p>
            </div>
            </div>
            <div className='home5_content'>
            <img className='img5' src={hiking} alt=''/>
            <div className='home5_text'>
                <p className='home5_title'>{t("home5.Hiking")}</p>
                <p className='home5_laurem'>{t("home5.lourem")}</p>
            </div>
            </div>
        </div>
        <div className='home5_container'>
            <div className='home5_content'>
            <img className='img5' src={ship} alt=''/>
            <div className='home5_text'>
                <p className='home5_title'>{t("home5.Sailing")}</p>
                <p className='home5_laurem'>{t("home5.lourem")}</p>
            </div>
            </div>
            <div className='home5_content'>
            <img className='img5' src={hiking} alt=''/>
            <div className='home5_text'>
                <p className='home5_title'>{t("home5.Hiking")}</p>
                <p className='home5_laurem'>{t("home5.lourem")}</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homesec5