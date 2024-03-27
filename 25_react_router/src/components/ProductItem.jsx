import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  // [axios 데이터]
  //   {
  //     body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium';
  //     email: 'Eliseo@gardner.biz';
  //     id: 1;
  //     name: 'id labore ex et quam laborum';
  //     postId: 1;
  //   }
  return (
    <Link to={`/products/${product.id}`} className='productItem'>
      <ul>
        <li>
          <span>상품명</span> {product.name}
        </li>
        <li>
          <span>상품 설명</span> {product.body}
        </li>
      </ul>
    </Link>
  );
}
