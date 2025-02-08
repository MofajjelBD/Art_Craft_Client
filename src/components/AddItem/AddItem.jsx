import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
// import AddItemP from "../../assets/AddItem.jpg";
const AddItem = () => {
  const { user } = useContext(AuthContext);
  const handleAddCraft = (event) => {
    event.preventDefault();

    const form = event.target;

    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const image = form.image.value;

    const newCraft = {
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      user_email,
      user_name,
      image,
    };

    console.log(newCraft);

    // send data to the server
    fetch("https://art-craft-server-two.vercel.app/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Added Successfully",
            icon: "success",
            confirmButtonText: "Go Back",
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirect to the home page when "Cool" is clicked
              window.location.href = "/"; // Assuming '/' is the homepage URL
            }
          });
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>Add Item | Art & Craft</title>
      </Helmet>
      <div className="p-4">
        <div className="lg:col-span-2 bg-slate-400  rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
          <h2 className="text-3xl text-[#002D74] text-center font-bold mb-6">
            Add Craft
          </h2>
          <form onSubmit={handleAddCraft}>
            <div className="max-w-5xl mx-auto space-y-4">
              <div className="gap-4 flex">
                <div className="form-control md:w-1/2">
                  <input
                    name="item_name"
                    type="text"
                    placeholder="Item Name"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <input
                    name="subcategory_name"
                    type="text"
                    placeholder="Subcategory Name"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                  />
                </div>
              </div>
              <div className="gap-4 flex">
                <div className="form-control md:w-1/2">
                  <input
                    name="short_description"
                    type="text"
                    placeholder="Short Description"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <input
                    defaultValue="45"
                    step="0.01"
                    name="price"
                    type="number"
                    placeholder="Price"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                  />
                </div>
              </div>
              <div className="gap-4 flex">
                <div className="form-control md:w-1/2">
                  <input
                    name="rating"
                    step="0.01"
                    defaultValue="5"
                    type="number"
                    placeholder="Rating"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <input
                    name="processing_time"
                    defaultValue="3"
                    type="number"
                    placeholder="Processing Time"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                  />
                </div>
              </div>
              <div className="gap-4 flex">
                <div className="form-control md:w-1/2">
                  <div className="w-full flex px-6 justify-between items-center bg-gray-100 rounded-lg text-sm outline-none">
                    <label className="form-control md:w-1/2 text-gray-400">
                      Customization Available:
                    </label>
                    <select
                      id="customization"
                      name="customization"
                      required
                      className="form-control max-w-md bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div className="form-control md:w-1/2">
                  <div className="w-full flex px-6 justify-between items-center bg-gray-100 rounded-lg text-sm outline-none">
                    <label className="form-control md:w-1/2 text-gray-400">
                      Stock Status:
                    </label>
                    <select
                      id="stock_status"
                      name="stock_status"
                      required
                      className="form-control max-w-md bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                    >
                      <option value="in_stock">In Stock</option>
                      <option value="made_to_order">Made to Order</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="gap-4 flex">
                <div className="form-control md:w-1/2">
                  <input
                    value={user.email}
                    disabled
                    name="user_email"
                    type="email"
                    placeholder="User Email"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <input
                    value={user.displayName}
                    disabled
                    name="user_name"
                    type="text"
                    placeholder="User Name"
                    className="w-full bg-gray-100 rounded-lg !py-3 px-6 text-sm outline-none"
                  />
                </div>
              </div>
              <input
                name="image"
                type="text"
                placeholder="Image URL"
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
              />
              <button
                type="submit"
                className="flex justify-center items-center bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#2033b1] font-medium w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mr-2 inline"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                </svg>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItem;
