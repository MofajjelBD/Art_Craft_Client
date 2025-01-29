import { Helmet } from "react-helmet-async";
import ArtCrafts from "../Home/ArtCrafts/ArtCrafts";
import { useLoaderData } from "react-router-dom";

const AllItems = () => {
  const ArtCraftData = useLoaderData();

  const filteredItems = ArtCraftData;
  return (
    <>
      <Helmet>
        <title>All Items | Art & Craft</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900"></section>
      <ArtCrafts
        headTitle={"All Art & Craft List"}
        filteredItems={filteredItems}
      ></ArtCrafts>
    </>
  );
};

export default AllItems;
