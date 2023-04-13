import React from "react";
import People from "../../organisms/People";
import Events from "../../organisms/Events";
import SiteFooter from "../SiteFooter";
import styles from "./index.module.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const mapStateToProps = (state: any, ownProps: any) => {
  const { events, people } = state;

  return {
    events,
    people,
    $location: ownProps.match.params.id,
  };
};

class Content extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.scrollTo();
  };

  componentDidUpdate = () => {
    this.scrollTo();
    // TODO: update route on scroll
    // this.props.history.push('')
  };

  scrollTo = () => {
    const { $location } = this.props;
    if ($location) {
      const element: any = document.getElementById($location);
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      document.getElementsByTagName("main")[0].scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  render() {
    return (
      <main className={styles["container"]}>
        <section id='intro' className={styles["intro"]}>
          <p>
            Student organization bringing Blockchain and Distributed Ledger Technologies to NYU. 
            We support student developers and researchers.  
          </p>
        </section>
        {this.props.events.length ? (
          <Events events={this.props.events} />
        ) : null}
        {this.props.people.length ? (
          <People people={this.props.people} />
        ) : null}
        <SiteFooter />
      </main>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Content));
