// Shows the form used to create a comment
function showComForm(button) {
    let post_id = button.parentElement.dataset.id;

    var commentForm = document.getElementById(`comForm${post_id}`);
    if (commentForm.style.display === "none") {
        commentForm.style.display = "block";
        button.style.display = "none";
    }
}

// Basically hides the form and makes Comment button reappear
function cancelComment(button) {
    let post = button.parentElement.parentElement;
    let post_id = post.dataset.id;

    var commentForm = document.getElementById(`comForm${post_id}`);
    if (commentForm.style.display === "block") {
        commentForm.style.display = "none";
        document.getElementById(`commentBtn${post_id}`).style.display="block";
    }
}

// Creates the comment
async function postComment(button) {
    event.preventDefault();
    let post_id = button.parentElement.parentElement.dataset.id;
    let text = document.getElementById(`commentText${post_id}`).value;
    let created_date = new Date();

    if (text) {
        const response = await fetch('/api/post/comment', {
            method: 'POST',
            body: JSON.stringify({ text, created_date, post_id }),
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
