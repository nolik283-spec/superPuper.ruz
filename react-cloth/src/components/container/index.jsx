import React from 'react'
import styles from "./style.module.css"

export const Container = ({ children, className }) => {
    return (
        <div className={styles.container + " " + className}>
            {children}
        </div>
    )
}
