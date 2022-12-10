import Layout from "../../shared/components/Layout";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 11, 0),
    end: new Date(2022, 11, 0),
  },
  {
    title: "Vacation",
    start: new Date(2022, 11, 7),
    end: new Date(2022, 11, 10),
  },
  {
    title: "Conference",
    start: new Date(2022, 11, 20),
    end: new Date(2022, 11, 23),
  },
];
const Calendars = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }
    }

    setAllEvents([...allEvents, newEvent]);
  }
  return (
    <>
      <Layout>
        <div className='App'>
          <h1 className='text-[36px] font-bold text-blue-500 block text-center tracking-[5px]'>
            Calendar
          </h1>
          <div className='ml-12 flex flex-col justify-between gap-4'>
            <h2 className='text-[22px] font-bold text-blue-500 block '>
              Add New Event
            </h2>
            <Input
              // className='py-2 px-2 bg-gray-300'
              variant='outline'
              color={"gray"}
              htmlSize={8}
              width='200PX'
              type='text'
              placeholder='Add Title'
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <DatePicker
              className='py-2 px-2 bg-gray-100 border'
              placeholderText='Start Date'
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
            <DatePicker
              className='py-2 px-2 bg-gray-100 border'
              placeholderText='End Date'
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
          </div>
          <Button
            onClick={handleAddEvent}
            colorScheme={"blue"}
            variant={"solid"}
            width='150px'
            className='ml-12 mt-8'
          >
            Add Event
          </Button>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 500, margin: "50px" }}
          />
        </div>
      </Layout>
    </>
  );
};

export default Calendars;
