import React from 'react';

const DestinationPage = () => {
  const destination = {
    name: 'Paris',
    overview: 'Paris is the capital city of France, known for its art, fashion, and iconic landmarks like the Eiffel Tower and Louvre Museum.',
    images: [
      'paris1.jpg',
      'paris2.jpg',
      'paris3.jpg',
    ],
    thingsToDo: [
      'Visit the Eiffel Tower',
      'Tour the Louvre Museum',
      'Walk along the Seine River',
    ],
    bestTimeToVisit: 'April to June and September to November',
    localCuisine: [
      'Croissants',
      'Escargots de Bourgogne',
      'Macarons',
    ],
    accommodations: [
      { name: 'Hotel Paris', priceRange: '$$', type: 'Luxury' },
      { name: 'Airbnb Studio', priceRange: '$', type: 'Budget' },
    ],
    transportation: {
      howToGetThere: 'Fly into Charles de Gaulle Airport, or take a train from major European cities.',
      localOptions: 'Metro, Bus, Taxi, Rent a bike',
    },
    weather: '18°C to 25°C during spring',
    events: ['Bastille Day (July 14)', 'Paris Fashion Week (Sept/Oct)'],
    mapUrl: 'https://www.google.com/maps?q=Paris',
    nearbyDestinations: ['Versailles', 'Louvre Museum', 'Montmartre'],
  };

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen p-8">
      {/* Destination Overview */}
      <section className="mb-8">
        <h1 className="text-5xl font-semibold text-gray-800">{destination.name}</h1>
        <p className="mt-4 text-lg text-gray-600">{destination.overview}</p>
      </section>

      {/* Images Gallery */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destination.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`${destination.name} ${index + 1}`} className="w-full h-64 object-cover transform transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* Things to Do */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Things to Do</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          {destination.thingsToDo.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      {/* Best Time to Visit */}
      <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">{destination.bestTimeToVisit}</p>
      </section>

      {/* Local Cuisine */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Local Cuisine</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          {destination.localCuisine.map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </section>

      {/* Accommodations */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Accommodations</h2>
        <div className="space-y-4">
          {destination.accommodations.map((accommodation, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">{accommodation.name}</h3>
              <p className="text-lg text-gray-600">Price Range: {accommodation.priceRange}</p>
              <p className="text-lg text-gray-600">Type: {accommodation.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transportation */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Transportation</h2>
        <p className="text-lg text-gray-700">How to Get There: {destination.transportation.howToGetThere}</p>
        <p className="text-lg text-gray-700">Local Options: {destination.transportation.localOptions}</p>
      </section>

      {/* Weather */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Weather</h2>
        <p className="text-lg text-gray-700">{destination.weather}</p>
      </section>

      {/* Events/Festivals */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Local Events & Festivals</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          {destination.events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </section>

      {/* Map */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Map</h2>
        <a href={destination.mapUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on Map</a>
      </section>

      {/* Nearby Destinations */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nearby Destinations</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          {destination.nearbyDestinations.map((nearby, index) => (
            <li key={index}>{nearby}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DestinationPage;
