

const books = JSON.parse(localStorage.getItem("books")) || []

const container = document.querySelector(".book-container")
console.log(container)

function createBookCard(book){

    const newCard = document.createElement("div")
    newCard.classList.add("book-card")

    const newDetails = document.createElement("div")
    newDetails.classList.add("book-details")

    newCard.addEventListener("click", function(){

        newDetails.classList.toggle("open")
    })

    const newTitle = document.createElement("h3")
    newTitle.classList.add("book-title")
    newTitle.textContent = book.title

    const newAuthor = document.createElement("p")
    newAuthor.classList.add("book-author")
    newAuthor.textContent = book.author

    const newReview = document.createElement("p")
    newReview.classList.add("book-review")
    newReview.textContent = book.review

    const newRating = document.createElement("p")
    newRating.classList.add("book-rating")
    newRating.textContent = book.rating

    newDetails.append(newTitle, newAuthor, newReview, newRating)
    newCard.appendChild(newDetails)


    const newImg = document.createElement("img")
    newImg.src = book.cover
    newImg.classList.add("book-cover")
    newCard.appendChild(newImg)
    container.appendChild(newCard)   

}


for(const book of books){

    createBookCard(book)


    

}

const form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = document.getElementById("title-input").value
    const author = document.getElementById("author-input").value
    const review = document.getElementById("review-input").value
    const rating = Number(document.getElementById("rating-input").value)

    
    const newBook = {
    title: title,
    author: author,
    review: review,
    rating: rating,
    cover: "images/bookSpine.png"
}


createBookCard(newBook)
books.push(newBook)
localStorage.setItem("books", JSON.stringify(books))
form.reset()


})







