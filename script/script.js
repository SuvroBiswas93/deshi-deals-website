function getElement(id){
    const element = document.getElementById(id);
    return element;
}


const cartButtons = document.getElementsByClassName('cart-btn') 

for (let cartbtn of cartButtons) {
    cartbtn.addEventListener('click',function(){
        // const productImg = cartbtn.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src
        const productImg = cartbtn.parentNode.parentNode.parentNode.children[0].children[0].src
        const productTitle = cartbtn.parentNode.parentNode.childNodes[1].childNodes[0].innerText
        const producPrice = cartbtn.parentNode.parentNode.children[2].children[0].innerText
        console.log(producPrice)
       
    })
}

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