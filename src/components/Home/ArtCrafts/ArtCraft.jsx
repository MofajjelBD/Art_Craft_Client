import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ArtCraft = ({ ArtCraftData = {} }) => {
  const {
    // id,
    title,
    segment_name,
    description,
    // status,
    price,
    size,
    // location,
    // facilities,
    image,
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
            {title}
          </p>
          <p className="text-base leading-7 text-[#878787]">{segment_name}</p>
          <hr className="mb-3" />
          <p className="text-lg font-medium text-Primary dark:text-[#878787] text-opacity-100">
            Ingredients: {description.length}
          </p>
          {/* <ul className="list-disc list-inside ps-3 text-lg leading-8 text-[#878787] mb-3">
            {description.map((Ingredient, Index) => (
              <li key={Index}>{Ingredient}</li>
            ))}
          </ul> */}
          <hr />
          <div className="flex gap-4 flex-wrap py-3">
            <span className="text-lg text-[#878787] flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-6"
              >
                <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
              </svg>
              {price}
            </span>
            <span className="text-lg text-[#878787] flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
              {size}
            </span>
          </div>
          <div className="text-start">
            <button
              // onClick={() => handleAddToCook(CardData)}
              className="btn rounded-full text-[#150B2B] bg-myGreen btn-success font-medium border border-myGreen px-6 hover:bg-slate-200 hover:text-myGreen hover:border-myGreen"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
      {/* <div
        className="relative card bg-base-100 w-[400px] h-full"
        href="/books/6"
        data-aos="zoom-in-up"
      >
        <figure className="absolute top-0 left-0 !items-start rounded-full z-10">
          <div className="bg-transparent rounded-[16px] max-h-[240px] max-w-[240px] justify-center flex shadow-xl">
            <img className="h-full w-auto" src={image}></img>
          </div>
        </figure>
        <div className="mt-28 ml-auto card-body bg-slate-700  font-Mulish min-h-[340px] sm:w-[340px] max-w-[340px] p-6 justify-end border border-gray-400 rounded-3xl">
          <h2 className="card-title text-2xl font-bold text-white justify-end py-6 z-10">
            {price}$
          </h2>
          <div className="flex gap-4 flex-wrap z-10">
            <p className="my-auto text-white">{description}</p>
          </div>
          <div className="flex justify-between flex-wrap py-3">
            <div>
              <h2 className="card-title text-2xl font-bold text-white">
                {title}
              </h2>
              <p className="text-base font-medium  text-white text-opacity-80">
                {segment_name}
              </p>
            </div>
            <span className="my-auto text-white">{size}</span>
          </div>
          <div className="flex justify-between flex-wrap py-3">
            <span className="text-base font-medium  text-white text-opacity-80 flex gap-2">
              <Link
                to={`/craft-view/${id}`}
                className="px-3 py-1 md:py-2 md:px-4 rounded-full text-white btn-success font-semibold border border-green hover:bg-inherit bg-green-700 hover:text-white"
              >
                ArtCraft view
              </Link>
            </span>
            <span className="text-lg font-medium  text-white text-opacity-80 flex items-center gap-2">
              {location}
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};
ArtCraft.propTypes = {
  ArtCraftData: PropTypes.any,
  title: PropTypes.any,
};

export default ArtCraft;
