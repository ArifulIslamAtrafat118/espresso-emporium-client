import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function CoffeeList() {
  const [coffees, setCoffees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((err) => console.error("Error fetching coffees:", err));
  }, []);
  //   console.log(coffees);
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "It permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:4000/coffees/${id}`, {
            method: "DELETE",
          });
          const result = await res.json();
          if (res.ok) {
            setCoffees(coffees.filter((coffee) => coffee._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              timer: 600,
            });
          }
        } catch {
          console.dir;
        }
      }
    });
  };

  // try {
  //   const res = await fetch(`http://localhost:4000/coffees/${id}`, {
  //     method: "DELETE",
  //   });
  //   const result = await res.json();
  //   if (res.ok) {
  //     alert("Deleted successfully");
  //     setCoffees(coffees.filter((coffee) => coffee._id !== id));
  //   } else {
  //     alert("Failed to delete");
  //   }
  // } catch (error) {
  //   console.error("Delete error:", error);
  // }

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="text-center mb-6">
        <p className="text-sm">--- Sip & Savor ---</p>
        <h2 className="text-3xl font-bold mb-2">Our Popular Products</h2>
        <button
          onClick={() => navigate("/add-coffee")}
          className="bg-amber-300 hover:bg-amber-400 text-gray-800 font-semibold px-4 py-2 rounded"
        >
          Add Coffee ☕
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <div
            key={coffee._id}
            className="bg-gray-50 p-4 rounded-xl shadow flex items-center gap-4"
          >
            <img
              src={coffee.photo}
              alt={coffee.name}
              className="w-28 h-28 object-cover rounded"
            />
            <div className="flex-1">
              <p>
                <span className="font-semibold">Name:</span> {coffee.name}
              </p>
              <p>
                <span className="font-semibold">Test:</span> {coffee.taste}
              </p>
              <p>
                <span className="font-semibold">Price:</span> {coffee.price}{" "}
                Taka
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => navigate(`/coffee/details/${coffee._id}`)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-2 py-1 rounded"
              >
                <HiOutlineEye />
              </button>
              <button
                onClick={() => navigate(`/edit/${coffee._id}`)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-2 py-1 rounded"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(coffee._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
