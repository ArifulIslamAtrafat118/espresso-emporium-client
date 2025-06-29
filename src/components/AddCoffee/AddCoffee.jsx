import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function AddCoffeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const res = await fetch("http://localhost:4000/add-coffee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const postResData = await res.json();
      console.log("Data after db:", postResData);

      if (res.ok) {
        Swal.fire({
          title: "Coffee successfully added!",
          icon: "success",
          timer: 700,
          draggable: true,
        });
        // navigate("/");
        setFormData({
          name: "",
          price: "",
          supplier: "",
          taste: "",
          category: "",
          details: "",
          photo: "",
        });
      } else {
        alert("Coffee dosen't added....");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-50 rounded-xl shadow">
      <button onClick={() => navigate("/")} className="text-blue-500 mb-4 bg-amber-300 hover:bg-amber-400 font-semibold px-4 py-2 rounded">
        &larr; Back to home
      </button>
      
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Add New Coffee
      </h2>
      <p className="text-sm text-center text-gray-600 mb-8">
        It is a long established fact that a reader will be distracted by the
        readable content of a page...
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter coffee name"
          value={formData.name}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="price"
          placeholder="Enter coffee price"
          value={formData.price}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="supplier"
          placeholder="Enter coffee supplier"
          value={formData.supplier}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="taste"
          placeholder="Enter coffee taste"
          value={formData.taste}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="category"
          placeholder="Enter coffee category"
          value={formData.category}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="details"
          placeholder="Enter coffee details"
          value={formData.details}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="photo"
          placeholder="Enter photo URL"
          value={formData.photo}
          onChange={handleChange}
          className="input md:col-span-2"
        />
        <button
          type="submit"
          className="btn bg-amber-300 hover:bg-amber-400 text-gray-800 font-semibold py-2 px-4 rounded col-span-1 md:col-span-2 mt-4 cursor-pointer"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
}
