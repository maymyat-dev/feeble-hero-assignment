import Image from "next/image";
import Link from "next/link";

const NavLogo = () => {
  return (
    <Link href="/" className="px-2" aria-label="Coup home">
      <Image
        src="/images/logo.svg"
        alt="coup logo"
        width={106}
        height={34}
        priority
      />
    </Link>
  );
};

export default NavLogo;
