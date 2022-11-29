import { Login } from "@components/Login/Login";
import { ILoginObj, useValidate } from "hooks/useValidate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [userLogin, setUserLogin] = useState<ILoginObj>({
    loginUsername: "",
    loginPassword: "",
  });
  const router = useRouter();
  const isValidated = useValidate(userLogin);
  useEffect(() => {
    if (isValidated) {
      router.push("/customers");
    }
  }, [isValidated]);

  return (
    <div className="container bg-neutral-100 flex items-center p-4 mx-auto min-h-screen justify-center">
      <Login setUserLogin={setUserLogin} />
    </div>
  );
}
