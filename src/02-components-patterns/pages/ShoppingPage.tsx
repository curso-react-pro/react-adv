import "./../styles/custom-styles.css";
import { ProductButtons, ProductCard, ProductImage } from "../components";
import { ProductTitle } from "../components/ProductTitle";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxReached, count }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle title={product.title} className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxReached && <button onClick={() => increaseBy(2)}>+2</button>}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
