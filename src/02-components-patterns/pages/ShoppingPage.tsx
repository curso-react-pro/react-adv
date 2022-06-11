import {ProductImage,ProductTitle,ProductButtons,ProductCard} from '../components';

const product = {
  id: '1',
  title: 'Coffee Mug de verdad',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product={ product }>
          <ProductCard.Image/>
          <ProductCard.Title title='prueba'/>
          <ProductCard.Buttons/>
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title='Cafecito' />
          <ProductButtons/>
        </ProductCard>
      </div>
    </div>
  )
}
