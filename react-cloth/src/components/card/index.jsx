import React from "react";
import styles from "./style.module.css";
import { Button } from "../button";
import { useBasket } from "../../hooks/basket";
import { Link } from "react-router";

export const Card = (el) => {
  const [add, setAdd] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { addProduct, isFindProduct } = useBasket();
  const { id, ...rest } = el;
  const handleAdd = async () => {
    setLoading(true);
    setAdd(true);
    await addProduct({ ...rest, productId: el.id, count: 1 });
    setLoading(false);
  }

  return (
    <article>
      <Link to={"/product/" + el.id}><img src={el.imgUrl[0]} alt="" className={styles.img} /></Link>
      <h3>{el.name}</h3>
      <div className={styles.priceBox}>
        <span>from{el.price}$</span>
        <Button className={loading ? styles.active : ""} onClick={handleAdd} variant={isFindProduct(el.id) ? "dark" : "light"}>
          {isFindProduct(el.id) ? "in card" : "+Add"}
        </Button>
      </div>
    </article>
  );
};
