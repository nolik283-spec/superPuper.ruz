
import React from 'react'
import styles from "./style.module.css"

export const Button = ({ variant, children, className, onClick }) => {
    return (
        <button onClick={onClick} className={styles[variant] + " " + className}>
            {children}
        </button>
    )
}