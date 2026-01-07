import Image from "next/image";

const HeroButtons = () => {
  return (
    <div className="flex items-center gap-4 sm:pt-6 pt-0 mx-auto flex-col sm:flex-row">
      <button className="w-full sm:w-auto bg-primary-blue text-white font-medium text-[18px] leading-[1.2] tracking-[-0.02em] px-5 py-3 rounded-full">
        Get Started
      </button>
      <button className="w-full sm:w-auto flex border border-[#6C788F] font-medium text-[18px] items-center gap-2 px-5 py-2 rounded-full">
        <Image
          src="/images/hero/apple-icon.svg"
          alt="Apple Icon"
          width={19}
          height={22}
        />
        <div className="w-[0.5px] h-4 bg-[#6C788F]" />
        <span className="text-[#1D2026]"> Download the Mac app</span>
      </button>
    </div>
  );
};

export default HeroButtons;
