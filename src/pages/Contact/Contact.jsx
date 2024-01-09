import React from 'react'
import Footer from '../../components/Layout/Footer';
import './Contact.css';
import { useTranslation } from 'react-i18next';
const Contact = () => {
    const [t] = useTranslation("global");
  return (
    <div className='contact_main'>
        <div className='contact_container'>
            <div className='contact_box'>
                <div style={{width:"320px",height:"320px"}}> <iframe title='map1' width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=damascus&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe></div>
                <div className='contact_list_container'>
                    <p>{t("header.Contact")}</p>
                    <p>info@helpfusha.com</p>
                    <p>info@servicefusha.com</p>
                    <p>+963 966 617 100</p>
                    <p>+963 966 617 100</p>
                    <p>+963 966 617 100</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact