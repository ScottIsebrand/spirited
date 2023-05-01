import { useState } from 'react';
import ProductDetailModal from '../ProductDetailModal/ProductDetailModal';
import styles from './Product.module.css';

export default function Product({ product, handleAddToOrder }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className={styles.Product}>
        <img
          style={{ height: '40px' }}
          className="flex-ctr-ctr"
          src={product.emoji}
          alt=""
        />

        <h4 className={styles.name} onClick={() => setIsModalOpen(true)}>
          {product.name}
        </h4>
        <div className={styles.buy}>
          <span>${product.price.toFixed(2)}</span>
          <button
            className="btn-sm"
            onClick={() => handleAddToOrder(product._id)}
          >
            ADD
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ProductDetailModal product={product} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}
