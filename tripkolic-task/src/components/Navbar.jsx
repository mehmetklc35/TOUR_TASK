/** @jsxImportSource react */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const categories = {
  Tours: ['Island Tour', 'Land Tour', 'Safari'],
  Tickets: ['Concert', 'Museum', 'Show'],
  Rent: ['Car', 'Bike', 'Scooter'],
  Transfer: ['Airport', 'Hotel', 'City']
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tours');
  const [filters, setFilters] = useState(categories['Tours']);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilters(categories[category]);
  };

  return (
    <div className="bg-orange-500 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">Tripkolic</h1>
      <button onClick={() => setIsOpen(true)} className="text-2xl">
        <FaBars />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Filter Categories</h2>
              <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-800">
                <FaTimes />
              </button>
            </div>

            {/* Category Selection */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 text-gray-800">Select Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full p-2 border rounded-md bg-white text-gray-800"
              >
                {['Tours', 'Tickets', 'Rent', 'Transfer'].map((category) => (
                  <option key={category} value={category} className="text-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Filters based on Category */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Filters for {selectedCategory}</h3>
              <ul className="mt-2 space-y-2">
                {filters.map((filter) => (
                  <li key={filter} className="p-2 border rounded-md bg-gray-200 text-gray-800">
                    {filter}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => {
                  setSelectedCategory('Tours');
                  setFilters(categories['Tours']);
                }}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-800"
              >
                Reset
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;