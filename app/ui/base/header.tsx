import Link from "next/link";
import NavLinks from "./nav-links";

export default function Header() {
    return (
      <header className="bg-blue-300 text-white p-4">
        <NavLinks />
      </header>
    );
  }