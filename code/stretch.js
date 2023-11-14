function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

const accordionElement = document.querySelector(".accordion");

//Function to add background-color
const addBackgroundColor = (arr) => {
  arr.forEach((element, index) => {
    if (index % 2 == 0) {
      element.style.backgroundColor = "lightblue";
    } else element.style.backgroundColor = "plum";
  });
};

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((dataPost) => {
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
  const allElements = document.querySelectorAll(".section");
  addBackgroundColor(allElements);
};

getPosts();
