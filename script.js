let resource = 1;

let pru1_amount = 0;
let pru1_rate = 1;
let pru1_pched = 0;
let pru1_price = 1;

let pru2_amount = 0;
let pru2_rate = 1;
let pru2_pched = 0;
let pru2_price = 100;

let pru3_amount = 0;
let pru3_rate = 1;
let pru3_pched = 0;
let pru3_price = 10000;

let pru4_amount = 0;
let pru4_rate = 1;
let pru4_pched = 0;
let pru4_price = 1000000;

function updateValues() {
  document.getElementById('resource').innerText = numformat(resource);
  document.getElementById('prdpersec').innerText = numformat(prdpersec);

  document.getElementById('pru1_amount').innerText = numformat(pru1_amount);
  document.getElementById('pru1_rate').innerText = numformat(pru1_rate);
  document.getElementById('pru1_pched').innerText = pru1_pched;
  document.getElementById('pru1_price').innerText = numformat(pru1_price);

  document.getElementById('pru2_amount').innerText = numformat(pru2_amount);
  document.getElementById('pru2_rate').innerText = numformat(pru2_rate);
  document.getElementById('pru2_pched').innerText = pru2_pched;
  document.getElementById('pru2_price').innerText = numformat(pru2_price);

  document.getElementById('pru3_amount').innerText = numformat(pru3_amount);
  document.getElementById('pru3_rate').innerText = numformat(pru3_rate);
  document.getElementById('pru3_pched').innerText = pru3_pched;
  document.getElementById('pru3_price').innerText = numformat(pru3_price);

  document.getElementById('pru4_amount').innerText = numformat(pru4_amount);
  document.getElementById('pru4_rate').innerText = numformat(pru4_rate);
  document.getElementById('pru4_pched').innerText = pru4_pched;
  document.getElementById('pru4_price').innerText = numformat(pru4_price);
  
}

function pru1_purchased() {
  if (resource >= pru1_price) {
    resource -= pru1_price;
    pru1_amount += 1;
    pru1_pched += 1;
    if (pru1_pched%10 == 0) {
      pru1_rate *= 2;
      pru1_price *= 10;
    }
  }
}

function pru2_purchased() {
  if (resource >= pru2_price) {
    resource -= pru2_price;
    pru2_amount += 1;
    pru2_pched += 1;
    if (pru2_pched%10 == 0) {
      pru2_rate *= 2;
      pru2_price *= 100;
    }
  }
}

function pru3_purchased() {
  if (resource >= pru3_price) {
    resource -= pru3_price;
    pru3_amount += 1;
    pru3_pched += 1;
    if (pru3_pched%10 == 0) {
      pru3_rate *= 2;
      pru3_price *= 1000;
    }
  }
}

function pru4_purchased() {
  if (resource >= pru4_price) {
    resource -= pru4_price;
    pru4_amount += 1;
    pru4_pched += 1;
    if (pru4_pched%10 == 0) {
      pru4_rate *= 2;
      pru4_price *= 10000;
    }
  }
}

function numformat(num) {
  if (num >= 1000) {
    return num.toExponential(2);
  }
  return num.toFixed(2).toString();
}

setInterval(() => {
  resource += (pru1_amount*pru1_rate)/50;
  prdpersec = pru1_amount*pru1_rate;
  updateValues();
}, 20);

setInterval(() => {
  pru1_amount += (pru2_amount*pru2_rate);
  pru2_amount += (pru3_amount*pru2_rate);
  pru3_amount += (pru4_amount*pru3_rate);
}, 1000);
