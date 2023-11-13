"use client";
import { usePathname } from "next/navigation";
import NavBar from "../navbar";

export default function CommonLayout({ children }) {
  const pathName = usePathname();

  return (
    <>
      {pathName !== "/admin" ? <NavBar /> : null}
      {children}
    </>
  );
}
