import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

function CoffeeDetails() {
  const coffee = useLoaderData();
  const {
    name,
    chef,
    supplier,
    taste,
    category,
    details,
    price,
    photo,
  } = coffee || {};

  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <button
        onClick={() => navigate('/')}
        className="mb-6 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded shadow"
      >
        ← Back to Home
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={photo}
          alt={name}
          className="w-full md:w-80 h-80 object-cover rounded-lg shadow"
        />
        <div className="space-y-2 text-gray-800 text-lg">
          <h2 className="text-3xl font-bold text-amber-700">{name}</h2>
          <p><strong>Chef:</strong> {chef}</p>
          <p><strong>Supplier:</strong> {supplier}</p>
          <p><strong>Taste:</strong> {taste}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Details:</strong> {details}</p>
          <p><strong>Price:</strong> <span className="text-green-600 font-semibold">{price} ৳</span></p>
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetails;
