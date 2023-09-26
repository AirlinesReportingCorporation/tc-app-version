import { Fragment } from "react";
import NavBar from "./navbar";
import TCFooter from "./footer";

export default function Layout({ children }) {
  return (
    <Fragment>
      <NavBar />
      {children}
      <TCFooter />
    </Fragment>
  );
}
