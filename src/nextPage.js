
const Next = async() =>{
    currentPage++
    const dados = await feachApi(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${currentPage}`)
    console.log(dados)

    dados.products.map(aps => {
        //console.log(aps.name)

        const { name, image, oldPrice, price, description, installments } = aps;
        console.log(aps)

        row = document.getElementById("row")

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
        cardInfo.appendChild(oldP)
        cardInfo.appendChild(Preco)
        cardInfo.appendChild(parcela)
        cardInfo.appendChild(button)
        })







}