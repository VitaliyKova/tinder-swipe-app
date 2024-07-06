import React from "react";
import styles from "./ChatLinkApart.module.css";
import ObjectDetails from "../objectDetails/ObjectDetails";
import { geo } from "../resorces/resources";

function ChatLinkApart({ apart }) {
  return (
    <div className={styles.container}>
      <img src={apart.url[0]} alt="aprt" className={styles.apartImg} />
      <h2 className={styles.title}>$ {apart.price}</h2>
      <p className={styles.status}>{apart.type}</p>
      <div className={styles.details}>
        <ObjectDetails styleClass="grey" />
      </div>
      <div className={styles.location}>
        {<img src={geo} alt="geo" />}
        <p className={styles.locationName}>{apart.locationName}</p>
      </div>
    </div>
  );
}

export default ChatLinkApart;
