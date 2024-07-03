import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Header.css';

const Header = ({ brocker }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
        console.log(location.pathname)
    }, [location.pathname]);

    // Функция для проверки соответствия текущего пути заданному шаблону
    const isActive = (pathPattern) => {
        const regex = new RegExp(`^${pathPattern.replace(/:\w+/g, '\\d+')}$`);
        return regex.test(currentPath);
    };

    return (
        <div className="header">
            <div className="header-top">
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
                    <div className="brocker-inner">
                        <img className="brocker__img-header" src={brocker.brockerAvatar} alt=""/>
                        <img className="brocker__online" src={process.env.PUBLIC_URL + "/images/online.svg"}/>
                    </div>
                    <div className="brocker__info">
                        <p className="brocker__name">{brocker.brocker}</p>
                        <button className="subscride_header">Подписаться</button>
                    </div>
                    <div className='info-header'>
                        <button className="button_background_none info-header">
                            <img src={process.env.PUBLIC_URL + "/images/Vector.svg"}/>
                        </button>
                    </div>
                </div>
                <div className="header-right">
                    <div className='share-header'>
                        <button className="button_background_none">
                            <img className='share-header' src={process.env.PUBLIC_URL + "/images/Share.svg"}/>
                        </button>
                    </div>
                </div>
            </div>

            <nav className="nav">
                <Link to={`/Agent/${brocker.id}`} className={isActive(`/Agent/${brocker.id}`) ? "active" : ""}>Объекты</Link>
                <Link to="/collections" className={currentPath === "/" || currentPath === "/collections" ? "active" : ""}>Подборки</Link>
                <Link to="/videos" className={currentPath === "/videos" ? "active" : ""}>Видео</Link>
            </nav>
        </div>
    );
}

export default Header;
