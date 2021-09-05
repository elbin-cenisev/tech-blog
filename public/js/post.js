document.querySelector('#postComment').addEventListener("click", async function () {
    event.preventDefault();

    const text = document.querySelector('#commentText').value;
    const created_date = new Date();
    const post_id = this.parentElement.id.substring(7,8);

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
});