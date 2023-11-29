const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    fetch('https://fakestoreapi.com/products?limit=3')
    .then(res => res.json())
    .then(destacado => {
        res.render('index', {cards: destacado})
    })
})
router.get('/productos', (req, res) => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(catalogo => {
        res.render('productos', {cat: catalogo})
    }) 
})
router.get('/form_productos', (req, res) =>{
    res.render('form_productos')
})
router.post('/newProduct', (req, res) =>{
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: req.body.title,
                price: req.body.price,
                description: req.body.descriprion,
                image: req.body.image,
                category: req.body.image,
            }
        )
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
        res.render('productos')
    })
})

module.exports = router