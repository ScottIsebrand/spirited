import styles from './ProductDetailModal.module.css';

export default function ProductDetailModal({ product, setIsModalOpen }) {
  console.log(product);
  return (
    <>
      <div
        onClick={() => setIsModalOpen(false)}
        className={styles.ProductDetailModalBackground}
      ></div>
      <div className={styles.ProductDetailModal}>
        <img className={styles.productImage} src={product.emoji} alt="" />
        <div className={styles.productDetailContainer}>
          <h3>{product.name}</h3>
          <p className={styles.price}>Price: ${product.price}</p>
          {/* <p className={styles.category.name}>Category: {product.category}</p> */}
          <p className={styles.volume}>Volume: {product.volume}ml</p>
          <p className={styles.inventory}>In stock: {product.quantity}</p>
          <button onClick={() => setIsModalOpen(false)}>CLOSE</button>
        </div>
      </div>
    </>
  );
}
