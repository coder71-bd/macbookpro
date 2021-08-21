/* *** CONFIGURATION VARIABLES *** */
const configuration = document.getElementById('configuration');
let selectedBtnOfMemory; //selected button of memory
let selectedBtnOfStorage; //selected button of storage
let selectedBtnOfDelivery; //selected button of delivery

/* *** PRICING VARABLES *** */
const bestPrice = document.getElementById('best-price');
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');

/* *** PROMO CODE VARIABLES *** */
const applyBtn = document.getElementById('apply-btn');
const promoCode = document.getElementById('promo-code');

/* *** FOOTER VARIABLES *** */
const footerTotal = document.getElementById('footer-total');

/* *** BTN HIGLIGHTER FUCTION *** */
function highlightBtn(targetElem) {
  const idOfParent = targetElem.parentNode.id;
  //highlight one element for different configuration
  switch (idOfParent) {
    case 'memory':
      if (selectedBtnOfMemory) {
        selectedBtnOfMemory.classList.remove('bg-black', 'text-white');
      }
      selectedBtnOfMemory = targetElem;
      selectedBtnOfMemory.classList.add('bg-black', 'text-white');
      break;
    case 'storage':
      if (selectedBtnOfStorage) {
        selectedBtnOfStorage.classList.remove('bg-black', 'text-white');
      }
      selectedBtnOfStorage = targetElem;
      selectedBtnOfStorage.classList.add('bg-black', 'text-white');
      break;
    case 'delivery':
      if (selectedBtnOfDelivery) {
        selectedBtnOfDelivery.classList.remove('bg-black', 'text-white');
      }
      selectedBtnOfDelivery = targetElem;
      selectedBtnOfDelivery.classList.add('bg-black', 'text-white');
      break;
  }
}

/* *** PRICE ADDER FUNCTION *** */
function addPrice(targetElem) {
  switch (targetElem.innerText) {
    case '8GB unified memory':
      extraMemoryCost.innerText = '0';
      break;
    case '16GB unified memory':
      extraMemoryCost.innerText = '180';
      break;
    case '256GB SSD storage':
      extraStorageCost.innerText = '0';
      break;
    case '512GB SSD storage':
      extraStorageCost.innerText = '100';
      break;
    case '1TB SSD storage':
      extraStorageCost.innerText = '180';
      break;
    case 'Friday, Aug 25 Free Prime Delivery':
      deliveryCharge.innerText = '0';
      break;
    case 'Friday, Aug 21 Delivery charge $20':
      deliveryCharge.innerText = '20';
      break;
  }
}

/* *** TOTAL PRICE CALCULATOR FUNCTION *** */
function calculateTotal() {
  //all configuration prices in number
  bestPriceNum = parseInt(bestPrice.innerText);
  extraMemoryCostNum = parseInt(extraMemoryCost.innerText);
  extraStorageCostNum = parseInt(extraStorageCost.innerText);
  deliveryChargeNum = parseInt(deliveryCharge.innerText);

  //total price
  const total =
    bestPriceNum + extraMemoryCostNum + extraStorageCostNum + deliveryChargeNum;

  //set the total in price list
  totalPrice.innerText = total;
}

/* *** HANDLE DIFFERENT CONFIGURATION FUNCTION *** */
function handleConfiguration(e) {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  const target = e.target;

  //highlight the target button
  highlightBtn(target);

  // add price in the list
  addPrice(target);

  //calculate total price
  calculateTotal();
}

/* *** configuration EVENT LISTENER *** */
configuration.addEventListener('click', handleConfiguration);

/* *** PROMO CODE APPLYER FUNCTION *** */
function applyPromoCode() {
  promoCodeValue = promoCode.value;

  //promo code has to be 'stevekaku'
  if (promoCode.value === 'stevekaku') {
    totalPriceNum = parseInt(totalPrice.innerText);
    const discount = 20 / 100; //20% discount
    const totalPriceAfterDiscount = totalPriceNum - totalPriceNum * discount;
    footerTotal.innerText = totalPriceAfterDiscount;
    promoCode.value = ''; //clear the input field after applying
  }
}

/* *** applyBtn EVENT LISTENER *** */
applyBtn.addEventListener('click', applyPromoCode);
