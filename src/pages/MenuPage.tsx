import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";

import { CAFE_INFO, CATEGORIES, MENU_ITEMS } from "../data/cafeData";
import { CafeInfoCard } from "../components/CafeInfoCard";
import { CategoryFilter } from "../components/CategoryFilter";
import { MenuItemCard } from "../components/MenuItemCard";
import { AboutSection } from "../components/AboutSection";
import { CartDrawer } from "../components/CartDrawer";
import { FloatingCartButton } from "../components/FloatingCartButton";
import { showToast } from "../utils/Toasthelpers";
import type { CartItem, MenuItem } from "../types";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("همه");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = MENU_ITEMS.filter((item) => {
    const matchCat =
      activeCategory === "همه" || item.category === activeCategory;
    const matchSearch =
      !search ||
      item.name.includes(search) ||
      item.description.includes(search);
    return matchCat && matchSearch;
  });

  // ─── باگ دوگانه toast: هرگز نباید toast رو داخل setCart صدا بزنیم ───
  // چون React در StrictMode ممکنه updater رو دوبار اجرا کنه.
  // راه‌حل: ابتدا state رو بخون، بعد toast بزن، بعد state رو آپدیت کن.
  const addToCart = (item: MenuItem) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      showToast.more(item.name);
      setCart((prev) =>
        prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c,
        ),
      );
    } else {
      showToast.added(item.name);
      setCart((prev) => [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          selectedAddons: [],
        },
      ]);
    }
  };

  const increaseQty = (id: number) =>
    setCart((p) =>
      p.map((c) => (c.id === id ? { ...c, quantity: c.quantity + 1 } : c)),
    );

  const decreaseQty = (id: number) => {
    const item = cart.find((c) => c.id === id);
    if (!item) return;
    if (item.quantity === 1) {
      showToast.removed(item.name);
      setCart((p) => p.filter((c) => c.id !== id));
    } else {
      setCart((p) =>
        p.map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c)),
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50"
      dir="rtl"
      style={{ fontFamily: "'Dana', sans-serif" }}
    >
      <div className="max-w-md mx-auto relative pb-28">
        {/* Hero تصویر سرصفحه */}
        <div className="relative h-56 overflow-hidden rounded-b-2xl">
          <img
            src={CAFE_INFO.heroImage}
            alt="کافه"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        </div>

        {/* کارت اطلاعات کافه با sticky */}
        <CafeInfoCard info={CAFE_INFO} />

        {/* فیلتر دسته‌بندی */}
        <div className="mt-5">
          <CategoryFilter
            categories={CATEGORIES}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* جستجو */}
        <div className="mx-4 mt-3 relative">
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <Search size={18} />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو در منو..."
            className="w-full bg-white border border-gray-200 rounded-2xl pr-10 pl-4 py-3 text-sm focus:outline-none focus:border-[#2d6a4f] text-right transition-colors"
          />
        </div>

        {/* آیتم‌های منو */}
        <div className="px-4 mt-4">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-400 py-16 text-sm"
              >
                آیتمی یافت نشد
              </motion.div>
            ) : (
              filtered.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onAddToCart={addToCart}
                />
              ))
            )}
          </AnimatePresence>
        </div>

        {/* جداکننده */}
        <div className="mx-4 mt-6 mb-2 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-semibold">درباره ما</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* بخش درباره ما - پایین منو */}
        <AboutSection info={CAFE_INFO} />
      </div>

      {/* دکمه شناور سبد خرید */}
      <FloatingCartButton cart={cart} onClick={() => setCartOpen(true)} />

      {/* سبد خرید */}
      <AnimatePresence>
        {cartOpen && (
          <CartDrawer
            cart={cart}
            onClose={() => setCartOpen(false)}
            onIncrease={increaseQty}
            onDecrease={decreaseQty}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
