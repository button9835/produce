let auto_value = {
  autobuy_1_up_price:1e7,
  autobuy_2_up_price:1e5,
  autobuy_3_up_price:1e4,
  autobuy_4_up_price:10,
  
  pru1_auto_cool:1000,
  pru2_auto_cool:1000,
  pru3_auto_cool:1000,
  pru4_auto_cool:1000
};

function saveToLocalStorage_auto() {
  localStorage.setItem('savedData_auto', JSON.stringify(auto_value));
  console.log("Data saved to localStorage:", auto_value);
}

function loadFromLocalStorage_auto() {
  const savedData_auto = localStorage.getItem('savedData_auto');
  if (savedData_auto) {
      auto_value = JSON.parse(savedData_auto);
      console.log("Data loaded from localStorage:", auto_value);
  } else {
      console.log("No value found in localStorage.");
  }
  producers_tab();
}

window.onload = function() {
  loadFromLocalStorage_auto();
};

setInterval(saveToLocalStorage_auto, 30000);

setInterval(() => {
  autobuy_1_unlock();
  autobuy_2_unlock();
  autobuy_3_unlock();
  autobuy_4_unlock();
  updatevalues_autobuy();
}, 20);

function updatevalues_autobuy() {
  document.getElementById('pru1_auto_upgrade').innerText ="가격 : 생산기1 "+numformat_22(auto_value.autobuy_1_up_price)+"개";
  document.getElementById('pru2_auto_upgrade').innerText ="가격 : 생산기2 "+numformat_22(auto_value.autobuy_2_up_price)+"개";
  document.getElementById('pru3_auto_upgrade').innerText ="가격 : 생산기3 "+numformat_22(auto_value.autobuy_3_up_price)+"개";
  document.getElementById('pru4_auto_upgrade').innerText ="가격 : 생산기4 "+numformat_22(auto_value.autobuy_4_up_price)+"개";
  document.getElementById('auto1_speed').innerText ="(현재 속도 : "+numformat_2(auto_value.pru1_auto_cool)+"밀리초)";
  document.getElementById('auto2_speed').innerText ="(현재 속도 : "+numformat_2(auto_value.pru2_auto_cool)+"밀리초)";
  document.getElementById('auto3_speed').innerText ="(현재 속도 : "+numformat_2(auto_value.pru3_auto_cool)+"밀리초)";
  document.getElementById('auto4_speed').innerText ="(현재 속도 : "+numformat_2(auto_value.pru4_auto_cool)+"밀리초)";
}

function autobuy_1_unlock() {
  if (pru1_pched >= 100){
    document.getElementById('pru1_autobuy_check').disabled = false;
  }
}

function autobuy_2_unlock() {
  if (pru2_pched >= 100){
    document.getElementById('pru2_autobuy_check').disabled = false;
  }
}

function autobuy_3_unlock() {
  if (pru3_pched >= 100){
    document.getElementById('pru3_autobuy_check').disabled = false;
  }
}

function autobuy_4_unlock() {
  if (pru4_pched >= 100){
    document.getElementById('pru4_autobuy_check').disabled = false;
  }
}

function autobuy_1() {
  if (document.getElementById('pru1_autobuy_check').checked) {
    pru1_auto = setInterval(pru1_purchased, auto_value.pru1_auto_cool);
  } else {
    clearInterval(pru1_auto);
    pru1_auto = null;
  }
}

function autobuy_2() {
  if (document.getElementById('pru2_autobuy_check').checked) {
    pru2_auto = setInterval(pru2_purchased, auto_value.pru2_auto_cool);
  } else {
    clearInterval(pru2_auto);
    pru2_auto = null;
  }
}

function autobuy_3() {
  if (document.getElementById('pru3_autobuy_check').checked) {
    pru3_auto = setInterval(pru3_purchased, auto_value.pru3_auto_cool);
  } else {
    clearInterval(pru3_auto);
    pru3_auto = null;
  }
}

function autobuy_4() {
  if (document.getElementById('pru4_autobuy_check').checked) {
    pru4_auto = setInterval(pru4_purchased, auto_value.pru4_auto_cool);
  } else {
    clearInterval(pru4_auto);
    pru4_auto = null;
  }
}

function autobuy_1_upgrade() {
  if (pru1_amount >= auto_value.autobuy_1_up_price) {
    pru1_amount -= auto_value.autobuy_1_up_price;
    auto_value.pru1_auto_cool /= 1.5;
    auto_value.autobuy_1_up_price *= 50;
  }
  if (auto_value.pru1_auto_cool < 10) {
    auto_value.pru1_auto_cool = 10;
    document.getElementById('pru1_auto_upgrade_bt').style.display = 'none';
  }
}

function autobuy_2_upgrade() {
  if (pru2_amount >= auto_value.autobuy_2_up_price) {
    pru2_amount -= auto_value.autobuy_2_up_price;
    auto_value.pru2_auto_cool /= 1.5;
    auto_value.autobuy_2_up_price *= 30;
  }
  if (auto_value.pru2_auto_cool < 10) {
    auto_value.pru2_auto_cool = 10;
    document.getElementById('pru2_auto_upgrade_bt').style.display = 'none';
  }
}

function autobuy_3_upgrade() {
  if (pru3_amount >= auto_value.autobuy_3_up_price) {
    pru3_amount -= auto_value.autobuy_3_up_price;
    auto_value.pru3_auto_cool /= 1.5;
    auto_value.autobuy_3_up_price *= 10;
  }
  if (auto_value.pru3_auto_cool < 10) {
    auto_value.pru3_auto_cool = 10;
    document.getElementById('pru3_auto_upgrade_bt').style.display = 'none';
  }
}

function autobuy_4_upgrade() {
  if (pru4_amount >= auto_value.autobuy_4_up_price) {
    pru4_amount -= auto_value.autobuy_4_up_price;
    auto_value.pru4_auto_cool /= 1.5;
    auto_value.autobuy_4_up_price *= 2;
  }
  if (auto_value.pru4_auto_cool < 10) {
    auto_value.pru4_auto_cool = 10;
    document.getElementById('pru3_auto_upgrade_bt').style.display = 'none';
  }
}
