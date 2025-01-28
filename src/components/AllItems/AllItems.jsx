import { Helmet } from "react-helmet-async";
import ArtCrafts from "../Home/ArtCrafts/ArtCrafts";

const AllItems = () => {
  return (
    <>
      <Helmet>
        <title>All Items | Art & Craft</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900"></section>
      <ArtCrafts headTitle={"All Art & Craft List"}></ArtCrafts>
    </>
  );
};

export default AllItems;
