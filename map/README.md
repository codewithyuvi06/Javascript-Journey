# JavaScript `map()` Method

## 📖 Overview

The `map()` method is an array method in JavaScript used to create a **new array** by applying a function to every element of an existing array.

Unlike `forEach()`, `map()` returns a new array and does **not** modify the original array (unless you explicitly change it).

---

## 📌 Syntax

```javascript
array.map(function(currentValue, index, array) {
    // return transformed value
});
```

### Arrow Function Syntax

```javascript
array.map((currentValue, index, array) => {
    return transformedValue;
});
```

---

## 📥 Parameters

| Parameter | Description |
|-----------|-------------|
| `currentValue` | The current element being processed. |
| `index` *(Optional)* | The index of the current element. |
| `array` *(Optional)* | The original array on which `map()` is called. |

---

## 📤 Return Value

Returns a **new array** containing the transformed elements.

---

## ⚡ Key Features

- Creates a **new array**.
- Does **not** modify the original array by default.
- Executes the callback function once for each element.
- Returns an array with the **same length** as the original.
- Very useful for transforming data.
- Can be chained with other array methods like `filter()` and `reduce()`.

---

## 🆚 `map()` vs `forEach()`

| `map()` | `forEach()` |
|----------|-------------|
| Returns a new array | Returns `undefined` |
| Used for transforming data | Used for performing actions |
| Can be chained | Cannot be chained meaningfully |
| Same array length | No return value |

---

## 📌 Common Use Cases

- Squaring numbers
- Converting strings to uppercase
- Formatting user data
- Extracting object properties
- Creating UI elements in frameworks like React

---

## ⚠️ Important Notes

- Always **return** a value from the callback.
- If you don't return anything, the new array will contain `undefined`.
- `map()` always creates a new array, even if the values remain unchanged.
- Best used when you want to transform data.

---

## Example

```javascript
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((num) => {
    return num * num;
});

console.log(squares); // [1, 4, 9, 16, 25]
console.log(numbers); // [1, 2, 3, 4, 5]
```

---

## Time Complexity

| Operation | Complexity |
|-----------|------------|
| `map()` | **O(n)** |

Where **n** is the number of elements in the array.

---

## Summary

The `map()` method is one of the most commonly used JavaScript array methods. It is ideal when you need to transform every element of an array into a new value while keeping the original array unchanged.