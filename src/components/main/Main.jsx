import { useEffect, useState, Fragment} from 'react';
import { useSelector } from 'react-redux';
import { instance } from '../../api/axios';
import { v4 as uuidv4 } from 'uuid';
import ProductCarousel from '../product-carousel/ProductCarousel';
import "./Main.scss";

const Main = () => {
  const currentLang = useSelector(state => state.language.lang)
  const [homeReeldata, setHomeReeldata] = useState([]);

  useEffect(() => {
    let isDataFetched = false;
    instance("/category/category-reel")
      .then(response => setHomeReeldata(response.data))
      .catch(err => console.log(err))

    return () => {
      isDataFetched = true;
    }
  }, [])

  return (
    <div className="container">
      <div className='home__product-carousel'>
      {
        homeReeldata.slice(0, 4).map(category => 
          <Fragment key={uuidv4()}>
            <h2>{ currentLang == "uz" ? category.categoryName_uz : category.categoryName_ru}</h2>  
            <ProductCarousel categoryData={category}/>
          </Fragment>
        )
      }
    </div>
    </div>
  )
}

export default Main