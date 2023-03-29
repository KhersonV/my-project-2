
import {  useSelector } from "react-redux";
import "./CartProductListItem.css";
import CartTotal from "./CartTotal";
import CartProductListItem from "./CartProductListItem";
import coursesArray, { getProductsObject } from "../../utils/coursesArray";

const Cart = () => {
 
  const productsInCart = useSelector((state) => state.productsInCart);

  const productsObject = getProductsObject(coursesArray);

  return (
    <div>
      {Object.keys(productsInCart).map((productId) => (
        <CartProductListItem
          key={productId}
          product={productsObject[productId]}
        />
      ))}
      <div className="cart-total">
        <div className="cart-total__title">Total Price</div>
        <div className="cart-total__price">
          <CartTotal
            productsInCart={productsInCart}
            productsObject={productsObject}
          />
        </div>
      </div>
    </div>
  );
};
export default Cart;