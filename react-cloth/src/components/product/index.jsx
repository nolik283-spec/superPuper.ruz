import React from 'react'
import { CountButton } from '../count-button'
import { Button } from '../button'
import styles from "./style.module.css"
import { useNavigate } from 'react-router'
import { useBasket } from '../../hooks/basket'


export const Product = ({ data }) => {
    const router = useNavigate()
    const [count, setCount] = React.useState(1)

    const [loading, setLoading] = React.useState(false);
    const { addProduct, isFindProduct } = useBasket();


    const { id, ...rest } = data;
    const handleAdd = async () => {
        setLoading(true);
        await addProduct({ ...rest, productId: data.id, count });
        setLoading(false);
    }
    return (
        <div>
            <div >
                <ul>
                    {data?.imgUrl?.slice(1)?.map((el, index) => (
                        <li key={index}>
                            <img src={el} alt="" />
                        </li>
                    ))}
                </ul>
                <div>
                    <img src={data?.imgUrl?.[0]} alt="" />
                </div>
            </div>
            <div>
                <h2>{data.name}</h2>
                <div>
                    <span>{data.price * count}$</span>
                    <CountButton
                        count={count}
                        increment={async () => setCount((prev) => prev + 1)}
                        decrement={async () => setCount((prev) => prev - 1)}
                    />
                </div>
                <div className={styles.buttons}>
                    <Button onClick={() => router(-1)} variant={"light"}>Go Back</Button>
                    <Button className={loading ? styles.active : ""} onClick={handleAdd}
                        variant={isFindProduct(data.id) ? "dark" : "light"}>
                        {isFindProduct(data.id) ? "in cart" : "add to cart"}
                    </Button>
                </div>
            </div>
        </div>
    )
}
