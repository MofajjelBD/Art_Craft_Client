import { Helmet } from "react-helmet-async";
import Swiper from "../../components/slider/Swiper";
import Booking from "./Booking/Booking";
import ArtCrafts from "./ArtCrafts/ArtCrafts";
import Testimonial from "./Testimonial/Testimonial";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const ArtCraftData = useLoaderData();

  const filteredItems = ArtCraftData;
  return (
    <>
      <Helmet>
        <title>Home | Art & Craft</title>
      </Helmet>
      <Swiper></Swiper>
      <ArtCrafts
        headTitle={"The Craft List"}
        headDescription={"All our best creations in one inspiring gallery"}
        filteredItems={filteredItems}
      ></ArtCrafts>
      <Testimonial></Testimonial>
      <Booking></Booking>
    </>
  );
};

export default Home;
