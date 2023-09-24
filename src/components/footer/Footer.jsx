import React from 'react'
import "./Footer.scss"
import { BiPhoneCall } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md"
import { SlLocationPin } from "react-icons/sl"
import { FaTelegramPlane, FaFacebook, FaYoutube } from "react-icons/fa"
import logo from "../../assests/logo.svg"
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='Footer'>
        <div className="about_us">
            <ul className='about_main'>
                <li className='about_list'>
                    <div className="about_ic">
                        <SlLocationPin className='location' size={35}/>
                    </div>
                    <div className="about_desc">
                        <h2>Бизнинг манзил</h2>
                        <p>Наманган вилояти , Давлатобод тумани , <br /> Дустлик Шох кучаси 109-уй</p>
                    </div>
                </li>
                <li className='about_list'>
                    <div className="about_ic">
                        <BiPhoneCall  className='call' size={35}/>
                    </div>
                    <div className="about_desc">
                        <h2>Биз билан боғланинг</h2>
                        <p>+998 91 186 00 85</p>
                    </div>
                </li>
                <li className='about_list'>
                    <div className="about_ic">
                        <MdMailOutline className='mail' size={35}/>
                    </div>
                    <div className="about_desc">
                        <h2>Электрон манзил</h2>
                        <p>erkinjon.hodjaev@gmail.com</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="social_section">
            <div className="contacts_medias">
                <img src={logo} alt="Logo" width={150} height={100}/>
                <p>
                Қолип тайёрлаш учун барча асбоблар, қолип <br />
                бутловчи қисмлари ва аксессуарлари, қолип <br />
                учун киёвий моддалар, силлиқлаш ва <br />
                сайқаллаш асбоблари, абразив тошлар, CNC <br />
                дастгохлари, Термопластавтоматлар ва <br />
                хоказолар.
                </p>
                <div className="watch_us">
                    <h2>Бизни кузатиб боринг</h2>

                    <div className="contact_icons">
                        <NavLink to="/"><FaTelegramPlane size={35} className='ic telegram'/></NavLink>
                        <NavLink to="/"><FaFacebook size={35} className='ic facebook'/></NavLink>
                        <NavLink to="/"><FaYoutube  size={35} className='ic youtube'/></NavLink>
                    </div>
                </div>
            </div>
            <div className="about-and_reports_section">
                <div className="working_links">
                    <h2>Фойдали ҳаволалар</h2>
                    <div className="work_border"></div>
                    <ul className='link_main'>
                        <li className='link_list'>
                            <NavLink to="/">Бош сахифа</NavLink>
                        </li>
                        <li className='link_list'>
                            <NavLink to="/partners">Ҳамкорлар</NavLink>
                        </li>
                        <li className='link_list'>
                            <NavLink to="/about">Биз ҳақимизда</NavLink>
                        </li>
                        <li className='link_list'>
                            <NavLink to="/contact">Алоқа</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="for_clients">
                    <h2>Таклифлар учун</h2>
                    <div className="work_border"></div>
                    <p>Доимий мижозларга қулайлик яратиш ва <br />
                        янги мижозларни жалб қилиш учун ушбу <br />
                        сайт яратилган бўлиб, унда сиз керакли <br />
                        қисмлар, бутловчи қисмлар, асбоблар, <br />
                        каталоглар ва махсулот маълумотларини <br />
                        топишингиз мумкин. Агар бирор нарсани <br />
                        топа олмасангиз - биз билан телефон ёки <br />
                        почта орқали боғланинг, биз сизга дархол <br />
                        ёрдам берамиз.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer