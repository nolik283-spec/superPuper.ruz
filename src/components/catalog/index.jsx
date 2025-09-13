import React from "react";
import styles from "./style.module.css";
import { Container } from "../container";
import { Button } from "../button";
import { Card } from "../card";
import { useCategoryStore } from "../../store/category";
import { useSortStore } from "../../store/sort";
import { useProducts } from "../../hooks/products";

export const Catalog = () => {
  const { data } = useProducts();
  const type = useCategoryStore((state) => state.category);
  const sort = useSortStore((state) => state.sort);
  const compare = (a, b) => {
    if (sort === "alphabetical") {
      return a.name > b.name;
    } else {
      return a.price - b.price;
    }
  };

  return (
    <Container>
      <h2 className={styles.title}>{type.toUpperCase()} Cloth</h2>
      <ul className={styles.divv}>
        {data
          .sort(compare)
          .filter((el) => (type === "all" ? el : el.type === type))
          .map((el) => (
            <li key={el.id}>
              <Card {...el} />
            </li>
          ))}
      </ul>
    </Container>
  );
};
