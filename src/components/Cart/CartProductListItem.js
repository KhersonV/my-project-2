import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartReducer";
import "./CartProductListItem.css";

const CartProductListItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <div className="cart-item">
        {product && (
          <div className="cart-item__container">
            <img
              className="cart-item__img"
              src={product.img}
              alt={product.title}
            />
            <div className="cart-item__info">
              <div className="cart-item__title">{product.title}</div>
              <div className="cart-item__price">{product.price}</div>
              <button
                className="cart-item__remove-btn"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartProductListItem;
