import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange,product,value = 0 }: useProductArgs) => {
  const [counter, setcounter] = useState(value);
  
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    //console.log({'isControlled':isControlled.current});
    if(isControlled.current) {
      return onChange!({count:value,product});
    }
    const newValue = Math.max(counter + value, 0);
    setcounter(newValue);
    onChange && onChange({count:newValue, product: {...product}});
  };
  useEffect(() => {
    setcounter(value); 
  }, [value]);
  
  return { counter, increaseBy };
};
