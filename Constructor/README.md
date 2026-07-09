# JavaScript Constructor

## What is a Constructor?

A **Constructor** is a special function used to create multiple objects with the same structure.

Instead of creating objects one by one, a constructor allows you to generate them easily.

---

## Syntax

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
```

---

## Creating Objects

Use the `new` keyword to create objects.

```javascript
const person1 = new Person("John", 25);
const person2 = new Person("Alex", 30);
```

---

## How `new` Works

When `new` is used:

- Creates a new empty object.
- Sets `this` to the new object.
- Adds the properties and methods.
- Returns the new object.

---

## Constructor with Methods

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        console.log("Hello!");
    };
}
```

---

## Accessing Properties

```javascript
console.log(person1.name);
console.log(person1.age);
person1.greet();
```

---

## Why Use Constructors?

- Create multiple similar objects
- Reduce code repetition
- Keep code organized
- Easy to manage large applications

---

## Important Points

- Constructor names usually start with a **capital letter**.
- Always use the **`new`** keyword.
- `this` refers to the newly created object.
- Constructors are mainly used for creating object templates.

---

## Summary

- A constructor is a function used to create objects.
- `new` creates a new object from the constructor.
- `this` initializes the object's properties.
- Useful when creating many objects with the same structure.
```