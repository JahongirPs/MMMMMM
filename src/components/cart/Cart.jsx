import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './Cart.scss';
import { BiChevronRight } from 'react-icons/bi';
import { PiShoppingCart } from 'react-icons/pi';
import { LiaTimesSolid } from 'react-icons/lia';
import notfoundbox from '../../assests/notfoundbox.png';

function Cart() {
  const isCartHere = useSelector((state) => state.carts.cartProducts);
  const [itemCounter, setCounter] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if(isCartOpen){
      document.body.classList.add('removedScroll')
    }else{
      document.body.classList.remove('removedScroll')
    }
  } ,[isCartOpen])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={`big_wrapper ${isCartOpen ? 'bg' : ''}`}>
      <div className={`cart ${isCartOpen ? 'cart--active' : ''}`}>
        <button style={{ display: isCartOpen ? 'block' : 'none' }} onClick={toggleCart} className="cart--closer">
          <LiaTimesSolid />
        </button>
        <button style={{ display: isCartOpen ? 'none' : 'block' }}  onClick={toggleCart} className="cart--toggle">
          <PiShoppingCart />
          <span className="cart_lenght">{isCartHere.length}</span>
        </button>

        <div
          className="cart-of_shop"
          style={{ pointerEvents: isCartOpen ? 'auto' : 'none', border: isCartHere.length === 0 ? 'none' : '2px solid dodgerblue'}}
        >
          {isCartHere.length === 0 ? (
            <div className="error_found">
              <h2>Сават бўш</h2>
              <img src={notfoundbox} alt="" />
              <button onClick={toggleCart}>Харид қилиш</button>
            </div>
          ) : (
            isCartHere.map((item, indx) => (
              <div className="small_cart" key={indx}>
                <div className="cart_img">
                  <img src={item.productImages[0]} alt="" />
                </div>
                <div className="cart_descriptions">
                  <strong>{item.productName_uz}</strong>
                  <BiChevronRight />
                  <p>{item.selectedType.size}</p>
                </div>
                <p className="cart_price">{item.selectedType.price} CУМ</p>
                <div className="btn_cart-group">
                  <span>Сони: </span>
                  <button>-</button>
                  <p>{itemCounter}</p>
                  <button>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="all_results_total">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
