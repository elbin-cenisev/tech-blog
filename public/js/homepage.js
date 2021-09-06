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

if (document.getElementById("loginLink")) {
  document.getElementById("loginLink").addEventListener("click", async function () {
    const response = await fetch('/login', {
      method: 'GET',
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to navigate to Login');
    }
  });
}

if (document.getElementById("logoutLink")) {
  document.querySelector('#logoutLink').addEventListener('click', async function () {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  });
}

// Event Listener for clicking on individual posts
var posts = document.getElementsByClassName("post");
for (var i = 0; i < posts.length; i++) {
  posts[i].addEventListener('click', async function () {
    // Get the id of the post (so that we can pass it to fetch)
    let post_id = this.id.substring(4, 5);
    if (!(post_id == 0)) {
      const response = await fetch(`/api/post/${post_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace(`/api/post/${post_id}`);
      } else {
        alert(response.statusText);
      }
    }
  }, false);
}