import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FullCalendarComp = props => {
  const { events } = props;
  console.log("FullCalendar");

  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin]}
      events={events}
    />
  );
};

export default FullCalendarComp;
