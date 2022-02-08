import React, { useEffect, useRef, useState } from "react";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";
import { useForm } from "react-hook-form";
import styles from "./Home.module.css";
import PlanBox from "./PlanBox";
import "@fortawesome/fontawesome-free/js/all.js";

const Home = (props) => {
  const { register, handleSubmit, setValue, setFocus } = useForm();
  const [currentTarget, setCurrentTarget] = useState("");
  const onSubmit = ({ userPlan }) => {
    currentTarget.innerHTML = userPlan;
    setValue("userPlan", "");
  };
  const onClick = (e) => {
    if (e.target.children.length === 0) {
      setCurrentTarget(e.target);
      setFocus("userPlan");
    } else {
      console.log("제대로눌러라");
    }
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.h1}>My Mandalart</h1>
      <div className={styles.planBigBox} onClick={onClick}>
        <PlanBox />
        <PlanBox />
        <PlanBox />
        <PlanBox />
        <PlanBox />
        <PlanBox />
        <PlanBox />
        <PlanBox />
        <PlanBox />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("userPlan")} type="text" placeholder="my aim" />
        <button>upload</button>
      </form>
      <button
        onClick={() => {
          window.print();
        }}
        title="print"
      >
        <i className="fas fa-print"></i>
      </button>
    </div>
  );
};

export default Home;
