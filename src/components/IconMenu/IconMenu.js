import inst from "../../img/Instagram.svg";
import faceb from "../../img/Facebook.svg";
import Location from "../../img/Location.png";

import "./IconMenu.css";

const IconMenu = () => {
    return (
        <ul className="iconMenu-container ">
            <li className="icons">
                <a href="https://instagram.com/vladyslav_mamotenko?igshid=YmMyMTA2M2Y=">
                    {" "}
                    <img
                        className="iconMenu-img"
                        src={inst}
                        alt="Instagramm"
                    />{" "}
                </a>
            </li>
            <li className="icons">
                <a href="https://www.facebook.com/profile.php?id=100015130922185&mibextid=LQQJ4d">
                    {" "}
                    <img
                        className="iconMenu-img"
                        src={faceb}
                        alt="facebook"
                    />{" "}
                </a>
            </li>
            <li className="icons">
                <a href="https://www.google.com/maps/d/edit?mid=1Hs4Fgd5oNqfnVKtgHyVsejYYnl69az4&usp=sharing">
                    {" "}
                    <img
                        className="iconMenu-img"
                        src={Location}
                        alt="Location"
                    />{" "}
                </a>
            </li>
        </ul>
    );
};
export default IconMenu;
