// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const questionElement1 = document.getElementById("section1");
const questionElement2 = document.getElementById("section2");
const questionElement3 = document.getElementById("section3");
const accordionElement = document.querySelector(".accordion");

questionElement1.addEventListener("click", toggle);
questionElement2.addEventListener("click", toggle);
questionElement3.addEventListener("click", toggle);

//FETCH THE DATA
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((dataPost) => {
    console.log(dataPost);
    const postTitle = document.createElement("div");
    postTitle.setAttribute("class", "section");
    postTitle.innerHTML = `<h2>${dataPost.title}</h2>`;
    postTitle.addEventListener("click", toggle);
    accordionElement.appendChild(postTitle);

    const postBody = document.createElement("div");
    postBody.setAttribute("class", "description");
    postBody.innerHTML = `<p>${dataPost.body}</p>`;

    postTitle.appendChild(postBody);
  });
};

getPosts();
