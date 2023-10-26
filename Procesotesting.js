// Trabajo práctico: Proceso de Testing 
const fs=require('fs')

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
                console.log("the caode already exist, please try again"):          
        this.products.push(newProduct)
        // escritura en el archivo 
        fs.writeFileSync(this.path, JSON.stringify(newProduct, null, "\t"))    
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
    updateProduct(id){
        
    }
    // Borrar producto
    deleteProduct(id){
        let indiceID=this.products.findIndex(product=>product.id===id)
        let deleted = false;
        if(indiceID=== -1){
            console.log(`the id request dosent exist `)
            return
        }else{
         this.products[indiceID] = deleted = true;
         console.log('the product is deleted')
        }
        
    }


} // fin clase

let pm=new ProductManager('./Archivo/productList.json')
pm.addProduct('pantalonJS','pantalon de jean largo','500','sin imagen', '5000', '10')
pm.addProduct('Remera MC','Remera mangas cortas','700','sin imagen', '5323', "7")
pm.addProduct('Musculosa','musculosa amarilla','700','sin imagen', '5501', "20")
pm.addProduct('Musculosa','musculosa amarilla','700','sin imagen', '5501', "20")
console.log(pm.getProduct());
console.log(pm.getProductbyID(20));
console.log(pm.getProductbyID(2));
console.log(pm.deleteProduct(1));
console.log(pm.getProduct());



