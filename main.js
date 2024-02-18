// //Entrega Entrega-ECMAScript-y-ECMAScript-avanzado Juan Pesce

class ProductManager{
    
    constructor(products){

        this.products = [];

    }

    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock){
        ProductManager.id ++    // Esto haria que el incremental sea automatico
        this.products.push({title, description, price, thumbnail, code, stock, id:ProductManager.id});
    }

    getProduct(){
        return this.products;
    }
    
    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.log("Producto no encontrado.");
            return;
        }
        return product;
    }
}


const Products = new ProductManager();

Products.addProduct("Pantalón", "Pantalón vaquero", 30, "pantalon.jpg", "P002", 50); // Producto agregado al Array
Products.addProduct("Pantalón", "Pantalón vaquero", 30, "pantalon.jpg", "P002", 50); // Producto agregado al Array
Products.addProduct("Pantalón", "Pantalón vaquero", 30, "pantalon.jpg", "P002", 50); // Producto agregado al Array


console.log(Products.getProduct());

// class ProductManager {
//     constructor() {
//         this.products = [];
//     }

//     addProduct(title, description, price, thumbnail, code, stock) {

//         if (!title || !description || !price || !thumbnail || !code || !stock) {
//             console.log("Todos los campos son obligatorios.");
//             return;
//         }

//         // Validar que el código no esté repetido
//         if (this.products.some(product => product.code === code)) {
//             console.log(`El código ${code} está repetido.`);
//             return;
//         }

//         const product = {
//             id: this.products.length + 1, // ID autoincrementable
//             title: title,
//             description: description,
//             price: price,
//             thumbnail: thumbnail,
//             code: code,
//             stock: stock
//         };

//         this.products.push(product); // Agrega los productos al array vacío
//     }

//     getProducts() {
//         return this.products;
//     }

//     getProductById(id) {
//         const product = this.products.find(product => product.id === id);
//         if (!product) {
//             console.log("Producto no encontrado.");
//             return;
//         }
//         return product;
//     }

// }

// // Ejemplo de uso
// const productCreated = new ProductManager();
// console.log(productCreated.getProducts()); // Arreglo vacío
// productCreated.addProduct("Camiseta", "Camiseta de algodón", 20, "camiseta.jpg", "C001", 100); // Producto agregado al Array
// productCreated.addProduct("Pantalón", "Pantalón vaquero", 30, "pantalon.jpg", "P002", 50); // Producto agregado al Array
// productCreated.addProduct("Buzo", "Buzo de algodón", 22, "Buzo.jpg", "B003", 25); // Producto agregado al Array
// productCreated.addProduct("Medias", "Medias de algodón", 66, "Medias.jpg", "B003"); // Value incompleto "stock"
// productCreated.addProduct("Campera", "Campera de cuero", 32, "Campera.jpg", "B003", 43); // Code repetido
// console.log(productCreated.getProducts()); // Segundo llamado al Array con los productos agregados
// console.log("En este punto se van a ver los productos indicando el ID en su busqueda");
// console.log(productCreated.getProductById(2)); // Búsqueda por Id
// console.log(productCreated.getProductById(3)); // Búsqueda por Id
// console.log(productCreated.getProductById(4)); // Producto n