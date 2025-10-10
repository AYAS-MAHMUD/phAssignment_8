const getcartfromlocalStoragne = ()=>{
    const storedcartstring = localStorage.getItem('cart'); //local teke data nici
    
    if(storedcartstring){
        const storedcart = JSON.parse(storedcartstring); //json teke parse convert
        return storedcart; // data takle [{id:1},{id:2}] dibe 
    }
    return []; //na takle empty array dibe
}
const saveCartTolocalStorage = cart=>{
    const cartSringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartSringified);
}
const additemtocarttolocalstorage =(id)=>{
    console.log(id) 
    const cart = getcartfromlocalStoragne();
    if (cart.includes(id)) {    
        console.log(id)
    }
    const newcart = [...cart, id];
    saveCartTolocalStorage(newcart);

}

export {getcartfromlocalStoragne,additemtocarttolocalstorage , saveCartTolocalStorage}