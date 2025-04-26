import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../api/eventsApi';
import EventCard from '../components/EventCard';
import FilterBar from '../components/FilterBar';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filters, setFilters] = useState({ name: '', date: '', location: '' });

  useEffect(() => {
    async function loadEvents() {
      const data = await fetchEvents();
      setEvents(data);
      setFilteredEvents(data);
    }
    loadEvents();
  }, []);

  useEffect(() => {
    let filtered = events.filter(event =>
      event.title.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.date ? event.date === filters.date : true) &&
      event.location.toLowerCase().includes(filters.location.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [filters, events]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => <EventCard key={event.id} event={event} />)
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventsPage;