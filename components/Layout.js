// components/Layout.js

import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import "./Layout.scss";
import "./index.scss";

const Layout = props => {
  const appTitle = `> WHATABYTE`;

  return (
    <div className="Layout">
      <Head>
        <title>WHATABYTE</title>
      </Head>

      <Header appTitle={appTitle} />
      <div className="Content">{props.children}</div>
      <NavBar />
    </div>
  );
};

export default Layout;
