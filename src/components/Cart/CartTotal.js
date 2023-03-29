import coursesArray,{ getProductsObject } from "../../utils/coursesArray"


const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(coursesArray),
}) => {
    
  return (
    <div>
            
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                
                    total +
                    productsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)],
                0
            )}
            $
        </div>
  )
}
export default CartTotal