import React, { useState } from "react";
import styles from "./PlanBox.module.css";

const Planbox = () => {
  const [selectPlan, setSelectPlan] = useState("");
  // console.log(title);

  return (
    <div className={styles.planBox}>
      <div className={styles.plan}></div>
      <div className={styles.plan}></div>
      <div className={styles.plan}></div>
      <div className={styles.plan}></div>
      <div className={styles.plan}></div>
      <div className={styles.plan}></div>
      <div className={styles.plan}></div>
      <div className={styles.plan}></div>
      <div className={styles.plan}></div>
    </div>
  );
};

export default Planbox;
