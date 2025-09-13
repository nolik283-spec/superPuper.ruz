import { ShoppingCart, Trash } from "lucide-react";
import { BasketCard } from "../basket-card";
import styles from "./style.module.css";
import { Container } from "../container";
import { useBasket } from "../../hooks/basket";
import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../button";
import { Empty } from "../empty";
import { useOrder } from "../../hooks/order";


export const Basket = () => {
  const { data, removeProduct, clearBasket, updateProduct, totalAmount } = useBasket();
  const [loading, setLoading] = React.useState(false);
  const router = useNavigate()
  const { addOrder } = useOrder();

  const deleteBasket = async () => {
    setLoading(true);
    await clearBasket();
  };
  return (

    <Container className={styles.container}>
      {data.length > 0 && <>
        <div className={styles.div}>
          <h2 className={styles.basket}>
            <ShoppingCart /> Basket
          </h2>
          <button
            disabled={loading || data.length === 0}
            onClick={deleteBasket}
            className={
              loading || data.length === 0 ? styles.active : styles.clear
            }
          >
            <Trash /> Clear Card
          </button>
        </div>
        <ul className={styles.list}>
          {data.map((el) => (
            <li key={el.id}>
              <BasketCard
                {...el}
                isDelete={loading}
                removeProduct={removeProduct}
                updateProduct={updateProduct}
              />
            </li>
          ))}
        </ul>
        <div className={styles.group}>
          <span className={styles.type}>Total items:{data.length}pcs</span>
          <span className={styles.type}>Order Total:{totalAmount}$</span>
        </div>
        <div className={styles.group}>
          <Button onClick={() => router(-1)} variant={"light"}>Go Back</Button>
          <Button onClick={async () => await addOrder(data)} variant={"dark"}>Pay Now</Button>
        </div>
      </>}
      {data.length === 0 && <Empty />}
    </Container>
  );
};
