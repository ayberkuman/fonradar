/* import { EditCustomer } from "@components/EditCustomer/EditCustomer";
import { fetchCustomers, useDeleteCustomer } from "hooks/useGetCustomers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detail = ({ data }) => {
  const [isOnEdit, setIsOnEdit] = useState(false);

  const router = useRouter();

  const { mutate } = useDeleteCustomer();

  const handleDelete = (e) => {
    e.preventDefault();
    mutate(data.id);
    router.push("/customers");
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    refreshData();
  }, [isOnEdit]);

  return !isOnEdit ? (
    <ul>
      <li>{data.id}</li>
      <li>Company Name : {data.companyName}</li>
      <li>Tax Number: {data.taxNumber}</li>
      <li>Tax Office : {data.taxOffice}</li>
      <li>Invoice Count : {data.invoiceCount}</li>
      <li>Contact Number : {data.contactNumber}</li>
      <button onClick={(e) => handleDelete(e)}>Delete Customer</button>
      <button onClick={(e) => setIsOnEdit(true)}>Edit Customer</button>
    </ul>
  ) : (
    <EditCustomer
      defaultCompanyName={data.companyName}
      defaultTaxNumber={data.taxNumber}
      defaultTaxOffice={data.taxOffice}
      defaultContactNumber={data.contactNumber}
      id={data.id}
      setIsOnEdit={setIsOnEdit}
    />
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetchCustomers();

    const paths = res.map((post) => ({
      params: { id: post.id },
    }));

    return { paths, fallback: false };
  } catch {
    return { paths: [{}], fallback: false };
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers/${params.id}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
export default Detail;
 */
