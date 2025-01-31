import { useLoaderData } from "react-router-dom";

const UserInfo = () => {
  const allData = useLoaderData();
  console.log(allData);
  return <div>UserInfo: {allData.length}</div>;
};

export default UserInfo;
