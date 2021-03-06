import React from "react";
import styles from "./index.module.scss";

const Person = (props: any) => {
  let { name, role, socials, headshot, bio } = props;

  // TODO: Make this work
  socials = socials.forEach((social: any, i: any) => {
    return (
      <i key={i}>
        <a href={social.link}>{social}</a>
      </i>
    );
  });

  return (
    <article className={styles["container"]}>
      <figure>
        <img src={headshot} alt={name} />
      </figure>
      <h4>
        {name}
        <small>{role}</small>
      </h4>
      <figcaption>{bio}</figcaption>
      <menu>{socials}</menu>
    </article>
  );
};

export default Person;
