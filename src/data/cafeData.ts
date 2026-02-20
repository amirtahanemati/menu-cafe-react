import type { CafeInfo, MenuItem } from "../types";
import heroImage from "../assets/images/heroImage.jpg";
import coldbrew from "../assets/images/coldbrew.jpg";
import IcedLatte from "../assets/images/IcedLatte.jpg";
import Frappuccino from "../assets/images/Frappuccino.jpg";
import Espresso from "../assets/images/Espresso.jpg";
import Cappuccino from "../assets/images/Cappuccino.jpg";
import Latte from "../assets/images/Latte.jpg";
import Croissant from "../assets/images/Croissant.jpg";
import Cheesecake from "../assets/images/Cheesecake.jpg";
import Brownie from "../assets/images/Brownie.jpg";
import ClubSandwich from "../assets/images/ClubSandwich.jpg";

export const CAFE_INFO: CafeInfo = {
  name: "کافه قهوه‌دار",
  tagline:
    "کافه‌ای جاییست که عطر دانه‌های تازه‌برشته‌شده، با حال و هوای گرم و صمیمی در هم می‌آمیزد. اینجا می‌توانید طعم واقعی قهوه را تجربه کنید.",
  address: "خرم‌آباد – خیابان مطهری",
  openHours: { from: 16, to: 22 },
  phone: "۰۶۶-۱۲۳۴۵۶۷۸",
  socials: {
    whatsapp: "https://wa.me/989121234567",
    instagram: "https://instagram.com/amirtahanemati",
    telegram: "https://t.me/amiirtahanemati",
  },
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=48.34%2C33.47%2C48.40%2C33.52&layer=mapnik&marker=33.4878%2C48.3558",
  heroImage: heroImage,
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
    image: coldbrew,
    badge: "پرفروش",
    addons: ["شیر بادام +۲۰", "شیر نارگیل +۲۰", "اسپرسو اضافه +۱۵"],
  },
  {
    id: 2,
    category: "نوشیدنی سرد",
    name: "آیس لته",
    description: "اسپرسو دوبل با شیر سرد و یخ فراوان",
    price: 155,
    image: IcedLatte,
    badge: null,
    addons: ["وانیل +۱۰", "کارامل +۱۰", "شیر بادام +۲۰"],
  },
  {
    id: 3,
    category: "نوشیدنی سرد",
    name: "فراپوچینو",
    description: "ترکیب قهوه، شیر، یخ و خامه فرم‌گرفته",
    price: 190,
    image: Frappuccino,
    badge: "جدید",
    addons: ["شکلات +۱۵", "کارامل +۱۰"],
  },
  {
    id: 4,
    category: "نوشیدنی گرم",
    name: "اسپرسو",
    description: "اسپرسو خالص با دانه‌های تازه‌برشته",
    price: 80,
    image: Espresso,
    badge: null,
    addons: ["شات اضافه +۲۰"],
  },
  {
    id: 5,
    category: "نوشیدنی گرم",
    name: "کاپوچینو",
    description: "اسپرسو با فوم شیر کرمی و پودر کاکائو",
    price: 130,
    image: Cappuccino,
    badge: "پرطرفدار",
    addons: ["دارچین +۵", "شکلات +۱۰", "وانیل +۱۰"],
  },
  {
    id: 6,
    category: "نوشیدنی گرم",
    name: "لته",
    description: "اسپرسو با شیر بخارپز و لایه‌ای از فوم",
    price: 125,
    image: Latte,
    badge: null,
    addons: ["وانیل +۱۰", "کارامل +۱۰", "هازلنات +۱۰"],
  },
  {
    id: 7,
    category: "شیرینی‌ها",
    name: "کروسان",
    description: "خمیر کره‌ای ورقه‌ای؛ سبک، لایه لایه و خوش عطر",
    price: 170,
    image: Croissant,
    badge: null,
    addons: ["مربا +۱۵", "کره +۱۰"],
  },
  {
    id: 8,
    category: "شیرینی‌ها",
    name: "چیزکیک",
    description: "چیزکیک نیویورکی با سس توت فرنگی تازه",
    price: 210,
    image: Cheesecake,
    badge: "ویژه",
    addons: ["سس بلوبری +۲۰", "سس شکلات +۱۵"],
  },
  {
    id: 9,
    category: "شیرینی‌ها",
    name: "براونی",
    description: "براونی شکلاتی گرم با گردوی تازه",
    price: 185,
    image: Brownie,
    badge: null,
    addons: ["بستنی وانیل +۳۰", "خامه +۱۵"],
  },
  {
    id: 10,
    category: "ساندویچ",
    name: "ساندویچ کلاب",
    description: "نان تست، مرغ کبابی، پنیر، گوجه و سس مخصوص",
    price: 290,
    image: ClubSandwich,
    badge: "پرفروش",
    addons: ["سیب‌زمینی +۵۰", "سالاد +۳۰"],
  },
];
