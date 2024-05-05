import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div className="bg-[#ECECEC]">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
