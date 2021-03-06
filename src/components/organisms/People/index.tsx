import React from "react";
import Person from "../../molecules/Person";
import styles from "./index.module.scss";

const People = (props: any) => {
  return (
    <section id='people' className={styles["container"]}>
      <h2>People</h2>
      {props.people.map((person: any, i: number) => {
        return <Person {...person} key={i} />;
      })}
    </section>
  );
};

export default People;
