import type { CafeInfo, MenuItem } from "../types";

export const CAFE_INFO: CafeInfo = {
  name: "کافه قهوه‌دار",
  tagline:
    "کافه‌ای جاییست که عطر دانه‌های تازه‌برشته‌شده، با حال و هوای گرم و صمیمی در هم می‌آمیزد. اینجا می‌توانید طعم واقعی قهوه را تجربه کنید.",
  address: "خرم‌آباد – خیابان مطهری",
  openHours: { from: 16, to: 22 },
  phone: "۰۶۶-۱۲۳۴۵۶۷۸",
  socials: {
    whatsapp: "https://wa.me/989121234567",
    instagram: "https://instagram.com/cafename",
    telegram: "https://t.me/cafename",
  },
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=48.34%2C33.47%2C48.40%2C33.52&layer=mapnik&marker=33.4878%2C48.3558",
  heroImage:
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  hiringBanner: true,
};

export const CATEGORIES = [
  "همه",
  "نوشیدنی سرد",
  "نوشیدنی گرم",
  "شیرینی‌ها",
  "ساندویچ",
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    category: "نوشیدنی سرد",
    name: "کلد برو",
    description: "قهوه سرد دم با عصاره‌گیری طولانی در آب سرد",
    price: 170,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&q=80",
    badge: "پرفروش",
    addons: ["شیر بادام +۲۰", "شیر نارگیل +۲۰", "اسپرسو اضافه +۱۵"],
  },
  {
    id: 2,
    category: "نوشیدنی سرد",
    name: "آیس لته",
    description: "اسپرسو دوبل با شیر سرد و یخ فراوان",
    price: 155,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200&q=80",
    badge: null,
    addons: ["وانیل +۱۰", "کارامل +۱۰", "شیر بادام +۲۰"],
  },
  {
    id: 3,
    category: "نوشیدنی سرد",
    name: "فراپوچینو",
    description: "ترکیب قهوه، شیر، یخ و خامه فرم‌گرفته",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&q=80",
    badge: "جدید",
    addons: ["شکلات +۱۵", "کارامل +۱۰"],
  },
  {
    id: 4,
    category: "نوشیدنی گرم",
    name: "اسپرسو",
    description: "اسپرسو خالص با دانه‌های تازه‌برشته",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200&q=80",
    badge: null,
    addons: ["شات اضافه +۲۰"],
  },
  {
    id: 5,
    category: "نوشیدنی گرم",
    name: "کاپوچینو",
    description: "اسپرسو با فوم شیر کرمی و پودر کاکائو",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?w=200&q=80",
    badge: "پرطرفدار",
    addons: ["دارچین +۵", "شکلات +۱۰", "وانیل +۱۰"],
  },
  {
    id: 6,
    category: "نوشیدنی گرم",
    name: "لته",
    description: "اسپرسو با شیر بخارپز و لایه‌ای از فوم",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=200&q=80",
    badge: null,
    addons: ["وانیل +۱۰", "کارامل +۱۰", "هازلنات +۱۰"],
  },
  {
    id: 7,
    category: "شیرینی‌ها",
    name: "کروسان",
    description: "خمیر کره‌ای ورقه‌ای؛ سبک، لایه لایه و خوش عطر",
    price: 170,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&q=80",
    badge: null,
    addons: ["مربا +۱۵", "کره +۱۰"],
  },
  {
    id: 8,
    category: "شیرینی‌ها",
    name: "چیزکیک",
    description: "چیزکیک نیویورکی با سس توت فرنگی تازه",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=200&q=80",
    badge: "ویژه",
    addons: ["سس بلوبری +۲۰", "سس شکلات +۱۵"],
  },
  {
    id: 9,
    category: "شیرینی‌ها",
    name: "براونی",
    description: "براونی شکلاتی گرم با گردوی تازه",
    price: 185,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&q=80",
    badge: null,
    addons: ["بستنی وانیل +۳۰", "خامه +۱۵"],
  },
  {
    id: 10,
    category: "ساندویچ",
    name: "ساندویچ کلاب",
    description: "نان تست، مرغ کبابی، پنیر، گوجه و سس مخصوص",
    price: 290,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&q=80",
    badge: "پرفروش",
    addons: ["سیب‌زمینی +۵۰", "سالاد +۳۰"],
  },
];
