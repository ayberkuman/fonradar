import { AddCustomer } from "@components/AddCustomer/AddCustomer";
import { BasicTable } from "@components/common/table/BasicTable";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "hooks/useGetCustomers";
import { useValidate } from "hooks/useValidate";
import { useEffect, useState } from "react";

const Home = ({}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { isLoading, error, data } = useQuery(["customers"], fetchCustomers);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error;
  return (
    <div className="flex items-start">
      <BasicTable data={data} />
      <button onClick={() => setIsFormOpen(!isFormOpen)}>
        {isFormOpen ? "Cancel" : "Add Customer"}
      </button>
      {isFormOpen && <AddCustomer />}
    </div>
  );
};

export default Home;
