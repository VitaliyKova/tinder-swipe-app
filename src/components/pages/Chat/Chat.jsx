import React, { useState, useEffect } from "react";
import styles from "./Chat.module.css";
import { Link, useParams } from "react-router-dom";
import ChatHeader from "../../ChatHeader/ChatHeader";
import globalObject from "../../fietch/globalObject";
import ChatLinkApart from "../../ChatLinkApart/ChatLinkApart";
import ChatMessage from "../../ChatMessage/ChatMessage";
import { photo, send } from "../../resorces/resources";

// Функция для форматирования даты
const formatDate = (date) => {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

function Chat() {
  const { id } = useParams();
  const apartment = globalObject.aparts.find((ap) => ap.id === parseInt(id));
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const [isModal, setIsModal] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageVisible(true);
    }, 3000);

    return () => clearTimeout(timeout); // Очистка таймера при размонтировании компонента
  }, []);

  return (
    <div>
      <ChatHeader apartment={apartment} />
      <div className={styles.container}>
        <p className={styles.date}>{formattedDate}</p>
        <div className={styles.topMessage}>
          <ChatLinkApart apart={apartment} />
        </div>
        {messageVisible && (
          <div className={styles.message}>
            <ChatMessage />
          </div>
        )}
        <div className={styles.inputBox}>
          <img src={photo} alt="photo"  onClick={() => setIsModal(true)}/>
          <input
            type="text"
            placeholder="Напишите сообщение"
            className={styles.input}
          />
          <div>
            <img src={send} alt="send" className={styles.photo} />
          </div>
        </div>
      </div>
      {isModal && (
        <div className={styles.modalBox} onClick={() => setIsModal(false)}>
          <div className={styles.modalBody}>
            <nav className={styles.nav}>
              <p className={`${styles.activ} ${styles.text}`}>Объекты</p>
              <p className={styles.text}>Подборки</p>
              <p className={styles.text}>Видео</p>
            </nav>
            <div className={styles.containerApart}>
              {globalObject.aparts.map((apart, index) => (
                <div className={styles.aprtModal} key={index} onClick={() => setIsModal(false)}>
                  <ChatLinkApart apart={apart} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
