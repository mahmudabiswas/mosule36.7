const numbers = [2, 34, 56, 78, 34, 53, 34];
const student = {
  name: "deem",
  age: 23,
  drams: [12, 32, 23, 43, 33],
};
const about = `
${student.age}
${numbers.length}
`;
console.log(about);

// arrow function
// spreed operator

const newNumbers = [...numbers, 100, 90, 80];
console.log(newNumbers);
