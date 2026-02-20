import { motion } from "framer-motion";
import { Code2, Heart, Coffee } from "lucide-react";

export function DeveloperFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mx-4 mb-6 mt-2"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#1b2a1e] px-5 py-4">
        {/* دکوراسیون پس‌زمینه */}
        <div className="pointer-events-none absolute -left-6 -top-6 w-28 h-28 rounded-full bg-[#2d6a4f]/20 blur-2xl" />
        <div className="pointer-events-none absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-[#52b788]/10 blur-xl" />

        <div className="relative flex items-center justify-between gap-3">
          {/* آیکون چپ */}
          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#2d6a4f]/30 flex items-center justify-center text-[#52b788]">
            <Code2 size={17} />
          </div>

          {/* متن وسط */}
          <div className="flex-1 text-center">
            <p className="text-white/50 text-[10px] leading-4 mb-0.5">
              طراحی و توسعه
            </p>
            <div className="flex items-center justify-center gap-1.5">
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="text-red-800"
              >
                <Heart size={12} fill="currentColor" />
              </motion.span>
              <span className="text-white font-black text-sm tracking-wide">
                امیرطاها نعمتی
              </span>
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="text-red-800"
              >
                <Heart size={12} fill="currentColor" />
              </motion.span>
            </div>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              <Coffee size={10} className="text-[#52b788]" />
              <p className="text-[#52b788]/70 text-[10px]">
                ساخته‌شده با قهوه و کد
              </p>
            </div>
          </div>

          {/* سال سمت راست */}
          <div className="flex-shrink-0 text-left">
            <span className="text-white/20 text-xs font-bold">۱۴۰۴</span>
          </div>
        </div>

        {/* خط پایین */}
        <div className="relative mt-3 h-px bg-gradient-to-r from-transparent via-[#2d6a4f]/60 to-transparent" />
        <p className="relative mt-2 text-center text-white/25 text-[9px]">
          کلیه حقوق محفوظ است
        </p>
      </div>
    </motion.footer>
  );
}
