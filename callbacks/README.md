# JavaScript Callbacks

## 📖 What is a Callback?

A **callback** is a function that is passed as an argument to another function and is executed after a specific task has been completed.

In JavaScript, functions are treated as **first-class citizens**, meaning they can be assigned to variables, passed as arguments, and returned from other functions. This makes callbacks possible.

---

## 📌 Syntax

```javascript
function functionName(parameter, callback) {
    // Perform some task
    callback();
}
```

---

## 💡 Why Do We Use Callbacks?

Callbacks are used to:

- Execute functions in a specific order.
- Improve code reusability.
- Handle asynchronous operations.
- Avoid repeating code.
- Make programs more dynamic and flexible.

---

## ⚙️ How Callbacks Work

1. A function is defined.
2. Another function is passed as an argument.
3. The first function performs its task.
4. Once the task is completed, the callback function is executed.

---

## 🧠 Example

```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Alice", sayBye);
```

### Output

```
Hello, Alice
Goodbye!
```

---

## 🔍 Step-by-Step Execution

1. `greet()` is called.
2. `"Alice"` is stored in the `name` parameter.
3. `sayBye` is passed as the callback function.
4. `"Hello, Alice"` is printed.
5. `callback()` executes `sayBye()`.
6. `"Goodbye!"` is printed.

---

## 📚 Types of Callbacks

### 1. Synchronous Callback

A synchronous callback is executed immediately while the current function is running.

Example:

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function(number) {
    console.log(number);
});
```

---

### 2. Asynchronous Callback

An asynchronous callback is executed after an operation finishes, such as a timer, file reading, or an API request.

Example:

```javascript
setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);
```

---

## ✅ Advantages of Callbacks

- Easy to reuse functions.
- Improves modularity.
- Useful for asynchronous programming.
- Controls the execution order of functions.
- Keeps code flexible.

---

## ❌ Disadvantages of Callbacks

- Nested callbacks can make code difficult to read.
- Can lead to **Callback Hell**.
- Harder to debug when heavily nested.
- Difficult to maintain in large applications.

---

## 🌋 Callback Hell

When callbacks are nested inside multiple callbacks, the code becomes deeply indented and difficult to understand. This situation is known as **Callback Hell** or the **Pyramid of Doom**.

Example:

```javascript
login(function () {
    getUser(function () {
        getPosts(function () {
            getComments(function () {
                console.log("Finished");
            });
        });
    });
});
```

Modern JavaScript solves this problem using **Promises** and **Async/Await**.

---

## 🌍 Real-World Uses of Callbacks

- Event Listeners
- Timers (`setTimeout`, `setInterval`)
- Reading files
- Fetching data from APIs
- Database operations
- Animations
- Array methods (`forEach`, `map`, `filter`, `reduce`)

---

## 🔑 Key Points

- A callback is a function passed as an argument to another function.
- It executes after the main function completes its task.
- JavaScript uses callbacks extensively for asynchronous programming.
- Callbacks can be synchronous or asynchronous.
- Excessive nesting results in Callback Hell.
- Promises and Async/Await are modern alternatives for managing asynchronous code.

---

## 📖 Next Topic

➡️ **forEach() Method**