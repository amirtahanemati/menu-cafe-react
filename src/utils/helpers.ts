/**
 * تبدیل اعداد انگلیسی به فارسی
 */
export function toPersianNum(input: number | string): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/\d/g, (d) => persianDigits[parseInt(d)]);
}

/**
 * فرمت قیمت با اعداد فارسی
 */
export function formatPrice(price: number): string {
  return toPersianNum(price.toLocaleString("en-US")) + " هزار تومان";
}

/**
 * بررسی وضعیت باز/بسته بودن کافه بر اساس بازه ساعتی
 */
export function checkIsOpen(from: number, to: number): boolean {
  const now = new Date();
  const hour = now.getHours();
  if (from <= to) {
    return hour >= from && hour < to;
  }
  // اگر از شب گذر کرد (مثلاً ۲۲ تا ۴ صبح)
  return hour >= from || hour < to;
}

/**
 * فرمت ساعت با اعداد فارسی
 */
export function formatHour(h: number): string {
  return toPersianNum(h.toString().padStart(2, "0")) + ":۰۰";
}
