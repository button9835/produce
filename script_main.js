let resource = 1;
let forced_rate =  1;
let rate_reinforce_requirement = 1e13;
let exponent_reinforce_requirement = 3;
let forced_expo = 1;

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
let pru3_price = 1e4;

let pru4_amount = 0;
let pru4_rate = 1;
let pru4_pched = 0;
let pru4_price = 1e6;

function load() {
  resource = parseInt(localStorage.getItem('resource'), 10);
  forced_rate = parseInt(localStorage.getItem('forced_rate'), 10);
  rate_reinforce_requirement = parseInt(localStorage.getItem('rate_reinforce_requirement'), 10);

  pru1_amount = parseInt(localStorage.getItem('pru1_amount'), 10);
  pru1_rate = parseInt(localStorage.getItem('pru1_rate'), 10);
  pru1_pched = parseInt(localStorage.getItem('pru1_pched'), 10);
  pru1_price = parseInt(localStorage.getItem('pru1_price'), 10);

  pru2_amount = parseInt(localStorage.getItem('pru2_amount'), 10);
  pru2_rate = parseInt(localStorage.getItem('pru2_rate'), 10);
  pru2_pched = parseInt(localStorage.getItem('pru2_pched'), 10);
  pru2_price = parseInt(localStorage.getItem('pru2_price'), 10);  
  
  pru3_amount = parseInt(localStorage.getItem('pru3_amount'), 10);
  pru3_rate = parseInt(localStorage.getItem('pru3_rate'), 10);
  pru3_pched = parseInt(localStorage.getItem('pru3_pched'), 10);
  pru3_price = parseInt(localStorage.getItem('pru3_price'), 10);

  pru4_amount = parseInt(localStorage.getItem('pru4_amount'), 10);
  pru4_rate = parseInt(localStorage.getItem('pru4_rate'), 10);
  pru4_pched = parseInt(localStorage.getItem('pru4_pched'), 10);
  pru4_price = parseInt(localStorage.getItem('pru4_price'), 10);
  
  producers_tab()
}


function save() {
  localStorage.setItem('resource', resource.toString());
  localStorage.setItem('forced_rate', forced_rate.toString());
  localStorage.setItem('rate_reinforce_requirement', rate_reinforce_requirement.toString());

  localStorage.setItem('pru1_amount', pru1_amount.toString());
  localStorage.setItem('pru1_rate', pru1_rate.toString());
  localStorage.setItem('pru1_pched', pru1_pched.toString());
  localStorage.setItem('pru1_price', pru1_price.toString());

  localStorage.setItem('pru2_amount', pru2_amount.toString());
  localStorage.setItem('pru2_rate', pru2_rate.toString());
  localStorage.setItem('pru2_pched', pru2_pched.toString());
  localStorage.setItem('pru2_price', pru2_price.toString());
  
  localStorage.setItem('pru3_amount',pru3_amount.toString());
  localStorage.setItem('pru3_rate',pru3_rate.toString());
  localStorage.setItem('pru3_pched',pru3_pched.toString());
  localStorage.setItem('pru3_price',pru3_price.toString());

  localStorage.setItem('pru4_amount',pru4_amount.toString());
  localStorage.setItem('pru4_rate',pru4_rate.toString());
  localStorage.setItem('pru4_pched',pru4_pched.toString());
  localStorage.setItem('pru4_price',pru4_price.toString());

}



function updatevalues() {
  document.getElementById('resource').innerText = numformat_22(resource);
  document.getElementById('prdpersec').innerText = numformat_22(prdpersec);

  document.getElementById('pru1_amount').innerText = numformat_20(pru1_amount);
  document.getElementById('pru1_persec').innerText =" (+"+ numformat_20(pru2_amount*pru2_rate)+"/s)";
  document.getElementById('pru1_rate').innerText = numformat_22(pru1_rate);
  document.getElementById('pru1_pched').innerText = pru1_pched;
  document.getElementById('pru1_price').innerText = "가격 : " + numformat_22(pru1_price);

  document.getElementById('pru2_amount').innerText = numformat_20(pru2_amount);
  document.getElementById('pru2_persec').innerText =" (+"+ numformat_20(pru3_amount*pru3_rate)+"/s)";
  document.getElementById('pru2_rate').innerText = numformat_22(pru2_rate);
  document.getElementById('pru2_pched').innerText = pru2_pched;
  document.getElementById('pru2_price').innerText = "가격 : " + numformat_22(pru2_price);

  document.getElementById('pru3_amount').innerText = numformat_20(pru3_amount);
  document.getElementById('pru3_persec').innerText =" (+"+numformat_20(pru4_amount*pru4_rate)+"/s)";
  document.getElementById('pru3_rate').innerText = numformat_22(pru3_rate);
  document.getElementById('pru3_pched').innerText = pru3_pched;
  document.getElementById('pru3_price').innerText = "가격 : " + numformat_22(pru3_price);

  document.getElementById('pru4_amount').innerText = numformat_20(pru4_amount);
  document.getElementById('pru4_rate').innerText = numformat_22(pru4_rate);
  document.getElementById('pru4_pched').innerText = pru4_pched;
  document.getElementById('pru4_price').innerText = "가격 : " + numformat_22(pru4_price);

  document.getElementById('rate_reinforce_req').innerText = numformat_22(rate_reinforce_requirement) +"자원";
  document.getElementById('exponent_reinforce_req').innerText =exponent_reinforce_requirement +"회";
}

function pru1_purchased() {
  if (resource >= pru1_price) {
    resource -= pru1_price;
    pru1_amount += 1;
    pru1_pched += 1;
    pru1_rate *= forced_expo;
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
    pru2_rate *= forced_expo;
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
    pru3_rate *= forced_expo;
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
    pru4_rate *= forced_expo;
    if (pru4_pched%10 == 0) {
      pru4_rate *= 2;
      pru4_price *= 10000;
    }
  }
}

function rate_reinforce(requirement) {
  if (resource >= requirement) {
    document.getElementById('rate_reinforce_bt').disabled = false;
  }
}

function exponent_reinforce() {
  if (Math.log2(forced_rate) >= exponent_reinforce_requirement) {
    document.getElementById('exponent_reinforce_bt').disabled = false;
  }
}

function numformat_22(num) {
  if (num >= 1000) {
    return num.toExponential(2);
  } 
  return num.toFixed(2).toString();
}

function numformat_20(num) {
  if (num >= 1000) {
    return num.toExponential(2);
  }
  return num.toFixed(0).toString();
}

function numformat_2(num) {
  return num.toFixed(2).toString();
}

function rate_reinforce_run() {
  document.getElementById('rate_reinforce_bt').disabled = true;
  forced_rate *= 2;
  rate_reinforce_requirement *= 1e4;

  resource = 1;

  pru1_amount = 0;
  pru1_rate = forced_rate;
  pru1_pched = 0;
  pru1_price = 1;

  pru2_amount = 0;
  pru2_rate = forced_rate;
  pru2_pched = 0;
  pru2_price = 100;

  pru3_amount = 0;
  pru3_rate = forced_rate;
  pru3_pched = 0;
  pru3_price = 1e4;

  pru4_amount = 0;
  pru4_rate = forced_rate;
  pru4_pched = 0;
  pru4_price = 1e6;
}

function exponent_reinforce_run() {
  document.getElementById('exponent_reinforce_bt').disabled = true;

  exponent_reinforce_requirement *= 2;
  forced_rate = 1;
  rate_reinforce_requirement = 1e13;
  forced_expo *= 1.03;

  resource = 1;

  pru1_amount = 0;
  pru1_rate = 1;
  pru1_pched = 0;
  pru1_price = 1;

  pru2_amount = 0;
  pru2_rate = 1;
  pru2_pched = 0;
  pru2_price = 100;

  pru3_amount = 0;
  pru3_rate = 1;
  pru3_pched = 0;
  pru3_price = 1e4;

  pru4_amount = 0;
  pru4_rate = 1;
  pru4_pched = 0;
  pru4_price = 1e6;
}

function autobuy_tab() {
  document.getElementById('producers').style.display = 'none';
  document.getElementById('autobuys').style.display = 'flex';
  document.getElementById('autobuy_discription').style.display = 'block';
  document.getElementById('reinforce').style.display = 'none';
}

function producers_tab() {
  document.getElementById('producers').style.display = 'flex';
  document.getElementById('autobuys').style.display = 'none';
  document.getElementById('autobuy_discription').style.display = 'none';
  document.getElementById('reinforce').style.display = 'block';
}

let mainloop =  setInterval(() => {
  pru1_amount += (pru2_amount*pru2_rate)/50;
  pru2_amount += (pru3_amount*pru3_rate)/50;
  pru3_amount += (pru4_amount*pru4_rate)/50;
  resource += (pru1_amount*pru1_rate)/50;
  prdpersec = pru1_amount*pru1_rate;
  updatevalues();
  rate_reinforce(rate_reinforce_requirement);
  exponent_reinforce();
  infinity();
}, 20);

function infinity() {
  if (resource >= Infinity) {
    clearInterval(mainloop);
    document.getElementById('end').style.display = 'block';
    document.getElementById('comming_soon').style.display = 'block';
  }
}
