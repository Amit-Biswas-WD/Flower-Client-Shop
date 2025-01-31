import { Link, useLoaderData } from "react-router-dom";

const AllProductDetails = () => {
  const allData = useLoaderData();
  const { productName, price, photo, description } = allData;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
     <div>
     <h2>This is Product Details page: {allData.productName}</h2>
     <Link to={`/`}><h2 className="text-green-700 text-xl font-semibold">Back to Product Page</h2></Link>
     </div>
      <div className="border border-green-800 rounded-lg p-4">
        <div className="flex gap-2">
          <img
            className="w-full h-auto object-cover"
            src={photo}
            alt={productName}
          />
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
    </div>
  );
};

export default AllProductDetails;
