import styles from './CartItem.module.css';

export default function CartItem({ cartItem, isPaid, handleChangeQty }) {
  return (
    <div className={styles.CartItem}>
      {/* <div className="flex-ctr-ctr">{cartItem.item.emoji}</div> */}
      <img
        style={{ height: '40px' }}
        className="flex-ctr-ctr"
        src={cartItem.item.emoji}
        alt=""
      />
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{cartItem.item.name}</span>
        <span>{cartItem.item.price.toFixed(2)}</span>
      </div>
      <div
        className={styles.qty}
        style={{ justifyContent: isPaid && 'center' }}
      >
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty - 1)}
          >
            −
          </button>
        )}
        <span>{cartItem.qty}</span>
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty + 1)}
          >
            +
          </button>
        )}
      </div>
      <div className={styles.extPrice}>${cartItem.extPrice.toFixed(2)}</div>
    </div>
  );
}
