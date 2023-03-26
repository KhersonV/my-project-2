import articlesArray from "../../utils/articlesArray";
import "../ArticleList/ArticleList.css"
import red from "../../img/red-heart-icon.svg"
import black from "../../img/heart-bl.svg"
import { addLike, removeLike } from "../redux/likeReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Trading = () => {
  const dispatch = useDispatch();
  const productsLikeState = useSelector(state => state.productsLikeState);
  const tradingArray = articlesArray.filter((article)=>article.category==="Trading")

  return (
     <>
      
      <div className="flexItemCont">
        {tradingArray.map((article) => {
          
          return (
            <div key={article.id} className="itemContainer">
              <h2 className="category">{article.category}</h2>
              <h3 className="title">{article.title}</h3>
              <p className="description">{article.description}</p>
              <div className="button-container"> 
              <button className="infoBtn"> <Link  className="infoBtn" to={`/article?id=${article.id}`}> More info </Link> </button>
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
            </div>
          );
        })}
      </div>
    </>
  )
}
export default Trading
