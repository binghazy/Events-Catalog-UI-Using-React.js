import React from 'react';

const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-md p-4">
    <h2 className="text-xl font-bold">{event.title}</h2>
    <p className="text-gray-600">📅 {event.date}</p>
    <p className="text-gray-600">📍 {event.location}</p>
    <p className="mt-2 text-gray-700">{event.description}</p>
  </div>
);

export default EventCard;