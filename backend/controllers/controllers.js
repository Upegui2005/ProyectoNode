exports.inicio = async (req, res) =>{

        const hombre = fetch(`https://fakestoreapi.com/products?limit=6`)
        .then(res => res.json())
        .then(men =>{
            res.render(men)
        });

    

    //const mujeres = ()=>{
        //fetch(`https://fakestoreapi.com/products/category/women's%20clothing?limit=3`)
        //.then()
        //.then()
    //}
} 
    
