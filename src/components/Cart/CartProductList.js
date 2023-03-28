import { useDispatch } from "react-redux";
import coursesArray, { getProductsObject } from "../../utils/coursesArray";
import CartProductListItem from "./CartProductListItem";

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(coursesArray),
    
}) => {
  const dispatch = useDispatch()
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartProductListItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                />
            ))}
        </>
    );
};

export default CartProductList;
