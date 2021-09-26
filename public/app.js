import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form"); // ts dont know the type of element only by className
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
});
// const addUid = <T>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUid({ name: "aissa", age: 40 });
console.log(docOne);
const resource = {
    uid: 12,
    resourceName: "aissa",
    data: "data"
};
const resource1 = {
    uid: 12,
    resourceName: "aissa",
    data: ["data"]
};
const resource2 = {
    uid: 12,
    resourceName: "aissa",
    data: { name: "mihi" }
};
console.log(resource);
