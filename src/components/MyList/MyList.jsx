import { Helmet } from "react-helmet-async";
import ArtCrafts from "../Home/ArtCrafts/ArtCrafts";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyList = () => {
  const ArtCraftData = useLoaderData();
  const { user } = useContext(AuthContext);

  const filteredItems = ArtCraftData.filter(
    (item) => item.user_email === user.email
  );
  return (
    <div>
      <Helmet>
        <title>MyList Us | Art & Craft</title>
      </Helmet>
      <ArtCrafts
        headTitle={"My Art & Craft List"}
        filteredItems={filteredItems}
      ></ArtCrafts>
    </div>
  );
};

export default MyList;
