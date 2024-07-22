const image = document.getElementById('image');
const title = document.getElementById('title');
const company = document.getElementById('company');
const price = document.getElementById('price');
const description = document.getElementById('description');
const loader = document.getElementById('loader');
const continer = document.getElementById('continer');



document.addEventListener('DOMContentLoaded',function () {
    let url = window.location.href;
    let id = url.split('id=')[1];

    if (id) {
        fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then(function (res) {
            if (res.status == 200) {
                return res.json()
            }
        })
        .then(function (data) {
            console.log(data.data);
            if (data.data.id) {
                image.setAttribute("src", data.data.attributes.image);
                title.innerHTML =data.data.attributes.title;
                company.innerHTML =data.data.attributes.company;
                price.innerHTML =data.data.attributes.price;
                description.innerHTML =data.data.attributes.description;

            }
        })
        .catch(function (err) {
            console.log(err);
        })
        .finally(function () {
            continer.style.display = 'flex'
            loader.remove()
        })
    }else{
       window.location.assign("http://127.0.0.1:5500/index.html")
    }
})