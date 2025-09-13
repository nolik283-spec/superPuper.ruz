import { Button } from "../button"
import styles from "./style.module.css"
import React from 'react'
import { useNavigate } from "react-router"

export const Empty = () => {
    const router = useNavigate()
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>The basket is empty😕</h1>
            <p className={styles.p}>Most likely, you have not ordered the product yet. To order <br /> the product, go to the main page.</p>
            <img src="/item9.jpg" width="193" alt="" />
            <Button onClick={() => router(-1)} variant={"light"}>Go Back</Button>
        </div>
    )
}
