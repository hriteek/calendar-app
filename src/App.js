import React, { useEffect, useState } from "react";

import FullCalendar from "./Components/FullCalendar";

import "./main.scss";

// simple date converter the converts this "2013-03-10T02:00:00Z" into "2013-03-10"
const dateConverter = data => {
  const date = new Date(data);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return `${year}-${month}-${dt}`;
};

const App = props => {
  const [events, setEvents] = useState([
    // { title: "event 1", date: "2020-02-11" },
    // { title: "event 2", date: "2020-02-15" }
  ]);

  // we should not use async/await syntax in useEffect so this function
  const apiCall = async () => {
    const res = await fetch("http://localhost:8080/api/show");
    const data = await res.json();
    //  events.push({
    //     start: e.start_date_time,
    //     end: e.end_date_time,
    //     title: e.meeting_title,
    //     url: e.web_link
    //   });
    const fineData = data.map(each => ({
      // title: each.ShowId.toString(),
      title: each.ShowId,
      date: dateConverter(each.ShowDateTime)
    }));
    console.log("data", fineData);
    setEvents(fineData);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <FullCalendar events={events} />
    </>
  );
};

export default App;
