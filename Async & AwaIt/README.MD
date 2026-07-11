# Async & Await (JavaScript)

## What are Async & Await?

**Async** and **Await** are JavaScript keywords that make asynchronous code easier to write and read. They are built on top of **Promises** and make asynchronous code look like synchronous code.

## `async`

- Declares an asynchronous function.
- An `async` function always returns a **Promise**.

```javascript
async function greet() {
    return "Hello!";
}

greet().then(console.log);
```

## `await`

- Used only inside an `async` function.
- Pauses execution until a Promise is resolved or rejected.

```javascript
async function fetchData() {
    const data = await getData();
    console.log(data);
}
```

## Example

```javascript
function walkDog() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You walked the dog.");
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You cleaned the kitchen.");
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You took out the trash.");
        }, 500);
    });
}

async function doChores() {
    console.log(await walkDog());
    console.log(await cleanKitchen());
    console.log(await takeOutTrash());
    console.log("All chores completed!");
}

doChores();
```

## Error Handling

Use `try...catch` to handle rejected Promises.

```javascript
async function fetchData() {
    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

## Advantages

- Cleaner and more readable code
- Avoids Callback Hell
- Easier error handling with `try...catch`
- Simplifies Promise chaining

## Summary

- `async` makes a function return a Promise.
- `await` waits for a Promise to settle.
- `await` can only be used inside an `async` function.
- Use `try...catch` for error handling.
- `async/await` is the preferred way to handle asynchronous code in modern JavaScript.