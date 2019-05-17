// components/NavBar.js

import "./NavBar.scss";
import NavButton from "./NavButton";

const NavBar = props => (
  <div className="NavBar">
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
);

export default NavBar;
