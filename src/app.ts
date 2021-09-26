import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { hasFormatter } from "./interfaces/HasFormatter.js";

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form") as HTMLFormElement; // ts dont know the type of element only by className
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: hasFormatter;
  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber
  ]!;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "start");
});

// const addUid = <T>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);

//   return { ...obj, uid };
// };

//Enums
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON
}

const addUid = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
};

let docOne = addUid({ name: "aissa", age: 40 });

console.log(docOne);

interface Resource<T> {
  uid: number;
  resourceName: string;
  resourceType: ResourceType;
  data: T;
}

const resource: Resource<string> = {
  uid: 12,
  resourceName: "aissa",
  resourceType: ResourceType.AUTHOR,
  data: "data"
};

const resource1: Resource<string[]> = {
  uid: 12,
  resourceName: "aissa",
  resourceType: ResourceType.BOOK,
  data: ["data"]
};

const resource2: Resource<object> = {
  uid: 12,
  resourceName: "aissa",
  resourceType: ResourceType.DIRECTOR,
  data: { name: "mihi" }
};

console.log(resource);

let arr = ["aissa", 25, true];

let tup: [string, number, boolean] = ["aissa", 28, true];
