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
      router.push("/list");
    }
  }, [isValidated]);
  console.log(isValidated);

  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <Login setUserLogin={setUserLogin} />
      {isValidated ? <div>Validated</div> : <div>Not Validated</div>}
    </div>
  );
}
