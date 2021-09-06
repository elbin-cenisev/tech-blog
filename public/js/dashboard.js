function showForm(button) {
    let newPostForm = document.getElementById("newPostForm");
    if (newPostForm.style.display === "none") {
        newPostForm.style.display = "block";
        button.style.display = "none";
    }
}

function cancelNewPost(button) {
    let newPostForm = document.getElementById("newPostForm");
    let newPostButton = document.getElementById("showPostForm");

    if (newPostForm.style.display === "block") {
        newPostForm.style.display = "none";
        newPostButton.style.display = "block";
    }
}

async function postNewPost(button) {
    event.preventDefault();

    const title = document.querySelector('#newPostTitle').value;
    const text = document.querySelector('#newPostText').value;
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

async function deletePost(button) {
    let post_id = button.parentElement.dataset.id;
    const response = await fetch(`/api/post/${post_id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

function showEditForm(button) {
    let post_id = button.parentElement.dataset.id;
    let editPostForm = document.getElementById("editPostForm");
    let editDeleteForm = document.getElementById(`editDeleteForm${post_id}`);
    let postForm = document.getElementById(`post${post_id}`)

    if (editPostForm.style.display === "none") {
        editPostForm.style.display = "block";
        editDeleteForm.style.display = "none";
        postForm.style.display = "none";
    }
}

function cancelEdit(button) {
    let post_id = button.parentElement.parentElement.dataset.id;
    let editPostForm = document.getElementById("editPostForm");
    let editDeleteForm = document.getElementById(`editDeleteForm${post_id}`);
    let postForm = document.getElementById(`post${post_id}`)

    if (editPostForm.style.display === "block") {
        editPostForm.style.display = "none";
        editDeleteForm.style.display = "block";
        postForm.style.display = "block";
    }
}

async function postEdittedPost(button) {
    let post_id = button.parentElement.parentElement.dataset.id;
    const title = document.querySelector('#editPostTitle').value;
    const text = document.querySelector('#editPostText').value;
    const created_date = new Date();

    const response = await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, text, created_date }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

// async function createPost() {
//     event.preventDefault();

//     const title = document.querySelector('#postTitle').value;
//     const text = document.querySelector('#postText').value;
//     const created_date = new Date();

//     if (title && text) {
//         const response = await fetch('/api/post/', {
//             method: 'POST',
//             body: JSON.stringify({ title, text, created_date }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert(response.statusText);
//         }
//     }
//     else {
//         alert("You have not entered all necessary information yet.");
//     }
// }