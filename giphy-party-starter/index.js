// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const generateButton = document.getElementById("generate-button");
const clearButton = document.getElementById("clear-button");
const displayDiv = document.getElementById("display-div");

generateButton.addEventListener("click", generateGif);
clearButton.addEventListener("click", clearGifs);

async function grabGifFromApi(query) {
  const response = await axios.get(//how to 
    `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}&limit=10`
  );
  return response.data.data.map((val) => {
    return {
      gifURL: val.images.fixed_width.url,
    }; //how to know?
  });
}
function getInputData() {
  const inputData = document.getElementById("search-term");
  return inputData.value;
}
async function generateGif(e) {
  e.preventDefault();
  displayDiv.innerHTML = "";
  const inputData = getInputData();

  const gifs = await grabGifFromApi(inputData);

  const firstRow = document.createElement("div");
  const secondRow = document.createElement("div");

  firstRow.classList.add("row", "first-row");
  secondRow.classList.add("row", "second-row");

  for (let i = 0; i < gifs.length / 2; i++) {
    const img = document.createElement("img");
    img.src = gifs[i].gifURL;
    firstRow.appendChild(img);
  }
  for (let i = gifs.length / 2; i < gifs.length; i++) {
    const img = document.createElement("img");
    img.src = gifs[i].gifURL;
    secondRow.appendChild(img);
  }
  displayDiv.appendChild(firstRow);
  displayDiv.appendChild(secondRow);
}

function clearGifs(e) {
  displayDiv.innerHTML = "";
  displayDiv.innerHTML = "...GIF here...";
}
