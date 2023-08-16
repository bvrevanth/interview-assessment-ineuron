let name = {
  firstname: "Revanth",
  lastname: "Venkat",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + " , " + state
  );
};

// .call()
printFullName.call(name, "Tenali", "Andhra Pradesh");

let name2 = {
  firstname: "Pavan",
  lastname: "Kalyan",
};

// function Borrowing
printFullName.call(name2, "Hyderabad", "Telangana");

// .apply() - very similar to .call() but here we send arguments in array
printFullName.apply(name2, ["Hyderabad", "Telangana"]);

// .bind()
let printMyName = printFullName.bind(name2, "Hyderabad", "Telangana");
// console.log(printMyName);

printMyName();
