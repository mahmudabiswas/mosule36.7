// let strings = "";

// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     strings = strings + e.target.innerHTML;
//     document.querySelector(".result").value = strings;

//     console.log(e.target);
//   });
// });

let input = document.getElementById("result");
let buttons = document.querySelectorAll(".button");
let strings = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    strings += e.target.innerHTML;
    input.value = strings;
    console.log(input.value);
  });
});
