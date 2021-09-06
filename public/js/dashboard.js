function showForm() {
    var postForm = document.getElementById("newPostForm");
    var showButton = document.getElementById("showPostForm")
    if (postForm.style.display === "none") {
        postForm.style.display = "block";
        showButton.textContent = "Cancel";
    } else {
        postForm.style.display = "none";
        showButton.textContent = "Create Post";
    }
}

async function createPost() {
    event.preventDefault();

    const title = document.querySelector('#postTitle').value;
    const text = document.querySelector('#postText').value;
    const created_date = new Date();

    if (title && text) {
        const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify({ title, text, created_date }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
    else {
        alert("You have not entered all necessary information yet.");
    }
}