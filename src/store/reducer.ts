import { Reducer } from "react";
import { RootStateOrAny } from "react-redux";
import { AnyAction } from "redux";

import people from "../data/people.json";
import events from "../data/events.json";

const initialState: RootStateOrAny = {
  menus: {
    siteNav: [
      {
        title: "Introduction",
        href: "/",
      },
      {
        title: "Events",
        href: "/events",
      },
      {
        title: "Team",
        href: "/team",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
    socialLinks: [
      "https://www.facebook.com/BlockchainLabNYU",
      "https://github.com/NYUBlockchainLab",
      "https://twitter.com/BlockchainLabNY",
      "discord",
    ],
  },
  people,
  events,
};

const reducer = (
  state = initialState,
  action: AnyAction
): Reducer<RootStateOrAny, AnyAction> => {
  return state;
};

export default reducer;
