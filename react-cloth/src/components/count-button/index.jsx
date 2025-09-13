import React from "react";
import styles from "./style.module.css";
import { Minus, Plus } from "lucide-react";

export const CountButton = ({ increment, decrement, count }) => {
  const [loading, setLoading] = React.useState(false);

  const updateCount = async (mode) => {
    setLoading(true);
    if (mode === "+") {
      await increment();
    } else {
      if (count > 1)
        await decrement();
    }
    setLoading(false);
  };

  return (
    <div className={styles.div}>
      <button
        onClick={async () => await updateCount("-")}
        className={styles.minus}
      >
        <Minus size={16} />
      </button>
      <span>{count}</span>
      <button
        onClick={async () => await updateCount("+")}
        className={styles.plus}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};
