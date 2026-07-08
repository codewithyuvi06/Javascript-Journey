# JavaScript `reduce()` Method

## 📖 Overview

The `reduce()` method is an array method in JavaScript used to **reduce an array to a single value** by executing a callback function on each element.

The returned value can be a:
- Number
- String
- Object
- Array
- Boolean
- Any other JavaScript value

Unlike `map()` and `filter()`, `reduce()` returns **one final value**, not a new array (unless you choose to return an array).

---

## 📌 Syntax

```javascript
array.reduce(function(accumulator, currentValue, index, array) {
    return updatedAccumulator;
}, initialValue);
```

### Arrow Function Syntax

```javascript
array.reduce((accumulator, currentValue, index, array) => {
    return updatedAccumulator;
}, initialValue);
```

---

## 📥 Parameters

| Parameter | Description |
|-----------|-------------|
| `accumulator` | Stores the accumulated result after each iteration. |
| `currentValue` | The current element being processed. |
| `index` *(Optional)* | The index of the current element. |
| `array` *(Optional)* | The original array. |
| `initialValue` *(Optional but Recommended)* | Initial value of the accumulator. |

---

## 📤 Return Value

Returns a **single accumulated value** after processing all elements.

---

## ⚡ How `reduce()` Works

Suppose:

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
```

### Iteration Table

| Iteration | accumulator | currentValue | Return Value |
|-----------|------------:|-------------:|-------------:|
| 1 | 0 | 1 | 1 |
| 2 | 1 | 2 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 6 | 4 | 10 |

Final Result:

```javascript
10
```

---

## ⚡ Key Features

- Returns a single value.
- Does not modify the original array.
- Processes elements from left to right.
- Can be used to calculate sums, products, averages, maximums, minimums, object grouping, counting, flattening arrays, and much more.
- One of the most powerful array methods in JavaScript.

---

## 🆚 `reduce()` vs `map()` vs `filter()`

| Method | Returns | Purpose |
|---------|---------|---------|
| `map()` | New array | Transform every element |
| `filter()` | New array | Select matching elements |
| `reduce()` | Single value | Combine elements into one result |

---

## 📌 Common Use Cases

- Sum of numbers
- Product of numbers
- Maximum value
- Minimum value
- Average
- Counting occurrences
- Flattening nested arrays
- Building objects
- Shopping cart total

---

## ⚠️ Important Notes

- It is recommended to always provide an `initialValue`.
- The callback must return the updated accumulator.
- Forgetting to return the accumulator can lead to unexpected results.
- `reduce()` can return any data type.

---

## Example

```javascript
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total); // 100
```

---

## Time Complexity

| Operation | Complexity |
|-----------|------------|
| `reduce()` | **O(n)** |

Where **n** is the number of elements.

---

## Summary

The `reduce()` method combines all elements of an array into a single value by repeatedly updating an accumulator. It is commonly used for calculations, counting, grouping, and many advanced data transformations.