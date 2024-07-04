import React from "react";
import HeaderFullAgent from "../../HeaderFullAgent";
import globalObject from "../../fietch/globalObject";
import {useNavigate} from "react-router-dom";
import './ObjectsFull.css'
import Filter from "../../filter/Filter";
import Navigator from "../../navigator/Navigator";

const FullAgentPage = () => {
    const apartments = globalObject.aparts;
    const navigate = useNavigate();

    const handleOnClick = (id) => {
        navigate(`/agent/${id}`);
    }

    return (
        <>
            <HeaderFullAgent title={"Подборки в Турции"} nav={false} agent={'nav-top-object'}/>
            <Filter aparts={globalObject.aparts} filterText={"Объектов"}/>
            <div className="object-list">
                {apartments.map((apartment, index) => (
                    <div key={apartment.id} className="object-item">
                        <div className="object-inner">
                            <div className="object-img">
                                <img onClick={() => handleOnClick(apartment.id)} className="full_object-img"
                                     src={apartment.url[0]} alt=""/>

                                <div className='all-like'>
                                    <div className='counter'>{apartment.likeCounter}</div>
                                    <img
                                        className="card__button-img"
                                        src={process.env.PUBLIC_URL + "/images/icon_heart.svg"}
                                        alt="icon bed"
                                    />
                                </div>
                            </div>
                            <div className='object-info'>
                                <div className='type-price'>
                                    <p className='object-type'>{apartment.status} </p>
                                    <p className='object-price'>От ${apartment.price} </p>
                                </div>

                                <p className='object-all'>{apartment.url.length} Объектов </p>
                            </div>
                        </div>
                    </div>
                ))}
                <Navigator/>
            </div>
        </>
    );
}

export default FullAgentPage;
