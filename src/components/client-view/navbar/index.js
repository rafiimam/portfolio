"use client";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
  ${
    activeLink === item.id
      ? "text-blue-main animation-active shadow-blue-main "
      : "text-[black] font-bold hover:text-blue-main"
  }
  `}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-10 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0 " : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-blue-main">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-blue-main bg-blue-main">
                <span className="text-[white] text-[25px] font-bold">P</span>
              </div>
              ortfolio
            </div>
          </div>

          <ul className="hidden lg:flex col-start-4 col-end-8 text-[black] item-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button className="pl-4 pr-4 py-3 border-[2px] bg-[white] border-blue-main text-[black] font-semibold rounded-lg text-xl tracking-widest hover:shadow-blue-md transition-all outline-none">
              Contact Me
            </button>
          </div>
        </nav>
      </header>

      <nav className="overflow-x-auto fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3 ">
          <ul className="flex w-full justify-between items-center text-[black]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
