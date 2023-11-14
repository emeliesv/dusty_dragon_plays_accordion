function toggle(e) {
  const element = e.currentTarget;
  element.classList.toggle("active");
}

const accordionElement = document.querySelector(".accordion");

//Function to add background-color
const addBackgroundColor = (arr) => {
  arr.forEach((element, index) => {
    if (index % 2 == 0) {
      element.style.backgroundColor = "#E18286";
    } else element.style.backgroundColor = "#FBAAAE";
  });
};

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((dataPost) => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const postTitle = document.createElement("div");
    postTitle.setAttribute("class", "section");

    postTitle.innerHTML = `<i class="fa-solid fa-angle-down"></i><h2>${dataPost.title}</h2>`;
    postTitle.addEventListener("click", toggle);

    accordionElement.appendChild(container);
    container.appendChild(postTitle);

    const postBody = document.createElement("div");
    postBody.setAttribute("class", "description");
    postBody.innerHTML = `<p>${dataPost.body}</p>`;

    container.appendChild(postBody);
  });
  const allElements = document.querySelectorAll(".container");
  addBackgroundColor(allElements);
};

getPosts();
