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
    const cart = getcartfromlocalStoragne();
    // cart.push(id);
    const newcart = [...cart,id];
    saveCartTolocalStorage(newcart)
}

export {getcartfromlocalStoragne,additemtocarttolocalstorage , saveCartTolocalStorage}