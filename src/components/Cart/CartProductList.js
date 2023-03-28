import coursesArray, { getProductsObject } from "../../utils/coursesArray"


const CartProductList = (productsObject = getProductsObject(coursesArray)) => {

console.log(productsObject)
  return (

    <div>CartProductList</div>
  )
}

export default CartProductList