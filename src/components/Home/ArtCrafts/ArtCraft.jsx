import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ArtCraft = ({ ArtCraftData = {} }) => {
  const {
    // id,
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
  } = ArtCraftData;

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <div className="card bg-base-100 max-w-[379px] shadow-xl border border-gray rounded-3xl dark:bg-slate-800">
        <figure className="px-6 pt-6">
          <img className="rounded-2xl" src={image}></img>
        </figure>
        <div className="card-body font-Mulish py-6 px-6 justify-start">
          <p className="text-xl font-semibold text-Primary dark:text-[#878787] text-opacity-100">
            {item_name}
          </p>
          <p className="text-lg font-medium text-Primary dark:text-[#878787] text-opacity-100">
            {subcategory_name}
          </p>
          <p className="text-base leading-7 text-[#878787]">
            {short_description}
          </p>
          <hr className="mb-3" />
          <p className="text-lg font-medium text-Primary dark:text-[#878787] text-opacity-100">
            Price: ${price}
          </p>
          <div className="flex gap-2 flex-wrap justify-between py-1">
            <span className="text-lg text-[#878787] flex gap-2">
              Customization:
              <span className="text-lg text-slate-800 dark:text-[#878787] flex gap-2">
                {customization}
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
              {rating}
            </span>
          </div>
          <div className="flex gap-3 flex-wrap py-1">
            <span className="text-lg text-[#878787] flex gap-2">
              Stock Status:
              <span className="text-lg text-slate-800 dark:text-[#878787] flex gap-2">
                {stock_status}
              </span>
            </span>
            <span className="text-lg text-[#878787] flex gap-2">
              Processing Time
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-6"
              >
                <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
              </svg>
              {processing_time}h
            </span>
          </div>
          <hr />
          <div className="py-2">
            <p className="text-lg font-semibold text-gray-700 dark:text-[#878787] text-opacity-100">
              {user_email}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-[#878787] text-opacity-100">
              {user_name}
            </p>
          </div>
          <div className="text-start">
            <button
              // onClick={() => handleAddToCraft()}
              className="btn rounded-full text-[#150B2B] bg-myGreen btn-success font-medium border border-myGreen px-6 hover:bg-slate-200 hover:text-myGreen hover:border-myGreen"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
ArtCraft.propTypes = {
  ArtCraftData: PropTypes.any,
  title: PropTypes.any,
};

export default ArtCraft;
