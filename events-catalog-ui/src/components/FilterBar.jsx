import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => (
  <div className="flex gap-4 p-4 bg-gray-100 rounded-lg">
    <input
      type="text"
      placeholder="Search by name"
      name="name"
      value={filters.name}
      onChange={onFilterChange}
      className="border p-2 rounded w-full"
    />
    <input
      type="date"
      name="date"
      value={filters.date}
      onChange={onFilterChange}
      className="border p-2 rounded"
    />
    <input
      type="text"
      placeholder="Location"
      name="location"
      value={filters.location}
      onChange={onFilterChange}
      className="border p-2 rounded w-full"
    />
  </div>
);

export default FilterBar;