import { updateCustomer } from "hooks/useGetCustomers";
import { useRouter } from "next/router";
import { useState } from "react";

export const EditCustomer = ({
  defaultCompanyName,
  defaultTaxNumber,
  defaultTaxOffice,
  defaultContactNumber,
  id,
  setIsOnEdit,
}) => {
  const [formData, setFormData] = useState({
    companyName: defaultCompanyName,
    taxNumber: defaultTaxNumber,
    taxOffice: defaultTaxOffice,
    contactNumber: defaultContactNumber,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    updateCustomer(formData, id);
    setIsOnEdit(false);
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
      <button type="submit">Save</button>
    </form>
  );
};
