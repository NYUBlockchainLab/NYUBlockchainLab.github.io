import React from "react";

const SiteFooter = () => {
  return (
    // TODO: Style the footer
    <footer>
      <h2>Stay in the know!</h2>
      <p>Email us at blockchainlabnyu@gmail.com.</p>
      {/* TODO: Do something with the form */}
      <form action=''>
        <p>
          Like our Facebook page and join our mailing list to be up to date with
          events, meetings and workshops!
        </p>
        <div>
          <label>Email address</label>
          <input
            type='email'
            autoComplete='email'
            placeholder='Enter your email address'
          ></input>
          <button type='submit'>Get on the List</button>
        </div>
      </form>
      <small>© Blockchain Lab @ NYU {new Date().getFullYear()}</small>
    </footer>
  );
};

export default SiteFooter;
