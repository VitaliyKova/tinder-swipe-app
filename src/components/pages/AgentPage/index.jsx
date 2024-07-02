import { React, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import globalObject from "../../fietch/globalObject";
import ObjectCard from "../../obgectCard/ObjectCard";

import BotomBlock from "../../botomBlock/BotomBlock";
import ObjectDetails from "../../objectDetails/ObjectDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import Filter from "../../filter/Filter";
import Header from "../../Header";


const AgentPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isExpended, setIsExpended] = useState(false);
    const apartment = globalObject.aparts.find((ap) => ap.id === parseInt(id));

    const toggleExpand = () => {
        setIsExpended(!isExpended);
    };

    return (
        <div className="full-info">
            <div className="full-info__card">
                <Header brocker={apartment}/>
                <Filter aparts={globalObject.aparts} filterText={"Объектов"} />
                <ObjectCard
                    object={apartment}
                    classNameCard="card__full" //стили внутри компонента
                    classNameIndicator="indicator__full"
                />

                <button className="full-info__button full-info__button--send">
                    <FontAwesomeIcon
                        icon={faArrowUpFromBracket}
                        className="full-info__send-icon"
                    />
                </button>
                <button className="full-info__button full-info__button--view">
                    <img
                        className="full-info__button-img-view"
                        src={process.env.PUBLIC_URL + "/images/icon_view.svg"}
                        alt="icon back page"
                    />
                </button>
                <button className="full-info__button full-info__button--heart">
                    <img
                        className="full-info__button-img-heart"
                        src={process.env.PUBLIC_URL + "/images/icon_heart.svg"}
                        alt="icon bed"
                    />
                    <p className="card__price">${apartment.price}</p>
                    <p className="card__status">{apartment.status}</p>
                    <p className="full-info__button-count">{apartment.likeCounter}</p>
                </button>
            </div>
            <div className="container">
                <div className="full-info__title">
                <p className="full-info__title-name">{apartment.name}</p>
                    <p className="full-info__title-price">{`$ ${apartment.price}`}</p>
                </div>
                <div className="full-info__details">
                    <div className="full-info__location">
                        <img
                            className="full-info__location-icon"
                            src={process.env.PUBLIC_URL + "/images/icon-location.svg"}
                            alt="icon location"
                        />
                        <p className="full-info__location-name">{apartment.locationName}</p>
                    </div>
                    <ObjectDetails styleClass="grey" />
                </div>
                <div className="full-info__tags">
                    <p className="full-info__tags-text">Продажа</p>
                    <p className="full-info__tags-text">Апартаменты</p>
                    <p className="full-info__tags-text">Новострой</p>
                </div>
            </div>
            <BotomBlock brocker={apartment} />
        </div>
    );
}

export default AgentPage;