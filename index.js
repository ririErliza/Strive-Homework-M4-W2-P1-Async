
/* Load images function for primary button */

const loadImages1 = () => {
    const url = "https://api.pexels.com/v1/search?query=nature"

fetch (url, {
    method: "GET",
    headers : {Authorization: "563492ad6f917000010000012c4dc691433747c8a358694a0244321e" } } )
.then(response => response.json() )
.then(database => {
  console.log(database)
    const images =database.photos
    let cardsWrapper = document.querySelector ("#cardsWrapper")

 
    cardsWrapper.innerHTML =""
    images.forEach(element => {
        const content=
        `<div class="col-md-4 hideThis">
        <div class="card mb-4 shadow-sm">
                <img src=${element.src.medium} class="card-image img-fluid" />
                <div class="card-body">
                  <p class="card-text">
                    This is an image.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary " onclick="hideFunction()">
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${element.id}</small>
                  </div>
                </div>
              </div>
            </div>`

            cardsWrapper.innerHTML += content
    })
})
.catch(error => {
    console.log(error)
})
}

/* Load images function for secondary button */
const loadImages2 = () => {
    const url = "https://api.pexels.com/v1/search?query=smile"

fetch (url, {
    method: "GET",
    headers : {Authorization: "563492ad6f917000010000012c4dc691433747c8a358694a0244321e" } } )
.then(response => response.json() )
.then(database => {
  console.log(database)
    const images =database.photos
    let cardsWrapper = document.querySelector ("#cardsWrapper")

 
    cardsWrapper.innerHTML =""
    images.forEach(element => {
        const content=
        `<div class="col-md-4 hideThis">
        <div class="card mb-4 shadow-sm">
                <img src=${element.src.medium} class="card-image img-fluid" />
                <div class="card-body">
                  <p class="card-text">
                    This is an image.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary " onclick="hideFunction()">
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${element.id}</small>
                  </div>
                </div>
              </div>
            </div>`

            cardsWrapper.innerHTML += content
    })
})
.catch(error => {
    console.log(error)
})
}

/* hide function */

function hideFunction() {
    let x = document.querySelector(".hideThis");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


/* Load images function for search button*/

const searchImages = (query) => {

    let textValue = document.getElementById("text-input").value
    console.log(textValue)
    if(textValue === ""){
      
    } else {
      query = textValue
    }

    const url = "https://api.pexels.com/v1/search?query="

    fetch (url+ query, {
    method: "GET",
    headers : {Authorization: "563492ad6f917000010000012c4dc691433747c8a358694a0244321e" } } )
    .then(response => response.json() )
    .then(database => {
        console.log(database)
        const images =database.photos
        let cardsWrapper = document.querySelector ("#cardsWrapper")

 
        cardsWrapper.innerHTML =""
        images.forEach(element => {
            const content=
            `<div class="col-md-4 hideThis">
            <div class="card mb-4 shadow-sm">
                <img src=${element.src.medium} class="card-image img-fluid" />
                <div class="card-body">
                  <p class="card-text">
                    This is an image.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary " onclick="hideFunction()">
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${element.id}</small>
                  </div>
                </div>
              </div>
            </div>`

            cardsWrapper.innerHTML += content
        })
    })
    .catch(error => {
        console.log(error)
})
}
