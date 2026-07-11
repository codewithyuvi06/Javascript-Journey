# Callback Hell (JavaScript)

## What is Callback Hell?

Callback Hell is a situation where multiple asynchronous operations are nested inside one another using callbacks, making the code difficult to read, understand, and maintain.

It is also known as the **"Pyramid of Doom"** because the code keeps shifting to the right.

## Example

```javascript
loginUser(user, function (user) {
    getProfile(user.id, function (profile) {
        getPosts(profile.id, function (posts) {
            getComments(posts[0].id, function (comments) {
                console.log(comments);
            });
        });
    });
});
```

## Problems

- Difficult to read
- Hard to debug
- Difficult to maintain
- Error handling becomes complex
- Deeply nested code

## Solutions

### 1. Promises
Converts callback-based code into a cleaner `.then()` chain.

```javascript
loginUser(user)
    .then(getProfile)
    .then(getPosts)
    .then(getComments)
    .then(console.log)
    .catch(console.error);
```

### 2. Async/Await (Recommended)
Makes asynchronous code look like synchronous code.

```javascript
async function fetchData() {
    try {
        const user = await loginUser();
        const profile = await getProfile(user.id);
        const posts = await getPosts(profile.id);
        const comments = await getComments(posts[0].id);

        console.log(comments);
    } catch (error) {
        console.error(error);
    }
}
```

## Summary

- Callback Hell = Nested callbacks causing unreadable code.
- Also called **Pyramid of Doom**.
- Solved using **Promises** and **Async/Await**.
- Modern JavaScript mainly uses **Async/Await** for cleaner asynchronous programming.