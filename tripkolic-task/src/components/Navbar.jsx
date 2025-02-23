import React, { useState } from 'react';
import { FaBars, FaTimes, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const categories = {
  Tours: ['Adventure', 'Cultural', 'Family', 'Luxury'],
  Tickets: ['Concerts', 'Sports', 'Theater'],
  Rent: ['Cars', 'Bikes', 'Apartments'],
  Transfer: ['Airport', 'City', 'Hotel'],
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tours');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedFilters([]);
  };

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [filter]
    );
  };

  return (
    <div className="bg-[#F78410] text-white">
      <div className="container mx-auto max-w-4xl flex items-center p-4 relative">
        <div className="flex items-center">
          <button onClick={() => setIsOpen(true)} className="mr-4">
            <FaBars size={24} />
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="https://i.pinimg.com/736x/a6/30/b9/a630b90cf7223853dfdec7e4ffc2995d.jpg" alt="Logo" className="h-10" />
        </div>
        <div className="ml-auto flex gap-4">
          <FaHeart size={24} />
          <FaShoppingCart size={24} />
          <FaUser size={24} />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Filter Categories</h2>
              <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-800">
                <FaTimes />
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 text-gray-800">Select Category</label>
              <div className="flex gap-2">
                {Object.keys(categories).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3 py-1 rounded-md text-gray-800 ${
                      selectedCategory === category ? 'bg-[#E07516] text-white' : 'bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Filters for {selectedCategory}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {categories[selectedCategory].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className={`px-3 py-1 rounded-md text-gray-800 ${
                      selectedFilters.includes(filter) ? 'bg-[#E07516] text-white' : 'bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => {
                  setSelectedCategory('Tours');
                  setSelectedFilters([]);
                }}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Reset
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-[#F78410] text-white rounded-md hover:bg-[#E07516]"
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
