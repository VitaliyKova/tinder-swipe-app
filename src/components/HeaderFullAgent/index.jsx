import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Header.css';

const HeaderFullAgent = ({ title, nav , agent }) => {
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
            <div className={`header-top ${agent}`}>
                <div className="header-left">
                    <button
                        onTouchEnd={() => navigate('/')}
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
                            {title}
                        </button>
                    </div>
                </div>
            </div>

            <nav className="nav nav_full">
                {nav ? (
                    <>
                        <Link to={`/full_agent`} className={isActive(`/full_agent`) ? "active_all" : "all_agent"}>Все
                            агенты</Link>
                        <div>Турция</div>
                        <div>Северный Кипр</div>
                        <div>Дубай</div>
                    </>
                ) : ''}
            </nav>
        </div>
    );
}

export default HeaderFullAgent;
