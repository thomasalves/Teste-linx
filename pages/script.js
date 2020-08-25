const API_URL = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products';
let nextPage;
let currentPage = 1







const feachApi = async(url) => {
    let response = await fetch(url)
    const textResponse = await response.text()
    return JSON.parse(textResponse)
}

const renderPage = async() => {
    const dados = await feachApi(API_URL)
    console.log(dados.nextPage)
    nextPage = dados.nextPage
    let products = dados.products.slice(0,2)
    console.log(products)

    products.map(aps => {
    //console.log(aps.name)

    const { name, image, oldPrice, price, description, installments } = aps;
    console.log(aps)

    row = document.getElementById("card")

    card = document.createElement("div");
    card.className = "col-md-4"

    cardInfo = document.createElement("div");
    cardInfo.className = "card-body"
        // card.className.add("card", "mb-4", "boxshadow") Adiciona classes css


    cardImg = document.createElement("img");
    cardImg.className = "card-img"
    cardImg.src = image

    Name = document.createElement("p");
    Name.className = "name";
    Name.innerHTML = name;

    discription = document.createElement("p");
    discription.className = 'discription';
    discription.innerHTML = description;


    oldP = document.createElement("p");
    oldP.className = "oldPrice";
    oldP.innerHTML = `De: R$${oldPrice.toFixed(2)}`;

    Preco = document.createElement("p");
    Preco.className = "price";
    Preco.innerHTML = `Por: R$${price.toFixed(2)}`;

    parcela = document.createElement("p");
    parcela.className = "parcel";
    parcela.innerHTML = `ou ${installments.count} de R$ ${installments.value.toFixed(2)}`

    button = document.createElement("button")
    button.className = "buying"
    button.innerHTML = "Comprar"

    row.appendChild(card)
    card.appendChild(cardImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(Name)
    cardInfo.appendChild(discription)
    cardInfo.appendChild(oldP)
    cardInfo.appendChild(Preco)
    cardInfo.appendChild(parcela)
    cardInfo.appendChild(button)
    })









}
renderPage()
