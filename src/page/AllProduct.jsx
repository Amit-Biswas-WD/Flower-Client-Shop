import { useLoaderData } from "react-router-dom";
import AllProductDetails from "../components/AllProductDetails";

const AllProduct = () => {
  const allData = useLoaderData();
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold">AllProduct: {allData.length}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        {allData.map((data) => (
          <AllProductDetails key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
