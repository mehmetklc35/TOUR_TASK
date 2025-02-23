import React, { useState } from 'react';
import { FaStar, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const categories = {
  'Island Tour': [
    {
      id: 1,
      title: 'Phi Phi, Khai Islands Tour with Speedboat Full Day',
      location: 'Rassada Pier',
      rating: 4.3,
      reviews: 20,
      oldPrice: 1820,
      newPrice: 1400,
      discount: '30% OFF',
      startTime: '08:00',
      groupSize: 25,
      image: 'https://image.elitema.com.tr/db_images/191/4/144/ph%C4%B1-ph%C4%B1-3.jpg',
    }
  ],
  'Land Tour': [
    {
      id: 2,
      title: 'James Bond Island Tour with Lunch',
      location: 'Phuket Marina',
      rating: 4.7,
      reviews: 35,
      oldPrice: 2000,
      newPrice: 1600,
      discount: '20% OFF',
      startTime: '09:00',
      groupSize: 30,
      image: 'https://marine-project.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGbWFyaW5lLXByb2plY3QuY29tJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDIzJTJGMDIlMkZKYW1lcy1Cb25kLUlzbGFuZC5qcGcmY2FjaGVNYXJrZXI9MTY4MTc2MzQ0MS0xMzIwODQmdG9rZW49ZTI4YTI1MjhjZDNlODliYw.q.jpg',
    }
  ],
  'Safari': [
    {
      id: 3,
      title: 'Elephant Safari Adventure',
      location: 'Khao Sok National Park',
      rating: 4.8,
      reviews: 50,
      oldPrice: 2500,
      newPrice: 2000,
      discount: '25% OFF',
      startTime: '10:00',
      groupSize: 40,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnYOrkV8AtlTovYqeMSJz3MuZWMn0M-OyoUw&s',
    }
  ]
};

export default function Filter() {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [results, setResults] = useState(Object.values(categories).flat());
  const [price, setPrice] = useState(12500);
  const [startTime, setStartTime] = useState("17:00");
  const [groupSize, setGroupSize] = useState(40);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = () => {
    let filteredResults = Object.values(categories).flat();

    if (selectedTheme && categories[selectedTheme]) {
      filteredResults = categories[selectedTheme];
    }

    filteredResults = filteredResults.filter(item => 
      item.newPrice <= price &&
      item.startTime <= startTime &&
      item.groupSize <= groupSize
    );

    setResults(filteredResults);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-6xl mx-auto shadow-lg relative">
      <div className="flex items-center mb-6">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl p-2 bg-orange-500 text-white rounded-full mr-4"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h1 className="text-3xl font-bold text-orange-500">TOURS</h1>
      </div>

      <div className="flex">
        {isMenuOpen && (
          <div className="w-80 h-full overflow-auto bg-white p-6 shadow-lg z-40">
            <h2 className="text-2xl font-bold mb-4">Filter Tours</h2>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Theme</label>
              <div className="flex flex-wrap gap-2">
                {Object.keys(categories).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => setSelectedTheme(theme)}
                    className={`px-4 py-2 rounded-full transition ${selectedTheme === theme ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                  >
                    {theme} ({categories[theme].length})
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Price</label>
              <input
                type="range"
                min="0"
                max="20000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full"
              />
              <p className="mt-2">Price: <span className="font-bold">{price} TL</span></p>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Group Size</label>
              <input
                type="number"
                min="1"
                max="100"
                value={groupSize}
                onChange={(e) => setGroupSize(Number(e.target.value))}
                className="w-full border rounded p-2"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  setSelectedTheme('');
                  setResults(Object.values(categories).flat());
                }}
                className="px-6 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
              >
                RESET
              </button>
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              >
                SEARCH
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded">
                  {item.discount}
                </div>
                <button className="absolute top-2 right-2 text-gray-700">
                  <FaHeart />
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 flex items-center">
                    <FaStar className="mr-1" /> {item.rating} ({item.reviews})
                  </span>
                  <span className="ml-4 text-gray-600">📍 {item.location}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>

                <div className="flex items-center mb-4">
                  <span className="text-red-500 line-through mr-2">TL {item.oldPrice}</span>
                  <span className="text-green-600 font-bold">TL {item.newPrice}</span>
                </div>

                <div className="flex justify-between items-center">
                  <a href="#" className="text-orange-500 hover:underline">Details →</a>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {results.length === 0 && (
        <p className="text-center text-gray-600 mt-4">No tours found matching your filters.</p>
      )}
    </div>
  );
}