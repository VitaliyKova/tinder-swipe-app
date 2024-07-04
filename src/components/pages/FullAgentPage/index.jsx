import React from "react";
import HeaderFullAgent from "../../HeaderFullAgent";
import globalObject from "../../fietch/globalObject";
import {useNavigate} from "react-router-dom";
import './FullAgentPage.css'

const FullAgentPage = () => {
    const apartments = globalObject.aparts;
    const navigate = useNavigate();

    const handleOnClick = (id) => {
        navigate(`/agent/${id}`);
    }

    return (
        <>
            <HeaderFullAgent title={"Витрина агентов"} nav={true}/>
            <div className="apartment-list">
                {apartments.map((apartment, index) => (
                    <div key={apartment.id} className="apartment-item">
                        <div className='full_rating'><span className='rating_info'>#</span>{index + 1}</div>
                        <div className="agent-inner">
                            <img onClick={() => handleOnClick(apartment.id)} className="full_agent-img"
                                 src={apartment.brockerAvatar} alt=""/>
                            <p className='name_brocker'>{apartment.brocker} </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FullAgentPage;
