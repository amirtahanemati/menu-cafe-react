import toast from "react-hot-toast";
import { CheckCircle, Trash2, ShoppingCart } from "lucide-react";
import { createElement } from "react";

// رندر آیکون لوسید به عنوان JSX داخل toast
const icon = (
  Component: React.FC<{ size?: number; className?: string }>,
  className: string,
) => createElement(Component, { size: 18, className });

export const showToast = {
  added: (name: string) =>
    toast.success(name + " به سبد اضافه شد", {
      id: `add-${name}`, // ← جلوگیری از duplicate
      icon: icon(ShoppingCart, "text-emerald-300"),
    }),

  more: (name: string) =>
    toast.success(name + " یک عدد اضافه شد", {
      id: `more-${name}`,
      icon: icon(CheckCircle, "text-emerald-300"),
    }),

  removed: (name: string) =>
    toast(name + " از سبد حذف شد", {
      id: `remove-${name}`,
      icon: icon(Trash2, "text-red-400"),
    }),
};
