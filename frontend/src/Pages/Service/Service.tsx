import { Helmet } from "react-helmet-async";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import ErrorComponent from "../../components/ErrorComponent/ErrorComonent";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import TitleDescriptionBlock from "../../components/TitleDescriptionBlock/TitleDescriptionBlock";
import { useGetServicesQuery } from "../../redux/api/baseApi";

const Service = () => {
  const {
    data: services,
    isLoading,
    error,
    isFetching,
  } = useGetServicesQuery();

  if (error instanceof Error) {
    return <ErrorComponent>Error: {error.message}</ErrorComponent>;
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
        <div>
          <CardSkeleton></CardSkeleton>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
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
