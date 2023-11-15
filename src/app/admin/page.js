"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import Login from "@/components/admin-view/login";
import AdminProjectView from "@/components/admin-view/project";
import { addData, getData, login, updateData } from "@/services";
import { useEffect, useState } from "react";

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

const initialLoginFormData = {
  username: "",
  password: "",
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

  //const [contacts, setContacts] = useState([])

  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
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
          handleSaveData={handleSaveData}
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
          handleSaveData={handleSaveData}
          data={allData?.experience}
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
          handleSaveData={handleSaveData}
          data={allData?.education}
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
          handleSaveData={handleSaveData}
          data={allData?.project}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView 
        data = {allData && allData?.contact}
      />,
      
    },
  ];

  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);

    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }

  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      education: educationViewFormData,
      experience: experienceViewFormData,
      project: projectViewFormData,
    };

    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);
    console.log(response, "response");

    if (response && response.success) {
      resetFormDatas();
      extractAllDatas();
    }
  }

  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

  function resetFormDatas() {
    setHomeViewFormData(initialHomeState);
    setAboutViewFormData(initialAboutState);
    setEducationViewFormData(initialEducationState);
    setExperienceViewFormData(initialExperienceState);
    setProjectViewFormData(initialProjectState);
  }

  console.log(allData, homeViewFormData, "homeViewFormData");

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
  }, []);

  async function handleLogIn() {
    const res = await login(loginFormData);

    console.log(res, "login");

    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }

  if (!authUser) {
    return (
      <Login
        formData={loginFormData}
        handleLogIn={handleLogIn}
        setFormData={setLoginFormData}
      />
    );
  }

  return (
    <div className="border-b border-grey-200">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormDatas();
              setUpdate(false);
            }}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => {
            setAuthUser(false);
            sessionStorage.removeItem("authUser");
          }}
          className="p-4 font-bold text-xl text-black"
        >
          Log out
        </button>
      </nav>
      <div className="mt-10 pt-10">
        {menuItems.map(
          (item) => item.id === currentSelectedTab && item.component
        )}
      </div>
    </div>
  );
}
