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