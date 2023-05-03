import { useState } from 'react';
import { addNewProduct } from '../../utilities/items-api';
import styles from './AddNewProductForm.module.css';

export default function AddNewProductForm({ setIsModalOpen }) {
  const [productDetails, setProductDetails] = useState({
    name: '',
    emoji: '',
    category: '',
    origin: '',
    volume: 0,
    quantity: 0,
    price: 0,
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    // setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    let targetName = evt.target.name;
    // if (targetName === 'categoryName' || targetName === 'sortOrder') {
    //   if (targetName === 'categoryName') {
    //     targetName = 'name';
    //   }
    //   setProductDetails({
    //     ...productDetails,
    //     category: {
    //       ...productDetails.category,
    //       [targetName]: evt.target.value,
    //     },
    //   });
    // } else {
    setProductDetails({
      ...productDetails,
      [evt.target.name]: evt.target.value,
    });
    // }

    setError('');
  }
  console.log(productDetails);
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      // const user = await login(credentials);
      // console.log(user);
      // setUser(user);
      const productData = {
        ...productDetails,
        volume: Number(productDetails.volume),
        quantity: Number(productDetails.quantity),
        price: Number(productDetails.price),
      };
      await addNewProduct(productData);
    } catch {
      setError('Log In Failed - Try Again');
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
            <label>Emoji</label>
            <input
              type="text"
              name="emoji"
              value={productDetails.emoji}
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
