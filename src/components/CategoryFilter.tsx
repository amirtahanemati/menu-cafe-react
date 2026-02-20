import { useRef } from "react";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {/* فید سمت چپ */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      {/* فید سمت راست */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-gray-50 to-transparent z-10" />

      <div
        ref={scrollRef}
        className="flex gap-2 px-4 overflow-x-auto pb-1"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`.cat-scroll::-webkit-scrollbar{display:none}`}</style>
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <motion.button
              key={cat}
              onClick={() => onChange(cat)}
              whileTap={{ scale: 0.93 }}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                isActive
                  ? "bg-[#2d6a4f] text-white border-[#2d6a4f] shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#2d6a4f]"
              }`}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
