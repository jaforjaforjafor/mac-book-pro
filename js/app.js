//for bestPrice
// let bestPrice = 1219;
//for memory 
// 8 gb
const addingEightGb =document.getElementById('memory-access8');
addingEightGb.addEventListener('click',function(){
    calculateEightGbMemory();
      calculateTotal();
});
function calculateEightGbMemory(){
    const memoryExtraCost =0;
    document.getElementById('memory-cost').innerText=memoryExtraCost;
}
//for 16 gb
const addSixteenGb = document.getElementById('memory-access16');
const newTotalOfGb =addSixteenGb.value;
addSixteenGb.addEventListener('click',function(){
    calculateSixteenGbMemory();
     calculateTotal();
});
function calculateSixteenGbMemory(){
    const memoryExtraCost =180;
    const newTotal = document.getElementById('memory-cost').innerText
    document.getElementById('memory-cost').innerText=memoryExtraCost;
    
    
}
//for Storage
//for 256
const addingTwoFiftySixStorage =document.getElementById('storage-access-256');
addingTwoFiftySixStorage.addEventListener('click',function(){
    calculateTwoFiftySixStorage();
     calculateTotal();
});
function calculateTwoFiftySixStorage(){
  const  storageExtraCost =0;
  document.getElementById('storage-cost').innerText=storageExtraCost;
}
//for 512
const addingFiveTwelveStorage =document.getElementById('storage-access-512');
addingFiveTwelveStorage.addEventListener('click',function(){
    calculateFiveTwelveStorage();
    calculateTotal();
});
function calculateFiveTwelveStorage(){
  const  storageExtraCost =100;
  document.getElementById('storage-cost').innerText=storageExtraCost;
}
//for 1 tera-byte
const addingTerabyteStorage =document.getElementById('storage-access-1tb');
addingTerabyteStorage.addEventListener('click',function(){
    calculateTerabyteStorage();
    calculateTotal();
});
function calculateTerabyteStorage(){
  const  storageExtraCost =180;
  document.getElementById('storage-cost').innerText=storageExtraCost;
}
//delivery process
//regular process
const deliveryProcess =document.getElementById('regular-delivery');
deliveryProcess.addEventListener('click',function(){
    calculateRegularDelivery();
    calculateTotal();
});
function calculateRegularDelivery(){
  const  regularDeliveryCost =0;
  document.getElementById('delivery-cost').innerText=regularDeliveryCost;
}
//quick process
const quickProcess =document.getElementById('quick-delivery');
quickProcess.addEventListener('click',function(){
    calculateQuickDelivery();
    calculateTotal();
});
function calculateQuickDelivery(){
  const  quickDeliveryCost =20;
  document.getElementById('delivery-cost').innerText = quickDeliveryCost;
  
}
//for promo code
document.getElementById('code-apply').addEventListener('click', function(){
    
const codeField =document.getElementById('promo-code');
const promoField =codeField.value;
if(promoField == 'stevekaku'){

    window.location.href = 'promo.html';

}
});



 function calculateTotal(){
     const memoryCostNumber =parseInt(document.getElementById('memory-cost').innerText);
   const storageCostNumber =parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCostNumber =parseInt(document.getElementById('delivery-cost').innerText);
    const bestPriceNumber =parseInt(document.getElementById('default-price').innerText);
   let totalPrice= document.getElementById('total-Price').innerText = memoryCostNumber+storageCostNumber+deliveryCostNumber+bestPriceNumber;
   console.log(totalPrice);
};

 