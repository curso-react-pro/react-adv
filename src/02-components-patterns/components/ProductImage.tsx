import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from './../assets/no-image.jpg';
import styles from './../styles/styles.module.css';

export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}
export const ProductImage = ({ img, className,style }: ProductImageProps) => {
    const { product } = useContext(ProductContext);
    let imgToshow: string;
    imgToshow = img ? img : product.img ? product.img : noImage;
    return (
        <img className={`${styles.productImg} ${className}`} src={imgToshow} alt="Coffe mug"  style={style}/>
    )
}