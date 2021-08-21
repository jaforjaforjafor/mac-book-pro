//for bestPrice
let bestPrice = 1219
//for memory 
// 8 gb
const addingEightGb =document.getElementById('memory-access8');
addingEightGb.addEventListener('click',function(){
    calculateEightGbMemory();
});
function calculateEightGbMemory(){
    const memoryExtraCost =0;
    document.getElementById('memory-cost').innerText=memoryExtraCost;
}
//for 16 gb
const addSixteenGb = document.getElementById('memory-access16');
addSixteenGb.addEventListener('click',function(){
    calculateSixteenGbMemory();
});
function calculateSixteenGbMemory(){
    const memoryExtraCost =180;
    document.getElementById('memory-cost').innerText=memoryExtraCost;
}
//for Storage
//for 256
const addingTwoFiftySixStorage =document.getElementById('storage-access-256');
addingTwoFiftySixStorage.addEventListener('click',function(){
    calculateTwoFiftySixStorage();
});
function calculateTwoFiftySixStorage(){
  const  storageExtraCost =0;
  document.getElementById('storage-cost').innerText=storageExtraCost;
}
//for 512
const addingFiveTwelveStorage =document.getElementById('storage-access-512');
addingFiveTwelveStorage.addEventListener('click',function(){
    calculateFiveTwelveStorage();
});
function calculateFiveTwelveStorage(){
  const  storageExtraCost =100;
  document.getElementById('storage-cost').innerText=storageExtraCost;
}
//for 1 tera-byte
const addingTerabyteStorage =document.getElementById('storage-access-1tb');
addingTerabyteStorage.addEventListener('click',function(){
    calculateTerabyteStorage();
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
});
function calculateRegularDelivery(){
  const  regularDeliveryCost =0;
  document.getElementById('delivery-cost').innerText=regularDeliveryCost;
}
//quick process
const quickProcess =document.getElementById('quick-delivery');
quickProcess.addEventListener('click',function(){
    calculateQuickDelivery();
});
function calculateQuickDelivery(){
  const  quickDeliveryCost =20;
  document.getElementById('delivery-cost').innerText = quickDeliveryCost;
  
}