# JavaScript Arrow Functions (`=>`)

## 📖 Overview

An **Arrow Function** is a shorter and more concise way to write functions in JavaScript. It was introduced in **ES6 (ECMAScript 2015)**.

Arrow functions make code cleaner and are widely used in modern JavaScript, especially with array methods like `forEach()`, `map()`, `filter()`, and `reduce()`, as well as in frameworks like React.

---

## 📌 Syntax

### Traditional Function

```javascript
function greet(name) {
    return "Hello " + name;
}
```

### Arrow Function

```javascript
const greet = (name) => {
    return "Hello " + name;
};
```

---

## 📌 General Syntax

```javascript
const functionName = (parameters) => {
    // code
    return value;
};
```

---

## 📌 Arrow Function Variations

### 1. No Parameters

```javascript
const greet = () => {
    console.log("Hello World!");
};
```

---

### 2. One Parameter

Parentheses are optional.

```javascript
const square = number => {
    return number * number;
};
```

or

```javascript
const square = (number) => {
    return number * number;
};
```

---

### 3. Multiple Parameters

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

### 4. Single Expression (Implicit Return)

If the function contains only one expression, `return` and `{}` can be omitted.

```javascript
const square = number => number * number;
```

Equivalent to

```javascript
const square = function(number) {
    return number * number;
};
```

---

### 5. Returning an Object

Wrap the object in parentheses.

```javascript
const createUser = (name, age) => ({
    name: name,
    age: age
});
```

---

## 📥 Parameters

Arrow functions can accept:

- No parameters
- One parameter
- Multiple parameters
- Default parameters
- Rest parameters (`...args`)

Example:

```javascript
const multiply = (a = 1, b = 1) => a * b;
```

---

## ⚡ Key Features

- Shorter syntax than traditional functions.
- Ideal for callback functions.
- Supports implicit return.
- Can be assigned to variables.
- Frequently used with array methods.
- Introduced in ES6.

---

## 📌 Common Use Cases

### With `forEach()`

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(fruit => console.log(fruit));
```

---

### With `map()`

```javascript
const numbers = [1, 2, 3, 4];

const squares = numbers.map(number => number * number);

console.log(squares);
```

---

### With `filter()`

```javascript
const numbers = [1,2,3,4,5,6];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

---

### With `reduce()`

```javascript
const numbers = [10,20,30];

const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);

console.log(total);
```

---

## 🆚 Traditional Function vs Arrow Function

| Traditional Function | Arrow Function |
|----------------------|----------------|
| Uses `function` keyword | Uses `=>` |
| More verbose | Shorter syntax |
| Has its own `this` | Inherits `this` from surrounding scope |
| Suitable for object methods and constructors | Best for callbacks and short functions |

---

## ⚠️ Important Notes

- Arrow functions do **not** have their own `this`; they inherit it from the surrounding scope (lexical `this`).
- Arrow functions cannot be used as constructors with `new`.
- Arrow functions do not have their own `arguments` object.
- For a single expression, `return` is implicit.
- For multiple statements, use `{}` and `return`.

---

## Example

```javascript
const numbers = [1,2,3,4,5];

const cubes = numbers.map(number => number ** 3);

console.log(cubes);
```

Output

```javascript
[1, 8, 27, 64, 125]
```

---

## Time Complexity

Arrow functions themselves do **not** have a time complexity.

The time complexity depends on the operation being performed.

Examples:

| Operation | Complexity |
|-----------|------------|
| `forEach()` | O(n) |
| `map()`     | O(n) |
| `filter()`  | O(n) |
| `reduce()`  | O(n) |

---

## Summary

Arrow functions provide a concise and modern way to write JavaScript functions. They are especially useful for callback functions and array methods, making code more readable and easier to maintain. While they simplify syntax, remember that they inherit `this` from their surrounding scope and should not be used as constructors.