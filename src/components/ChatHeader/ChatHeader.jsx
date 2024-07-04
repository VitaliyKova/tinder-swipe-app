import React from "react";
import styles from "./ChatHeader.module.css";
import { useNavigate } from "react-router-dom";

function ChatHeader({ apartment }) {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <button
        onTouchEnd={() => navigate(-1)}
        className={styles.back}
      >
        <img
          className="header__button-img-back"
          src={process.env.PUBLIC_URL + "/images/Back_Solid.svg"}
          alt="icon back page"
        />
      </button>
      <h2 className={styles.heading}>{apartment.brocker}</h2>
      <img className={styles.avatar} src={apartment.brockerAvatar} alt="avatar" />
    </div>
  );
}

export default ChatHeader;
