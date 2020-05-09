import axios from "axios";
import { REDDIT_URL } from "constants/index";

export const getPost = async () => {
  return axios.get(REDDIT_URL).then(
    (res) => {
      return res.data;
    },
    (error) => {
      console.log("error fetching reddit post json:", error);
      throw error;
    }
  );
};
