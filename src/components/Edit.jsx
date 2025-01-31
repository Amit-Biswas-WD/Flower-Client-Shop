import { useLoaderData } from "react-router-dom";

const Edit = () => {
  const allData = useLoaderData();
  console.log(allData);
  return <div>Edit: {allData.productName}</div>;
};

export default Edit;
