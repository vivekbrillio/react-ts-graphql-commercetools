import { CURRENCY_CODE, FRACTION_DIGITS, LOCALE } from "./constants";

export function formatPrice(price: number) {
  try {
    const formatter = new Intl.NumberFormat(LOCALE, {
      style: "currency",
      currency: CURRENCY_CODE,
    });
    return formatter.format(price / 10 ** FRACTION_DIGITS);
  } catch (err) {
    console.error("[formatPrice]", err);
    return "NaN";
  }
}
