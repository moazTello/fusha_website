import React from 'react'
import './Navbar.css';
import airarbia from '../../images/airarabia.svg';
import emaraits from '../../images/emarait.svg';
import fly from '../../images/flydubai.svg';
import itehad from '../../images/ithad.svg';
import saada from '../../images/saada.svg';
import fushafooter from '../../images/fushafooter.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <div className='footer_2_lines'>
      <div className='footer_main'>
        <div className='footer_side_1'>
          <img className='airarbia' src={airarbia} alt=''/>
          <img className='emaraits' src={emaraits} alt=''/>
          <img className='fly' src={fly} alt=''/>
          <img className='itehad' src={itehad} alt=''/>
          <img className='saada' src={saada} alt=''/>
          <img className='fushafooter' src={fushafooter} alt=''/>

        </div>
        <div className='footer_side_2'>
          <div className='footer_list'>
            <p>{t("footer.social")}</p>
            <p>{t("footer.face")}</p>
            <p>{t("footer.telegram")}</p>
            <p>{t("footer.insta")}</p>
            <p>{t("footer.whats")}</p>
            <p>{t("footer.youtube")}</p>

          </div>
          <div className='footer_list'>
            <p>{t("footer.menu")}</p>
            <Link to='/fusha'  className='footer_link'>
                <p style={{}}>{t("header.Home")}</p> 
            </Link>
            <Link to='/packages' className='footer_link' >
                <p style={{}}>{t("header.Packages")}</p> 
            </Link>
            <Link to='/tours'  className='footer_link' >
                <p style={{}}>{t("header.Tours")}</p>
            </Link>
            <Link to='/about'  className='footer_link' >
                <p style={{}}>{t("header.About")}</p>
            </Link>
            <Link to='/contact'  className='footer_link' >
                <p style={{}}>{t("header.Contact")}</p> 
            </Link>
          </div>
          <div className='footer_list'>
            <p>{t("footer.contact")}</p>
            <p>info@helpfusha.com</p>
            <p>info@servicefusha.com</p>
            <p>+963 966 617 100</p>
            <p>+963 966 617 100</p>
            <p>+963 966 617 100</p>
          </div>
        </div>
      </div>
      <div className='way_go_team'>
        <p>
          Copyright 2023 | FUSHA Team | All Rights Reserved.
        </p>
        <p>
          Powered by WayGo Team
        </p>
      </div>
    </div>
  )
}

export default Footer