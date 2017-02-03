/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*
1 htmlpage1 connect to js files - app and solutionEMO
2 tryconsole log on the page 
3 if not try runing app code after solutionEMO classes code
*/



/* globals module */

"use strict";

function solve(){
    class Product{
        
        constructor(productType, name, price)
        {
            this.productType = productType;
            this.name = name;
            this.price = price;
        }
    }
    
    class ShoppingCart{
        constructor (){
            this.products = [];
            
        };
        
        add(product){
            this.products.push(product);
        } 
        
        remove(product){
            var index = this.products.findIndex(currpr =>
                                               currpr.productType === product.productType
                                               && currpr.name === product.name
                                               && currpr.price === product.price) 
            if(index === -1)
                {
                    console.log("There is no such product in the cart.");
                    
                }
            else
            {
                this.products.splice(index, 1);
            }
        }
        
        showCost()
        {
            var cost = 0;
            
            for(var i = 0; i < this.products.length; i++)
                {
                    cost += this.products[i].price;
                }
             return(cost);

        }
        
        showProductTypes()
        {
            var prodTypes = [];
            
            for(var i = 0; i < this.products.length; i++){
                if(prodTypes.indexOf(this.products[i].productType) 
                    === -1)
                    {
                        prodTypes.push(this.products[i].productType);
                    }
            }
            
            return prodTypes.sort();
        }
        
        getInfo()
        {
            var prodGroups = [];
            
            for(var i = 0; i < this.products.length; i++){
                if(prodGroups.indexOf(this.products[i].name) 
                    === -1)
                    {
                        var groupName = this.products[i].name;
                        prodGroups.push(groupName);
                    }
            }
            
            var groupArr = [];
            
            for(var i = 0; i < this.products.length; i++){
                if(prodGroups.indexOf(this.products[i].name) 
                    !== -1)
                    {
                        groupArr[prodGroups.indexOf(this.products[i].name)]
                        = 
                        [prodGroups[prodGroups.indexOf(this.products[i].name)]
                         ,this.products[i].price
                          *
                          this.products.filter(x => x.name === this.products[i].name).length
                         , this.products.filter(x => x.name === this.products[i].name).length];
                    }
            }
            
            var totalPriceBGN = 0;
            for(var i = 0; i < groupArr.length; i++)
                {
                    totalPriceBGN += groupArr[i][1];
                    
                }
            
            var ProductInfo = { products:groupArr, totalPrice:totalPriceBGN};
            return ProductInfo;
        }
    }
    
    //DEVELOPMENT TESTS START HERE=========================
    //=====================================================
    //=====================================================
    
    var chocoMilka = new Product("Sweet", "Shokolad Milka", 2)
    var chocoLind = new Product("Sweet", "Shokolad Lind", 4)
    var chocoValor = new Product("Sweet", "Shokolad Valor", 5)
    var chocoKoko = new Product("Sweet", "Shokolad Koko", 1)
    var vitoshaCheese = new Product("Dairy", "Vitosha", 3)
    
    var shopCart = new ShoppingCart();

    shopCart.add(chocoValor);
    shopCart.add(chocoMilka);
    shopCart.add(chocoValor);
    shopCart.add(chocoLind);
    shopCart.add(vitoshaCheese);
    shopCart.add(vitoshaCheese);

    shopCart.remove(chocoKoko);
    
    for(var i = 0; i < shopCart.products.length; i++){
        console.log(shopCart.products[i]);
    }
    
    console.log(chocoMilka.productType);
    
    console.log(shopCart.showCost());
    console.log(shopCart.showProductTypes());
    console.log(shopCart.getInfo());
    
    //DEVELOPMENT TESTS END HERE===========================
    //=====================================================
    //=====================================================

    //TASK TESTS START HERE================================
    //=====================================================
    //===================================================== 
    
    let cart = new ShoppingCart();
    
    let pr1 = new Product("Sweets", "Shokolad Milka", 2);
    cart.add(pr1);
    console.log(cart.showCost());
    //prints `2`
    
    let pr2 = new Product("Groceries", "Salad", 0.5);
    cart.add(pr2);
    cart.add(pr2);
    console.log(cart.showCost());
    //prints `3`
    
    console.log(cart.showProductTypes());
    //prints ["Sweets", "Groceries"]
    
    console.log(cart.getInfo());
    
        
    cart.remove({name:"salad", productType: "Groceries", price: 0.5})
    //throws: "salad" is not equal to "Salad"
    
    cart.remove({name:"Salad", productType: "Groceries", price: 0.5})
    console.log(cart.getInfo());
    
    //TASK TESTS START HERE================================
    //=====================================================
    //===================================================== 
    
    return {
        Product, ShoppingCart
    };
}
 
solve();
