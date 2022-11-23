import { fetchCustomers } from "hooks/useGetCustomers";

const Detail = ({ data }) => {
  return (
    <ul>
      <li>{data.id}</li>
      <li>Company Name : {data.companyName}</li>
      <li>Tax Number: {data.taxNumber}</li>
      <li>Tax Office : {data.taxOffice}</li>
      <li>Invoice Count : {data.invoiceCount}</li>
      <li>Contact Number : {data.contactNumber}</li>
    </ul>
  );
};

export async function getStaticPaths() {
  const res = await fetchCustomers();

  const paths = res.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
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
