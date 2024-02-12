import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";

export default function Header() {
    return (
        <nav className="header">
            <img className="header__logo" src={logo} />
            <div>
                <h2>Elevating Web Design</h2>
                <p> by Christian Ocampo</p>
            </div>
        </nav>
    );
}
