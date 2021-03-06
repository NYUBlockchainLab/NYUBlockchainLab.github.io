import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const mapStateToProps = (state: any, ownProps: any) => {
  const { siteNav, socialLinks } = state.menus;

  return {
    siteNav,
    socialLinks,
  };
};

const SideNav = (props: any) => {
  const SiteNavItems = () => {
    const { siteNav } = props;

    if (siteNav) {
      return siteNav.map((item: any, i: number) => {
        return (
          <li key={i}>
            <NavLink to={item.href} activeClassName={styles["active"]} exact>
              {item.title}
            </NavLink>
          </li>
        );
      });
    }

    return null;
  };

  const SocialLinks = () => {
    const { socialLinks } = props;

    if (socialLinks) {
      return socialLinks.map((link: string, i: number) => {
        const service = link.split(/^(http|https)?:\/\/(www.)?(\w+)/)[3];
        return <a className={`fab fa-${service}`} href={link} key={i}></a>;
      });
    }

    return null;
  };

  return (
    <nav className={styles["container"]}>
      <h1>Blockchain Lab @ NYU</h1>
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
