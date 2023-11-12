"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "about",
    placeholder: "About me",
    type: "text",
    label: "About me",
  },
  {
    name: "noofprojects",
    placeholder: "Number of projects",
    type: "text",
    label: "Number of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "Year of experience",
    type: "text",
    label: "Year of experience",
  },
  {
    name: "noofclients",
    placeholder: "Number of clients",
    type: "text",
    label: "Number of clients",
  },
  {
    name: "skills",
    placeholder: "Skills",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({ formData, setFormData }) {
  return (
    <div className="w-full">
      <div className="bg-[#fff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
          Add Info
        </button>
      </div>
    </div>
  );
}
