//Classes
class Invoice {
  //   public client: string;
  //   private amount: number;
  //   readonly details: string;

  //   constructor(c: string, a: number, d: string) {
  //     this.client = c;
  //     this.amount = a;
  //     this.details = d;
  //   }

  constructor(
    public client: string,
    private amount: number,
    readonly details: string
  ) {}

  format = () => {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  };
}
console.log("testing");

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
