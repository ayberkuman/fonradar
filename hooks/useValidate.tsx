import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export interface ILoginObj {
  loginUsername?: string;
  loginPassword?: string;
}

export const useValidate = ({
  loginUsername = "",
  loginPassword = "",
}: ILoginObj) => {
  const [isValidated, setIsValidated] = useState(false);
  const { data } = useFetch();
  const validate = () => {
    if (data) {
      data.forEach((user) => {
        if (
          user.username === loginUsername &&
          user.password === loginPassword
        ) {
          setIsValidated(true);
        } else return;
      });
    } else return isValidated;
  };

  useEffect(() => {
    validate();
  }, [loginPassword, loginUsername]);
  return isValidated;
};
