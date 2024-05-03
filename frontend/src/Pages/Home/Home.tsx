import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="border-2 h-60">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Helmet>

      <h1 className="text-red-500 font-bold">Home Page this is</h1>
    </div>
  );
};

export default Home;
