import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";
import { productTitleProps } from "../components/ProductTitle";

export interface ProductCardProps {
  product: Product;
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValuesProps;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Title: (Props: productTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValuesProps {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxReached: boolean;
  product: Product;
  maxCount?: number;
  increaseBy: (value: number) => void;
  reset: () => void;
}
