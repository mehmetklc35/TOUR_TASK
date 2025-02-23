import React, { useState } from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';

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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnYOrkV8AtlTovYqeMSJz3MuZWMn0M-OyoUw&s',
    }
  ]
};

export default function Filter() {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [results, setResults] = useState([]);
  const [price, setPrice] = useState(12500);
  const [startTime, setStartTime] = useState("17:00");
  const [groupSize, setGroupSize] = useState(40);

  const handleSearch = () => {
    if (selectedTheme && categories[selectedTheme]) {
      setResults(categories[selectedTheme]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setResults([]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-2xl mx-auto shadow-lg">
      {results.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            {results.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
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

                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h2>

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
            <button
              onClick={() => setResults([])}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold text-orange-500 mb-6">TOURS</h1>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Location</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Where you wanna visit? (Phi Phi Island, Chalong Temple...)"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <span className="absolute right-3 top-3 text-gray-400">🔍</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Theme</label>
        <div className="flex flex-wrap gap-2">
          {['Island Tour', 'Land Tour', 'Safari'].map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-4 py-2 rounded-full transition ${selectedTheme === theme ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              {theme} (43)
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Activity</label>
        <div className="flex flex-wrap gap-2">
          {['Swimming', 'Running', 'Elephant care', 'Snorkelling'].map(
            (activity) => (
              <button
                key={activity}
                className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              >
                {activity} (43)
              </button>
            )
          )}
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
        <p className="mt-2">
          Price: <span className="font-bold">{price} TL</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-lg font-semibold mb-2">Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Group Size</label>
          <input
            type="range"
            min="1"
            max="100"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
            className="w-full"
          />
          <p className="mt-2">
            Group Size: <span className="font-bold">{groupSize}</span>
          </p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Vehicle</label>
        <div className="flex flex-wrap gap-2">
          {['Yacht', 'Speedboat', 'Catamaran', 'Safari'].map((vehicle) => (
            <button
              key={vehicle}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              {vehicle} (43)
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Features</label>
        <div className="flex flex-wrap gap-2">
          {['Transfer', 'Halal Food', 'Vegetarian Food'].map((feature) => (
            <button
              key={feature}
              className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
            >
              {feature} (43)
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => {
            setSelectedTheme('');
            setResults([]);
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
  );
}
