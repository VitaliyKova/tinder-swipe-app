import React from "react";
import styles from "./ChatMessage.module.css";
import { dubleSucesful } from "../resorces/resources";

function ChatMessage() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Здравствуйте! Отличный выбор! Предлагаю сегодня проехать и посмотреть
      </p>
      <div className={styles.details}>
        <p>10:45</p>
        <img src={dubleSucesful} alt="succes" />
      </div>
    </div>
  );
}

export default ChatMessage;
