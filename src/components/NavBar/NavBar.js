import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';
import styles from './NavBar.module.css';
import Logo from '../../assets/spirited-logo.png';
import AddNewProductForm from '../AddNewProductForm/AddNewProductForm';
import { useState } from 'react';

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log('This user is admin: ', user.isAdmin);
  return (
    <>
      {isModalOpen && <AddNewProductForm setIsModalOpen={setIsModalOpen} />}
      <nav>
        <div className="{styles.navBarContainer">
          <div>
            <img
              className={styles.navBarLogo}
              src={Logo}
              alt="Spirited logo, white bottle silhouette on red background"
            />
            {/* <p>LOGO</p> */}
          </div>
          <div className={styles.navBarMenuContainer}>
            {user.isAdmin ? (
              <button onClick={() => setIsModalOpen(true)}>
                Add New Product
              </button>
            ) : (
              <Link to="/orders">Order History</Link>
            )}
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
          </div>
          <div>
            <p>Hi, {user.name}</p>
            <Link to="" onClick={handleLogOut}>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
