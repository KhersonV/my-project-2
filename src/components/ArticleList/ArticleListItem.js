import { useDispatch, useSelector } from "react-redux";
import articlesArray from "../../utils/articlesArray";
import { addLike, removeLike } from "../redux/likeReducer";
import "./ArticleList.css";
import red from "../../img/red-heart-icon.svg";
import black from "../../img/heart-bl.svg";
import Reviews from "../Reviews/Reviews";
import { Link, useParams } from "react-router-dom";

const ArticleListItem = () => {
    const productsLikeState = useSelector((state) => state.productsLikeState);
    const dispatch = useDispatch();

    const { id } = useParams();
    const articleId = parseInt(id);

    const article = articlesArray.find((article) => article.id === articleId);

    return (
        <>
            <div className="itemContainer">
                <h2 className="category">
                    <Link className="infoBtn" to={`/${article.category}`}>
                        {" "}
                        {article.category}
                    </Link>{" "}
                </h2>
                <h3 className="title">{article.title}</h3>
                <p className="description">{article.description}</p>
                <p className="description">{article.article}</p>
                <button
                    className="likeBtn"
                    onClick={() => {
                        productsLikeState[article.id]
                            ? dispatch(removeLike(article.id))
                            : dispatch(addLike(article.id));
                    }}
                >
                    <img
                        className="likeBtn-img"
                        src={productsLikeState[article.id] ? red : black}
                        alt=""
                    />
                </button>
            </div>
            <Reviews />
        </>
    );
};

export default ArticleListItem;
