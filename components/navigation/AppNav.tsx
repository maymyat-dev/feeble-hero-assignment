import Link from "next/link";
import NavLogo from "./NavLogo";
import NavContact from "./NavContact";

const NAV_ITEMS = [
  { label: "How it works", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Use Case", href: "/" },
  { label: "FAQ", href: "/" },
];

const AppNav = () => {
  return (
    <nav className="hidden md:flex items-center justify-between">
      <NavLogo />

      <ul className="flex items-center gap-10 text-[#8C97A8] font-medium">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            className="transition-colors duration-200 hover:text-foreground"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <NavContact />
    </nav>
  );
};

export default AppNav;
