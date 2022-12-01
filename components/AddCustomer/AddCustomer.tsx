import { usePostCustomer } from "hooks/useCrud";
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
      <button
        className="bg-green-black-bg px-4 py-2 rounded-md hover:bg-green text-white text-title-20-auto-medium transition-all"
        type="submit"
      >
        Add Customer
      </button>
    </form>
  );
};
