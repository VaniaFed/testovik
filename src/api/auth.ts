import axios from "axios";
import { SignUpFields } from "@/app/signup/page";

export const authApi = {
  signUp: async (data: SignUpFields) => {
    await axios
      .post("https://interns-test-fe.snp.agency/api/v1/signup", data, {
        headers: {
          "scope-key": "Rm36-GQ.Z(%rFfwAu:LvY7",
        },
      })
      .then((response) => console.log(response))
      .catch((error: any) => {
        console.warn(error);
      });
  },
};
