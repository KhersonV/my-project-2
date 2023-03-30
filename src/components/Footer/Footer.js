import React from "react";
import IconMenu from "../IconMenu/IconMenu";
import "./Footer.css";
import UpArrow from "./UpArrow";
import sign from "../../img/sign.jpg"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="icons-menu">
                    <IconMenu />
                </div>
                <div className="footer-copyright">Copyright &copy; 2023 </div>
                <div className="footer-upArrow">
                    <UpArrow />
                </div>
                <img className="footer-img" src={sign} alt=""/>
            </div>
        </footer>
    );
}

export default Footer;
