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
                        [
                            prodGroups[prodGroups.indexOf(this.products[i].name)],
                            this.products[i].price
                            *
                            this.products.filter(x => x.name === this.products[i].name).length,  
                            this.products.filter(x => x.name === this.products[i].name).length
                        ];
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

    return {
        Product, ShoppingCart
    };
}
  
solve();
