"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "username",
    placeholder: "Enter your username",
    type: "text",
    label: "Enter username",
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    label: "Enter your password",
  },
];

export default function Login({formData, setFormData, handleLogIn}) {
  return (
    <div className="w-full">
      <div className="bg-[#fff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={handleLogIn}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
