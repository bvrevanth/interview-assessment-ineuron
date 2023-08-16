const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const blogList = document.getElementById("blogList");
const addBlogForm = document.getElementById("addBlogForm");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");

function fetchBlogs() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((blogs) => {
      //   console.log(blogs);
      blogs.forEach((blog) => {
        // console.log(blog);
        createBlogElement(blog);
      });
    })
    .catch((error) => {
      console.error("Error fetching blogs:", error);
    });
}

function createBlogElement(blog) {
  const li = document.createElement("li");
  li.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.body}</p>
      <button class="deleteBtn" data-id="${blog.id}">Delete</button>
    `;
  blogList.appendChild(li);
}

function addBlog(event) {
  event.preventDefault();

  const title = titleInput.value;
  const body = bodyInput.value;

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  })
    .then((response) => response.json())
    .then((blog) => {
      createBlogElement(blog);
      titleInput.value = "";
      bodyInput.value = "";
    })
    .catch((error) => {
      console.error("Error adding blog:", error);
    });
}

// Delete blog
function deleteBlog(event) {
  if (event.target.classList.contains("deleteBtn")) {
    const blogId = event.target.dataset.id;

    fetch(`${apiUrl}/${blogId}`, {
      method: "DELETE",
    })
      .then(() => {
        event.target.parentElement.remove();
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  }
}

// Event listeners
addBlogForm.addEventListener("submit", addBlog);
blogList.addEventListener("click", deleteBlog);

// Fetch blogs on page load
fetchBlogs();
