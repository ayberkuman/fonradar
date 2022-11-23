import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUserData = async () => {
  return await axios.get(
    "https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/users"
  );
};

export const useFetch = () => {
  return useQuery(["users"], fetchUserData, {
    select: (data) => data.data,
  });
};
