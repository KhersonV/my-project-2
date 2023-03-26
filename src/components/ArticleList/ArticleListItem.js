import { useDispatch, useSelector } from "react-redux";
import articlesArray from "../../utils/articlesArray";
import { addLike, removeLike } from "../redux/likeReducer";
import "./ArticleList.css"
import red from "../../img/red-heart-icon.svg"
import black from "../../img/heart-bl.svg"
import Reviews from "../Reviews/Reviews";

const ArticleListItem = () => {
    const productsLikeState = useSelector((state)=>state.productsLikeState)

    const dispatch = useDispatch();

    const articleId = new URLSearchParams(window.location.search).get("id"); 

    const article = articlesArray.find((article) => article.id.toString() === articleId);

    return (
        <>
            
                
                    <div className="itemContainer">
                        <h2 className="category">{article.category}</h2>
                        <h3 className="title">{article.title}</h3>
                        <p className="description">{article.description}</p>
                        <p className="description">  {article.article}</p>
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

                    <Reviews/>
                
            
        </>
    )
}
export default ArticleListItem