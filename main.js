// //Entrega Entrega-ECMAScript-y-ECMAScript-avanzado Juan Pesce

class ProductManager{
    
    constructor(products){

        this.products = [];

    }

    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock){
        
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Error! Todos los campos son obligatorios.");
            return
        }

        if(this.products.some(product => product.code == code)){
            console.log(`Error! El codigo ${code} ya existe `);
            return
        }

        ProductManager.id ++    // Esto haria que el incremental sea automatico

        this.products.push({title, description, price, thumbnail, code, stock, id:ProductManager.id});
    }

    getProduct(){
        return this.products;
    }
    
    getProductById(id) {
		if(this.products.some(prod => prod.id === id)) {
			return this.products.find(prod => prod.id === id);
		} else {
			console.log('Not found');
		}
    }



}


const Products = new ProductManager();

// LLamamos al arreglo vacio
console.log(Products.getProduct());

// Agregamos tres productos
Products.addProduct("Yerba", "Yerba Clasica", 2000, "yerba1.jpg", "ABC123", 50); // Producto agregado al Array
Products.addProduct("Yerba", "Yerba Organica", 2500, "yerba2.jpg", "DEF123", 150); // Producto agregado al Array
Products.addProduct("Yerba", "Yerba Despalada", 3000, "yerba3.jpg", "GHI123", 250); // Producto agregado al Array
Products.addProduct("Yerba", "Yerba Despalada", 3000, "yerba3.jpg", "GHI123", 250); // Producto agregado al Array y genera error por repetido

// LLamamos al arreglo con los codigos agregados
console.log(Products.getProduct());

// Llamo a la funcion buscador por ID
console.log(Products.getProductById(2)); // Búsqueda por Id
console.log(Products.getProductById(5)); // Búsqueda por Id not found


