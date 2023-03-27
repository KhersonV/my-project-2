import { Route, Routes } from "react-router-dom";
import ArticleListItem from "../ArticleList/ArticleListItem";
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";
import Home from "../Home/Home";
import It from "../It/It";
import Traiding from "../Trading/Trading";
import Travel from "../Travel/Travel";

import "./Main.css";

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" Component={Home}>
                    {" "}
                </Route>
                <Route path="/cart" Component={Cart}>
                    {" "}
                </Route>
                <Route path="/trading" Component={Traiding}>
                    {" "}
                </Route>
                <Route path="/it" Component={It}>
                    {" "}
                </Route>
                <Route path="/travel" Component={Travel}>
                    {" "}
                </Route>
                <Route path="/favorites" Component={Favorites}>
                    {" "}
                </Route>
                <Route path="/article" element={<ArticleListItem />}>
                    {" "}
                </Route>
            </Routes>
        </>
    );
};

export default Main;
