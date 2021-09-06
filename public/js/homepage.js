async function focusPost(item) {
  // Get the id of the post (so that we can pass it to fetch)
  let post_id = item.id.substring(4, 5);
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
}