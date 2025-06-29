import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

function UpdateCoffeeDetails() {
  const coffee = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: coffee.name || "",
    price: coffee.price || "",
    supplier: coffee.supplier || "",
    taste: coffee.taste || "",
    category: coffee.category || "",
    details: coffee.details || "",
    photo: coffee.photo || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You are about to update this coffee's details.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    });

    if (confirmed.isConfirmed) {
      try {
        const res = await fetch(
          `http://localhost:4000/coffee/update/${coffee._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const result =await res.json();
        console.log(result)
        if (res.ok) {
          Swal.fire({
            title: "Coffee Updated successfull",
            icon: "success",
            timer: 700,
          });
          navigate("/");
        }
      } catch {
        console.dir;
        Swal.fire("Error!", "Something went wrong.", "error");
      }
      // try {
      //   const res = await fetch(`http://localhost:4000/coffees/${coffee._id}`, {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });

      //   if (res.ok) {
      //     Swal.fire("Updated!", "Coffee details have been updated.", "success");
      //     navigate("/");
      //   } else {
      //     Swal.fire("Failed!", "Update failed. Try again later.", "error");
      //   }
      // } catch (err) {
      //   console.error(err);
      //
      // }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-[#F4F3F0] p-8 rounded-xl shadow">
      <button
        onClick={() => navigate("/")}
        className="text-sm mb-4 text-blue-600 underline"
      >
        ← Back to home
      </button>
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#374151]">
        Update Existing Coffee Details
      </h2>
      <p className="text-center text-gray-500 mb-8 text-sm max-w-xl mx-auto"></p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter coffee name"
            className="p-3 rounded border w-full"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="p-3 rounded border w-full"
          />
          <input
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            placeholder="Enter coffee supplier"
            className="p-3 rounded border w-full"
          />
          <input
            type="text"
            name="taste"
            value={formData.taste}
            onChange={handleChange}
            placeholder="Enter coffee taste"
            className="p-3 rounded border w-full"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter coffee category"
            className="p-3 rounded border w-full"
          />
          <input
            type="text"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter coffee details"
            className="p-3 rounded border w-full"
          />
        </div>
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          placeholder="Enter photo URL"
          className="p-3 rounded border w-full"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#D2B48C] hover:bg-[#c2a77b] text-white font-semibold rounded"
        >
          Update Coffee Details
        </button>
      </form>
    </div>
  );
}

export default UpdateCoffeeDetails;
