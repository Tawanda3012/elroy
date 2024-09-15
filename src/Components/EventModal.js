import React from 'react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null; // If there's no event, don't render anything

  // Format the start and end times
  const formattedStart = event.start.toLocaleString(); // Default locale
  const formattedEnd = event.end.toLocaleString(); // Default locale

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded shadow-lg">
        <h2 className="text-xl font-bold">{event.title}</h2>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Start:</strong> {formattedStart}</p>
        <p><strong>End:</strong> {formattedEnd}</p>
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;