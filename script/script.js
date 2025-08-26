function getElement(id){
    const element = document.getElementById(id);
    return element;
}


document.getElementsByClassName('cart-btn')

// document.getElementById('cart-btn-1').addEventListener('click',function(){
//     const title = getElement('cart-title-1').innerText;
//     const price = getElement('cart-price-1').innerText;
   
//     const totalPrice = Number(getElement("total-price").innerText);

//     const newPrice =Number(price)  + totalPrice;

//     getElement("total-price").innerText = newPrice;

    
//     const quantity = Number(getElement("total-quantity").innerText);

//     const totalQuantity = quantity + 1;
//     getElement("total-quantity").innerText = totalQuantity;

//     const cartContainer = getElement('cart-container')

//     const newCart = document.createElement('div');

//     newCart.innerHTML = `
//                 <div class="flex justify-between items-center rounded-lg bg-gray-200 p-4">
//                            <img src="./assets/kitchen-1.png" alt="" class="w-12">
//                            <div>
//                                <h2 class="font-bold">${title}</h2>
//                                <h2 class="font-bold">${price} Tk</h2>
//                            </div> 
//                         </div>
//     `;
    
//     cartContainer.append(newCart)
    
// })