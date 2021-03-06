import React from "react";
import SideNav from "../../templates/SideNav";
import Content from "../../templates/Content";
import styles from "./index.module.scss";

function App() {
  return (
    <div className={styles["container"]}>
      <SideNav />
      <Content />
    </div>
  );
}

export default App;
