// Trabajo práctico: Proceso de Testing 
const fs=require('fs')
const { title } = require('process')

class ProductManager{
    // creacion del constructor 
    constructor(ArchivoProducto){
        this.path=ArchivoProducto
        this.products=[]
    } 
    // traer todos los productos
    getProduct(){
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path,"utf-8"))  

        }
        return this.products

    }
    // Agregar productos
    addProduct(title, description, price,thumbnail,code,stock){
        
        // creacion de id
        let id=1
        if(this.products.length>0){
            id=this.products[this.products.length-1].id+1}
        // nuevo producto

        let newProduct={
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }   
        if (!id|| !title|| !description|| !price|| !thumbnail|| !code|| !stock === undefined){
            console.log("Error! - You must fill all the fields")}
        this.products.some((product)=>product.code===newProduct.code)?
                console.log("the code already exist, please try again"):          
        this.products.push(newProduct)
        // escritura en el archivo 
        fs.writeFileSync(this.path, JSON.stringify(this.products, null, "\t"))    
    }            
        // Llamar producto por ID
    getProductbyID(id){
        let indiceID=this.products.findIndex(product=>product.id===id)
                
        if(indiceID=== -1){
            console.log(`the id request dosent exist `)
            return
        }
        return this.products[indiceID]; 
    }  
    // Update product
    updateProduct(productId, fieldsToUpdate) {

            try {
          
              const products = this.getProduct();
          
              const productIndex = products.findIndex(product => product.id === Number(productId));
             if (productIndex === -1) {
                return console.error(`Product with ID ${productId} not found`);
                }
              const productToUpdate = products[productIndex];
              const updatedProduct = { ...productToUpdate, ...fieldsToUpdate };
              products[productIndex] = updatedProduct;
          
             fs.writeFileSync(this.path, JSON.stringify(this.products, null, "\t"));
                return {
                message: "Product updated!",
                product: updatedProduct
                };
            } catch (error) {
              console.error("Error updating product:", error);
              throw error; // You may want to throw the error for better error handling in the calling code.
            }
            }  
 
    // Borrar producto
    deleteProduct(id){
        let indiceID=this.products.findIndex(product=>product.id===id)
        // let deleted = false;
        if(indiceID=== -1){
            console.log(`the id request dosent exist `)
            return
        }else{
        //  this.products[indiceID] = deleted = true;
         this.products.splice(indiceID,1)
         console.log(`the product is deleted` ) 
        return this.getProduct()
        }
        
    }


} // fin clase

let pm=new ProductManager('./Archivo/productList.json')
pm.addProduct('pantalonJS','pantalon de jean largo','500','sin imagen', '5000', '10')
pm.addProduct('Remera MC','Remera mangas cortas','700','sin imagen', '5323', "7")
pm.addProduct('Musculosa','musculosa amarilla','700','sin imagen', '5501', "20")
console.log(pm.getProduct());
console.log(pm.getProductbyID(20));
console.log(pm.getProductbyID(2));
console.log(pm.deleteProduct(1));
pm.addProduct('Musculosa','musculosa amarilla','700','sin imagen', '5501', "20")
console.log(pm.getProduct());
console.log(pm.updateProduct(3, {title:'top', description:'pendiente de actualizar'}))



