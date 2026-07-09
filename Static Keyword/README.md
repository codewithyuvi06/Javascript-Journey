# JavaScript Static Keyword

## What is `static`?

The **`static`** keyword is used to create **class properties or methods that belong to the class itself**, not to its objects (instances).

Static members are accessed using the **class name**, not an object.

---

## Syntax

```javascript
class ClassName {
    static methodName() {
        // code
    }
}
```

---

## Static Method Example

```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 3));
```

Output

```
8
```

---

## Static Property Example

```javascript
class Car {
    static wheels = 4;
}

console.log(Car.wheels);
```

Output

```
4
```

---

## Accessing Static Members

```javascript
ClassName.staticMethod();
ClassName.staticProperty;
```

❌ Incorrect

```javascript
const obj = new ClassName();
obj.staticMethod();
```

---

## Why Use `static`?

- Create utility/helper methods
- Store common values shared by all objects
- Avoid creating unnecessary objects

---

## Important Points

- Belongs to the **class**, not the object.
- Access using the **class name**.
- Cannot be accessed directly through an instance.
- Useful for utility methods like `Math.max()`.

---

## Summary

- `static` creates class-level properties and methods.
- Use `ClassName.method()` to access them.
- No need to create an object to use static members.