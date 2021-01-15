let url = 'https://api.thecatapi.com/v1/images/search';
let randomCatImg = document.querySelector(".randomCatImage")
// console.log(randomCatImg.src);
let randomBtn = document.querySelector(".randomButton");
randomBtn.addEventListener('click', showRandomCat);

function showRandomCat(e) {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            randomCatImg.src = json[0].url;
            // console.log(json[0].url);
        })

        .catch(err => console.log('oops something went wrong', err))
}

