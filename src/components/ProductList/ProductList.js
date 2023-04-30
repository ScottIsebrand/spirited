import styles from './ProductList.module.css';
import Product from '../Product/Product';

export default function ProductList({ productList, handleAddToOrder }) {
  const items = productList.map((item) => (
    <Product
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      product={item}
    />
  ));
  return <main className={styles.ProductList}>{items}</main>;
}
