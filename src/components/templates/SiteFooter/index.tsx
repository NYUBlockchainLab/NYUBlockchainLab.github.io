import React from "react";
import styles from "./index.module.scss";

const SiteFooter = () => {
  return (
    <footer id='contact' className={styles["container"]}>
      {/* TODO: Do something with the form */}
      <form action=''>
        <h2>
          Stay in the know!
          <small>Email us at blockchainlabnyu@gmail.com.</small>
        </h2>
        <p>
          Like our Facebook page and join our mailing list to be up to date with
          events, meetings and workshops!
        </p>
        {/* <div>
          <label>Email address</label>
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
