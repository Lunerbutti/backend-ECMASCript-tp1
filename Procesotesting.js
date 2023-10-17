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
                      
        this.products.push(newProduct)
    //    no duplicacion del codigo
        // const productCode= this.products.code
        // if (this.products.code.includes(code)) {
        //     console.log ('el codigo ya existe');
        //     return;
        // }
        // product.code.push(code)
        
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
pm.addProduct('pantalonJS','pantalon de jean largo','500','sin imagen', '5000', 10)
console.log(pm.getProduct());
pm.addProduct('Remera MC','Remera mangas cortas','700','sin imagen', '5323', 7)
console.log(pm.getProduct());
pm.addProduct('Musculosa','musculosa amarilla','700','sin imagen', '5501', 20)
console.log(pm.getProduct());
pm.addProduct('Musculosa','musculosa amarilla','700','sin imagen', '5501', 20)
console.log(pm.getProduct());
console.log(pm.getProductbyID(20));
console.log(pm.getProductbyID(2));


