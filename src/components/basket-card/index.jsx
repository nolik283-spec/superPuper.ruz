import React from "react";
import { X } from "lucide-react";
import { CountButton } from "../count-button";
import styles from "./style.module.css";

export const BasketCard = ({
  removeProduct,
  imgUrl,
  price,
  name,
  updateProduct,
  id,
  count,
  isDelete,
}) => {
  const [loading, setLoading] = React.useState(false);

  const handleRemove = async () => {
    setLoading(true);
    await removeProduct(id);
    setLoading(false);
  };

  return (
    <div
      className={
        isDelete || loading ? styles.active + " " + styles.card : styles.card
      }
    >
      <img width={80} height={80} src={imgUrl[0]} alt="" />
      <h3 className={styles.title}>{name}</h3>
      <CountButton
        count={count}
        increment={async () => await updateProduct(id, count + 1)}
        decrement={async () => await updateProduct(id, count - 1)}
      />
      <span>{price * count}$</span>
      <button onClick={handleRemove} className={styles.x}>
        <X />
      </button>
    </div>
  );
};
