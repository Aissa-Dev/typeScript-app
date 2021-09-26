//Interfaces
const me = {
    name: "aissa",
    age: 28,
    speak(text) {
        console.log(text);
    },
    spent(amount) {
        console.log(amount);
        return amount;
    }
};
console.log("Me : ", me);
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("aissa", 200, "web");
const invTwo = new Invoice("rachid", 300, "mobile");
console.log(invOne, invTwo);
const form2 = document.querySelector(".new-item-form"); // ts dont know the type of element only by className
//console.log(form2.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form2.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
