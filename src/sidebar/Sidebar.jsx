import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineAppstore } from "react-icons/ai"
import { IoIosArrowForward } from "react-icons/io"
import { instance } from "../api/axios"
import "./Sidebar.scss"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import  React  from "react"
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const currentLang = useSelector(state => state.language.lang)
  let locationSidebar = useLocation()

  const [ dataCategory, setDataCategory ] = useState([])

  useEffect(() => {
    let dataFetched = false

    instance("/category/category-nest")
      .then(response => setDataCategory(response.data))
      .catch(err => console.log(err))

      console.log(dataFetched);

      return () => {
        dataFetched = true
      }
  }, [])

  console.log(dataCategory);

  return (
    <div className='sidebar' style={{ display: locationSidebar.pathname.includes('/product-view') ? 'none' : 'block' }}>
        <p className='aside__header'><AiOutlineAppstore /> Category</p>
        <ul className='category_main'>
        {currentLang === 'uz'
          ? dataCategory.mainCategory_uz?.map((mainCategory, inx) => (
              <li key={uuidv4()} className='category_list'>
                <Link to={`/maincategory/${mainCategory}`}>{mainCategory}</Link> <IoIosArrowForward />
                <div className='sub-category'>
                  {dataCategory.productSubCategories_uz[inx].map(subCategory =>
                    subCategory ? <p><Link to={`/subcategory/${subCategory}`} key={uuidv4()}>{subCategory}</Link></p> : <React.Fragment key={uuidv4()}></React.Fragment>
                  )}
                </div>
              </li>
            ))
          : dataCategory.mainCategory_ru?.map((mainCategory, inx) => (
              <li key={uuidv4()} className='category_list'>
                <Link to={`/maincategory/${mainCategory}`}>{mainCategory}</Link> <IoIosArrowForward />
                <div className='sub-category'>
                  {dataCategory.productSubCategories_ru[inx].map(subCategory =>
                    subCategory ? <p><Link to={`/subcategory/${subCategory}`} key={uuidv4()}>{subCategory}</Link></p> : <React.Fragment key={uuidv4()}></React.Fragment>
                  )}
                </div>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default Sidebar