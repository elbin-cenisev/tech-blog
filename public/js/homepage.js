function showComForm(button) {
    let post = button.parentElement;
    let post_id = post.dataset.id;

    var commentForm = document.getElementById(`comForm${post_id}`);
    if (commentForm.style.display === "none") {
        commentForm.style.display = "block";
        button.style.display = "none";
    }
}

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

// async function focusPost(item) {
//   // Get the id of the post (so that we can pass it to fetch)
//   let post_id = item.id.substring(4, 5);
//   if (!(post_id == 0)) {
//     const response = await fetch(`/api/post/${post_id}`, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace(`/api/post/${post_id}`);
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

