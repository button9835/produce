let autobuy_1_up_price = 1e7;
let autobuy_2_up_price = 1e5;
let autobuy_3_up_price = 1e4;
let autobuy_4_up_price = 10;

let pru1_auto_cool = 1000;
let pru2_auto_cool = 1000;
let pru3_auto_cool = 1000;
let pru4_auto_cool = 1000;

setInterval(() => {
  autobuy_1_unlock();
  autobuy_2_unlock();
  autobuy_3_unlock();
  autobuy_4_unlock();
  updatevalues_autobuy();
}, 20);

function updatevalues_autobuy() {
  document.getElementById('pru1_auto_upgrade').innerText ="가격 : 생산기1 "+numformat_22(autobuy_1_up_price)+"개";
  document.getElementById('pru2_auto_upgrade').innerText ="가격 : 생산기2 "+numformat_22(autobuy_2_up_price)+"개";
  document.getElementById('pru3_auto_upgrade').innerText ="가격 : 생산기3 "+numformat_22(autobuy_3_up_price)+"개";
  document.getElementById('pru4_auto_upgrade').innerText ="가격 : 생산기4 "+numformat_22(autobuy_4_up_price)+"개";
  document.getElementById('auto1_speed').innerText ="(현재 속도 : "+numformat_2(pru1_auto_cool)+"밀리초)";
  document.getElementById('auto2_speed').innerText ="(현재 속도 : "+numformat_2(pru2_auto_cool)+"밀리초)";
  document.getElementById('auto3_speed').innerText ="(현재 속도 : "+numformat_2(pru3_auto_cool)+"밀리초)";
  document.getElementById('auto4_speed').innerText ="(현재 속도 : "+numformat_2(pru4_auto_cool)+"밀리초)";
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
    pru1_auto = setInterval(pru1_purchased, pru1_auto_cool);
  } else {
    clearInterval(pru1_auto);
    pru1_auto = null;
  }
}

function autobuy_2() {
  if (document.getElementById('pru2_autobuy_check').checked) {
    pru2_auto = setInterval(pru2_purchased, pru2_auto_cool);
  } else {
    clearInterval(pru2_auto);
    pru2_auto = null;
  }
}

function autobuy_3() {
  if (document.getElementById('pru3_autobuy_check').checked) {
    pru3_auto = setInterval(pru3_purchased, pru3_auto_cool);
  } else {
    clearInterval(pru3_auto);
    pru3_auto = null;
  }
}

function autobuy_4() {
  if (document.getElementById('pru4_autobuy_check').checked) {
    pru4_auto = setInterval(pru4_purchased, pru4_auto_cool);
  } else {
    clearInterval(pru4_auto);
    pru4_auto = null;
  }
}

function autobuy_1_upgrade() {
  if (pru1_amount >= autobuy_1_up_price) {
    pru1_amount -= autobuy_1_up_price;
    pru1_auto_cool /= 1.5;
    autobuy_1_up_price *= 50;
  }
  if (pru1_auto_cool < 10) {
    pru1_auto_cool = 10;
    document.getElementById('pru1_auto_upgrade_bt').style.display = 'none';
  }
}

function autobuy_2_upgrade() {
  if (pru2_amount >= autobuy_2_up_price) {
    pru2_amount -= autobuy_2_up_price;
    pru2_auto_cool /= 1.5;
    autobuy_2_up_price *= 30;
  }
  if (pru2_auto_cool < 10) {
    pru2_auto_cool = 10;
    document.getElementById('pru2_auto_upgrade_bt').style.display = 'none';
  }
}

function autobuy_3_upgrade() {
  if (pru3_amount >= autobuy_3_up_price) {
    pru3_amount -= autobuy_3_up_price;
    pru3_auto_cool /= 1.5;
    autobuy_3_up_price *= 10;
  }
  if (pru3_auto_cool < 10) {
    pru3_auto_cool = 10;
    document.getElementById('pru3_auto_upgrade_bt').style.display = 'none';
  }
}

function autobuy_4_upgrade() {
  if (pru4_amount >= autobuy_4_up_price) {
    pru4_amount -= autobuy_4_up_price;
    pru4_auto_cool /= 1.5;
    autobuy_4_up_price *= 2;
  }
  if (pru3_auto_cool < 10) {
    pru3_auto_cool = 10;
    document.getElementById('pru3_auto_upgrade_bt').style.display = 'none';
  }
}
