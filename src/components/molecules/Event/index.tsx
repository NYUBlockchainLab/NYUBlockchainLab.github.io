import React from "react";
import styles from "./index.module.scss";

const Event = (props: any) => {
  return (
    <article className={styles["container"]}>
      {props.image ? (
        <figure>
          <img src={props.image} alt={props.title || props.speaker.name} />
        </figure>
      ) : null}
      <h3>{props.title}</h3>
      <h4>
        {props.speaker.name}
        <small>{props.speaker.title}</small>
      </h4>
      <a href={props.link}></a>
    </article>
  );
};

export default Event;
