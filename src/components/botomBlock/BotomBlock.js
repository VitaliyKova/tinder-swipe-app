import React from "react";
import "./botomBlock.css";
import { useNavigate } from "react-router-dom";

function BotomBlock({ brocker }) {
  const navigate = useNavigate();
  return (
    <div className="botom-block">
      <div className="brocker" onClick={() => navigate(`/agent/${brocker.id}`)}>
        <img className="brocker__img" src={brocker?.brockerAvatar} alt="" />
        <div className="brocker__info">
          <p className="brocker__name">{brocker?.brocker}</p>
          <p className="brocker__type">Брокер</p>
        </div>
      </div>
      <button className="mesage" onClick={() => navigate(`/chat/${brocker?.id}`)}>
        <img className="mesage__img" src={process.env.PUBLIC_URL + "/images/icon_chat.svg"} alt="icon mesage" />
      </button>
    </div>
  );
}

export default BotomBlock;
