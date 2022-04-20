import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../../context/CartContextProvider';

//Icon
import shopIcon from "../../assets/icons/shop.svg";
import logo from "../../assets/icons/627c85df96a6f6fac6ce40a3f5ef2b38.jpg";

//Style
import styles from "./Navbar.module.css"

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>

                <Link to="/" className={styles.logo}><img src={logo}/></Link>
                {/* <Link className={styles.productLink} to="/products">products</Link> */}
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt='shop'/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;