import React from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./Header/Header";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Me from "./Home/Me/Me";
import Welcome from "./Home/Welcome/Welcome";
import StarOfLife from "./Home/StarOfLife/StarOfLife";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Welcome />
        <StarOfLife />
        <Me />
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
      </div>
    </div>
  );
}
