//Event Bubbling
// If we did not pass any 3rd argument , the default would be false

document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
  },
  false
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  false
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  false
);

//Event capturing

document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
  },
  true
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  true
);
