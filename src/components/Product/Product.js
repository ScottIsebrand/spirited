import styles from './Product.module.css';

export default function Product({ product, handleAddToOrder }) {
  return (
    <div className={styles.Product}>
      {/* <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>
        {{product.emoji} 
      </div> */}
      <img
        style={{ height: '40px' }}
        className="flex-ctr-ctr"
        src={product.emoji}
        alt=""
      />

      <div className={styles.name}>{product.name}</div>
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
  );
}
