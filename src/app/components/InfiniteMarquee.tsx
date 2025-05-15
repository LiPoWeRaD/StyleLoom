import Image from "next/image";
import StarIcon from "@/assets/StarIcon.svg"; // Замени путь, если иконка называется иначе

const items = [
  "TANK TOP",
  "T-SHIRT",
  "LONG-SLEEVE T-SHIR",
  "RAGLAN SLEEVE SHIRT",
  "CROP TOP",
  "V-NECK SHIRT",
  "MUSCLE SHIRT"
];

export default function InfiniteMarquee() {
  return (
    <div className="overflow-hidden w-full bg-transparent py-[50px] border-dashed border-y-2 border-dark15">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center text-grey40 text-2xl font-medium mx-6">
            {item}
            <Image src={StarIcon} alt="star" className="mx-6 w-10 h-10" />
          </span>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
} 