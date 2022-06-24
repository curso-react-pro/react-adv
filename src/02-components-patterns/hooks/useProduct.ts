import { useEffect, useState, useRef } from "react";
import {
  Product,
  onChangeArgs,
  InitialValuesProps,
} from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValuesProps;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setcounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);
  const increaseBy = (value: number) => {
    const newValue = Math.max(
      Math.min(counter + value, initialValues?.maxCount || counter + value),
      0
    );
    setcounter(newValue);
    onChange && onChange({ count: newValue, product: { ...product } });
  };

  const reset = () => {
    setcounter(initialValues?.count || value);
  };
  useEffect(() => {
    if (!isMounted.current) return;
    setcounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};
