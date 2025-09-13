import React from 'react'
import { Container } from '../container'
import { BasketButton } from '../basket-button'
import { Logo } from '../logo'
import styles from "./style.module.css"


export const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo />
                <BasketButton />
            </Container>
        </header>
    )
}
