const anchor = document.querySelector("a")!; // ! : means it explicityly exist
//console.log(anchor.href);

const form1 = document.querySelector("form");
//console.log(form1?.children); // because we didnt add !

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
