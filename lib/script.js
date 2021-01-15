// This part is for category search by clicking the find cats button  
// url = `https://api.thecatapi.com/v1/images/search?category_ids=${categoryID}`;
 
let form = document.querySelector('form');

let categoryID;

let searchButton = document.querySelector('.searchButton')
searchButton.addEventListener('click', function(e){
    e.preventDefault();
    categoryID = form[0].value;
    // console.log(categoryID);
    let url = `https://api.thecatapi.com/v1/images/search?category_ids=${categoryID}`;
    fetch(url, {
        headers: {
            'x-api-key': 'c04eaf48-615c-409a-8712-83e42c7f0535'
        }
    })
        .then(res => res.json())
        .then(json => {
            randomCatImg.src = json[0].url;
            // console.log(json[0].url);
        })

        .catch(err => console.log('oops something went wrong', err))
})

// showing random image by clicking the random cats button
// url = 'https://api.thecatapi.com/v1/images/search'

let randomCatImg = document.querySelector(".randomCatImage")
// console.log(randomCatImg.src);
let randomBtn = document.querySelector(".randomButton");
randomBtn.addEventListener('click', showRandomCat);

function showRandomCat(e) {
    e.preventDefault();
    let url = 'https://api.thecatapi.com/v1/images/search';
    fetch(url, {
        headers: {
            'x-api-key': 'c04eaf48-615c-409a-8712-83e42c7f0535'
        }
    })
        .then(res => res.json())
        .then(json => {
            randomCatImg.src = json[0].url;
            // console.log(json[0].url);
        })

        .catch(err => console.log('oops something went wrong', err))
}

