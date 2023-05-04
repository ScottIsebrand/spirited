import { useState } from 'react';
import { addNewProduct } from '../../utilities/items-api';
import styles from './AddNewProductForm.module.css';

export default function AddNewProductForm({ setIsModalOpen }) {
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: '',
    origin: '',
    volume: 0,
    quantity: 0,
    price: 0,
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    setProductDetails({
      ...productDetails,
      [evt.target.name]: evt.target.value,
    });

    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      await addNewProduct(productDetails);
    } catch {
      setError('Adding a new product failed. Try again.');
    }
  }

  return (
    <>
      <div
        onClick={() => setIsModalOpen(false)}
        className={styles.AddNewProductFormBackground}
      ></div>
      <div className={styles.AddNewProductForm}>
        <div className="form-container" onSubmit={handleSubmit}>
          <form autoComplete="off">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={productDetails.name}
              onChange={handleChange}
              required
            />
            <label>Image</label>
            <input
              type="text"
              name="image"
              value={productDetails.image}
              onChange={handleChange}
            />
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={productDetails.category}
              onChange={handleChange}
              required
            />
            {/* <label>Category Sort Order</label>
            <input
              type="number"
              name="sortOrder"
              value={productDetails.category.sortOrder}
              onChange={handleChange}
              required
            /> */}
            <label>Origin</label>
            <input
              type="text"
              name="origin"
              value={productDetails.origin}
              onChange={handleChange}
              required
            />
            <label>Volume</label>
            <input
              type="number"
              name="volume"
              value={productDetails.volume}
              onChange={handleChange}
              required
            />
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={productDetails.quantity}
              onChange={handleChange}
              required
            />
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={productDetails.price}
              onChange={handleChange}
              required
            />

            <button type="submit">ADD PRODUCT</button>
          </form>
          <button onClick={() => setIsModalOpen(false)}>CLOSE</button>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </>
  );
}
