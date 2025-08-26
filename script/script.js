function getElement(id){
    const element = document.getElementById(id);
    return element;
}


document.getElementById('cart-btn-1').addEventListener('click',function(){
    const title = getElement('cart-title-1').innerText;
    const price = Number(getElement('cart-price-1').innerText);
   
    const totalPrice = Number(getElement("total-price").innerText);

    const newPrice = price + totalPrice;

    getElement("total-price").innerText = newPrice;

    
    const quantity = Number(getElement("total-quantity").innerText);

    const totalQuantity = quantity + 1;
    getElement("total-quantity").innerText = totalQuantity
    

    

})