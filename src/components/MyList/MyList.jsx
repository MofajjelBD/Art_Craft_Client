import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const ArtCraftData = useLoaderData();
  const [CraftData, setArtCraftData] = useState(ArtCraftData);

  const { user } = useContext(AuthContext);
  const [ArtCraftLength, setArtCraftLength] = useState(6);

  const filteredItems = CraftData.filter(
    (item) => item.user_email === user.email
  );

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Deleted!",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-craft-server-two.vercel.app/craft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = ArtCraftData.filter((cra) => cra._id !== _id);
              setArtCraftData(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>MyList Us | Art & Craft</title>
      </Helmet>
      <div className="px-4">
        <div className="max-w-[691px] mx-auto text-center pt-8 md:pt-16">
          <h1 className="text-2xl md:text-4xl font-black dark:text-slate-200 text-opacity-100 dark:text-opacity-100">
            My Art & Craft List
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 my-2 md:my-8">
          {filteredItems.slice(0, ArtCraftLength).map((ArtCraftData) => (
            <div
              className="card bg-base-100 max-w-[379px] shadow-xl border border-gray rounded-3xl dark:bg-slate-800"
              key={ArtCraftData._id}
            >
              <figure className="px-6 pt-6">
                <img className="rounded-2xl" src={ArtCraftData.image}></img>
              </figure>
              <div className="card-body font-Mulish py-6 px-6 justify-start">
                <p className="text-xl font-semibold text-Primary dark:text-[#878787] text-opacity-100">
                  {ArtCraftData.item_name}
                </p>
                {/* <p className="text-lg font-medium text-Primary dark:text-[#878787] text-opacity-100">
                  {ArtCraftData.subcategory_name}
                </p> */}
                {/* <p className="text-base leading-7 text-[#878787]">
                  {ArtCraftData.short_description}
                </p> */}
                <hr className="mb-3" />
                <p className="text-lg font-medium text-Primary dark:text-[#878787] text-opacity-100">
                  Price: ${ArtCraftData.price}
                </p>
                <div className="flex gap-2 flex-wrap py-1">
                  <div className="flex w-full justify-between">
                    <span className="text-lg text-[#878787] flex gap-2">
                      Customization:
                      <span className="text-lg text-slate-800 dark:text-[#878787] flex gap-2">
                        {ArtCraftData.customization}
                      </span>
                    </span>
                    <span className="text-lg text-[#878787] flex gap-2 items-center">
                      Rating:{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                      </svg>
                      {ArtCraftData.rating}
                    </span>
                  </div>
                  <span className="text-lg text-[#878787] flex gap-2">
                    Stock Status:
                    <span className="text-lg text-slate-800 dark:text-[#878787] flex gap-2">
                      {ArtCraftData.stock_status}
                    </span>
                  </span>
                </div>
                <hr />
                {/* <div className="py-2">
                  <p className="text-lg font-semibold text-gray-700 dark:text-[#878787] text-opacity-100">
                    E-mail: {ArtCraftData.user_email}
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-[#878787] text-opacity-100">
                    User: {ArtCraftData.user_name}
                  </p>
                </div> */}
                <div className="text-start flex justify-between">
                  <Link
                    to={`/item-update/${ArtCraftData._id}`}
                    className="btn rounded-full text-white bg-blue-900 hover:border-gray-400 btn-success border border-myGreen px-6 hover:scale-110 hover:bg-blue-950 font-semibold duration-300"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(ArtCraftData._id)}
                    className="btn rounded-full text-white bg-red-900 hover:border-gray-400 btn-success border border-myGreen px-6 hover:scale-110 hover:bg-red-950 font-semibold duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => setArtCraftLength(filteredItems.length)}
            className={
              ArtCraftLength === filteredItems.length ||
              filteredItems.length <= 6
                ? "hidden"
                : "btn font-WorkSans text-white text-opacity-100 font-semibold text-base md:text-lg border border-transparent bg-green-500 px-5 hover:bg-green-500"
            }
          >
            Show All ArtCrafts
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyList;
