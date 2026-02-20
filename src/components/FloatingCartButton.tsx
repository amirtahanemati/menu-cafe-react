import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { formatPrice, toPersianNum } from "../utils/helpers";
import type { CartItem } from "../types";

interface FloatingCartButtonProps {
  cart: CartItem[];
  onClick: () => void;
}

export function FloatingCartButton({ cart, onClick }: FloatingCartButtonProps) {
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          className="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4"
        >
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={onClick}
            className="bg-[#2d6a4f] text-white rounded-2xl px-6 py-3.5 flex items-center gap-3 shadow-2xl max-w-sm w-full"
          >
            <ShoppingCart size={22} />
            <span className="bg-white text-[#2d6a4f] w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0">
              {toPersianNum(totalItems)}
            </span>
            <span className="flex-1 font-bold text-sm text-right">
              {formatPrice(total)}
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
