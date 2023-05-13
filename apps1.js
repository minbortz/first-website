// background music
window.addEventListener('click', ()=>{
    document.getElementById("song").play();
});

const song = document.getElementById("song");
song.loop = true;

// gallery
let scrollContainer = document.querySelector(".gallery");
let beforeBtn = document.getElementById("beforeBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

beforeBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

// for anchor href smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// meme generator
const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(" .meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, tittle, author) => {
    memeImage.setAttribute("src", url );
    memeTitle.innerHTML = tittle;
    memeAuthor.innerHTML = author;
}

const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(response => response.json()
    .then (data=> {
        updateDetails(data.url, data.title, data.author)
    })
    );

};


generateMemeBtn.addEventListener("click", generateMeme);