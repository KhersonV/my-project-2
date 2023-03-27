import { useDispatch, useSelector } from 'react-redux';
import articlesArray from "../../utils/articlesArray";
import { addLike, removeLike } from '../redux/likeReducer';
import red from "../../img/red-heart-icon.svg"
import black from "../../img/heart-bl.svg"
import { Link } from 'react-router-dom';

const Favorites = () => {
  const dispatch = useDispatch();
  const productsLikeState = useSelector((state)=>state.productsLikeState)

  const likedArticles = articlesArray.filter(({id}) => productsLikeState[id]);

  return likedArticles.length === 0 ? (
    <h2 className="title pageTitle">No liked articles yet</h2>
  ) : (
    <div className="flexItemCont">
      {likedArticles.map((article) => (
        <div key={article.id} className="itemContainer">
          <h2 className="category"><Link
                                        className="infoBtn"
                                        to={`/${article.category}`}
                                    >
                                        {" "}
                                        {article.category}
                                    </Link>{" "}</h2>
          <h3 className="title">{article.title}</h3>
          <p className="description">{article.description}</p>
          <div className="button-container"> 
          <button className="infoBtn">
                                    {" "}
                                    <Link
                                        className="infoBtn"
                                        to={`/${article.category}/${article.id}`}
                                    >
                                        {" "}
                                        More info{" "}
                                    </Link>{" "}
                                </button>
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
      ))}
    </div>
  );
};

export default Favorites;
