import keys from "@/keys";
import { TInternship } from "@/types/internship.type";
import axios from "axios";
import { fromAddress, setKey } from "react-geocode";
setKey("AIzaSyCPZsQv-YiKjgxq7Bftx2i5J_FOUgGY00E");

const getFormStepOne = async (rnummer: string, session: any): Promise<TInternship[]> => {
  let internships: TInternship[] = []
  if (session?.user.role === "COORDINATOR") {
    internships = (await axios(keys.NEXT_PUBLIC_URL + `/internships`)).data
  } else {
    internships = (await axios(keys.NEXT_PUBLIC_URL + `/internships/user?rnummer=${rnummer}`)).data
  }
  return internships as TInternship[];
};