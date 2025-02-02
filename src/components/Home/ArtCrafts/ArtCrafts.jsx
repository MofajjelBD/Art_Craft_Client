import ArtCraft from "./ArtCraft";
import { useState } from "react";
import PropTypes from "prop-types";

const ArtCrafts = ({ headTitle, headDescription, filteredItems }) => {
  const [ArtCraftLength, setArtCraftLength] = useState(6);
  return (
    <>
      <div className="px-4">
        <div className="max-w-[691px] mx-auto text-center pt-8 md:pt-16">
          <h1 className="text-2xl md:text-4xl font-black dark:text-slate-200 text-opacity-100 dark:text-opacity-100">
            {headTitle}
          </h1>
          <p className="text-sm md:text-lg font-normal leading-7 text-cPrimary dark:text-slate-200 text-opacity-100 dark:text-opacity-100 font-Inter pt-5 pb-2">
            {headDescription}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 my-2 md:my-8">
          {filteredItems.slice(0, ArtCraftLength).map((ArtCraftData) => (
            <ArtCraft
              key={ArtCraftData._id}
              ArtCraftData={ArtCraftData}
            ></ArtCraft>
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
    </>
  );
};
ArtCrafts.propTypes = {
  headTitle: PropTypes.any,
  headDescription: PropTypes.any,
  filteredItems: PropTypes.any,
};
export default ArtCrafts;
