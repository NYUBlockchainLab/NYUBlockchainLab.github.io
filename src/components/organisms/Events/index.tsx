import React from "react";
import Event from "../../molecules/Event";
import styles from "./index.module.scss";

const Events = (props: any) => {
  return (
    <section id='events' className={styles["container"]}>
      <h2>Events</h2>
      {props.events.map((event: any, i: number) => {
        return <Event {...event} key={i} />;
      })}
    </section>
  );
};

export default Events;
