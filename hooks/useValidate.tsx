import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export interface ILoginObj {
  loginUsername: string;
  loginPassword: string;
}

export const useValidate = ({ loginUsername, loginPassword }: ILoginObj) => {
  const { data, isLoading, isError } = useFetch();
  let isValidated = false;

  if (data) {
    data.forEach((user) => {
      if (user.username === loginUsername && user.password === loginPassword) {
        isValidated = true;
      } else return;
    });
  }

  return isValidated;
};
