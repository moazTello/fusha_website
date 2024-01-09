import React from 'react'
import Footer from '../../components/Layout/Footer'
import './About.css';
import fusha from '../../images/Logo.svg';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [t] = useTranslation("global");
  return (
    <div className='about_main'>
        <div className='about_container'>
            <div className='about_box'>
                <img className='about_logo' src={fusha} alt='' />
                <p className='abouttitle'>{t("about.abouttitle")}</p>
                <p className='abouttext'>{t("about.abouttext")}</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About