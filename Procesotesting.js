// Trabajo práctico: Proceso de Testing 

class ProductManager{
    // creacion del constructor 
    constructor(){
        this.products=[]
    } 
    // traer todos los productos
    getProduct(){
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
} // fin clase

let pm=new ProductManager()
pm.addProduct('pantalonJS','pantalon de jean largo','500','sin imagen', '5000', '10')
pm.addProduct('Remera MC','Remera mangas cortas','700','sin imagen', '5323', "7")
pm.addProduct('Musculosa','musculosa amarilla','700','sin imagen', '5501', "20")
pm.addProduct('Musculosa','musculosa amarilla','700','sin imagen', '5501', "20")
console.log(pm.getProduct());
console.log(pm.getProductbyID(20));
console.log(pm.getProductbyID(2));


