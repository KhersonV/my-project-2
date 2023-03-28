import { Link } from "react-router-dom";

const MenuItem = ({ to, children }) => {
    return (
        <Link className="cart" to={to}>
            {children}
        </Link>
    );
};
export default MenuItem;
