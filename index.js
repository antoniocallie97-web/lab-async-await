function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts") // 👈 RETURN THIS
    .then(response => response.json())
    .then(data => {
      displayPosts(data);
    })
    .catch(error => console.error(error));
}

// 👇 IMPORTANT
fetchPosts();