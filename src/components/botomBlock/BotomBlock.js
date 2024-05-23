import React from "react";
import "./botomBlock.css";

function BotomBlock({ brocker }) {
  return (
    <div className="botom-block">
      <div className="brocker">
        <img className="brocker__img" src={brocker?.brockerAvatar} alt="" />
        <div className="brocker__info">
          <p className="brocker__name">{brocker?.brocker}</p>
          <p className="brocker__type">Брокер</p>
        </div>
      </div>
      <button className="mesage">
        <img className="mesage__img" src={process.env.PUBLIC_URL + "/images/icon_chat.svg"} alt="icon mesage" />
      </button>
    </div>
  );
}

export default BotomBlock;
