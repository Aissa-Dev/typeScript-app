"use strict";
var anchor = document.querySelector("a"); // ! : means it explicityly exist
//console.log(anchor.href);
var form1 = document.querySelector("form");
//console.log(form1?.children); // because we didnt add !
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
