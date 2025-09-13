import React from "react";
import { CountButton } from "../count-button";
import { Button } from "../button";
import styles from "./style.module.css";
import { useNavigate } from "react-router";
import { useBasket } from "../../hooks/basket";

export const Product = ({ data }) => {
  const [loading, setLoading] = React.useState(false);
  const { addProduct, isFindProduct } = useBasket();
  const router = useNavigate();
  const { id, ...rest } = data;
  const handleAdd = async () => {
    setLoading(true);
    await addProduct({ ...rest, productId: data.id, count });
    setLoading(false);
  };
  const [count, setCount] = React.useState(1);
  console.log(isFindProduct(data.id)?.count);

  React.useEffect(() => {
    setCount(isFindProduct(data?.id)?.count || 1);
  }, [data?.id]);

  return (
    <div className={styles.container}>
      <div className={styles.nkar}>
        <ul className={styles.poqr}>
          {data?.imgUrl?.slice(1)?.map((el, index) => (
            <li key={index}>
              <img src={el} alt="" />
            </li>
          ))}
        </ul>
        <div className={styles.mec}>
          <img src={data?.imgUrl?.[0]} alt="" />
        </div>
      </div>
      <div className={styles.info}>
        <div>
          <h2>{data.name}</h2>
        </div>
        <div className={styles.dirq}>
          <div className={styles.count}>
            <span>{data.price * count}$</span>
            <div>
              <CountButton
                count={count}
                increment={async () => setCount((prev) => prev + 1)}
                decrement={async () => setCount((prev) => prev - 1)}
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <Button onClick={() => router(-1)} variant={"light"}>
              Go Back
            </Button>
            <Button
              className={loading ? styles.active : ""}
              onClick={handleAdd}
              variant={isFindProduct(data.id)?.id ? "dark" : "light"}
            >
              {isFindProduct(data.id)?.id ? "in cart" : "add to cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
