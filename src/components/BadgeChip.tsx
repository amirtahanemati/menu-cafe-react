interface BadgeChipProps {
  text: string;
}

const BADGE_COLORS: Record<string, string> = {
  پرفروش: "bg-amber-500 text-white",
  جدید: "bg-emerald-500 text-white",
  ویژه: "bg-purple-500 text-white",
  پرطرفدار: "bg-rose-500 text-white",
};

export function BadgeChip({ text }: BadgeChipProps) {
  return (
    <span
      className={`text-xs font-bold px-2 py-0.5 rounded-full ${BADGE_COLORS[text] || "bg-gray-200 text-gray-700"}`}
    >
      {text}
    </span>
  );
}
