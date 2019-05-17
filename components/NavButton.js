import Link from "next/link";
import { withRouter } from "next/router";

import "./NavButton.scss";

const NavButton = props => (
  <Link href={props.path}>
    <div
      className={`NavButton ${
        props.router.pathname === props.path ? "active" : ""
      }`}
    >
      <div className="Icon">{props.icon}</div>
      <span className="Label">{props.label}</span>
    </div>
  </Link>
);

export default withRouter(NavButton);
