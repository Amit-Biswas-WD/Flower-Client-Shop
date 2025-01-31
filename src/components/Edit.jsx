import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const allData = useLoaderData();
  const { _id, productName, price, photo, description } = allData;

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const price = parseFloat(form.price.value) || 0;
    const photo = form.photo.value;
    const description = form.description.value;

    const productData = { productName, price, photo, description };
    console.log(productData);

    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast("Data Edited successfully");
        }
      });
  };

  return (
    <div>
        <Link to={`/allProduct`}>
        <h2 className="text-2xl font-semibold">Go to back Product page</h2></Link>
      <form onSubmit={handleAddProduct} className="fieldset">
        <div className="flex gap-10">
          <div className="w-full">
            <label className="fieldset-label text-lg font-semibold my-2">
              Product Name
            </label>
            <input
              defaultValue={productName}
              name="productName"
              type="text"
              className="input w-full"
              placeholder="Product Name"
              required
            />
          </div>
          <div className="w-full">
            <label className="fieldset-label text-lg font-semibold my-2">
              Price
            </label>
            <input
              defaultValue={price}
              name="price"
              type="number"
              className="input w-full"
              placeholder="Product Price"
              required
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full">
            <label className="fieldset-label text-lg font-semibold my-2">
              Description
            </label>
            <input
              defaultValue={description}
              name="description"
              type="text"
              className="input w-full"
              placeholder="Product Description"
              required
            />
          </div>
          <div className="w-full">
            <label className="fieldset-label text-lg font-semibold my-2">
              Product Photo
            </label>
            <input
              defaultValue={photo}
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Product Photo URL"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-neutral mt-4">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Edit;
