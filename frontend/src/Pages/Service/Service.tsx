import { Helmet } from "react-helmet-async";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import ErrorComponent from "../../components/ErrorComponent/ErrorComonent";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import TitleDescriptionBlock from "../../components/TitleDescriptionBlock/TitleDescriptionBlock";
import useDeviceDetect from "../../Hooks/useDeviceDetect";
import { useGetServicesQuery } from "../../redux/api/baseApi";

const Service = () => {
  const { isDesktop, isTablet } = useDeviceDetect();
  const cardsPerView = isDesktop ? 6 : isTablet ? 4 : 2;

  const {
    data: services,
    isLoading,
    error,
    isFetching,
  } = useGetServicesQuery();

  if (error instanceof Error) {
    return <ErrorComponent message={error.message} />;
  }
  return (
    <div>
      <Helmet>
        <title>Service</title>
      </Helmet>
      <TitleDescriptionBlock
        title="Our Services"
        description="We provide the best services in the industry. Check out our services below."
      />
      {isFetching || isLoading ? (
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6">
          {Array.from({ length: cardsPerView }).map((_, index) => (
            <CardSkeleton key={index}></CardSkeleton>
          ))}
        </div>
      ) : (
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6">
          {services &&
            services.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Service;
