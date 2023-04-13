import React from "react";
import styles from "./index.module.scss";

const SiteFooter = () => {
  return (
    <footer id='contact' className={styles["container"]}>
      {/* TODO: Do something with the form */}
      <form action=''>
        <h2>
        Join our discord server! 
        </h2>
        <h3>
        <a href="https://discord.gg/TaZt3AVtFu" target="_blank" rel="noopener noreferrer">
          https://discord.gg/TaZt3AVtFu
          </a>
        </h3>
        {/* <div>
          <label>Discord</label>
          <input
            type='email'
            autoComplete='email'
            placeholder='Enter your email address'
          ></input>
          <button type='submit'>Get on the List</button>
        </div> */}
      </form>
      <small>© Blockchain Lab @ NYU {new Date().getFullYear()}</small>
    </footer>
  );
};

export default SiteFooter;
