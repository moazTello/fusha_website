import React, {useContext, useState} from 'react'
import './Navbar.css';
import useWindowSize from '../../hooks/useWindowSize';
import { Link } from 'react-router-dom';
import { AiOutlineClose
    // ,AiOutlineGlobal
} from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { BiMenu } from 'react-icons/bi';
import DataContext from '../../context/DataContext';


const Navbar = () => {
    const {lang,setLang} = useContext(DataContext);
    const [t,i18n] = useTranslation("global");
    const langchange = () => {
        if(lang){
            i18n.changeLanguage('en');
            setLang(!lang);
        }
        else{
            i18n.changeLanguage('ar');
            setLang(!lang);
        }
    }
    const { width } = useWindowSize();
    const [ clicked , setClicked ] = useState(false);
    const handleClick = () => {
        if(width<=1050){
            setClicked(!clicked);
        }
    }
  return (
    <div className='nav_main'>
    <nav className='nav_2'>
         <div className='menu-icon' onClick={handleClick}>
                 <i className='bar'>
                     {clicked ? <AiOutlineClose size={25} color='white'/> : <BiMenu size={25} color='white'/>}
                 </i>
         </div>
         {/* {width > 1050 &&  <img src={logo} style={{height:'80px',marginLeft:'80px'}} alt=''/>} */}
     <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
         <Link to='/fusha'  className='nav-links' onClick={() => {handleClick();}}>
             <p style={{}}>{t("header.Home")}</p> 
         </Link>
         <Link to='/packages' className='nav-links' onClick={() => {handleClick();}}>
             <p style={{}}>{t("header.Packages")}</p> 
         </Link>
         <Link to='tours'  className='nav-links' onClick={() => {handleClick();}}>
             <p style={{}}>{t("header.Tours")}</p>
         </Link>
         <Link to='/about'  className='nav-links' onClick={() => {handleClick();}}>
             <p style={{}}>{t("header.About")}</p>
         </Link>
         <Link to='/contact'  className='nav-links' onClick={() => {handleClick();}}>
             <p style={{}}>{t("header.Contact")}</p> 
         </Link>
         <button onClick={() => 
             {handleClick();langchange();}} 
             className='nav-links' style={{border:'none',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:width>'1050'?'100px':'0px'}}>
             {t("header.ENG")} \/
             {/* <AiOutlineGlobal size={24}/> */}
         </button>
     </ul>
    </nav> 
 </div>
  )
}

export default Navbar