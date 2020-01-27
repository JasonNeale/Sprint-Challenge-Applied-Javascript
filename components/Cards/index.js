// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleParent = document.querySelector('.cards-container')

function createCard(articleHeadline, authorImg, authorName) {
    const card = document.createElement('div'),
        headline = document.createElement('headline'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        authorsName = document.createElement('span')
    
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorsName)
    imgContainer.appendChild(img)
    
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = articleHeadline
    img.src = authorImg
    authorsName.textContent = authorName

    return card
}

let articlesJavascript = []
let articlesBootstrap = []
let articlesTechnology = []
let articlesJQuery = []
let articlesNode = []

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
    articlesJavascript = res.data.articles.javascript
    articlesBootstrap = res.data.articles.bootstrap
    articlesTechnology = res.data.articles.technology
    articlesJQuery = res.data.articles.jquery
    articlesNode = res.data.articles.node

    articlesJavascript.forEach(el => {
        articleParent.appendChild(createCard(el.headline, el.authorPhoto, el.authorName))
    });

    articlesBootstrap.forEach(el => {
        articleParent.appendChild(createCard(el.headline, el.authorPhoto, el.authorName))
    });

    articlesTechnology.forEach(el => {
        articleParent.appendChild(createCard(el.headline, el.authorPhoto, el.authorName))
    });

    articlesJQuery.forEach(el => {
        articleParent.appendChild(createCard(el.headline, el.authorPhoto, el.authorName))
    });

    articlesNode.forEach(el => {
        articleParent.appendChild(createCard(el.headline, el.authorPhoto, el.authorName))
    });
})