import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import { BadgeChip } from "./BadgeChip";
import type { MenuItem } from "../types";
import { formatPrice } from "../utils/helpers";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  const [showAddons, setShowAddons] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-3"
    >
      <div className="flex gap-3 p-4">
        <div className="relative flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 rounded-xl object-cover"
          />
          {item.badge && (
            <div className="absolute -top-1 -right-1">
              <BadgeChip text={item.badge} />
            </div>
          )}
        </div>
        <div className="flex-1 text-right">
          <h3 className="font-bold text-gray-900 text-base mb-1">
            {item.name}
          </h3>
          <p className="text-gray-500 text-xs leading-5 mb-3">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={() => onAddToCart(item)}
              className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white rounded-xl px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-1"
            >
              <Plus size={15} />
              افزودن
            </motion.button>
            <span className="text-[#2d6a4f] font-bold text-sm">
              {formatPrice(item.price)}
            </span>
          </div>
        </div>
      </div>

      {item.addons.length > 0 && (
        <div className="border-t border-gray-100">
          <button
            onClick={() => setShowAddons(!showAddons)}
            className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-500 hover:bg-gray-50 transition-colors"
          >
            <span>مشاهده جزئیات و افزودنی‌ها</span>
            <motion.span
              animate={{ rotate: showAddons ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>
          <AnimatePresence>
            {showAddons && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-4 pt-3 pb-3 pt-1 flex flex-wrap gap-2 justify-start">
                  {item.addons.map((a) => (
                    <span
                      key={a}
                      className="bg-gray-100 text-gray-600 text-xs rounded-full px-3 py-1"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
