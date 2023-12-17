let apiUrl = "https://api.thecatapi.com/v1/images/search?limit=2";

let imageData = document.querySelector("#imageData");
let btn = document.querySelector("#btn");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cat) => {
      let img = document.createElement("img");
      img.src = cat.url;
      img.alt = "Cat";
      img.width = "200"; // Setting width to 200px
      img.height = "200"; // Setting height to 200px
      imageData.appendChild(img);
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });
