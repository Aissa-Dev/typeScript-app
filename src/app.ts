//Interfaces

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spent(a: number): number;
}

const me: IsPerson = {
  name: "aissa",
  age: 28,
  speak(text: string): void {
    console.log(text);
  },
  spent(amount: number): number {
    console.log(amount);
    return amount;
  }
};

console.log("Me : ", me);

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("aissa", 200, "web");
const invTwo = new Invoice("rachid", 300, "mobile");
console.log(invOne, invTwo);

const form2 = document.querySelector(".new-item-form") as HTMLFormElement; // ts dont know the type of element only by className
//console.log(form2.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form2.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
