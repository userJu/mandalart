import React, { useRef, useState } from "react";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";
import { useForm } from "react-hook-form";
import styles from "./Home.module.css";
import PlanBox from "./PlanBox";

const Home = (props) => {
  const { register, handleSubmit, setValue } = useForm();
  const [plan, setPlan] = useState("");
  const [currentTarget, setCurrentTarget] = useState("");
  const formInput = useRef();
  const onSubmit = ({ userPlan }) => {
    console.dir(userPlan);
    setPlan(userPlan);
    currentTarget.innerHTML = userPlan;

    setValue("userPlan", "");
  };
  const onClick = (e) => {
    if (e.target.children.length === 0) {
      setCurrentTarget(e.target);
      console.dir(e.target);
      formInput.current.focus();
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
        <input
          {...register("userPlan")}
          ref={formInput}
          type="text"
          placeholder="my aim"
        />
        <button>upload</button>
      </form>
    </div>
  );
};

export default Home;
