import { Helmet } from "react-helmet-async";
import Swiper from "../../components/slider/Swiper";
import Booking from "./Booking/Booking";
import ArtCrafts from "./ArtCrafts/ArtCrafts";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Art & Craft</title>
      </Helmet>
      <Swiper></Swiper>
      <ArtCrafts
        headTitle={"Top List is Back"}
        headDescription={"All ours best meals in one delicious snap"}
      ></ArtCrafts>
      <Testimonial></Testimonial>
      <Booking></Booking>
    </>
  );
};

export default Home;
