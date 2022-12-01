import { Button } from "@components/common/button/Button";
import { EditCustomer } from "@components/EditCustomer/EditCustomer";
import { fetchCustomers, useDeleteCustomer } from "hooks/useCrud";
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

  useEffect(() => {
    router.replace(router.asPath);
  }, [isOnEdit]);

  return !isOnEdit ? (
    <ul className="p-2">
      <Button isPositive={false} handleClick={() => router.back()}>
        Go Back
      </Button>
      <li className="p-2">{data.id}</li>
      <li className="p-2 flex flex-col text-title-20-auto-medium ">
        Company Name :{" "}
        <span className="text-title-18-22-medium py-2">{data.companyName}</span>
      </li>
      <li className="p-2 flex flex-col text-title-20-auto-medium">
        Tax Number:{" "}
        <span className="text-title-18-22-medium py-2">{data.taxNumber}</span>
      </li>
      <li className="p-2 flex flex-col text-title-20-auto-medium">
        Tax Office :{" "}
        <span className="text-title-18-22-medium py-2">{data.taxOffice}</span>
      </li>
      <li className="p-2 flex flex-col text-title-20-auto-medium">
        Invoice Count :{" "}
        <span className="text-title-18-22-medium py-2">
          {data.invoiceCount}
        </span>
      </li>
      <li className="p-2 flex flex-col text-title-20-auto-medium">
        Contact Number :{" "}
        <span className="text-title-18-22-medium py-2">
          {data.contactNumber}
        </span>
      </li>
      <Button isPositive={false} handleClick={(e) => handleDelete(e)}>
        Delete Customer
      </Button>
      <Button isPositive handleClick={(e) => setIsOnEdit(true)}>
        Edit Customer
      </Button>
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
