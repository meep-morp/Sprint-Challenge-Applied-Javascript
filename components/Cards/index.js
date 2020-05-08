// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardMaker = (attrs) => {

    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    const byAuthor = document.createElement("span");

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(byAuthor);

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    headline.textContent = attrs.headline;
    image.src = attrs.authorPhoto;
    byAuthor.textContent = attrs.authorName;

    return card;
}

let topicsArr = [];

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(response => {
    topicsArr = Array.from(response.data.topics);
    topicsArr.pop();
    topicsArr.push("node");
})



const getCardInfo = () => {
    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        let articlesData = response.data.articles
        let topicObjects = [];

        topicsArr.forEach((topic) => {
            topicObjects.push(articlesData[topic]);
        })
        // console.log(topicObjects);

        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };    

        topicObjects.forEach((topic) => {
            // console.log(topic);
            for(let i = 0; i < topic.length; i++ ){
                const cardMakerNew = cardMaker(topic[i]);
                document.querySelector(".cards-container").appendChild(cardMakerNew);
            }
        })
    })
    .catch(error => {
        console.log(error);
    })
}

getCardInfo();

// const test =  
// {
//     "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features",
//     "authorPhoto": "./assets/fido.jpg",
//     "authorName": "FIDO WALKSALOT"
// }

// const testMaker = cardMaker(test);
// document.querySelector(".cards-container").appendChild(testMaker);
