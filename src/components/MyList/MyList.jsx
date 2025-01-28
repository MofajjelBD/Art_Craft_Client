import { Helmet } from "react-helmet-async";
import ArtCrafts from "../Home/ArtCrafts/ArtCrafts";

const MyList = () => {
  return (
    <div>
      <Helmet>
        <title>MyList Us | Art & Craft</title>
      </Helmet>
      <ArtCrafts headTitle={"My Art & Craft List"}></ArtCrafts>
    </div>
  );
};

export default MyList;
