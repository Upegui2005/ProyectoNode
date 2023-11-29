function carrito(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(json => agregar(json))

    function agregar(aid) {
        const mostrar = document.querySelector('#producto')
        
        mostrar.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${aid.image}" class="img-fluid rounded-start" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${aid.title}</h5>
                            <h6 class=card-text>$${aid.price}</h6>
                            <p class="card-text"><small class="text-body-secondary">${aid.category}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}