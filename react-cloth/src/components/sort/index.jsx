import React from 'react'
import styles from "./style.module.css"
import { useSortStore } from '../../store/sort'

const arr = ["alphabetical", "price"]
export const Sort = () => {
    const [open, setOpen] = React.useState(false)

    const { setSort, sort } = useSortStore()

    const handleSort = (el) => {
        setOpen(!open); setSort(el)
    }
    return (
        <div className={styles.divv}>
            <div className={styles.sort}>
                <button onClick={() => setOpen(!open)} className={styles.button}>
                    <span className={styles.spanTitle}>Sort by:</span>
                    <span className={styles.spanValue}>{sort}</span>
                </button>
                {open && (
                    <ul className={styles.list}>
                        {arr.map(el => (
                            <li className={styles.item}>
                                <button onClick={() => handleSort(el)}
                                    className={styles.itemButton}>{el}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
