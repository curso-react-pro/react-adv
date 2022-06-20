import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setshoppingCart] = useState<{
        [key: string]: ProductInCart;
      }>({});
    
      const onProductCountChange = ({ count, product }: onChangeArgs) => {
    
        setshoppingCart((oldShoppingCart) => {
          // if (count === 0) {
          //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
          //   return { ...rest };
          // }
          // return { ...oldShoppingCart, [product.id]: { ...product, count } };
    
          const productInCart: ProductInCart = oldShoppingCart[product.id] || {
            ...product,
            count: 0,
          };
          if (Math.max(productInCart.count + count, 0) > 0) {
            productInCart.count += count;
            return {
              ...oldShoppingCart,
              [product.id]: productInCart,
            };
          } else {
            //Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest };
          }
        });
      };

        return {shoppingCart, onProductCountChange};
}
