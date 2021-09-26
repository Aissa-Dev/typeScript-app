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
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber
    ];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "start");
});
// const addUid = <T>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
//Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUid({ name: "aissa", age: 40 });
console.log(docOne);
const resource = {
    uid: 12,
    resourceName: "aissa",
    resourceType: ResourceType.AUTHOR,
    data: "data"
};
const resource1 = {
    uid: 12,
    resourceName: "aissa",
    resourceType: ResourceType.BOOK,
    data: ["data"]
};
const resource2 = {
    uid: 12,
    resourceName: "aissa",
    resourceType: ResourceType.DIRECTOR,
    data: { name: "mihi" }
};
console.log(resource);
let arr = ["aissa", 25, true];
let tup = ["aissa", 28, true];
