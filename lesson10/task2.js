// Fetch post 1
function fetchPost() {
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((post) => post);
}

// Fetch comments for post 1
function fetchComments() {
    return fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        .then((response) => response.json())
        .then((comments) => comments);
}

// Execution
fetchPost().then(console.log);
//fetchComments().then(console.log);