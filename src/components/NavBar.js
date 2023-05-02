import { Link } from 'react-router-dom';
import { logOut } from '../utilities/users-service';

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  // console.log('This user is admin: ', user.isAdmin);
  return (
    <nav>
      <p>LOGO</p>
      {user.isAdmin ? (
        <button>Add New Product</button>
      ) : (
        <Link to="/orders">Order History</Link>
      )}
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      <p>Welcome, {user.name}</p>
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
