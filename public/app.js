"use strict";
//Classes
var Invoice = /** @class */ (function () {
    //   public client: string;
    //   private amount: number;
    //   readonly details: string;
    //   constructor(c: string, a: number, d: string) {
    //     this.client = c;
    //     this.amount = a;
    //     this.details = d;
    //   }
    function Invoice(client, amount, details) {
        var _this = this;
        this.client = client;
        this.amount = amount;
        this.details = details;
        this.format = function () {
            return _this.client + " owes $" + _this.amount + " for " + _this.details;
        };
    }
    return Invoice;
}());
console.log("testing");
var invOne = new Invoice("aissa", 200, "web");
var invTwo = new Invoice("rachid", 300, "mobile");
console.log(invOne, invTwo);
var form2 = document.querySelector(".new-item-form"); // ts dont know the type of element only by className
//console.log(form2.children);
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form2.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
