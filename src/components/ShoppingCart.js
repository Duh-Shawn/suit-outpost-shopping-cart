import "../styles/cart.scss";
import PropTypes from "prop-types";
import CartListItem from "./CartListItem";

function ShoppingCart(props) {
  const { handleCartToggle, cart, setCart } = props;

  const handleCartUpdate = (id, action, quantity) => {
    if (action === "UPDATE") {
      cart[id].quantity = quantity;
      setCart({ ...cart });
    } else {
      delete cart[id];
      setCart({ ...cart });
    }
  };

  return (
    <div className="shopping-cart-modal">
      <div className="shopping-cart-container">
        <div className="shopping-cart-header">
          <h2>Cart</h2>
          <button
            type="button"
            className="close-cart-button"
            onClick={handleCartToggle}
          >
            X
          </button>
        </div>
        <div className="shopping-cart-list">
          {Object.entries(cart).map((item) => (
            <CartListItem
              key={item[0]}
              id={item[0]}
              itemData={item[1]}
              handleCartUpdate={handleCartUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
ShoppingCart.propTypes = {
  handleCartToggle: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ShoppingCart;