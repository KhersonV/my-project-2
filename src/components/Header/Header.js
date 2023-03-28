import "./Header.css";
import { useSelector } from "react-redux";
import articlesArray from "../../utils/articlesArray";

import MenuItem from "./MenuItem";

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
                <MenuItem className="menuItem" to="/">
                    Home
                </MenuItem>

                <li className="menuItem dropdown">
                    Category
                    <ul className="dropdown-menu">
                        <li className="dropdown-menu-li">
                            {" "}
                            <MenuItem to={`/Trading`}> Trading</MenuItem>
                        </li>
                        <li className="dropdown-menu-li">
                            {" "}
                            <MenuItem to="/Programming"> IT</MenuItem>{" "}
                        </li>
                        <li className="menuItem">
                            <MenuItem className="menuItem" to="/Travel">
                                Travel
                            </MenuItem>
                        </li>
                    </ul>
                </li>

                <li className="menuItem">
                    <MenuItem className="menuItem" to="/favorites">
                        {" "}
                        Favorites{" "}
                        <span className="favoritesCount">
                            {favoritesCount}
                        </span>{" "}
                    </MenuItem>
                </li>
            </ul>

            <MenuItem className="cart" to="/cart">
                Cart
            </MenuItem>
        </div>
    );
};
export default Header;
