
import React from 'react'
import styles from "./style.module.css"
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router'
import { useBasket } from '../../hooks/basket'

export const BasketButton = () => {
    const { data, totalAmount } = useBasket();
    return (
        <Link to="/basket" className={styles.button}><span>{totalAmount}$  |</span>  <ShoppingCart size={16} />{data.length}</Link>
    )
}
