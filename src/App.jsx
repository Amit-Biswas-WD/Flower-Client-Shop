import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex justify-center gap-10 items-center text-lg font-semibold my-4">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/addProduct`}>Add Product</NavLink>
        <NavLink to={`/allProduct`}>All Product</NavLink>
        <NavLink to={`/signUp`}>Sign Up</NavLink>
        <NavLink to={`/signIn`}>Sign In</NavLink>
      </div>
    </>
  );
}

export default App;
