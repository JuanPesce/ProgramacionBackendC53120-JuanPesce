// Entrega Juan Pesce

const { error } = require("console");
const fs = require("fs");

class ProductManager{
    
    constructor(){
        this.path = "./fsActivity";
        try{
            const base = fs.readFileSync(this.path,'utf8');
            this.products=json.parse(base);

        }catch (error){

            this.products = [];
        }

        fs.writeFileSync(`${this.path}/products.txt`, JSON.stringify(this.products, null, '\t'));
    }

    static id = 0;

    async addProduct(title, description, price, thumbnail, code, stock){
    
        
    // Verifico que el producto cumpla los requisitos minimos

        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Error! Todos los campos son obligatorios.");
            return
        }

        if(this.products.some(product => product.code == code)){
            console.log(`Error! El codigo ${code} ya existe `);
            return
        }

        ProductManager.id ++    // Esto haria que el incremental sea automatico

        const newProduct = {
            id:ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };


        this.products.push(newProduct);
        console.log("Nuevo producto agregado: ", newProduct)

        await fs.promises.writeFile(`${this.path}/products.txt`, JSON.stringify(this.products, null, "\t"))

    }

    async getProduct(){
        // return this.products;

        try {
            const readFile = await fs.promises.readFile(`${this.path}/this.products.txt`, "utf8");
            const productObject = json.parse(readFile)

            return productObject;
        }catch{
            console.error("Error en la obtencion del producto", error);
        }
        
    }
    
    async getProductById(id) {
        try{

            const productID = parseInt(id);
            const productList = this.products.some(prod => prod.id === productID);

            if(productList){
                return productList;
            } else {
                console.error("Not found.");
            }
            
        } catch(error){
            console.error("Error en la obtencion del ID", error);
            return;
        }
        
    }

    async updateProduct(id, { title, description, price, thumbnail, code, stock }){
        // try{
        //     const reachID = this.products.findIndex(product => product.id === id);
        //     if(reachID >0){

        //         this.products[reachID] = { ...this.products[reachID], ...base, id: id };
        //         fs.writeFileSync(`${this.path}/products.txt`, JSON.stringify(this.products, null, '\t'));

        //     }else{
        //         console.error("Not Found for update")
        //     }

        // }catch(error){
        //       console.error("Error en el Update")

        // }

        {
            const findId = this.products.findIndex((product) => product.id === id);
            if (findId === -1) return console.error("No encontrado");
        
            const updateProduct = {
              ...this.products[findId],
              title,
              description,
              price,
              thumbnail,
              code,
              stock,
            };
        
            this.products[findId] = updateProduct;
        
            try {
            await fs.promises.writeFile(`${this.path}/products.txt` , JSON.stringify(this.products , null , "\t"));

            } catch (error) {
              console.error("Error escribiendo archivo", error);
            }
          }


    }

    async deleteProduct(id){
        const deleteForId = this.products.findIndex((product) => product.id === id);
        if (deleteForId === -1) {
          console.error("Not found");
          return;
        }
        this.products.splice(deleteForId, 1);
    

        await fs.promises.writeFile(`${this.path}/products.txt` , JSON.stringify(this.products , null , "\t"));

        console.log(`El producto con el id ${id} fue borrado correctamente`);

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



Products.updateProduct(1, {
    title: "Yerba Saborizada",
    description: "Yerba con naranja",
    price: 3800,
    thumbnail: "yerba1.jpg",
    code: "QWE123",
    stock: 300,
  });

  Products.deleteProduct(3);

