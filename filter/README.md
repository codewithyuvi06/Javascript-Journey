# JavaScript `filter()` Method

## 📖 Overview

The `filter()` method is an array method in JavaScript used to create a **new array** containing only the elements that satisfy a given condition.

Unlike `map()`, which transforms every element, `filter()` selects only the elements that pass a test.

The original array remains unchanged.

---

## 📌 Syntax

```javascript
array.filter(function(currentValue, index, array) {
    // return true or false
});
```

### Arrow Function Syntax

```javascript
array.filter((currentValue, index, array) => {
    return condition;
});
```

---

## 📥 Parameters

| Parameter | Description |
|-----------|-------------|
| `currentValue` | The current element being processed. |
| `index` *(Optional)* | The index of the current element. |
| `array` *(Optional)* | The original array on which `filter()` is called. |

---

## 📤 Return Value

Returns a **new array** containing only the elements for which the callback function returns `true`.

If no element satisfies the condition, an **empty array (`[]`)** is returned.

---

## ⚡ How `filter()` Works

For every element in the array:

- If the callback returns **`true`**, the element is included in the new array.
- If the callback returns **`false`**, the element is skipped.

---

## ⚡ Key Features

- Creates a **new array**.
- Does **not** modify the original array.
- Executes the callback once for every element.
- The returned array may be **smaller**, **equal to**, or **empty** compared to the original array.
- Used to remove unwanted elements based on a condition.

---

## 🆚 `filter()` vs `map()`

| `filter()` | `map()` |
|------------|---------|
| Selects elements | Transforms elements |
| Returns only matching elements | Returns all elements |
| Array length may change | Array length remains the same |
| Callback returns `true` or `false` | Callback returns a transformed value |

---

## 📌 Common Use Cases

- Find even or odd numbers
- Remove negative numbers
- Filter adults by age
- Search products by price
- Keep only active users
- Remove empty strings or null values

---

## ⚠️ Important Notes

- The callback function should return a **boolean** (`true` or `false`).
- `filter()` never changes the original array.
- If every callback returns `true`, the new array is the same as the original.
- If every callback returns `false`, the result is an empty array (`[]`).

---

## Example

```javascript
const numbers = [10, 15, 20, 25, 30];

const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNumbers); // [10, 20, 30]
console.log(numbers);     // [10, 15, 20, 25, 30]
```

---

## Time Complexity

| Operation | Complexity |
|-----------|------------|
| `filter()` | **O(n)** |

Where **n** is the number of elements in the array.

---

## Summary

The `filter()` method is used to create a new array containing only the elements that satisfy a specific condition. It is one of the most commonly used array methods in JavaScript for searching, selecting, and removing data while keeping the original array unchanged.