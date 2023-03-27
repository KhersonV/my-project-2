import coursesArray from "../../utils/coursesArray";
import "./CoursesPage.css";

const CoursesPage = ({ ownCategory }) => {
    const newCourseArray = coursesArray.filter(
        (course) => course.category === ownCategory,
    );

    return (
        <div className="container">
            {newCourseArray.map((course) => (
                <div key={course.id} className="itemContainer">
                    <img className="img" src={course.img} alt="" />
                    <div className="title">{course.title}</div>
                    <div className="price">${course.price}</div>
                    <div className="subtitle">Why We Chose It</div>
                    <ul className="list">
                        {course.whyWeChoseIt.map((reason, index) => (
                            <li key={index} className="list-item">
                                {reason}
                            </li>
                        ))}
                    </ul>
                    <div className="subtitle">Advantages</div>
                    <ul className="list">
                        {course.Pros.map((pro, index) => (
                            <li key={index} className="list-item">
                                {pro}
                            </li>
                        ))}
                    </ul>
                    <div className="subtitle">Disadvantages</div>
                    <ul className="list">
                        {course.Cons.map((con, index) => (
                            <li key={index} className="list-item">
                                {con}
                            </li>
                        ))}
                    </ul>
                    <button className="button">Buy Course</button>
                </div>
            ))}
        </div>
    );
};

export default CoursesPage;
