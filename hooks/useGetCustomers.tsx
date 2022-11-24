import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const fetchCustomers = async () => {
  const result = await axios.get(
    "https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers"
  );
  return result.data;
};

const postCustomer = async (customer) => {
  return await axios.post(
    "https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers",
    customer
  );
};

export const usePostCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation(postCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries(["customers"]);
    },
  });
};
