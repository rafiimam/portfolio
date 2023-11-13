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
  data,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#fff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div className="flex flex-col gap-4 border p-4 mb-5 border-blue-700">
                  <p>{item.name}</p>
                  <p>{item.technologies}</p>
                  <p>{item.website}</p>
                  <p>{item.github}</p>
                </div>
              ))
            : null}
        </div>
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