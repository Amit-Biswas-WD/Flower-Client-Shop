import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllProduct = () => {
  const allData = useLoaderData();
  const [users, setUsers] = useState(allData);

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete data
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // const remainingUser = users.filter((user) => user._id !== id);
              // setUsers(remainingUser);
              setUsers((prevUsers) =>
                prevUsers.filter((user) => user._id !== id)
              );
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold">AllProduct: {allData.length}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        {allData.map((data) => (
          <div
            key={data._id}
            className="border border-green-800 rounded-lg p-4"
          >
            <div className="flex gap-2">
              <div className="relative">
                <img className="" src={data.photo} alt="" />
                <div className="absolute top-50 left-82 flex flex-col space-y-4">
                  {/* Delete Button */}
                  <div
                    onClick={() => handleDeleteProduct(data._id)}
                    className="relative group"
                  >
                    <MdDeleteForever className="w-10 h-auto bg-red-700 text-white rounded p-2 cursor-pointer" />
                    <span className="absolute left-11 top-1/2 -translate-y-1/2 bg-red-600 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                      Delete
                    </span>
                  </div>

                  {/* Edit Button */}
                  <div className="relative group">
                    <FaEdit className="w-10 h-auto bg-yellow-500 text-white rounded p-2 cursor-pointer" />
                    <span className="absolute left-11 top-1/2 -translate-y-1/2 bg-yellow-500 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                      Edit
                    </span>
                  </div>

                  {/* Details Button */}
                  <div className="relative group">
                    <TbListDetails className="w-10 h-auto bg-blue-700 text-white rounded p-2 cursor-pointer" />
                    <span className="absolute left-11 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                      Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div>
              <div className="flex justify-between my-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {data.productName}
                </h2>
                <h2 className="text-lg font-bold text-green-600 dark:text-green-400">
                  Product $ {data.price}
                </h2>
              </div>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
