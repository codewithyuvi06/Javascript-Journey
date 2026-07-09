# JavaScript Objects

## What are Objects?

A **JavaScript Object** is a collection of **key-value pairs** used to store related data and functions.

```javascript
const person = {
  name: "John",
  age: 25,
  isStudent: true
};
```

---

## Why Use Objects?

- Store related data together
- Represent real-world entities (Person, Car, Product, etc.)
- Keep code clean and organized

---

## Object Syntax

```javascript
const objectName = {
  key: value,
  key: value
};
```

---

## Accessing Properties

### Dot Notation

```javascript
person.name
```

### Bracket Notation

```javascript
person["name"]
```

---

## Adding & Updating Properties

```javascript
person.city = "London";     // Add
person.age = 26;            // Update
```

---

## Deleting Properties

```javascript
delete person.age;
```

---

## Methods

A function inside an object is called a **method**.

```javascript
const person = {
  greet() {
    console.log("Hello");
  }
};
```

---

## Loop Through an Object

```javascript
for (let key in person) {
  console.log(key, person[key]);
}
```

---

## Useful Object Methods

| Method | Purpose |
|---------|---------|
| `Object.keys()` | Returns all keys |
| `Object.values()` | Returns all values |
| `Object.entries()` | Returns key-value pairs |
| `Object.assign()` | Copies an object |
| `Object.freeze()` | Prevents changes |
| `Object.seal()` | Prevents add/delete properties |

---

## Destructuring

```javascript
const { name, age } = person;
```

---

## Spread Operator

```javascript
const copy = { ...person };
```

---

## `this` Keyword

Refers to the current object.

```javascript
const person = {
  name: "John",
  greet() {
    console.log(this.name);
  }
};
```

---

## Important Points

- Objects store data as **key-value pairs**.
- Keys are unique.
- Values can be any data type.
- Objects are **reference types**.
- Objects can contain arrays, other objects, and functions.

---

## Summary

- Store related information together.
- Access data using **dot (`.`)** or **bracket (`[]`)** notation.
- Add, update, and delete properties easily.
- Use built-in methods like `Object.keys()` and `Object.values()`.
- Objects are one of the most important data structures in JavaScript.