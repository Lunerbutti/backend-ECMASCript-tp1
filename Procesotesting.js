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
            id=this.products[this.products.length-1].id+1
        // nuevo producto
        let newProduct={
            id,
            title:<required/>,
            description:<required/>,
            price:<required/>,
            thumbnail:<required/>,
            code:<required/>,
            stock:<required/>,
        }    
        this.products.push(newProduct)
        }

    }


    
}