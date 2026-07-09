# JavaScript Inheritance

## What is Inheritance?

**Inheritance** is an OOP concept where one class (**child class**) acquires the properties and methods of another class (**parent class**).

It helps in **code reusability** and reduces duplication.

---

## Syntax

```javascript
class ChildClass extends ParentClass {
    // code
}
```

---

## Example

```javascript
class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();
```

**Output**

```
Eating...
Barking...
```

---

## Using `super()`

The `super()` keyword is used to call the **parent class constructor**.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

const dog = new Dog("Tommy", "Labrador");

console.log(dog.name);
console.log(dog.breed);
```

---

## Why Use Inheritance?

- Reuse existing code
- Reduce code duplication
- Create parent-child relationships
- Make code easier to maintain

---

## Important Points

- Use the **`extends`** keyword for inheritance.
- Use **`super()`** to access the parent constructor.
- A child class inherits the parent's properties and methods.
- The child class can also have its own methods.

---

## Summary

- **Inheritance** allows one class to inherit another class's features.
- Use **`extends`** to inherit a class.
- Use **`super()`** to call the parent constructor.
- Promotes code reusability and cleaner OOP design.