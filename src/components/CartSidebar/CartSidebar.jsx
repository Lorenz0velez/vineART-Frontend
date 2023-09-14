// CartSidebar.js
import React, { useState } from 'react';
import styles from './CartSidebar.module.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CartSidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const cart = useSelector((state) => state.cart);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const closeDropdown = () => {
        setIsOpen(false);
      };

  return (
    <div className={styles.sidebar} >
        <button className={styles.buttonSidebar} onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faCartShopping}/>
        </button>
        {isOpen ? (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebar_content}>
                <button className={styles.equis_button} onClick={closeDropdown} >X</button>
                <div className={styles.cart_cards}>
                    {
                        cart?.map((card)=>{
                            return(
                                <p>{card.name}</p>
                            )
                        })
                    }
                <button className={styles.clear_cart_button} >CLEAR CART</button>
                <button className={styles.go_to_cart_button} >GO TO CART</button>
                </div>
            </div>
        </div>
        ) : null }
    </div>
  );
};

export default CartSidebar;
