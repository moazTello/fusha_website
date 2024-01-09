import React from 'react';
import './Homesec6.css';
import { useTranslation } from 'react-i18next';
import { BsWhatsapp } from "react-icons/bs";

const Homesec6 = () => {
  const [t] = useTranslation("global");
  return (
    <div className='home6_main'>
      <p className='home6_title'>{t("home6.looking")}</p>
      <p className='home6_lorem'>{t("home6.youwant")}</p>
      <p className='home6_lorem'>{t("home6.brows")}</p>
      <p className='home6_lorem'>{t("home6.brows1")}</p>
      <div className='home6_btns'>
        <a className='home6_whats' href='http://localhost:3000/'>
          <BsWhatsapp/>
          {t("home6.whats")}
        </a>
        <a className='home6_view' href='http://localhost:3000/'>
          {t("home6.view")}
        </a>
      </div>
    </div>
  )
}

export default Homesec6