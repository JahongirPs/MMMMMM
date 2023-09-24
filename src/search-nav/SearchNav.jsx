import logo from "../../src/assests/search_logo.svg";
import { FiSearch } from "react-icons/fi";
import "./SearchNav.scss";
import { Link } from "react-router-dom"
import Sidebar from '../sidebar/Sidebar';
import { useState, useEffect } from "react"
import { instance } from '../api/axios';
import notfound from "../assests/notfound.png"
import { useTranslation } from "react-i18next";

function SearchNav() {
  const { t } = useTranslation()
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    instance(`product/search/${inputSearch}`)
      .then(response => setSearchResult(response.data))
      .catch(err => console.log(err));
    setSearchResult([]);
  }, [inputSearch]);

  const clearSearchResult = () => {
    setSearchResult([]);
  };

  function resetFrom(e){
    e.preventDefault()
  }

  function setToClose (e){
    setInputSearch("")
  }

  return (
    <>
      <div className="nav_bottom">
        <div className='search_nav'>
          <div className="logo_and_input">
            <div className="logo_right">
              <Link to="/"><img className="logo-img" src={logo} alt='Logo' /></Link>
            </div>
            <form className="search_input" onClick={resetFrom}>
              <input type="text" placeholder={t('subnavbar.search')} value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
              <button type='submit'><FiSearch /></button>
              {searchResult.length > 0  || inputSearch.length != 0 ? <div className="search_results">
                <div className="searched_result">
                  <div className="sr_first">
                    <p>Қидириш натижалари: </p>
                    <span>#{inputSearch}</span>
                  </div>
                  <div className="sr_second">
                    <p>{searchResult.length} Полученные результаты</p>
                    <button onClick={setToClose}>Отмена</button>
                  </div>
                </div>
                {
                  searchResult?.map(searchedItem =>
                    <div className="headerof-searched_item" key={searchedItem._id}>
                      <div className="simg_content">
                        <img src={searchedItem?.productImages[0]} alt="" />
                        <Link to={`/product-view/${searchedItem._id}`} onClick={clearSearchResult}>{searchedItem.productName_uz}</Link>
                      </div>
                      <div className="sprice_content">
                        <p>{`${searchedItem?.productSizesAndQuantity[0].price}${searchedItem?.productSizesAndQuantity.length > 1 ? " СУМ" + " - " + searchedItem?.productSizesAndQuantity[searchedItem?.productSizesAndQuantity.length - 1].price : ""} СУМ`}</p>
                      </div>
                    </div>
                  )
                }
                {searchResult.length === 0 && inputSearch.length !== 0 ? <div className="notfound_img"><img src={notfound} alt="" /></div> : ""}
              </div> : <></>}
            </form>
          </div>
        </div>
        <div className="pages_nav">
          <Sidebar />
          <div className="links">
            <ul className='link_main'>
              <li>
                <Link to="/">{t('subnavbar.main')}</Link>
              </li>
              <li>
                <Link to="/partners">{t('subnavbar.partners')}</Link>
              </li>
              <li>
                <Link to="/about">{t('subnavbar.about')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('subnavbar.contact')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchNav
