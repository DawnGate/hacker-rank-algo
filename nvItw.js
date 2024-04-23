function solution(a, b) {
  const num1 = a.split("").reverse();
  const num2 = b.split("").reverse();

  let carry = 0;
  let result = [];

  let i = 0;
  let j = 0;
  while (i < num1.length || j < num2.length || carry) {
    const digit1 = i < num1.length ? parseInt(num1[i]) : 0;
    const digit2 = j < num2.length ? parseInt(num2[j]) : 0;

    const total = digit1 + digit2 + carry;

    carry = Math.floor(total / 10);
    result.push(total % 10);

    i++;
    j++;
  }

  return result.reverse().join("");
}
console.log(solution("102", "989"));

class Stack {
  // Provide your solution here

  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Undefined";
    }
    return this.items.pop();
  }

  values() {
    return this.items;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
