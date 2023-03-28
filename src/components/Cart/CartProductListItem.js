const CartProductListItem = ({ product }) => {
    return (
        <div>
            
            
            <div>{ 
            (!product) 
            ? (<div>{"еще нет товаров"}</div>)
            : (<div>{product.title}</div>)
            
            }
            </div>
        </div>
    );
};

export default CartProductListItem;
