import toUsd from "./toUsd";

export default function totalCalc(price, qty) {
  return toUsd((price * qty).toFixed(0));
}
