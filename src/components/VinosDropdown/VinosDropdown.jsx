import React, { useState } from "react";
import styles from './VinosDropdown.module.css';
import { NavLink } from "react-router-dom";

export const VinosDropdown = ()=>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const closeDropdown = () => {
        setIsOpen(false);
      };

    return(
        <div>
      <div className={styles.dropdown}>
      <button onClick={toggleDropdown}>VINOS</button>
      {isOpen ? (
        <div className={styles.dropdown_content}>
        <div className={styles.column}>
                        <h1>TINTOS</h1>
                        <ul>
                            <li>Malbec</li>
                            <li>Cabernet Sauvignon</li>
                            <li>Cabernet Franc</li>
                            <li>Blends</li>
                        </ul>
                    </div><div className={styles.column}>
                            <h1>BLANCOS</h1>
                            <ul>
                                <li>Malbec</li>
                                <li>Cabernet Sauvignon</li>
                                <li>Cabernet Franc</li>
                                <li>Blends</li>
                            </ul>
                        </div><div className={styles.column}>
                            <h1>BODEGAS</h1>
                            <ul>
                                <li>Malbec</li>
                                <li>Cabernet Sauvignon</li>
                                <li>Cabernet Franc</li>
                                <li>Blends</li>
                            </ul>
                        </div><div className={styles.column}>
                            <h1>LINEAS</h1>
                            <ul>
                                <li>Malbec</li>
                                <li>Cabernet Sauvignon</li>
                                <li>Cabernet Franc</li>
                                <li>Blends</li>
                            </ul>
                        </div>
                        </div> // dropdown_content
                         ) : null}
      {/* {isOpen ? <div>Is Open</div> : <div>Is Closed</div>} */}
    </div>
        </div>
    )
}