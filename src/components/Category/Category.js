import articlesArray from "../../utils/articlesArray";
import "../ArticleList/ArticleList.css";
import red from "../../img/red-heart-icon.svg";
import black from "../../img/heart-bl.svg";
import { addLike, removeLike } from "../redux/likeReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CoursesPage from "../CoursesPage/CoursesPage";

const Category = () => {
    const { category } = useParams();
    const articleCategory = category;

    const dispatch = useDispatch();

    const productsLikeState = useSelector((state) => state.productsLikeState);

    const productsInCart = useSelector((state)=>state.productsInCart)


    const categor = articleCategory;
    const categoryArray = articlesArray.filter(
        (article) => article.category === categor,
    );

    return (
        <>
            <h2 className="courses"> {categor} Articles</h2>
            <div className="flexItemCont">
                {categoryArray.map((article) => {
                    return (
                        <div key={article.id} className="itemContainer">
                            <h2 className="category traiding">
                                {article.category}
                            </h2>
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
                                        src={
                                            productsLikeState[article.id]
                                                ? red
                                                : black
                                        }
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <>
  {categor === "Travel"
    ? null 
    : (
      <>
        <h2 className="courses">{categor} Courses</h2>
        <CoursesPage productsInCart={productsInCart} ownCategory={categor} />
      </>
    )
  }
</>
        </>
    );
};
export default Category;
