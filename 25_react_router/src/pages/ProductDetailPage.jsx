import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetailPage({ products }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [targetProduct] = products.filter((product) => product.id === Number(productId));
  if (!targetProduct) {
    return (
      <main>
        <p>존재하지 않는 상품입니다.</p>
      </main>
    );
  }

  return (
    <main className='productDetailPage'>
      <h2>상세페이지</h2>
      <button onClick={() => navigate('/')}>🏠 Home</button>&nbsp;
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명 {targetProduct.name}</li>
        <li>판매자 {targetProduct.email}</li>
        <li>상세설명 {targetProduct.body}</li>
      </ul>
    </main>
  );
}
