import React from "react";
import People from "../../organisms/People";
import Events from "../../organisms/Events";
import SiteFooter from "../SiteFooter";
import styles from "./index.module.scss";
import { connect } from "react-redux";

const mapStateToProps = (state: any, ownProps: any) => {
  const { events, people } = state;

  return {
    events,
    people,
  };
};

const Content = (props: any) => {
  return (
    // TODO: Restyle for mobile
    <main className={styles["container"]}>
      <section id='intro' className={styles["intro"]}>
        <h1>Blockchain Lab @ NYU</h1>
        <p>
          Student organization in the heart of Lower Manhattan active since
          2017. A community interested in learning about and exploring
          blockchain technologies. Our goal is to promote student-led research
          and innovation at the university.
        </p>
      </section>
      {props.events.length ? <Events events={props.events} /> : null}
      {props.people.length ? <People people={props.people} /> : null}
      <SiteFooter />
    </main>
  );
};

export default connect(mapStateToProps)(Content);
