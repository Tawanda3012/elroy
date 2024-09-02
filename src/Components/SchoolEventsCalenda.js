import React, { useState } from 'react';
import { parseISO } from 'date-fns';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const SchoolEventsCalendar = () => {
  const [events] = useState([
    {
      title: 'Back to School Night',
      description: 'Join us for an evening to meet your child\'s teachers and learn about the school year.',
      start: parseISO('2024-09-02T19:00:00'),
      end: parseISO('2024-09-02T21:00:00'),
    },
    {
      title: 'Fall Picnic',
      description: 'Celebrate the start of the school year with a picnic on the lawn.',
      start: parseISO('2023-09-15T12:00:00'),
      end: parseISO('2023-09-15T16:00:00'),
    },
    {
      title: 'Parent-Teacher Conferences',
      description: 'Schedule a time to meet with your child\'s teacher to discuss their progress.',
      start: parseISO('2023-10-15T08:00:00'),
      end: parseISO('2023-10-16T17:00:00'),
    },
  ]);

  return (
    <div className="p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default SchoolEventsCalendar;