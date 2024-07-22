function createCard(data) {
    return `
     <div id="card" class="card" data-id = ${data.id}>
            <img src="${data.attributes.image}" alt="">
            <h3 id="title">${data.attributes.title}</h3>
            <p id="price">${data.attributes.price}</p>
        </div>
    `
}

export{createCard}