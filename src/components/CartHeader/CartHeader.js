import { useSelector } from "react-redux";
import CartProductList from "../Cart/CartProductList";



const CartHeader = () => {
    const productsInCart = useSelector((state) => state.productsInCart);

    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
        </div>
    );
};
export default CartHeader;
