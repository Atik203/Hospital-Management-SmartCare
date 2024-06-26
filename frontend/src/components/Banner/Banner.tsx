const Banner = () => {
  const user: object | null = {
    name: "Atikur Rahman",
  };

  return (
    <div className="mt-10 md:mt-12 lg:mt-28 mb-8">
      {user && (
        <h1 className="px-3 my-2 text-xl md:text-2xl lg:text-3xl font-bold">
          Hello, Mr. <span className="text-navPrimary">Atikur</span>
        </h1>
      )}
      <div
        className="md:relative py-4 md:p-0 w-full md:h-[348px] lg:h-[500px] flex flex-col-reverse md:flex-row justify-center gap-6 bg-cover bg-center"
        style={{ backgroundImage: `url('/bannerSvg.svg')` }}
      >
        <div className=" md:w-1/2 p-3 my-auto md:p-4 lg:p-8">
          <h1 className="text-navPrimary font-extrabold text-3xl md:text-4xl lg:text-5xl">
            Providing Quality Healthcare
          </h1>
          <p className="text-[#000000B3] md:text-lg lg:text-xl mt-4">
            At SmartCare, we believe in prioritizing your health above all. Our
            mission is to provide quality healthcare services that are easily
            accessible and personalized to your needs. Experience the future of
            healthcare with us.
          </p>
        </div>
        <div className="md:relative md:w-1/2 md:-mt-[7px] lg:mt-[9px]">
          <img
            src="/banner.png"
            alt=""
            className="md:absolute md:-top-20 lg:-top-40 w-10/12 mx-auto md:w-full lg:w-11/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
