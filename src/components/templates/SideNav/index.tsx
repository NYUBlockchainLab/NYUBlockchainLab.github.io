import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const mapStateToProps = (state: any, ownProps: any) => {
  const { siteNav, socialLinks } = state.menus;

  return {
    siteNav,
    socialLinks,
  };
};

// TODO: Animate
const SideNav = (props: any) => {
  const SiteNavItems = () => {
    const { siteNav } = props;

    if (siteNav) {
      return siteNav.map((item: any, i: number) => {
        return (
          <li key={i}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        );
      });
    }

    return null;
  };

  const SocialLinks = () => {
    const { socialLinks } = props;

    if (socialLinks) {
      return socialLinks.map((link: any, i: number) => {
        // TODO: extract service from URL
        return (
          <i className={link} key={i}>
            <a href={link}></a>
          </i>
        );
      });
    }

    return null;
  };

  return (
    <nav className={styles["container"]}>
      <span></span>
      <ul>
        <SiteNavItems />
      </ul>
      <menu>
        <SocialLinks />
      </menu>
    </nav>
  );
};

export default connect(mapStateToProps)(SideNav);
