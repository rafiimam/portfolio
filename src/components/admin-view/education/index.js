"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "degree",
    placeholder: "Enter degree name",
    type: "text",
    label: "Enter degree name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College",
    type: "text",
    label: "College",
  },
];

export default function AdminEducationView({
  formData,
  setFormData,
  handleSaveData,
  data
}) {
  return (
    <div className="w-full">
      <div className="bg-[#fff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div className="flex flex-col gap-4 border p-4 mb-5 border-blue-700">
                  <p>{item.degree}</p>
                  <p>{item.year}</p>
                  <p>{item.college}</p>
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
          onClick={() => handleSaveData("education")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}