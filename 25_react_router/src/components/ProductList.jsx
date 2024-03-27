import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  return (
    <section className='productList'>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </section>
  );
}
