import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="header">
            <div className="header__cont1">
                <Link to={"/"}>
                    <img className="header__logo" src={logo} />
                </Link>
                <div>
                    <h2>Elevating Web Design</h2>
                    <p> by Christian Ocampo</p>
                </div>
            </div>
            <div className="header__cont2">
                <Link className="header__cont2-link" to={"/interactive"}>
                    <p className="header__cont2-text">Interactive</p>
                </Link>
                <Link className="header__cont2-link" to={"/glow"}>
                    <p className="header__cont2-text">Glowing</p>
                </Link>
                <Link className="header__cont2-link" to={"/games"}>
                    <p className="header__cont2-text">Games</p>
                </Link>
            </div>
        </nav>
    );
}
