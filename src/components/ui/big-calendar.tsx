"use client";

import * as React from "react";
import { Calendar as BigCal, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import addHours from "date-fns/addHours";
import addDays from "date-fns/addDays";
import enUS from "date-fns/locale/en-US";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

export type Event = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
};

function sampleEvents(): Event[] {
  const today = new Date();
  const base = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0, 0);
  // Create a sample assignment for the next 7 days (one event per day)
  return Array.from({ length: 7 }).map((_, i) => {
    const start = addDays(base, i);
    const end = addHours(start, 2);
    return {
      title: `Jury: Person ${i + 1}`,
      start,
      end,
    };
  });
}

export default function BigCalendarComponent() {
  const events = React.useMemo(() => sampleEvents(), []);

  return (
    <div className="w-full">
      <BigCal
        localizer={localizer}
        events={events}
        defaultView={"week"}
        views={["month", "week", "day", "agenda"]}
        defaultDate={new Date()}
        style={{ height: "calc(100vh - 120px)" }}
        popup
      />
    </div>
  );
}
