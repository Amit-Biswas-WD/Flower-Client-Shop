const AddProduct = () => {

    const handleAddProduct = (event) => {
      event.preventDefault();
      const form = event.target;
      const productName = form.productName.value;
      const price = parseFloat(form.price.value) || 0;
      const photo = form.photo.value;
      const description = form.description.value;
  
      const productData = { productName, price, photo, description };
      console.log(productData);
    };
  
    return (
      <div>
        <form onSubmit={handleAddProduct} className="fieldset">
          <div className="flex gap-10">
            <div className="w-full">
              <label className="fieldset-label text-lg font-semibold my-2">
                Product Name
              </label>
              <input
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
  
  export default AddProduct;
  