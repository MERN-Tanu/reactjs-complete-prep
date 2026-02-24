// Event Bubbling and Event Capturing(if we pass flag value then it means we will capturing)

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("parent");
  },
  true,
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  true,
);

/* 
o/p: 
parent
child
parent
*/

// Event Delegation
document.getElementById("parent").addEventListener("click", (e) => {
  console.log(e.target.id);
});

document.getElementById("1").addEventListener("click", () => {
  console.log("child1");
  console.log(e.target.id);
});

document.getElementById("2").addEventListener("click", () => {
  console.log("child2");
  console.log(e.target.id);
});

document.getElementById("3").addEventListener("click", () => {
  console.log("child3");
  console.log(e.target.id);
});
