import { formactCurrency } from "../scripts/utils/money.js";
console.log("test suite: formactCurrency");

console.log("convert cents into dollars");
if (formactCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("works with 0");
if (formactCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("rounds up to the nearest");
if (formactCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("rounds down to the nearest");
if (formactCurrency(2000.4) === "20.00") {
  console.log("passed");
} else {
  console.log("failed");
}
