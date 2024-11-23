let value = {
  resource:1,
  forced_rate:1,
  rate_reinforce_requirement:1e13,
  exponent_reinforce_requirement:3,
  forced_expo:1,

  pru1_amount:0,
  pru1_rate:1,
  pru1_pched:0,
  pru1_price:1,

  pru2_amount:0,
  pru2_rate:1,
  pru2_pched:0,
  pru2_price:100,

  pru3_amount:0,
  pru3_rate:1,
  pru3_pched:0,
  pru3_price:1e4,

  pru4_amount:0,
  pru4_rate:1,
  pru4_pched:0,
  pru4_price:1e6
};

function saveToLocalStorage() {
  localStorage.setItem('savedData', JSON.stringify(value));
  console.log("Data saved to localStorage:", value);
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem('savedData');
  if (savedData) {
      value = JSON.parse(savedData);
      console.log("Data loaded from localStorage:", value);
  } else {
      console.log("No value found in localStorage.");
  }
  producers_tab();
}

window.onload = function() {
  loadFromLocalStorage();
};

setInterval(saveToLocalStorage, 30000);

function updatevalues() {
  document.getElementById('resource').innerText = numformat_22(value.resource);
  document.getElementById('prdpersec').innerText = numformat_22(prdpersec);

  document.getElementById('pru1_amount').innerText = numformat_20(value.pru1_amount);
  document.getElementById('pru1_persec').innerText =" (+"+ numformat_20(value.pru2_amount*value.pru2_rate)+"/s)";
  document.getElementById('pru1_rate').innerText = numformat_22(value.pru1_rate);
  document.getElementById('pru1_pched').innerText = value.pru1_pched;
  document.getElementById('pru1_price').innerText = "가격 : " + numformat_22(value.pru1_price);

  document.getElementById('pru2_amount').innerText = numformat_20(value.pru2_amount);
  document.getElementById('pru2_persec').innerText =" (+"+ numformat_20(value.pru3_amount*value.pru3_rate)+"/s)";
  document.getElementById('pru2_rate').innerText = numformat_22(value.pru2_rate);
  document.getElementById('pru2_pched').innerText = value.pru2_pched;
  document.getElementById('pru2_price').innerText = "가격 : " + numformat_22(value.pru2_price);

  document.getElementById('pru3_amount').innerText = numformat_20(value.pru3_amount);
  document.getElementById('pru3_persec').innerText =" (+"+numformat_20(value.pru4_amount*value.pru4_rate)+"/s)";
  document.getElementById('pru3_rate').innerText = numformat_22(value.pru3_rate);
  document.getElementById('pru3_pched').innerText = value.pru3_pched;
  document.getElementById('pru3_price').innerText = "가격 : " + numformat_22(value.pru3_price);

  document.getElementById('pru4_amount').innerText = numformat_20(value.pru4_amount);
  document.getElementById('pru4_rate').innerText = numformat_22(value.pru4_rate);
  document.getElementById('pru4_pched').innerText = value.pru4_pched;
  document.getElementById('pru4_price').innerText = "가격 : " + numformat_22(value.pru4_price);

  document.getElementById('rate_reinforce_req').innerText = numformat_22(value.rate_reinforce_requirement) +"자원";
  document.getElementById('exponent_reinforce_req').innerText =value.exponent_reinforce_requirement +"회";
}

function pru1_purchased() {
  if (value.resource >= value.pru1_price) {
    value.resource -= value.pru1_price;
    value.pru1_amount += 1;
    value.pru1_pched += 1;
    value.pru1_rate *= value.forced_expo;
    if (value.pru1_pched%10 == 0) {
      value.pru1_rate *= 2;
      value.pru1_price *= 10;
    }
  }
}

function pru2_purchased() {
  if (value.resource >= value.pru2_price) {
    value.resource -= value.pru2_price;
    value.pru2_amount += 1;
    value.pru2_pched += 1;
    value.pru2_rate *= value.forced_expo;
    if (value.pru2_pched%10 == 0) {
      value.pru2_rate *= 2;
      value.pru2_price *= 100;
    }
  }
}

function pru3_purchased() {
  if (value.resource >= value.pru3_price) {
    value.resource -= value.pru3_price;
    value.pru3_amount += 1;
    value.pru3_pched += 1;
    value.pru3_rate *= value.forced_expo;
    if (value.pru3_pched%10 == 0) {
      value.pru3_rate *= 2;
      value.pru3_price *= 1000;
    }
  }
}

function pru4_purchased() {
  if (value.resource >= value.pru4_price) {
    value.resource -= value.pru4_price;
    value.pru4_amount += 1;
    value.pru4_pched += 1;
    value.pru4_rate *= value.forced_expo;
    if (value.pru4_pched%10 == 0) {
      value.pru4_rate *= 2;
      value.pru4_price *= 10000;
    }
  }
}

function rate_reinforce(requirement) {
  if (value.resource >= requirement) {
    document.getElementById('rate_reinforce_bt').disabled = false;
  }
}

function exponent_reinforce() {
  if (Math.log2(value.forced_rate) >= value.exponent_reinforce_requirement) {
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
  value.forced_rate *= 2;
  value.rate_reinforce_requirement *= 1e4;

  value.resource = 1;

  value.pru1_amount = 0;
  value.pru1_rate = value.forced_rate;
  value.pru1_pched = 0;
  value.pru1_price = 1;

  value.pru2_amount = 0;
  value.pru2_rate = value.forced_rate;
  value.pru2_pched = 0;
  value.pru2_price = 100;

  value.pru3_amount = 0;
  value.pru3_rate = value.forced_rate;
  value.pru3_pched = 0;
  value.pru3_price = 1e4;

  value.pru4_amount = 0;
  value.pru4_rate = value.forced_rate;
  value.pru4_pched = 0;
  value.pru4_price = 1e6;
}

function exponent_reinforce_run() {
  document.getElementById('exponent_reinforce_bt').disabled = true;

  value.exponent_reinforce_requirement *= 2;
  value.forced_rate = 1;
  value.rate_reinforce_requirement = 1e13;
  value.forced_expo *= 1.03;

  value.resource = 1;

  value.pru1_amount = 0;
  value.pru1_rate = 1;
  value.pru1_pched = 0;
  value.pru1_price = 1;

  value.pru2_amount = 0;
  value.pru2_rate = 1;
  value.pru2_pched = 0;
  value.pru2_price = 100;

  value.pru3_amount = 0;
  value.pru3_rate = 1;
  value.pru3_pched = 0;
  value.pru3_price = 1e4;

  value.pru4_amount = 0;
  value.pru4_rate = 1;
  value.pru4_pched = 0;
  value.pru4_price = 1e6;
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
  value.pru1_amount += (value.pru2_amount*value.pru2_rate)/50;
  value.pru2_amount += (value.pru3_amount*value.pru3_rate)/50;
  value.pru3_amount += (value.pru4_amount*value.pru4_rate)/50;
  value.resource += (value.pru1_amount*value.pru1_rate)/50;
  prdpersec = value.pru1_amount*value.pru1_rate;
  updatevalues();
  rate_reinforce(value.rate_reinforce_requirement);
  exponent_reinforce();
  infinity();
}, 20);

function infinity() {
  if (value.resource >= Infinity) {
    clearInterval(mainloop);
    document.getElementById('end').style.display = 'block';
    document.getElementById('comming_soon').style.display = 'block';
  }
}

let buyall;

document.addEventListener('keydown', function(event) {
  if (event.key === 'a' && !buyall) {
    buyall = setInterval(() => {
      pru1_purchased();
      pru2_purchased();
      pru3_purchased();
      pru4_purchased();
    }, 50);
  }
});

document.addEventListener('keyup',   function(event) {
  if (event.key === 'a') {
    clearInterval(buyall); 
    buyall = null;
  }
});