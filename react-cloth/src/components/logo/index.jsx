import styles from "./style.module.css"
import logo from "../../assets/logo.svg"
import { Link } from "react-router"
export const Logo = () => {
    return (
        <Link className={styles.logo} to='/'>
            <img className={styles.img} src={logo} alt="logo" />
            <b className={styles.b} >React Cloth</b>
            <strong className={styles.strong} >the best cothes in the world</strong>
        </Link>

    )
}