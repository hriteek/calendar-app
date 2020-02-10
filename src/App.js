import React from "react";

import FullCalendar from "./Components/FullCalendar";

import "./main.scss";

const App = props => {
  //const {}=props;
  console.log("App");

  return (
    <>
      <FullCalendar
        events={[
          { title: "event 1", date: "2020-02-11" },
          { title: "event 2", date: "2020-02-15" }
        ]}
      />
    </>
  );
};

export default App;
