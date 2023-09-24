import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { MdMailOutline } from "react-icons/md"
import { BiPhoneCall } from "react-icons/bi";
import flaguz from "../../assests/flaguz.svg"
import flagru from "../../assests/flaru.png"
import { Link } from 'react-router-dom';
import i18n from '../language/i18next';
import "./Nav.scss";
import { useTranslation } from 'react-i18next';

function Nav() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [ languageState, setLangugageState ] = useState(localStorage.getItem('lang') || 'uz')

  function changeLang (selectedLang){
    i18n.changeLanguage(selectedLang)
    setLangugageState(selectedLang)
    dispatch({language_code: selectedLang, type: 'CHANGE_LANGUAGE'})
  }

  return (
    <div className='navbar'>
        <div className="language_select">
           <img src={flaguz} alt="UZ" style={ languageState === "uz" ? {borderBottom: '3px solid dodgerblue'} : null }  onClick={() => changeLang('uz')}/>
            <img  src={flagru} alt="RU" style={ languageState === "ru" ? {borderBottom: '3px solid dodgerblue'} : null } onClick={() => changeLang('ru')}/>
        </div>
        <div className="contact">
            <div className="callphone">
                <Link to='tel:+998 93 938 21 12'><BiPhoneCall size={35} className='co call'/>+998 93 938 21 12</Link>
            </div>
            <div className="mailto">
                <Link to='mailto:sancrops117@gmail.com'><MdMailOutline size={35} className='co mail'/>sancrops117@gmail.com</Link>
            </div>
        </div>
    </div>
  )
}

export default Nav