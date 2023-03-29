import { Route, Routes } from "react-router-dom";
import ArticleListItem from "../ArticleList/ArticleListItem";

import Favorites from "../Favorites/Favorites";
import Home from "../Home/Home";
import Category from "../Category/Category";
import "./Main.css";

import Cart from "../Cart/Cart";

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:category" element={<Category />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/:category/:id" element={<ArticleListItem />} />
            </Routes>
        </>
    );
};

export default Main;
