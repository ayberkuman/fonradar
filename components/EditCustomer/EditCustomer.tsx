import { updateCustomer } from "hooks/UseCrud";
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
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col h-min p-2">
      <label className="p-2 text-title-20-auto-medium" htmlFor="companyName">
        Company Name
      </label>
      <input
        className="p-2 bg-transparent border-neutral-500 border-b-2 text-title-16-auto-medium focus:outline-none focus:border-neutral-800 max-w-md py-2"
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
        type="text"
        name="companyName"
        id="companyName"
      />
      <label className="p-2 text-title-20-auto-medium" htmlFor="taxNumber">
        Tax Number
      </label>
      <input
        className="p-2 bg-transparent border-neutral-500 border-b-2 text-title-16-auto-medium focus:outline-none focus:border-neutral-800 max-w-md py-2"
        value={formData.taxNumber}
        onChange={(e) =>
          setFormData({ ...formData, taxNumber: e.target.value })
        }
        type="number"
        name="taxNumber"
        id="taxNumber"
      />
      <label className="p-2 text-title-20-auto-medium" htmlFor="taxOffice">
        Tax Office
      </label>
      <input
        className="p-2 bg-transparent border-neutral-500 border-b-2 text-title-16-auto-medium focus:outline-none focus:border-neutral-800 max-w-md py-2"
        value={formData.taxOffice}
        onChange={(e) =>
          setFormData({ ...formData, taxOffice: e.target.value })
        }
        type="text"
        name="taxOffice"
        id="taxOffice"
      />
      <label className="p-2 text-title-20-auto-medium" htmlFor="contactNumber">
        Contact Number
      </label>
      <input
        className="p-2 bg-transparent border-neutral-500 border-b-2 text-title-16-auto-medium focus:outline-none focus:border-neutral-800 max-w-md py-2"
        value={formData.contactNumber}
        onChange={(e) =>
          setFormData({ ...formData, contactNumber: e.target.value })
        }
        type="number"
        name="contactNumber"
        id="contactNumber"
      />
      <button
        className="m-2 my-4 py-2 px-4 self-start bg-green-black-bg rounded-md hover:bg-green text-white text-title-20-auto-medium transition-all"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};
