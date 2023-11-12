"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import { useState } from "react";

const initialHomeState = {
  heading: "",
  summary: "",
};

const initialAboutState = {
  about: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialEducationState = {
  degree: "",
  year: "",
  college: "",
};

const initialExperienceState = {
  position: "",
  Company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialProjectState = {
  name: "",
  technologies: "",
  website: "",
  github: "",
};

export default function adminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");

  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeState);
  const [aboutViewFormData, setAboutViewFormData] = useState(initialAboutState);
  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationState
  );
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceState
  );
  const [projectViewFormData, setProjectViewFormData] =
    useState(initialProjectState);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView />,
    },
  ];

  return (
    <dev className="border-b border-grey-200">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(item.id);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 pt-10">
        {menuItems.map(
          (item) => item.id === currentSelectedTab && item.component
        )}
      </div>
    </dev>
  );
}
