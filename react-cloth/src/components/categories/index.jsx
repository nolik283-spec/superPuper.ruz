import React from 'react'
import styles from "./style.module.css"
import { Button } from '../button'
import { useCategoryStore } from '../../store/category'
const arr = ["All", "Women", "Men", "Kids"]

export const Category = () => {

    const { setCategory, category } = useCategoryStore()

    const activeType = (type) => {
        setCategory(type.toLowerCase())
    }
    return (
        <div className={styles.div}>
            {
                arr.map((el) => (
                    <Button onClick={() => activeType(el)} variant={el.toLowerCase() === category ? "dark" : "light"}>
                        {el}
                    </Button>))
            }
        </div>
    )
}