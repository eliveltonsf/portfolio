import axios from "axios";

export const getReposData = async () => {
  const response = await axios.get(
    "https://api.github.com/users/eliveltonsf/repos"
  );
  return response.data;
};