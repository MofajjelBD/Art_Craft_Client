import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation, useParams } from "react-router-dom";

const ArtCraftView = () => {
  const ArtCrafts = useLoaderData();
  const { _id } = useParams();
  const locationDirectory = useLocation();

  const [ArtCraftData, setArtCraftData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the book based on the dynamic id
  useEffect(() => {
    if (Array.isArray(ArtCrafts)) {
      const foundArtCraft = ArtCrafts.find((ArtCraft) => ArtCraft._id === _id);
      setArtCraftData(foundArtCraft);
      setLoading(false);
    }
  }, [ArtCrafts, _id, locationDirectory]);

  const {
    // _id,
    image,
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
  } = ArtCraftData || {};

  if (loading || !ArtCraftData) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-900"></div>
      </div>
    );
  }
  return (
    <div className="mx-auto px-4 lg:px-0 my-8">
      <Helmet>
        <title>Item View | Art & Craft</title>
      </Helmet>
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-2 md:col-span-1 grid">
          <div className="bg-transparent border border-slate-700  rounded-2xl w-full lg:p-20 py-8 justify-center flex">
            <img className="h-full w-auto" src={image}></img>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 grid items-center">
          <h2 className="card-title text-2xl font-bold font-Playfair text-Primary dark:text-Primary-dark">
            {item_name}
          </h2>
          <p className="text-base font-medium  text-Primary dark:text-Primary-dark text-opacity-80 py-2">
            {subcategory_name}
          </p>
          <div className="py-3 border-t my-1">
            <span className="text-base font-medium  text-Primary dark:text-Primary-dark text-opacity-80 flex gap-2">
              {short_description}
            </span>
          </div>
          <div className="py-2">
            <p className="text-xl font-bold text-Primary dark:text-Primary-dark leading-6 text-opacity-70">
              <span className="font-bold text-lg text-Primary dark:text-Primary-dark mr-2">
                Price :
              </span>
              {price}
            </p>
          </div>
          <div className="flex gap-4 flex-wrap py-2">
            <strong className="font-bold text-base leading-7  text-Primary dark:text-Primary-dark items-center w-full md:w-auto flex">
              Facilities
            </strong>
            {/* {facilities.map((tags, Index) => (
              <span
                key={Index}
                className="text-base text-green-500 font-medium  rounded-full py-2 px-5 bg-green-50"
              >
                {tags}
              </span>
            ))} */}
          </div>
          <div className="my-2 border-b"></div>
          <div className="overflow-x-auto mb-6">
            <table className="table">
              <tbody>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1  text-base text-opacity-100 leading-7">
                    Size:
                  </td>
                  <td className="p-0 py-1  text-base text-opacity-60 leading-7 font-semibold">
                    {rating}
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1  text-base text-opacity-100 leading-7">
                    Location:
                  </td>
                  <td className="p-0 py-1  text-base text-opacity-60 leading-7 font-semibold">
                    {customization}
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1  text-base text-opacity-100 leading-7">
                    Status:
                  </td>
                  <td className="p-0 py-1  text-base text-opacity-60 leading-7 font-semibold">
                    {processing_time}
                  </td>
                  <td className="p-0 py-1  text-base text-opacity-60 leading-7 font-semibold">
                    {stock_status}
                  </td>
                  <td className="p-0 py-1  text-base text-opacity-60 leading-7 font-semibold">
                    {user_email}
                  </td>
                  <td className="p-0 py-1  text-base text-opacity-60 leading-7 font-semibold">
                    {user_name}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCraftView;
