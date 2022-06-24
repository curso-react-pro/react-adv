import styles from "./../styles/styles.module.css";
import { createContext } from "react";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";
import { useProduct } from "../hooks/useProduct";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy,maxCount,isMaxReached,reset } = useProduct({ onChange, product, value, initialValues });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count:counter,
          isMaxReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  );
};
