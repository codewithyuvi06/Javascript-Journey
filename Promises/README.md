# Promises (JavaScript)

## What is a Promise?

A **Promise** is an object that represents the eventual completion or failure of an asynchronous operation.

It helps avoid Callback Hell and makes asynchronous code easier to read and manage.

## Promise States

- **Pending** → Initial state, operation is in progress.
- **Fulfilled** → Operation completed successfully.
- **Rejected** → Operation failed.

## Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed!");
    } else {
        reject("Task failed!");
    }
});
```

## Consuming a Promise

```javascript
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operation finished.");
    });
```

## Promise Chaining

```javascript
loginUser()
    .then(getProfile)
    .then(getPosts)
    .then((posts) => console.log(posts))
    .catch((error) => console.error(error));
```

## Common Promise Methods

- **`.then()`** → Runs when the promise is fulfilled.
- **`.catch()`** → Handles errors if the promise is rejected.
- **`.finally()`** → Runs regardless of success or failure.

## Advantages

- Avoids Callback Hell
- Cleaner and more readable code
- Better error handling
- Supports chaining of asynchronous tasks

## Summary

- Promise = Object for handling asynchronous operations.
- States: **Pending → Fulfilled / Rejected**
- Main methods: **`.then()`**, **`.catch()`**, **`.finally()`**
- Promises are commonly used with **Async/Await** in modern JavaScript.