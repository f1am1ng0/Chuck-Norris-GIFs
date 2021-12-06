const key = "api_key=txBwAdmr10wqxdH7SxRIPARnhn0xYUCR";
const categories = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];

(async function(){
    const randomValue = categories[Math.floor(Math.random()*categories.length)];
    //console.log(randomValue);
    const resp = await fetch(`https://api.chucknorris.io/jokes/random?category=${randomValue}`);
    const data = await resp.json();
    const value = data.value;
    const gifUrl = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=r8idajvNXOyqNhI1PdQltALDPBDOHPPC&limit=1&q=chuck norris ${randomValue}`);
    const gifResp = await gifUrl.json();
    //console.log(gifResp);
    const gif = gifResp.data[0].images.original.url;

    const gifHtml = document.getElementById('image');
    gifHtml.src = gif;
    const textGif = document.getElementById('joke');
    textGif.textContent = value;
})()