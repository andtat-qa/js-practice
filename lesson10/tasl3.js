// fetch the post 1
async function fetchPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    return await response.json();
}

// fetch comments for post 1
async function fetchComments() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
    return await response.json();
}

// Main function
async function getPostAndComments() {
    try {
        console.log("Fetching data...");
        const post = await fetchPost();
        const comments = await fetchComments();

        console.log("Post:", post);
        console.log("Comments:", comments);

    } catch (error) {
        // catching errors
        console.error("Something went wrong.", error);
    }
}

// Execution
getPostAndComments();