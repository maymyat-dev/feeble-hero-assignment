import Link from "next/link";

const NavContact = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center
        rounded-full
        bg-primary-blue text-white
        px-5 py-2
        text-base font-medium
        leading-[1.2] tracking-[-0.02em]
        transition-all duration-200 ease-out
        hover:bg-[#0062CC] hover:shadow-lg
        active:scale-95
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/40"
    >
      Contact Sales
    </Link>
  );
};

export default NavContact;
