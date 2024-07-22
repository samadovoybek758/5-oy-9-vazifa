import { createCard } from "./function.js"
let continer = document.getElementById('continer');
const loader = document.getElementById("loader")



document.addEventListener('DOMContentLoaded', function () {
    fetch("https://strapi-store-server.onrender.com/api/products/")

    .then(function (res) {
        if (res.status == 200) {
            return res.json()
        }
    })
    .then(function (data) {
        if (data.data.length) {
            data.data.forEach(product => {
                let card = createCard(product)
                continer.innerHTML += card 
            });
        }
        let cards = document.querySelectorAll(".card");
        cards && cards.forEach(function (card) {
            card.addEventListener('click', function () {
                let id = this.getAttribute('data-id')
                window.location.assign(`http://127.0.0.1:5500/pages/details.html?id=${id}`)
            })
        })
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
        loader.remove()
    })
})


const moon = document.getElementById('moon');
const body = document.getElementById("body")

moon && moon.addEventListener('click', function (el) {
    el.preventDefault()

    body.style.backgroundColor ="red"
})