document.getElementById("homeLink").addEventListener("click", async function () {
  const response = await fetch('/', {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to navigate to Home');
  }
});

document.getElementById("dashboardLink").addEventListener("click", async function () {
  const response = await fetch('/dashboard', {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to navigate to Dashboard');
  }
});

var posts = document.getElementsByClassName("post");

for (var i = 0; i < posts.length; i++) {
  posts[i].addEventListener('click', function() {
    alert("Hello");
  }, false);
}