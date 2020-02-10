import React, { useEffect, useState } from "react";

import FullCalendar from "./Components/FullCalendar";

import "./main.scss";

const App = props => {
  const [events, setEvents] = useState([
    { title: "event 1", date: "2020-02-11" },
    { title: "event 2", date: "2020-02-15" }
  ]);

  useEffect(() => {
    // api call here
  }, []);

  return (
    <>
      <FullCalendar events={events} />
    </>
  );
};

export default App;
