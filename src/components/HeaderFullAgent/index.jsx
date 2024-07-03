import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Header.css';

const HeaderFullAgent = ({ brocker }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState(location.pathname);



    // Функция для проверки соответствия текущего пути заданному шаблону
    const isActive = (pathPattern) => {
        const regex = new RegExp(`^${pathPattern.replace(/:\w+/g, '\\d+')}$`);
        return regex.test(currentPath);
    };

    return (
        <div className="header">
            <div className="header-top header-top_agent">
                <div className="header-left">
                    <button
                        onTouchEnd={() => navigate(-1)}
                        className="header__button header__button--back button_background_none"
                    >
                        <img
                            className="header__button-img-back"
                            src={process.env.PUBLIC_URL + "/images/Back_Solid.svg"}
                            alt="icon back page"
                        />
                    </button>
                    <div className='info-header'>
                        <button className="button_background_none info-header">
                            Витрина агентов
                        </button>
                    </div>
                </div>
            </div>

            <nav className="nav nav_full">
                <Link to={`/full_agent`} className={isActive(`/full_agent`) ? "active_all" : "all_agent"}>Все агенты</Link>
                <div>Турция</div>
                <div>Северный Кипр</div>
                <div>Дубай</div>
            </nav>
        </div>
    );
}

export default HeaderFullAgent;
