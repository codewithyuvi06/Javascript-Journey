# JavaScript Classes

## What are Classes?

A **Class** is a blueprint for creating objects. It defines the properties and methods that objects created from it will have.

Introduced in **ES6 (ECMAScript 2015)**.

---

## Syntax

```javascript
class ClassName {
    constructor() {
        // Initialize properties
    }

    methodName() {
        // Method
    }
}
```

---

## Creating a Class

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
```

---

## Creating Objects

```javascript
const person1 = new Person("John", 25);
const person2 = new Person("Alex", 30);
```

---

## Accessing Properties & Methods

```javascript
console.log(person1.name);
console.log(person1.age);

person1.greet();
```

---

## Constructor

The `constructor()` is a special method that runs automatically when an object is created.

```javascript
constructor(name, age) {
    this.name = name;
    this.age = age;
}
```

---

## `this` Keyword

`this` refers to the current object.

```javascript
this.name = name;
```

---

## Why Use Classes?

- Create multiple objects easily
- Organize code
- Reuse code
- Supports Object-Oriented Programming (OOP)

---

## Important Points

- Introduced in **ES6**.
- Use the `class` keyword to create a class.
- Use the `new` keyword to create objects.
- A class can have **only one constructor**.
- Methods are shared among all objects.

---

## Summary

- A **class** is a blueprint for creating objects.
- The **constructor** initializes object properties.
- Create objects using the **`new`** keyword.
- Classes make code cleaner, reusable, and easier to maintain.