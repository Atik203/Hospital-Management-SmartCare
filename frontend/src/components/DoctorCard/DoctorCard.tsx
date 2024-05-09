import { Card, CardFooter, Image } from "@nextui-org/react";

type doctorData = {
  id: number;
  user: string;
  designation: string[];
  specialization: string[];
  available_time: string[];
  image: string;
  fee: number;
  meet_link: string;
};
type doctorCardProps = {
  data: doctorData;
};
const DoctorCard: React.FC<doctorCardProps> = ({ data }) => {
  return (
    <div>
      <Card className="mx-auto flex flex-col items-center justify-center p-0 m-0">
        <div className="m-4">
          <Image
            width={192}
            height={192}
            radius="full"
            classNames={{
              img: "ml-4",
            }}
            alt="Card background"
            className="rounded-full mx-auto p-0 h-48 w-48 md:w-48"
            src={`https://app.requestly.io/delay/2000/${data.image}`}
          />
          <CardFooter className="flex-col items-center">
            <h2 className="text-navPrimary uppercase text-center font-bold">
              {data.user}
            </h2>
            <p className="text-lg">
              {data.designation.map((d) => {
                return d + " ";
              })}
            </p>
            <div className="items-start space-x-3 mt-1">
              {data.specialization.map((s) => {
                return (
                  <button className="px-1 py-2 rounded-md btn-outline text-sm text-navPrimary border-navPrimary border-2 hover:bg-cyan-200 hover:text-navPrimary">
                    {s}
                  </button>
                );
              })}
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default DoctorCard;
