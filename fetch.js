const student = {
  name: "deem",
  age: 23,
  drams: [12, 32, 23, 43, 33],
};

const stringFy = JSON.stringify(student);
// console.log(stringFy);

const studentObject = JSON.parse(stringFy);
// console.log(studentObject);

const product = [
  {
    name: "laptop",
    prize: 32000,
    brand: "lenovo",
    color: "sliver",
  },
  {
    name: "phone",
    prize: 3200,
    brand: "iphone",
    color: "golden",
  },
  {
    name: "watch",
    prize: 3000,
    brand: "casio",
    color: "goldenrod",
  },
  {
    name: "camera",
    prize: 9000,
    brand: "canon",
    color: "black",
  },
  {
    name: "sunglass",
    prize: 200,
    brand: "ribon",
    color: "white",
  },
];

const newProduct = {
  name: "webCame",
  prize: 29999,
  brand: "kdfjl",
  color: "blue",
};
const addProduct = [...product, newProduct];
console.log(addProduct);
