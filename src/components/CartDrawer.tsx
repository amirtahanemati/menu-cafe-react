import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import type { CartItem } from "../types";
import { formatPrice, toPersianNum } from "../utils/helpers";

interface CartDrawerProps {
  cart: CartItem[];
  onClose: () => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

export function CartDrawer({
  cart,
  onClose,
  onIncrease,
  onDecrease,
}: CartDrawerProps) {
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const itemCount = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex flex-col" dir="rtl">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 320 }}
        className="absolute bottom-0 left-0 right-0 bg-[#fafaf8] rounded-t-[2rem] max-h-[85vh] flex flex-col overflow-hidden shadow-2xl"
        style={{ boxShadow: "0 -8px 40px rgba(0,0,0,0.18)" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2">
            <h2 className="font-bold text-lg text-gray-800 tracking-tight">
              سبد خرید
            </h2>
            {itemCount > 0 && (
              <motion.span
                key={itemCount}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[#2d6a4f] text-white text-xs font-bold px-2 py-0.5 rounded-full leading-none"
              >
                {toPersianNum(itemCount)}
              </motion.span>
            )}
          </div>

          <div className="w-9" />
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5">
          <AnimatePresence mode="popLayout">
            {cart.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-gray-300 py-20 gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                  <ShoppingBag
                    size={36}
                    strokeWidth={1.2}
                    className="text-gray-300"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-400">
                    سبد خرید خالی است
                  </p>
                  <p className="text-xs text-gray-300 mt-1">
                    اقلام مورد نظرت رو اضافه کن!
                  </p>
                </div>
              </motion.div>
            ) : (
              cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 60, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100"
                >
                  {/* Item info */}
                  <div className="flex-1 text-right min-w-0">
                    <p className="font-semibold text-sm text-gray-800 truncate">
                      {item.name}
                    </p>
                    <p className="text-[#2d6a4f] text-xs font-medium mt-0.5">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  {/* Quantity control */}
                  <div className="flex items-center gap-1 bg-gray-50 rounded-xl p-1 border border-gray-100 shrink-0">
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => onIncrease(item.id)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg text-[#2d6a4f] hover:bg-green-50 transition-colors"
                    >
                      <Plus size={13} />
                    </motion.button>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={item.quantity}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="w-6 text-center font-bold text-sm text-gray-700"
                      >
                        {toPersianNum(item.quantity)}
                      </motion.span>
                    </AnimatePresence>
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => onDecrease(item.id)}
                      className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${
                        item.quantity === 1
                          ? "text-red-400 hover:bg-red-50"
                          : "text-[#2d6a4f] hover:bg-green-50"
                      }`}
                    >
                      {item.quantity === 1 ? (
                        <Trash2 size={13} />
                      ) : (
                        <Minus size={13} />
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <AnimatePresence>
          {cart.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="p-4 border-t border-gray-100 bg-white"
            >
              {/* Total row */}
              <div className="flex justify-between items-center mb-3 px-1">
                <span className="font-bold text-lg text-gray-800">
                  {formatPrice(total)}
                </span>
                <span className="text-gray-400 text-sm">جمع کل</span>
              </div>

              {/* CTA */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#2d6a4f] text-white rounded-2xl py-4 font-bold text-base transition-colors hover:bg-[#1b4332] active:bg-[#1b4332] relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)",
                  boxShadow: "0 4px 20px rgba(45,106,79,0.35)",
                }}
              >
                <span className="relative z-10">ثبت سفارش</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
