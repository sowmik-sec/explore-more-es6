const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 55000 },
  { id: 3, name: "hp", price: 70000 },
  { id: 4, name: "mac", price: 165000 },
];

// has some properties, method
class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product();
// console.log(lenovo);

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir is teaching js");
  }
}

const teacher = new Teacher("Nur Muhammad", "Math");
console.log(teacher);
