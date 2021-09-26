import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { hasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: hasFormatter;
// let docTwo: hasFormatter;

// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 300);

// let docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// const invOne = new Invoice("aissa", "web", 200);
// const invTwo = new Invoice("rachid", "mobile", 300);
// console.log(invOne, invTwo);

const form = document.querySelector(".new-item-form") as HTMLFormElement; // ts dont know the type of element only by className
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: hasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
  //console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
