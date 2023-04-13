import React from "react";
import styles from "./index.module.scss";

const SiteFooter = () => {
  return (
    <footer id='contact' className={styles["container"]}>
      {/* TODO: Do something with the form */}
      <form action=''>
        <h2>
          Stay in the know!
          <small>https://discord.gg/TaZt3AVtFu</small>
        </h2>
        <p>
          Join our discord server to be up to date with
          events, meetings and workshops!
        </p>
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
