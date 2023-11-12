"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter technologies",
    type: "text",
    label: "Enter technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "GitHub",
    type: "text",
    label: "GitHub",
  },
];

export default function AdminProjectView({
  formData,
  setFormData,
  handleSaveData,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#fff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("project")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
