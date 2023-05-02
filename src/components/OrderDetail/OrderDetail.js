import styles from './OrderDetail.module.css';
import CartItem from '../CartItem/CartItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  if (!order) return null;

  const cartItem = order.lineItems.map((item) => (
    <CartItem
      cartItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  ));

  return (
    <div className={styles.OrderDetail}>
      <div className={styles.sectionHeading}>
        {order.isPaid ? (
          <span>
            ORDER <span className="smaller">{order.orderId}</span>
          </span>
        ) : (
          <span>NEW ORDER</span>
        )}
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div
        className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}
      >
        {cartItem.length ? (
          <>
            {cartItem}
            <section className={styles.total}>
              {order.isPaid ? (
                <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!cartItem.length}
                >
                  CHECKOUT
                </button>
              )}
              <span>{order.totalQty}</span>
              <span className={styles.right}>
                ${order.orderTotal.toFixed(2)}
              </span>
            </section>
          </>
        ) : (
          <div className={styles.cartPrompt}>
            CART
            <br />
            IS
            <br />
            EMPTY
          </div>
        )}
      </div>
    </div>
  );
}
