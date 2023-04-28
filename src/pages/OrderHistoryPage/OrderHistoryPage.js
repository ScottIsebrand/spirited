import { checkToken } from '../../utilities/users-service';

function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };

  return (
    <div>
      <h1>OrderHistoryPage</h1>
    </div>
  );
}

export default OrderHistoryPage;
