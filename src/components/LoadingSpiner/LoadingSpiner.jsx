import React from "react";
import styles from "./loadingSpiner.module.css";
import { logo } from "../resorces/resources"

function LoadingSpiner() {
  return (
    <div className={styles.loading_spinner}>
      <div className={styles.spinner}></div>
      <img className={styles.logo} src={logo} alt="" />
    </div>
  );
}

export default LoadingSpiner;
