var commentBtns = document.getElementsByClassName("commentBtn");

function showComment() {
    var  = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Handle commenting on a post
function comment() {
    // We need the id of the post so that we can pass it to fetch
    let postNum = this.parentElement.id.substring(4, 5);
    let comment = 

    const response = await fetch('/api/post/comment', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }

}

for (var i = 0; i < commentBtns.length; i++) {
    commentBtns[i].addEventListener('click', showComment(), false);
}