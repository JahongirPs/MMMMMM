import React from 'react'
import classes from "./Req.module.scss"
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

function Req() {
    const { t } = useTranslation()

  return (
    <>
        <div className="container">
        <div className={classes.reqs}>
            <h1>{t("footertop.recomend")}</h1>
            <div className={classes.advice}>
                <ul className={classes.advice_services}>
                    <li className={classes.service}>
                        <div className={classes.about_service}>
                            <p>Бўлиб-бўлиб сотиб олиш</p>
                            <span className={classes.advice_small}>MOLD-COMPONENTS да ишлаб чиқариш учун <br /> қулай онлайн буюртмалар режаси</span>
                        </div>
                        <div className={classes.borderR}></div>
                    </li>
                    <li className={classes.service}>
                        <div className={classes.about_service}>
                            <p>Йетказиб бериш бепул</p>
                            <span className={classes.advice_small}>Сифатли маҳсулотлар ва хизматлар</span>
                        </div>
                        <div className={classes.borderR}></div>
                    </li>
                    <li className={classes.service}>
                        <div className={classes.about_service}>
                            <p>Бонус тизими</p>
                            <span className={classes.advice_small}>MOLD-COMPONENTS да ишлаб чиқариш учун <br /> қулай онлайн буюртмалар режаси</span>
                        </div>
                        <div className={classes.borderR}></div>
                    </li>
                    <li className={classes.service}>
                        <div className={classes.about_service}>
                            <p>Ёрдам!</p>
                            <span className={classes.advice_small}>TSS</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default Req