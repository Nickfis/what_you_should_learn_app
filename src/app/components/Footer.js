"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  if (path === "/about") {
    return null;
  }
  return (
    <Link href="/about" className="about-link">
      Click here for info about this page and the author
    </Link>
  );
};

export default Footer;
