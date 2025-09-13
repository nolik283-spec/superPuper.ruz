import React from 'react'
import { Container } from '../container'
import { Sort } from '../sort'
import { Category } from '../categories'
import styles from "./style.module.css"

export const TopBar = () => {
    return (
        <Container className={styles.category}>
            <Category />
            <Sort />
        </Container>
    )
}
