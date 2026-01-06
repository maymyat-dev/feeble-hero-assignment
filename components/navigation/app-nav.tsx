import NavLogo from "./nav-logo";
import NavContact from "./nav-contact";
import Link from "next/link";

const AppNav = () => {
  return (
    <nav className="flex justify-between items-center">
      <NavLogo />
      <div>
        <ul className="flex justify-between items-center  gap-10 text-[#8C97A8] font-medium leading-none tracking-normal">
          <li className="transition-colors duration-200 ease-out hover:text-[#007AFF]">
            <Link href="/">How it works</Link>
          </li>
          <li className="transition-colors duration-200 ease-out hover:text-[#007AFF]">
            <Link href="/">Pricing</Link>
          </li>
          <li className="transition-colors duration-200 ease-out hover:text-[#007AFF]">
            <Link href="/">Use Case</Link>
          </li>
          <li className="transition-colors duration-200 ease-out hover:text-[#007AFF]">
            <Link href="/">FAQ</Link>
          </li>
        </ul>
      </div>
      <NavContact />
    </nav>
  );
};

export default AppNav;
