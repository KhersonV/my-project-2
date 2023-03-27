import { useState } from "react";
import "./Review.css";

const Reviews = () => {
    const arrReviews = [];

    const [reviews, setReviews] = useState(arrReviews);
    const [newReview, setNewReview] = useState({
        name: "",
        text: "",
    });

    const handleName = (e) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }));
    };
    const handleText = (e) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }));
    };

    const onSend = (e) => {
        e.preventDefault();
        if (newReview.name === "" || newReview.text === "") {
            alert("All fields are required!");
        } else {
            setNewReview({
                name: "",
                text: "",
            });

            setReviews((prevState) => {
                return [...prevState, newReview];
            });
        }
    };

    return (
        <>
            <h2 className="Reviews-h2">Reviews</h2>
            <div className="Reviews-container">
                {reviews.map((item, i) => (
                    <div key={i} className="Reviews-item">
                        <div className="Reviews-name"> {item.name}</div>
                        <div className="Reviews-text">{item.text}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={onSend} className="Reviews-form">
                <h3 className="Reviews-h3">Please leave a review</h3>
                <div className="Review-box">
                    <input
                        className="Review-input-name"
                        label="Name"
                        placeholder="Name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div className="Review-box">
                    <input
                        className="Review-input-text"
                        placeholder="Text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <button className="Review-input-btn" type="submit">
                    Send
                </button>
            </form>
        </>
    );
};

export default Reviews;
