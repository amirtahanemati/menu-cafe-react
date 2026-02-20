export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  selectedAddons: string[];
}

export interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge: string | null;
  addons: string[];
}

export interface CafeInfo {
  name: string;
  tagline: string;
  address: string;
  openHours: { from: number; to: number };
  phone: string;
  socials: {
    whatsapp?: string;
    instagram?: string;
    telegram?: string;
  };
  mapEmbed: string;
  heroImage: string;
  hiringBanner: boolean;
}
