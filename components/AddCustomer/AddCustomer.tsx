import { usePostCustomer } from "hooks/useGetCustomers";
import { useState } from "react";

export const AddCustomer = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    taxNumber: "",
    taxOffice: "",
    contactNumber: "",
  });
  const { mutate } = usePostCustomer();
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col h-min">
      <label htmlFor="companyName">Company Name</label>
      <input
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
        type="text"
        name="companyName"
        id="companyName"
      />
      <label htmlFor="taxNumber">Tax Number</label>
      <input
        value={formData.taxNumber}
        onChange={(e) =>
          setFormData({ ...formData, taxNumber: e.target.value })
        }
        type="number"
        name="taxNumber"
        id="taxNumber"
      />
      <label htmlFor="taxOffice">Tax Office</label>
      <input
        value={formData.taxOffice}
        onChange={(e) =>
          setFormData({ ...formData, taxOffice: e.target.value })
        }
        type="text"
        name="taxOffice"
        id="taxOffice"
      />
      <label htmlFor="contactNumber">Contact Number</label>
      <input
        value={formData.contactNumber}
        onChange={(e) =>
          setFormData({ ...formData, contactNumber: e.target.value })
        }
        type="number"
        name="contactNumber"
        id="contactNumber"
      />
      <button type="submit">Add Customer</button>
    </form>
  );
};
