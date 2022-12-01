import { AddCustomer } from "@components/AddCustomer/AddCustomer";
import { Button } from "@components/common/button/Button";
import { BasicTable } from "@components/common/table/BasicTable";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "hooks/useCrud";
import { useValidate } from "hooks/useValidate";
import { useState } from "react";

const Home = ({}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { isLoading, error, data } = useQuery(["customers"], fetchCustomers);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error;
  return (
    <div className="flex justify-between items-start p-2 bg-neutral-100">
      <BasicTable data={data} />
      <div className={`mx-auto p-4 flex ${isFormOpen ? "flex-col" : ""}`}>
        <Button
          isPositive={isFormOpen ? false : true}
          handleClick={() => setIsFormOpen(!isFormOpen)}
        >
          {isFormOpen ? "Cancel" : "Add Customer"}
        </Button>
        {isFormOpen && <AddCustomer />}
      </div>
    </div>
  );
};

export default Home;
