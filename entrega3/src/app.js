import express from 'express';
import {ProductManager} from './productsManager.js';

const products = new ProductManager("./products.json");

const  app = express();

app.use(express.urlencoded({ extended : true }));

app.get("/products", async (req , res) => {
    try{
        let limit = req.query.limit;

        const catalog = await products.getProduct(limit);
        res.json(catalog);
    
    }catch (error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }});

    app.get("/products/:pid" , async (req, res ) =>{
        try{
            //ya que req.params es un string junto a pid lo pase a entero.
            let pid = parseInt(req.params.pid);
    
            //Si no encuentra el ID devolvera el mensaje del metodo/function o NaN si es String.
            const catalog = await products.getProductById(pid);
            res.json(catalog);
        }catch(error){
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
})

const PORT = 8080;
app.listen(PORT , () =>{
    console.log(`Listening on port http://localhost:${PORT}/products`);
});

