import Link from "next/link";

const NavContact = () => {
  return (
    <Link
      href="/"
      className="
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-full
        bg-primary-blue
        px-5 py-2
        text-base font-medium
        leading-[1.2] tracking-[-0.02em]
        text-white

        transition-all duration-300 ease-out
        hover:bg-transparent
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
        
      "
    >
      <span
        className="
          absolute inset-0 z-0
          translate-x-[101%]
          rounded-full
          bg-white
          transition-transform duration-300 ease-out
          group-hover:translate-x-0
          ring-1 ring-primary-blue/30
        "
      />

      <span
        className="
          relative z-10
          transition-colors duration-300
          group-hover:text-primary-blue
        "
      >
        Contact Sales
      </span>
    </Link>
  );
};

export default NavContact;
