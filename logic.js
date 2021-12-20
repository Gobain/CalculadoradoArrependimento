var todayValue = 0;

function getPrice() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://cointradermonitor.com/api/pbb/v1/ticker');
  xhr.onload = () => {
          var data = JSON.parse(xhr.responseText);
          //console.log("last: " + data.last + ", volume24h: " + data.volume24h);

          todayValue = data.last;
          //console.log(today);      
  };
  xhr.send();
}

function start() {
  
  let yearValue = [0.83, 9.57, 40.59, 2262.50, 584.24, 1475.50, 3041.32,
  32643.97, 12511.40, 40014.14, 151000.00]; //price of BTC in BRL on 1st day of the year, starting at 2011
  
  //todayValue = 300000;
  let amount = document.getElementById("amount");
  let year = document.getElementById("year");


  let result = document.getElementById("resul");
  result.innerHTML = ((amount.value / yearValue[year.selectedIndex]) * todayValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

//pega o valor investido, divide pelo valor do ano selecionado, depois pega o 
//resultado da divisão e multiplica pelo valor do ano atual



