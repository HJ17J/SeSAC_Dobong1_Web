import ProductList from '../components/ProductList';

export default function ProductPage({ products }) {
  return (
    <main className='productPage'>
      <p className='pageTitle'>상품 목록</p>
      <ProductList products={products} />
    </main>
  );
}
