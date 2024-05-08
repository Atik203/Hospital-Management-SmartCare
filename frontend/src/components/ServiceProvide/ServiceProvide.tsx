import { Card, CardFooter, Image } from "@nextui-org/react";
import axios from "axios";
import truncate from "lodash/truncate";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
type ServiceData = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

const ServiceProvide = () => {
  const [slides, setSlides] = useState<ServiceData[]>([]);
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(min-width: 480px)").matches
  );

  const fetchMoreSlides = async () => {
    try {
      const response = await axios.get<ServiceData[]>("/serviceData.json");
      setSlides(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMoreSlides();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
      setIsTablet(width >= 768 && width < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slidesPerView = isDesktop ? 3 : isTablet ? 2 : 1;

  return (
    <div className="mx-auto relative my-20">
      <div className="grid grid-cols-12 md:mb-12">
        <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
          <h2 className="text-3xl text-navPrimary leading-none md:text-[45px] font-bold mb-6">
            Services We Provide
          </h2>
          <p className="text-lg w-11/12 md:w-10/12 mx-auto">
            At Smart Care, we are committed to providing a wide range of
            services designed to ensure your well-being and comfort.
          </p>
        </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={slidesPerView}
          centeredSlides={false}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          virtual
          className="mx-auto w-10/12"
        >
          {slides.map((data, index) => (
            <SwiperSlide
              key={data.id}
              virtualIndex={index}
              className="min-h-72 mx-auto"
            >
              {
                <Card className="mx-auto flex flex-col items-center justify-center p-0 m-0">
                  <div className="m-4">
                    <Image
                      width={320}
                      height={240}
                      alt="Card background"
                      className="rounded-lg mx-auto p-0 h-60 w-72 md:w-80 "
                      src={`https://app.requestly.io/delay/2000/${data.image}`}
                    />
                    <CardFooter className="px-2 flex-col items-start">
                      <h2 className="text-navPrimary uppercase font-bold">
                        {data.title}
                      </h2>
                      <p className="text-lg">
                        {truncate(data.description, { length: 80 })}
                      </p>
                      <p className="text-navPrimary font-bold text-lg cursor-pointer">
                        Learn More <FaArrowRight className="inline" />
                      </p>
                    </CardFooter>
                  </div>
                </Card>
              }
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next  absolute bottom-40 top-40 right-0 transform -translate-y-1/2"></div>
        <div className="swiper-button-prev  absolute bottom-40 top-40 left-0 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default ServiceProvide;
