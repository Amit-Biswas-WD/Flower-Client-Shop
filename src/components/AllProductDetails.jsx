import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const AllProductDetails = ({ data }) => {
  const { _id, productName, price, photo, description } = data;
  return (
    <div className="border border-green-800 rounded-lg p-4">
      <div className="flex gap-2">
        <div className="relative">
          <img className="" src={photo} alt="" />
          <div className="absolute top-50 left-82 flex flex-col space-y-4">
            {/* Delete Button */}
            <div className="relative group">
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
            {productName}
          </h2>
          <h2 className="text-lg font-bold text-green-600 dark:text-green-400">
            Product $ {price}
          </h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AllProductDetails;
