export default function toUsd(item) {
  const usdFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return usdFormat.format(item);
}
