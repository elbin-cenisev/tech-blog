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

function showDeleteUpdate() {
    var updateForm = document.getElementById("updateForm");
    if (updateForm.style.display === "none") {
        updateForm.style.display = "block";
    } else {
        updateForm.style.display = "none";
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
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
    else {
        alert("You have not entered all necessary information yet.");
    }
}

async function deletePost(item) {
    let post_id = item.parentElement.parentElement.id.substring(4,5);
    const response = await fetch(`/api/post/${post_id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

async function updatePost() {

}