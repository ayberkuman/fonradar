import { BasicTable } from "@components/common/table/BasicTable";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "hooks/useGetCustomers";

const Home = ({}) => {
  const { isLoading, error, data } = useQuery(["repoData"], fetchCustomers);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;
  return (
    <div>
      <BasicTable data={data} />
    </div>
  );
};

export default Home;
