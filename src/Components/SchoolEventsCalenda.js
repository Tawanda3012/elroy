import React, { useState, useEffect } from 'react';
import { parseISO } from 'date-fns';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import EventModal from './EventModal'; // Import the EventModal component

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
  const [events, setEvents] = useState([
    {
      title: 'Back to School Night',
      description: 'Join us for an evening to meet your child\'s teachers and learn about the school year.',
      start: parseISO('2024-09-16T19:00:00'),
      end: parseISO('2024-09-16T21:00:00'),
    },
    {
      title: 'Fall Picnic',
      description: 'Celebrate the start of the school year with a picnic on the lawn.',
      start: parseISO('2024-09-15T12:00:00'),
      end: parseISO('2024-09-15T16:00:00'),
    },
    {
      title: 'Parent-Teacher Conferences',
      description: 'Schedule a time to meet with your child\'s teacher to discuss their progress.',
      start: parseISO('2024-10-15T08:00:00'),
      end: parseISO('2024-10-15T17:00:00'),
    },
    {
      title: 'Thanksgiving Break',
      description: 'No school for the Thanksgiving holiday.',
      start: parseISO('2024-11-22T00:00:00'),
      end: parseISO('2024-11-24T23:59:59'),
    },
    {
      title: 'Winter Concert',
      description: 'Enjoy performances by students in the winter concert.',
      start: parseISO('2024-12-15T18:00:00'),
      end: parseISO('2024-12-15T20:00:00'),
    },
    {
      title: 'Spring Break',
      description: 'No school for Spring Break.',
      start: parseISO('2025-03-24T00:00:00'),
      end: parseISO('2025-03-28T23:59:59'),
    },
    {
      title: 'End of Year Celebration',
      description: 'Celebrate the end of the school year with performances and awards.',
      start: parseISO('2025-06-05T17:00:00'),
      end: parseISO('2025-06-05T20:00:00'),
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(null); // State for the selected date
  const [isAdmin, setIsAdmin] = useState(true); // Hardcoded admin check
  const [selectedEvent, setSelectedEvent] = useState(null); // State for the selected event

  const handleEventSelect = (event) => {
    setSelectedEvent(event); // Set the selected event to display in the modal
  };

  const handleSelectSlot = ({ start, end }) => {
    if (isAdmin) { // Only allow event creation if the user is an admin
      setSelectedDate(start); // Set the selected date
      const title = window.prompt('New Event Name');
      if (title) {
        const newEvent = {
          title,
          start,
          end,
        };
        setEvents([...events, newEvent]);
      }
    } else {
      alert('You do not have permission to create events.'); // Alert for non-admin users
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCalendarView = () => {
    if (windowWidth < 768) {
      return Views.AGENDA;
    } else if (windowWidth < 1024) {
      return Views.DAY;
    } else {
      return Views.MONTH;
    }
  };

  // Function to determine if a date is selected
  const isSelectedDate = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  // Custom event styling
  const eventStyleGetter = (event) => {
    const backgroundColor = isSelectedDate(event.start) ? '#ffcc00' : '#3174ad'; // Highlight selected date
    return {
      className: 'text-sm p-1 rounded',
      style: {
        backgroundColor,
        color: 'white',
      },
    };
  };

  // Custom day cell styling
  const dayStyleGetter = (date) => {
    return {
      style: {
        backgroundColor: isSelectedDate(date) ? '#ffcc00' : 'inherit', // Highlight the selected date
      },
    };
  };

  return (
    <div className="p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: windowWidth < 768 ? 400 : 500 }}
        view={getCalendarView()}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        toolbar={true}
        eventPropGetter={eventStyleGetter} // Use custom event styling
        onSelectEvent={handleEventSelect} // Handle event selection to show details
        onSelectSlot={handleSelectSlot} // Handle slot selection
        selectable // Enable slot selection
        dayPropGetter={dayStyleGetter} // Apply custom styles to day cells
      />
      
      {/* Modal for displaying event details */}
      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} // Close the modal
      />
    </div>
  );
};

export default SchoolEventsCalendar;