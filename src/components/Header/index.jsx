import React, { useEffect, useState } from "react";
import globalObject from "../fietch/globalObject";
import {Link, useNavigate, useParams} from "react-router-dom";
import './Header.css'


const Header = ({ brocker }) => {
    const { id } = useParams();
    const agent = globalObject.aparts.find((ap) => ap.id === parseInt(id));
    const navigate = useNavigate();


    return (
        <div className="header">
            <div className="header-top">
                <div className="header-left">
                    <button
                        onTouchEnd={() => navigate(-1)}
                        className="full-info__button full-info__button--back"
                    >
                        <img
                            className="full-info__button-img-back"
                            src={process.env.PUBLIC_URL + "/images/icon_backPage.svg"}
                            alt="icon back page"
                        />
                    </button>
                    <img className="brocker__img" src={brocker.brockerAvatar} alt=""/>
                    <div className="brocker__info">
                        <p className="brocker__name">{brocker.brocker}</p>
                        <div>Подписаться</div>
                    </div>
                    <div className='info-header'>Info</div>
                </div>
                <div className="header-right">

                    <div className='share-header'>To share</div>
                </div>
            </div>

            <nav className="nav">
                <Link to="#">Объекты</Link>
                <Link to="/">Подборки</Link>
                <Link to="#">Видео</Link>
            </nav>
        </div>

    )
}

export default Header;