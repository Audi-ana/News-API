let newsPaper = document.getElementById('newsPaper')

let filteredNews = news.articles.map(function(article){
    let img = ``
    if(article.urlToImage == null){
        img = `<img class=img-Formatting src="news-default.jpeg"/>`
    } else {
        img = `<img class=img-Formatting src="${article.urlToImage}"/>`
    }

    let unknownAuthor = ``
    if(article.author == null){
        unknownAuthor = `<h3>Unknown Author</h3>`
    } else {
        unknownAuthor = `<h3>${article.author}</h3>`
    }

    let noInfo = ``
    if(article.description == null){
        noInfo = `<div class = "adjust-text-description">No further information on this yet!</div>`
    } else {
        noInfo = `<div class = "adjust-text-description">${article.description}</div>`
    }
    
    

    return `<li class = list-style> 
              <h1>${article.title}</h1 >
                ${unknownAuthor}
                <div class= "imgAndDescription"> 
                
                <link href"${article.url}">
                ${img}
                ${noInfo}
                </div>
                <div>${article.publishedAt}</div>
            </li>`
})
newsPaper.innerHTML = filteredNews.join('')

