const initState={
    women:[
        {
            id:1,
            name:"Apollo Running Short",
            price:50,
            currency:"$",
            thumb:"./images/short.jfif",
            quantity:1,
            desc:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.k"
            },
            {
            id:2,
            name:"Apollo Running Short",
            price:50,
            currency:"$",
            thumb:"./images/blouse.jpg",
            quantity:1,
            desc:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
            },
            {
            id:3,
            name:"Apollo Running Short",
            price:50,
            currency:"$",
            thumb:"./images/jacket.jfif",
            quantity:1,
            desc:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
            },
            {
            id:4,
            name:"Apollo Running Short",
            price:50,
            currency:"$",
            thumb:"./images/t-shirt.jfif",
            quantity:1,
            desc:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
            },
        {
            id:5,
            name:"Apollo Running Short",
            price:50,
            currency:"$",
            thumb:"./images/blouse.jpg",
            quantity:1,
            desc:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
            },
            {
            id:6,
            name:"Apollo Running Short",
            price:50,
            currency:"$",
            thumb:"./images/jacket.jfif",
            quantity:1,
            desc:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
            },
            {
            id:7,
            name:"Apollo Running Short",
            price:50,
            currency:"$",
            thumb:"./images/short.jfif",
            quantity:1,
            desc:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
            },
            {
            id:8,
            name:"Apollo Running Short",
            price:50,
            currency:"$",
            thumb:"./images/bag.jpeg",
            quantity:1,
            desc:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
                }
   
                ],
                product:{},

            men:[
            {
                id:9,
                name:"Nike",
                price:40,
                currency:"$",
                thumb:"./images/men1.jpg",
                quantity:1
                },
                {
                id:10,
                name:"Nike",
                price:40,
                currency:"$",
                thumb:"./images/men2.jpg",
                quantity:1
                },
                {
                id:11,
                name:"Nike",
                price:40,
                currency:"$",
                thumb:"./images/men3.webp",
                quantity:1,
                },
                {
                id:12,
                name:"Nike",
                price:40,
                currency:"$",
                thumb:"./images/men4.jpg",
                quantity:1,
                },
            {
                id:13,
                name:"Nike",
                price:40,
                currency:"$",
                thumb:"./images/men5.webp",
                quantity:1,
                },
                {
                id:14,
                name:"Nike",
                price:40,
                currency:"$",
                thumb:"./images/men6.jpg",
                quantity:1,
                },
                {
                id:15,
                name:"Nike",
                price:40,
                currency:"$",
                thumb:"./images/men7.jpg",
                quantity:1,
                },
                {
                id:16,
                name:"Nike",
                price:40,
                currency:"$",
                thumb:"./images/men8.jpg",
                quantity:1,
                    }
                ],
                product:{},
              
                    kids:[
        {
                id:17,
                name:"Adidas",
                price:20,
                currency:"$",
                thumb:"./images/kids1.jpg",
                quantity:1,
                },
                {
                id:18,
                name:"Adidas",
                price:20,
                currency:"$",
                thumb:"./images/kids2.jpg",
                quantity:1,
                },
                {
                id:19,
                name:"Adidas",
                price:20,
                currency:"$",
                thumb:"./images/kids3.webp",
                quantity:1,
                },
                {
                id:20,
                name:"Adidas",
                price:20,
                currency:"$",
                thumb:"./images/kids4.jpg",
                quantity:1,
                },
            {
                id:21,
                name:"Adidas",
                price:20,
                currency:"$",
                thumb:"./images/kids5.png",
                quantity:1,
                },
                {
                id:22,
                name:"Adidas",
                price:20,
                currency:"$",
                thumb:"./images/kids6.webp",
                quantity:1,
                },
                {
                id:23,
                name:"Adidas",
                price:20,
                currency:"$",
                thumb:"./images/kids7.webp",
                quantity:1,
                },
                {
                id:24,
                name:"Adidas",
                price:20,
                currency:"$",
                thumb:"./images/kids8.jpg",
                quantity:1,
                    }
                ],
                product:{},
                
               

            }
   
    const ProductsReducer=(state=initState,action)=>{
        // console.log(typeof action.id)
    switch(action.type){
           
            case 'women':
            return {...state,product:state.women.find(product=>product.id===parseInt(action.id))};
            case 'men':
            return {...state,product:state.men.find(product=>product.id===parseInt(action.id))};
            case 'kids':
            return {...state,product:state.kids.find(product=>product.id===parseInt(action.id))};
            default:
            return state;
    }
    }
    export default ProductsReducer;