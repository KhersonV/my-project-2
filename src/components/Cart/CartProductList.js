import coursesArray, { getProductsObject } from "../../utils/coursesArray";
import CartProductListItem from "./CartProductListItem";


const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(coursesArray),
}) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartProductListItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    
                />
            ))}
        </>
    );
};

export default CartProductList;
