// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const button = document.getElementById("generate-button");
const giphyDisplay = document.getElementById("gify-display");




button.addEventListener("click", () => {
    console.log("button clicked");
    giphyRequest();
});

async function giphyRequest() {
    let newDiv = document.createElement("div");
    let newH3 = document.createElement("h3");
    let newImg = document.createElement("img");
    try {
        const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&limit=10`);
        console.log(response);
        giphyDisplay.innerHTML=" ";
        newH3.innerHTML = response.data.data[0].title;
        newImg.src = response.data.data[0].images.downsized.url;
        newDiv.appendChild(newH3);
        newDiv.appendChild(newImg);
        giphyDisplay.appendChild(newDiv);
    } catch (error) {
    {
        console.error(error);
    }
}

}
