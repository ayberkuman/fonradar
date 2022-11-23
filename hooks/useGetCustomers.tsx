import axios from "axios";

export const fetchCustomers = async () => {
  const result = await axios.get(
    "https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers"
  );
  return result.data;
};
