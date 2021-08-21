//-------------------
//---- functions-----
//-------------------

//promo code function 

function updatePromoCode(){
    
    const promoInput = document.getElementById('promo-code');
    const promoCode = promoInput.value;

    if (promoCode === 'stevekaku') {
        const totalPriceWithoutPromo = parseFloat(document.getElementById('total-price').innerText);
        const totalPriceWithPromo = (totalPriceWithoutPromo * 20) / 100;
        const grandTotal = parseFloat((totalPriceWithoutPromo - totalPriceWithPromo).toFixed(2));

        document.getElementById('promo-total').innerText = grandTotal;
        promoInput.value = '';
    }
}

//calculate total price function 

function updateTotal() {

    const updateMemoryPrice = parseInt(memoryPrice.innerText);
    const updateStoragePrice = parseInt(storagePrice.innerText);
    const updateDeliveryCharge = parseInt(deliveryCharge.innerText);

    let updatePrice = parseInt(initialPrice.innerText);

    let updateTotalPrice = updateMemoryPrice + updateStoragePrice + updateDeliveryCharge + updatePrice;

    totalPrice.innerText = updateTotalPrice;

    promoTotal.innerText = updateTotalPrice;

}


//-----------------------
//----Event Handler------
//-----------------------

const memoryPrice = document.getElementById('memory-price');
const storagePrice = document.getElementById('storage-price');
const deliveryCharge = document.getElementById('delivery-charge');
const promoTotal = document.getElementById('promo-total');

let totalPrice = document.getElementById('total-price');
let initialPrice = document.getElementById('best-price');


//event handler for memory unit 
document.getElementById('memory-8gb').addEventListener('click', function () {

    memoryPrice.innerText = '0';
    updateTotal();
});

document.getElementById('memory-16gb').addEventListener('click', function () {

    memoryPrice.innerText = '180';
    updateTotal();
});


//event handler for storage unit 
document.getElementById('storage-256gb').addEventListener('click', function () {
    storagePrice.innerText = '0';
    updateTotal();

});

document.getElementById('storage-512gb').addEventListener('click', function () {
    storagePrice.innerText = '100';
    updateTotal();
});

document.getElementById('storage-1tb').addEventListener('click', function () {
    storagePrice.innerText = '180';
    updateTotal();
});


//event handler for delivery charge
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    updateTotal();
});

document.getElementById('delivery-with-charge').addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    updateTotal();
});


//promo code 

document.getElementById('promo-apply').addEventListener('click', function () {

    updatePromoCode();
});
