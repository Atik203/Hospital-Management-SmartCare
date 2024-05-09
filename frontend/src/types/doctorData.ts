export type doctorData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    user: string;
    designation: string[];
    specialization: string[];
    available_time: string[];
    image: string;
    fee: number;
    meet_link: string;
  }[];
};
