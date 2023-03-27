import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Header.css";
import { useSelector } from "react-redux";
import articlesArray from "../../utils/articlesArray";

const Header = () => {
    const productsLikeState = useSelector((state) => state.productsLikeState);

    const likedArticles = articlesArray.filter(
        ({ id }) => productsLikeState[id],
    );
    

    const favoritesCount = likedArticles.length;

    return (
        <div className="headerContainer">
            <div className="logo">Logo</div>
            <ul className="menuContainer hamburger">
                <li className="menuItem">
                    {" "}
                    <Link className="menuItem" to="/">
                        Home
                    </Link>{" "}
                </li>
                <li className="menuItem dropdown">
                    Category
                    <ul className="dropdown-menu">
                        <li className="dropdown-menu-li">
                            {" "}
                            <Link to={`/Trading`}> Trading</Link>
                        </li>
                        <li className="dropdown-menu-li">
                            {" "}
                            <Link to="/Programming"> IT</Link>{" "}
                        </li>
                        <li className="menuItem">
                            <Link className="menuItem" to="/Travel">
                                Travel
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menuItem">
                    <Link className="menuItem" to="/favorites">
                        {" "}
                        Favorites{" "}
                        <span className="favoritesCount">
                            {favoritesCount}
                        </span>{" "}
                    </Link>
                </li>
            </ul>
            <Link className="cart" to="/cart">
                {" "}
                <Cart />{" "}
            </Link>
        </div>
    );
};
export default Header;
