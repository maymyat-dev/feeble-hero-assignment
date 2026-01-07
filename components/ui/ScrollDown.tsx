import Image from "next/image";

const ScrollDown = () => {
  return (
    <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity hover:opacity-80">
      <span className="font-medium text-[18px] leading-[1.3] tracking-[-0.02em]">Scroll to learn more</span>
      <Image src="/images/hero/arrow-down.svg" alt="" width={30} height={30} />
    </div>
  );
};

export default ScrollDown;
